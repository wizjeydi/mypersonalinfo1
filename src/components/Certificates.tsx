import React from 'react'

const certificates = [
  { title: 'Applied Data Science with Python', issuer: '', date: 'November 30, 2024', link: '#' },
  { title: 'Artificial Intelligence Fundamentals', issuer: '', date: 'November 30, 2024', link: '#' },
  { title: 'English for IT 1', issuer: '', date: 'November 20, 2024', link: '#' },
  { title: 'Big Data Foundations', issuer: '', date: 'November 29, 2024', link: '#' },
  { title: 'Data Fundamentals', issuer: '', date: 'November 30, 2024', link: '#' },
  { title: 'Data Analytics', issuer: '', date: 'May 14, 2025', link: '#' },
  { title: 'CompTIA Network Security for Beginners & Professionals', issuer: '', date: 'September 25, 2025', link: '#' },
  { title: 'HTML', issuer: '', date: 'December 01, 2022', link: '#' },
  { title: 'CSS', issuer: '', date: 'December 02, 2022', link: '#' },
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
          <ul className="mt-4 grid gap-4">
            {certificates.map((c) => (
              <li key={c.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 min-h-[150px] flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-white text-lg">{c.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{c.date}</div>
                </div>
                <div className="text-sm text-slate-400">{c.issuer && `${c.issuer} • `}{c.date}</div>
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