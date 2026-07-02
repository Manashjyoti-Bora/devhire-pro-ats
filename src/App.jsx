import React, { useState, useMemo } from 'react';
import { Search, Briefcase, MapPin, DollarSign, Sun, Moon, CheckCircle2, ArrowUpRight, Filter } from 'lucide-react';

const JOBS_DATA = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    company: "TechScale Innovations",
    location: "Remote / Bengaluru",
    salary: "₹25,000 - ₹35,000 / mo",
    type: "Internship",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    posted: "2 hours ago",
    featured: true
  },
  {
    id: 2,
    title: "Frontend Engineer (TypeScript & Next.js)",
    company: "CloudPixel Architecture",
    location: "Hyderabad (Hybrid)",
    salary: "₹7,00,000 - ₹10,00,000 LPA",
    type: "Full-time",
    skills: ["Next.js 14", "TypeScript", "Redux Toolkit", "Figma"],
    posted: "1 day ago",
    featured: false
  },
  {
    id: 3,
    title: "Junior React Developer",
    company: "Apex Systems & Solutions",
    location: "Remote",
    salary: "₹4,50,000 - ₹6,50,000 LPA",
    type: "Full-time",
    skills: ["React.js", "JavaScript ES6+", "REST API", "Git"],
    posted: "Just now",
    featured: true
  }
];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('All');
  const [applied, setApplied] = useState([]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.body.setAttribute('data-theme', nextTheme);
  };

  const handleApply = (id) => {
    if (!applied.includes(id)) setApplied([...applied, id]);
  };

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter(job => {
      const matchQuery = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchType = jobType === 'All' || job.type === jobType;
      return matchQuery && matchType;
    });
  }, [searchTerm, jobType]);

  return (
    <div>
      <header className="header-glass">
        <div className="nav-container">
          <div className="brand">
            <Briefcase size={28} color="#3b82f6" />
            <span>DevHire Pro ATS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Applications Submitted: <strong style={{ color: 'var(--accent)' }}>{applied.length}</strong>
            </span>
            <button className="btn btn-ghost" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="btn btn-primary">Post New Opening</button>
          </div>
        </div>
      </header>

      <main className="main-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
            Next-Gen <span style={{ color: 'var(--accent)' }}>Tech Recruitment</span> Platform
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Discover top high-growth developer internships and engineering positions.
          </p>
        </div>

        <div className="search-panel">
          <Search size={22} style={{ color: 'var(--text-secondary)', alignSelf: 'center', marginLeft: '8px' }} />
          <input
            type="text"
            className="search-input"
            placeholder="Search role, tech skill (React, Next.js), or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter size={18} style={{ color: 'var(--text-secondary)' }} />
          <select className="filter-dropdown" value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="All">All Job Types</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>

        <div className="job-grid">
          {filteredJobs.map(job => {
            const isApplied = applied.includes(job.id);
            return (
              <div key={job.id} className="job-card" style={{ borderLeft: job.featured ? '4px solid var(--accent)' : '' }}>
                <div>
                  <span className="badge">{job.type.toUpperCase()}</span>
                  <h3 style={{ fontSize: '1.3rem', marginTop: '14px' }}>{job.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: '500', marginTop: '4px' }}>{job.company}</p>
                  <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '16px 0' }}>
                    <div>📍 {job.location}</div>
                    <div>💰 {job.salary}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {job.skills.map((skill, index) => (
                      <span key={index} style={{ background: 'rgba(51, 65, 85, 0.4)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className={`btn ${isApplied ? 'btn-ghost' : 'btn-primary'}`}
                  onClick={() => handleApply(job.id)}
                  style={{ background: isApplied ? '#10b981' : '', color: isApplied ? 'white' : '', width: '100%', justifyContent: 'center' }}
                >
                  {isApplied ? 'Applied ✓' : 'Apply Now →'}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
                       }
