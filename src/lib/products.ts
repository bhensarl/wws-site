// Source of truth for WWS merch closeout SKUs.
// Quantities reflect on-hand inventory after WWS 2026; the same caps are
// enforced server-side when creating Stripe Checkout Sessions in
// /api/checkout. To restock or remove a SKU, edit this file and redeploy.
//
// Price IDs are live (acct_1TYqo11JbZ4EwPc5, Waynewoodstock LLC). Pricing is
// $20/shirt with the buyer covering the Stripe fee at checkout (~$0.88).

export type ProductSku = {
  id: string;
  productGroup: "adult-tee" | "youth-tee";
  groupLabel: string;
  size: "M" | "L" | "XL";
  priceId: string;
  unitAmount: number;
  remaining: number;
  image: string;
  imageAlt: string;
};

export const SKUS: ProductSku[] = [
  {
    id: "adult-m",
    productGroup: "adult-tee",
    groupLabel: "Adult Tee",
    size: "M",
    priceId: "price_1TYsZq1JbZ4EwPc51Q0Bqpvx",
    unitAmount: 2000,
    remaining: 1,
    image: "/images/merch-shirt.png",
    imageAlt: "WWS 2026 Adult T-Shirt",
  },
  {
    id: "adult-l",
    productGroup: "adult-tee",
    groupLabel: "Adult Tee",
    size: "L",
    priceId: "price_1TYsZr1JbZ4EwPc5HFDaFqGt",
    unitAmount: 2000,
    remaining: 4,
    image: "/images/merch-shirt.png",
    imageAlt: "WWS 2026 Adult T-Shirt",
  },
  {
    id: "adult-xl",
    productGroup: "adult-tee",
    groupLabel: "Adult Tee",
    size: "XL",
    priceId: "price_1TYsZs1JbZ4EwPc5K8y6EUIM",
    unitAmount: 2000,
    remaining: 18,
    image: "/images/merch-shirt.png",
    imageAlt: "WWS 2026 Adult T-Shirt",
  },
  {
    id: "youth-m",
    productGroup: "youth-tee",
    groupLabel: "Youth Tee",
    size: "M",
    priceId: "price_1TYsZt1JbZ4EwPc5xkB9lEr0",
    unitAmount: 2000,
    remaining: 9,
    image: "/images/merch-youth.png",
    imageAlt: "WWS 2026 Youth T-Shirt",
  },
  {
    id: "youth-l",
    productGroup: "youth-tee",
    groupLabel: "Youth Tee",
    size: "L",
    priceId: "price_1TYsZt1JbZ4EwPc5UFjMQZdS",
    unitAmount: 2000,
    remaining: 13,
    image: "/images/merch-youth.png",
    imageAlt: "WWS 2026 Youth T-Shirt",
  },
];

export function findSku(id: string): ProductSku | undefined {
  return SKUS.find((s) => s.id === id);
}

export type ProductGroup = {
  key: ProductSku["productGroup"];
  label: string;
  image: string;
  imageAlt: string;
  skus: ProductSku[];
};

export function groupedSkus(): ProductGroup[] {
  const map = new Map<ProductSku["productGroup"], ProductGroup>();
  for (const sku of SKUS) {
    if (!map.has(sku.productGroup)) {
      map.set(sku.productGroup, {
        key: sku.productGroup,
        label: sku.groupLabel,
        image: sku.image,
        imageAlt: sku.imageAlt,
        skus: [],
      });
    }
    map.get(sku.productGroup)!.skus.push(sku);
  }
  return Array.from(map.values());
}
