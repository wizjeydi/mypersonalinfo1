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
        <div>
          <h3 className="font-semibold">Certificates</h3>
          <ul className="mt-2 space-y-2">
            {certificates.map((c) => (
              <li key={c.title} className="p-4 border rounded-md bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-slate-500">{c.issuer} • {c.date}</div>
                  </div>
                  <a href={c.link} className="text-primary hover:underline text-sm">View</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Achievements</h3>
          <ul className="mt-2 space-y-2">
            {achievements.map((a) => (
              <li key={a.title} className="p-4 border rounded-md bg-white">
                <div className="font-medium">{a.title}</div>
                <div className="text-sm text-slate-500 mt-1">{a.date}</div>
                <div className="text-sm text-slate-600 mt-2">{a.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}