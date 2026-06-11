export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="section-tag">Get in Touch</div>
            <h2 style={{ marginTop: 14 }}>We're here to help, always</h2>
            <p>Have a question, need support, or want to partner with us? Our team responds within one business hour.</p>
            <div className="contact-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <div>
                <strong>Phone Support</strong>
                <span>+91 98765 43210 · Mon–Sat, 8am – 8pm</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <div>
                <strong>Email Us</strong>
                <span>support@servicehub.in</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <div>
                <strong>Head Office</strong>
                <span>Level 4, Sangam Tower, MI Road, Jaipur, Rajasthan 302001</span>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-pin" />
            </div>
          </div>
          <div className="contact-form reveal reveal-delay-2">
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24 }}>Send us a message</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="Aarav" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Khanna" />
              </div>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="+91 00000 00000" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option value="">Select a subject</option>
                <option>Service enquiry</option>
                <option>Booking issue</option>
                <option>Join as a professional</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us how we can help you..." />
            </div>
            <button className="form-submit">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
