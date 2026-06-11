const AppleStoreBadge = () => (
  <a href="#" className="app-badge">
    <div className="app-badge-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
    </div>
    <div className="app-badge-text">
      <small>Download on the</small>
      <strong>App Store</strong>
    </div>
  </a>
);

const GooglePlayBadge = () => (
  <a href="#" className="app-badge">
    <div className="app-badge-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zM5 7.14V16.86L13.97 12 5 7.14z" /></svg>
    </div>
    <div className="app-badge-text">
      <small>GET IT ON</small>
      <strong>Google Play</strong>
    </div>
  </a>
);

const SocialIcons = {
  Twitter: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" /></svg>,
  Github: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>,
};

export default function Footer() {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">Service<span>Hub</span></span>
              <p className="footer-desc">India's most trusted marketplace for home service professionals. Vetted, insured, and rated by your neighbours.</p>
              <div className="footer-social-row">
                {[SocialIcons.Twitter, SocialIcons.LinkedIn, SocialIcons.Instagram, SocialIcons.Github].map((Icon, i) => (
                  <a key={i} href="#" className="footer-social-icon"><Icon /></a>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h4>Service</h4>
              <ul>
                <li><a href="#">Plumbing</a></li>
                <li><a href="#">Electrician</a></li>
                <li><a href="#">Home Cleaning</a></li>
                <li><a href="#">HVAC Services</a></li>
                <li><a href="#">Handyman</a></li>
                <li><a href="#">Roofing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Service Guarantee</a></li>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-app-col">
              <h4>Available on</h4>
              <div className="footer-app-badges">
                <AppleStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-strip">
        <div className="footer-bottom-inner">
          <p>© 2026 ServiceHub Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="footer-socials">
            {[SocialIcons.Twitter, SocialIcons.LinkedIn, SocialIcons.Instagram, SocialIcons.Github].map((Icon, i) => (
              <a key={i} href="#">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
