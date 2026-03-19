const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/1021+Dalebrook+Dr,+Fort+Hunt,+VA+22308/@38.7217449,-77.0507478,193m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x89b7af07ba75203f:0xb098b4a975cf787a!2s905+Dalebrook+Dr,+Alexandria,+VA+22308!3b1!8m2!3d38.7203782!4d-77.0468437!16s%2Fg%2F11sbx7ks36!3m5!1s0x89b7af074f72c8e7:0x40df00b7af7839ea!8m2!3d38.7217449!4d-77.0501041!16s%2Fg%2F11wg0g2g23?entry=ttu";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.8!2d-77.0504!3d38.7217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7af074f72c8e7%3A0x40df00b7af7839ea!2s1021%20Dalebrook%20Dr%2C%20Fort%20Hunt%2C%20VA%2022308!5e1!3m2!1sen!2sus";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            Location
          </h2>
          <p className="mt-4 font-body text-bark-light max-w-md mx-auto">
            Waynewood Recreation Association Field &mdash; right in the heart of the
            Fort Hunt neighborhood, Alexandria, VA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Map embed with clickable link overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-cream-dark aspect-[4/3] group">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="1021 Dalebrook Dr, Alexandria, VA 22308"
            />
          </div>

          <div className="space-y-6">
            {/* Address card with map chip link */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-700 text-forest mb-3">Address</h3>
                  <p className="font-body text-bark-light">
                    Waynewood Recreation Association
                    <br />
                    1021 Dalebrook Dr
                    <br />
                    Alexandria, VA 22308
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4 bg-forest/10 rounded-full p-2.5 group-hover:bg-forest/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-forest"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-xs font-display font-600 text-forest uppercase tracking-wider group-hover:underline">
                Open in Google Maps &rarr;
              </p>
            </a>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <h3 className="font-display font-700 text-forest mb-3">Event Day Details</h3>
              <ul className="space-y-2 font-body text-bark-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9679;</span>
                  Gates open at 11:00 AM
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9679;</span>
                  Street parking throughout Waynewood
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9679;</span>
                  Walk, bike, or carpool if you can
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#9679;</span>
                  Lawn chairs, blankets, and coolers welcome. Pop-up tents are only allowed in reserved Lounge Zone spots.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <h3 className="font-display font-700 text-forest mb-3">Contact</h3>
              <p className="font-body text-bark-light text-sm">
                Questions? Reach us at{" "}
                <a
                  href="mailto:info@waynewoodstock.com"
                  className="text-forest underline hover:text-forest-dark"
                >
                  info@waynewoodstock.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
