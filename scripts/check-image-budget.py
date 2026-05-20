#!/usr/bin/env python3
"""Image-budget guard for waynewoodstock.com (bhensarl/wws-site).

Fails CI if any rasterized image under public/images/ exceeds the safe
mobile-Safari budget that crashed /#merch on 2026-05-19.

The crash root cause: three merch PNGs at 9831 x 11212 (~110 MP) shipped
into public/images/. With next.config.ts setting images.unoptimized=true,
Safari was being asked to decode ~440 MB of bitmap per image, blowing
through the iOS per-tab memory ceiling and showing "A problem repeatedly
occurred".

Budget (per file in public/images/, recursively):

    Max megapixels:   2.5 MP   (decoded bitmap ~10 MB at 4 bytes/pixel)
    Max file size:    600 KB

A file fails if it breaks EITHER limit. Hero / banner-class images that
need slightly more headroom can be allow-listed below.

Tunables live at the top of the file. Designed to be run from the
wws-site repo root:

    python3 scripts/check-image-budget.py

Exit code: 0 if all images pass, 1 if any fail.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print(
        "[check-image-budget] Pillow is required. Install with: pip install Pillow",
        file=sys.stderr,
    )
    sys.exit(2)

Image.MAX_IMAGE_PIXELS = None

IMAGES_DIR = Path("public/images")
MAX_MEGAPIXELS = 4.0          # decoded bitmap ~16 MB at 4 bytes/pixel
MAX_FILE_BYTES = 900 * 1024
EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}

ALLOW_LIST: dict[str, dict[str, float]] = {
    "hero-banner.png": {"max_mp": 11.0, "max_bytes": 900 * 1024},
}


def check_file(path: Path) -> tuple[bool, str]:
    rel = path.relative_to(IMAGES_DIR.parent.parent) if path.is_absolute() else path
    rel_str = str(rel).replace(os.sep, "/")
    key = path.name
    rules = ALLOW_LIST.get(key, {})
    max_mp = float(rules.get("max_mp", MAX_MEGAPIXELS))
    max_bytes = int(rules.get("max_bytes", MAX_FILE_BYTES))

    size = path.stat().st_size
    try:
        with Image.open(path) as im:
            w, h = im.size
    except Exception as exc:
        return False, f"{rel_str}: failed to open ({exc})"

    mp = (w * h) / 1_000_000
    over_mp = mp > max_mp
    over_bytes = size > max_bytes

    status = "OK" if not (over_mp or over_bytes) else "FAIL"
    detail = (
        f"{rel_str}: {w}x{h} = {mp:.2f} MP, {size / 1024:.0f} KB "
        f"(limits: {max_mp} MP, {max_bytes // 1024} KB)"
    )
    if over_mp:
        detail += f"  [over by {mp - max_mp:.2f} MP]"
    if over_bytes:
        detail += f"  [over by {(size - max_bytes) / 1024:.0f} KB]"
    return status == "OK", detail


def main() -> int:
    if not IMAGES_DIR.exists():
        print(f"[check-image-budget] no {IMAGES_DIR}/ directory — nothing to check.")
        return 0

    failures: list[str] = []
    passes: list[str] = []

    for path in sorted(IMAGES_DIR.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in EXTS:
            continue
        ok, detail = check_file(path)
        (passes if ok else failures).append(detail)

    for line in passes:
        print(f"  PASS  {line}")
    for line in failures:
        print(f"  FAIL  {line}", file=sys.stderr)

    if failures:
        print(
            f"\n[check-image-budget] {len(failures)} image(s) over budget. "
            "Resize / re-export and try again.\n"
            "  Quick fix in Python:\n"
            "      from PIL import Image\n"
            "      Image.MAX_IMAGE_PIXELS = None\n"
            "      im = Image.open('public/images/<file>.png')\n"
            "      w, h = im.size\n"
            "      if w > 1600:\n"
            "          im = im.resize((1600, int(h * 1600 / w)), Image.LANCZOS)\n"
            "      im.convert('RGB').save('public/images/<file>.png', optimize=True)",
            file=sys.stderr,
        )
        return 1

    print(f"\n[check-image-budget] All {len(passes)} images within budget.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
