const StarFull = () => (
  <svg className="review-star" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
);
const StarEmpty = () => (
  <svg className="review-star-empty" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
);

const reviews = [
  {
    stars: 5,
    text: 'Booked an electrician at 9am and he was at my door by noon. Fixed the wiring issue in under an hour. Transparent pricing, no surprises. Will absolutely use ServiceHub again.',
    initials: 'SA',
    name: 'Sanjay Agarwal',
    meta: 'Homeowner, Jaipur • Electrical Service',
    avatarBg: undefined,
  },
  {
    stars: 5,
    text: 'The deep cleaning team transformed my apartment. They were thorough, professional, and left everything spotless. The booking process took 3 minutes. Truly impressed.',
    initials: 'MG',
    name: 'Meera Gupta',
    meta: 'Tenant, Bangalore • Home Cleaning',
    avatarBg: '#7C3AED',
  },
  {
    stars: 4,
    text: 'As a landlord managing multiple properties, ServiceHub has saved me countless hours. Reliable pros, fair pricing, and excellent communication throughout every job.',
    initials: 'VR',
    name: 'Vikram Rao',
    meta: 'Property Owner, Hyderabad • Multiple Services',
    avatarBg: '#059669',
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2'];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Customer Stories</div>
          <h2>What our customers say</h2>
          <p>Join 2 million+ happy homeowners who trust ServiceHub every day.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={r.name} className={`review-card reveal ${delays[i]}`}>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, j) => j < r.stars ? <StarFull key={j} /> : <StarEmpty key={j} />)}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="reviewer">
                <div className="reviewer-avatar" style={r.avatarBg ? { background: r.avatarBg } : undefined}>{r.initials}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
