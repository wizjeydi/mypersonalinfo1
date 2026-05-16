import React from 'react'

const certificates = [
  { title: 'Frontend Developer - Coursera', issuer: 'Coursera', date: '2024', link: '#' },
  { title: 'TypeScript Mastery', issuer: 'Udemy', date: '2023', link: '#' },
]

const achievements = [
  { title: 'Open-source contributor', date: '2025', desc: 'Contributed features and fixes to project X.' },
  { title: 'Hackathon winner', date: '2022', desc: 'Won 1st place for building Y.' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="mt-12">
      <h2 className="text-2xl font-bold">Certificates & Achievements</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <div className="cv-card rounded-[2rem] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Certificates</p>
          <ul className="mt-4 space-y-4">
            {certificates.map((c) => (
              <li key={c.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-white">{c.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{c.issuer} • {c.date}</div>
                  </div>
                  <a href={c.link} className="text-primary font-semibold">View</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cv-card rounded-[2rem] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Achievements</p>
          <ul className="mt-4 space-y-4">
            {achievements.map((a) => (
              <li key={a.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <div className="font-semibold text-white">{a.title}</div>
                <div className="text-sm text-slate-500 mt-1">{a.date}</div>
                <p className="text-slate-400 mt-3 text-sm">{a.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}