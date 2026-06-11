const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
);

const members = [
  {
    initials: 'AK', name: 'Aarav Khanna', role: 'CEO & Co-founder', exp: '12 years in marketplace tech',
    avatarStyle: undefined,
    socials: [<LinkedInIcon />, <TwitterIcon />],
  },
  {
    initials: 'SR', name: 'Shreya Rathi', role: 'CTO', exp: '10 years full-stack engineering',
    avatarStyle: { color: '#7C3AED', background: 'linear-gradient(135deg,#EDE9FE,#DDD6FE)' },
    socials: [<LinkedInIcon />, <GithubIcon />],
  },
  {
    initials: 'DM', name: 'Dev Mehta', role: 'Head of Operations', exp: '8 years in marketplace ops',
    avatarStyle: { color: '#059669', background: 'linear-gradient(135deg,#ECFDF5,#D1FAE5)' },
    socials: [<LinkedInIcon />, <TwitterIcon />],
  },
  {
    initials: 'RJ', name: 'Riya Joshi', role: 'Customer Experience Lead', exp: '7 years customer success',
    avatarStyle: { color: '#DC2626', background: 'linear-gradient(135deg,#FEF2F2,#FECACA)' },
    socials: [<LinkedInIcon />, <TwitterIcon />],
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Our Team</div>
          <h2>The People Behind ServiceHub</h2>
          <p>A dedicated team committed to connecting homeowners with the best professionals.</p>
        </div>
        <div className="team-grid">
          {members.map((m, i) => (
            <div key={m.name} className={`team-card reveal ${delays[i]}`}>
              <div className="team-avatar" style={m.avatarStyle}>{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-exp">{m.exp}</div>
              <div className="team-socials">
                {m.socials.map((s, j) => (
                  <a key={j} className="team-social" href="#">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
