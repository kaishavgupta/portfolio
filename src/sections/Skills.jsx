const skillData = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    color: '#1a1a1a',
    items: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 68 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: '#1a1a1a',
    pills: ['React.js', 'Next.js 15', 'Redux', 'Tailwind CSS', 'Three.js', 'HTML5', 'CSS3', 'React Native', 'Expo'],
  },
  {
    category: 'Backend',
    icon: '⌬',
    color: '#1a1a1a',
    pills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'RabbitMQ', 'Supabase', 'Firebase', 'Firestore', 'AsyncStorage'],
  },
  {
    category: 'Databases',
    icon: '⬡',
    color: '#1a1a1a',
    pills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '↑',
    color: '#1a1a1a',
    pills: ['AWS EC2 & S3', 'Vercel', 'Git', 'GitHub Actions', 'Linux', 'Postman', 'Docker'],
  },
  {
    category: 'AI Development',
    icon: '✦',
    color: '#1a1a1a',
    pills: ['Gemini Pro/Flash API', 'Prompt Engineering', 'Antigravity AI', 'Claude Sonnet'],
  },
  {
    category: 'Mobile Development',
    icon: '▦',
    color: '#1a1a1a',
    pills: ['React Native', 'Expo', 'Zustand', 'React Navigation', 'expo-notifications', 'Firebase Auth', 'EAS Build'],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-meta">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills-page" id="skills">
      <div className="skills-page-inner">

        {/* Header */}
        <div className="skills-header">
          <h2 className="skills-heading">Technical<br /><em>Skills.</em></h2>
          <p className="skills-subheading">
            A curated set of tools I rely on to build scalable, production-ready products.
          </p>
        </div>

        {/* Languages card — full width with bars */}
        <div className="skills-languages-card">
          <div className="skills-cat-label">
            <span className="skills-icon">{skillData[0].icon}</span>
            {skillData[0].category}
          </div>
          <div className="skill-bars-grid">
            {skillData[0].items.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        {/* Rest — pill cards */}
        <div className="skills-pills-grid">
          {skillData.slice(1).map(group => (
            <div key={group.category} className="skills-pill-card">
              <div className="skills-cat-label">
                <span className="skills-icon">{group.icon}</span>
                {group.category}
              </div>
              <div className="skills-pills-wrap">
                {group.pills.map(p => (
                  <span key={p} className="skill-badge">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
