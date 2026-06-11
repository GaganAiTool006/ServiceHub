export default function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
            Rated #1 Home Services Marketplace
          </div>
          <h1>Find Trusted<br />Service <em>Professionals</em><br />Near You</h1>
          <p className="hero-sub">From quick repairs to full renovations — find pre-vetted professionals ready to handle any home project, fast.</p>
          <div className="search-box">
            <div className="search-field">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
              <input type="text" placeholder="Enter your location" />
            </div>
            <div className="search-field">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
              <select>
                <option value="">Select service</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>Carpenter</option>
                <option>Painter</option>
                <option>AC Repair</option>
                <option>Cleaning</option>
                <option>Pest Control</option>
                <option>Appliance Repair</option>
                <option>Home Renovation</option>
                <option>Roofing</option>
              </select>
            </div>
            <div className="search-field">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <select>
                <option value="">Budget range</option>
                <option>Under ₹500</option>
                <option>₹500 – ₹2,000</option>
                <option>₹2,000 – ₹5,000</option>
                <option>₹5,000+</option>
              </select>
            </div>
            <button className="search-btn">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              Search
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>50K+</strong><span>Verified Pros</span></div>
            <div className="hero-stat"><strong>2M+</strong><span>Jobs Completed</span></div>
            <div className="hero-stat"><strong>4.9★</strong><span>Average Rating</span></div>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-img-card">
            <div className="hero-img-placeholder">
              <div className="hero-worker-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#4B5563' }}>Professional Service Experts</span>
              <span style={{ fontSize: 13, color: '#9CA3AF' }}>Trusted &amp; Verified Professionals</span>
            </div>
            <div className="hero-float-card top">
              <div className="float-icon orange">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="float-card-text"><strong>Booking Confirmed!</strong><span>Your pro is on the way</span></div>
            </div>
            <div className="hero-float-card bottom">
              <div className="float-icon green">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              </div>
              <div className="float-card-text"><strong>4.9/5.0</strong><span>12,400+ reviews</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
