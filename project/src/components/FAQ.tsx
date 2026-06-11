import { useState } from 'react';

const faqs = [
  {
    q: 'How does ServiceHub verify its professionals?',
    a: 'Every professional on ServiceHub goes through a rigorous verification process: government ID check, background verification, skill assessment, and reference review. We re-verify all pros annually, and your rating and review after every job helps keep our standards high.',
  },
  {
    q: 'What is the ServiceHub Guarantee?',
    a: "If you're not satisfied with any service booked through our platform, we'll arrange a re-do at no extra cost or offer a full refund — no questions asked. Our guarantee covers all bookings made and paid through ServiceHub.",
  },
  {
    q: 'How is pricing determined?',
    a: "All pricing is shown upfront before you confirm a booking. Professionals set their own rates, which you can compare side-by-side. There are no hidden platform fees for customers — the price you see is the price you pay.",
  },
  {
    q: 'Can I cancel or reschedule a booking?',
    a: 'Yes, you can cancel or reschedule up to 2 hours before your appointment for a full refund. Cancellations within 2 hours may incur a small fee to compensate the professional for reserved time.',
  },
  {
    q: 'How do I become a service professional on ServiceHub?',
    a: 'Click "Get Started" and choose "Join as a Professional." You\'ll complete your profile, submit your documents for verification, and set your service areas and pricing. Most applications are reviewed within 48 hours. There\'s no joining fee — we only earn a small commission when you complete a job.',
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', ''];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">FAQ</div>
          <h2>Got questions? We've got answers.</h2>
          <p>Everything you need to know about booking services on ServiceHub.</p>
        </div>
        <div className="faq-wrap">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item reveal ${delays[i]}${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
