const steps = [
  { num: '1', title: 'Search a Service', desc: 'Tell us what you need and where you are. Our smart matching surfaces the best available pros.' },
  { num: '2', title: 'Compare Professionals', desc: 'Browse profiles, ratings, pricing, and reviews. Every pro is background-checked and vetted.' },
  { num: '3', title: 'Book Instantly', desc: 'Pick your time slot and confirm. Pay securely online — no hidden charges, ever.' },
  { num: '4', title: 'Get Work Done', desc: 'Your pro arrives on time. Rate and review when done. We guarantee the work quality.' },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Simple Process</div>
          <h2>How ServiceHub Works</h2>
          <p>Book a trusted professional in minutes — it's that straightforward.</p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.num} className={`step reveal ${delays[i]}`}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
