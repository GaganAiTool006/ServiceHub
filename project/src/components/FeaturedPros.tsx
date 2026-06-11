const StarFull = () => <svg className="star" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>;
const StarEmpty = () => <svg className="star-empty" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>;

interface Pro {
  initials: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  years: string;
  rate: string;
  city: string;
  badge: string;
  avatarBg?: string;
}

const pros: Pro[] = [
  { initials: 'RK', name: 'Rajesh Kumar', role: 'Master Electrician', rating: 5, reviews: 284, years: '12 yrs', rate: '₹350', city: 'Jaipur', badge: 'Top Pro' },
  { initials: 'PS', name: 'Priya Sharma', role: 'Interior Designer', rating: 4, reviews: 196, years: '8 yrs', rate: '₹500', city: 'Delhi', badge: 'Verified' },
  { initials: 'AV', name: 'Arjun Verma', role: 'Plumbing Expert', rating: 5, reviews: 341, years: '15 yrs', rate: '₹400', city: 'Mumbai', badge: 'Top Pro' },
  { initials: 'NP', name: 'Neha Patel', role: 'Deep Clean Specialist', rating: 5, reviews: 178, years: '6 yrs', rate: '₹299', city: 'Bangalore', badge: 'Verified' },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

function ProCard({ pro, delay }: { pro: Pro; delay: string }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < pro.rating ? <StarFull key={i} /> : <StarEmpty key={i} />);
  const ratingLabel = pro.rating === 5 ? '5.0' : '4.8';
  return (
    <div className={`pro-card reveal ${delay}`}>
      <div className="pro-card-top">
        <div className="pro-avatar" style={pro.avatarBg ? { background: pro.avatarBg } : undefined}>{pro.initials}</div>
        <div className="pro-badge">{pro.badge}</div>
      </div>
      <div className="pro-card-body">
        <div className="pro-name">{pro.name}</div>
        <div className="pro-role">{pro.role}</div>
        <div className="pro-stars">
          {stars}
          <span>{ratingLabel} <em>({pro.reviews} reviews)</em></span>
        </div>
        <div className="pro-meta">
          <div className="pro-meta-item"><strong>{pro.years}</strong><span>Experience</span></div>
          <div className="pro-meta-item"><strong>{pro.rate}</strong><span>From / hr</span></div>
          <div className="pro-meta-item"><strong>{pro.city}</strong><span>Location</span></div>
        </div>
        <button className="btn-view">View Profile</button>
      </div>
    </div>
  );
}

export default function FeaturedPros() {
  return (
    <section className="pros" id="professionals">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Top Rated</div>
          <h2>Featured Professionals</h2>
          <p>Handpicked experts with exceptional ratings, verified credentials, and years of proven experience.</p>
        </div>
        <div className="pros-grid">
          {pros.map((p, i) => <ProCard key={p.name} pro={p} delay={delays[i]} />)}
        </div>
      </div>
    </section>
  );
}
