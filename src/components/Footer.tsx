export default function Footer() {
  return (
    <footer className="bg-bark text-cream/80 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display font-900 text-xl text-cream mb-3">
              Waynewoodstock
            </h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Fort Hunt&apos;s community music, arts, and food festival.
              <br />
              May 16, 2026 &bull; Waynewood Park
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-sm text-cream uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#lineup" className="hover:text-cream transition-colors">
                  Lineup
                </a>
              </li>
              <li>
                <a href="#tickets" className="hover:text-cream transition-colors">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#merch" className="hover:text-cream transition-colors">
                  Merch
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cream transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-cream transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display font-700 text-sm text-cream uppercase tracking-wider mb-3">
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://tinyurl.com/WWS26-BandInterestForm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  Band Interest Form
                </a>
              </li>
              <li>
                <a
                  href="https://tinyurl.com/WWS26-ArtisanInterest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  Artisan Registration
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@waynewoodstock.com"
                  className="hover:text-cream transition-colors"
                >
                  info@waynewoodstock.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Waynewoodstock LLC &bull; Alexandria, VA
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/waynewoodstock26/events"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.eventbrite.com/e/1373583608549"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="Eventbrite"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.996 7.34c-1.17-.632-2.517-.86-3.89-.66a7.172 7.172 0 0 0-3.552 1.65l1.65 2.475a4.31 4.31 0 0 1 2.134-.99c.825-.12 1.635.017 2.34.396l1.318-2.871zm-3.312 10.973a4.307 4.307 0 0 1-2.34-.396L9.026 20.79c1.17.633 2.517.86 3.89.66a7.172 7.172 0 0 0 3.552-1.65l-1.65-2.475a4.307 4.307 0 0 1-2.134.99zM7.68 12a4.32 4.32 0 0 1 .77-2.475L6.8 7.05A7.2 7.2 0 0 0 5.52 12c0 1.83.68 3.5 1.8 4.77l1.65-2.475A4.32 4.32 0 0 1 7.68 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
