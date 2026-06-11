const services = [
  {
    title: 'Electrical Wiring & Repair',
    desc: 'Full home rewiring, panel upgrades, outlet installation, and emergency repairs by licensed electricians.',
    price: '₹350',
    unit: '/ hr onwards',
    badge: 'Same Day',
    imgBg: undefined,
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  },
  {
    title: 'Deep Home Cleaning',
    desc: 'Thorough top-to-bottom cleaning including kitchen, bathrooms, bedrooms, and living areas. Eco-friendly products.',
    price: '₹799',
    unit: '/ session',
    badge: 'Top Rated',
    imgBg: undefined,
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
  },
  {
    title: 'AC Service & Repair',
    desc: 'Annual maintenance, gas refill, filter cleaning, cooling issues, and installation of all major AC brands.',
    price: '₹499',
    unit: '/ service',
    badge: 'AC Special',
    imgBg: undefined,
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" /></svg>,
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2'];

export default function PopularServices() {
  return (
    <section className="popular" id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Most Booked</div>
          <h2>Popular Services</h2>
          <p>The services our customers book most — all at transparent, upfront pricing.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal ${delays[i]}`}>
              <div className="service-img">
                <div className="service-img-icon">{s.icon}</div>
                <div className="service-img-badge">{s.badge}</div>
              </div>
              <div className="service-body">
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-footer">
                  <div className="service-price"><strong>{s.price}</strong>{s.unit}</div>
                  <button className="btn-book">Quick Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
