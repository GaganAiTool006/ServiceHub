export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="section-tag" style={{ background: 'rgba(249,115,22,.2)', color: 'var(--orange)' }}>Stay Updated</div>
        <h2 style={{ marginTop: 12 }}>Home care tips, delivered free</h2>
        <p>Join 180,000+ homeowners getting seasonal maintenance reminders and exclusive service deals.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
