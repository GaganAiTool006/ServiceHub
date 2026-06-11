const posts = [
  {
    num: '01',
    cat: 'Electrical',
    catBg: undefined,
    imgBg: undefined,
    date: 'June 2, 2026',
    read: '5 min read',
    title: "Signs Your Home's Wiring Needs an Urgent Upgrade",
    excerpt: "Flickering lights and tripped breakers aren't just nuisances — they can signal serious fire risks. Here's what to watch for.",
    authorInitials: 'RK',
    authorBg: undefined,
    author: 'Rajesh Kumar, Master Electrician',
  },
  {
    num: '02',
    cat: 'Plumbing',
    catBg: '#3B82F6',
    imgBg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)',
    numColor: '#BFDBFE',
    date: 'May 28, 2026',
    read: '4 min read',
    title: 'Water Heater Flush: Should You DIY or Call a Pro?',
    excerpt: "Annual flushes extend your water heater's life by years. We break down what's safe to do yourself and when to call in help.",
    authorInitials: 'AV',
    authorBg: '#3B82F6',
    author: 'Arjun Verma, Plumbing Expert',
  },
  {
    num: '03',
    cat: 'Cleaning',
    catBg: '#22C55E',
    imgBg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
    numColor: '#BBF7D0',
    date: 'May 20, 2026',
    read: '6 min read',
    title: 'The Pre-Monsoon Deep Clean Checklist Every Homeowner Needs',
    excerpt: "Before the rains hit, there are 12 areas of your home that need attention. We've put the complete checklist together for you.",
    authorInitials: 'NP',
    authorBg: '#22C55E',
    author: 'Neha Patel, Cleaning Specialist',
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2'];

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Home Tips</div>
          <h2>From the ServiceHub Blog</h2>
          <p>Expert guides, maintenance tips, and cost breakdowns to help you make the best home decisions.</p>
        </div>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <div key={p.num} className={`blog-card reveal ${delays[i]}`}>
              <div className="blog-img" style={p.imgBg ? { background: p.imgBg } : undefined}>
                <div className="blog-img-num" style={p.numColor ? { color: p.numColor } : undefined}>{p.num}</div>
                <div className="blog-cat" style={p.catBg ? { background: p.catBg } : undefined}>{p.cat}</div>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.read}</span>
                </div>
                <div className="blog-title">{p.title}</div>
                <div className="blog-excerpt">{p.excerpt}</div>
                <div className="blog-author">
                  <div className="blog-author-av" style={p.authorBg ? { background: p.authorBg } : undefined}>{p.authorInitials}</div>
                  {p.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
