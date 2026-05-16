import React from 'react'

const certificates = [
  { title: 'Applied Data Science with Python', date: 'November 30, 2024' },
  { title: 'Artificial Intelligence Fundamentals', date: 'November 30, 2024' },
  { title: 'English for IT 1', date: 'November 20, 2024' },
  { title: 'Big Data Foundations', date: 'November 29, 2024' },
  { title: 'Data Fundamentals', date: 'November 30, 2024' },
  { title: 'Data Analytics', date: 'May 14, 2025' },
  { title: 'CompTIA Network Security for Beginners & Professionals', date: 'September 25, 2025' },
  { title: 'HTML', date: 'December 01, 2022' },
  { title: 'CSS', date: 'December 02, 2022' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="mt-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Certificates</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Selected Certificates</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <article key={c.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 min-h-[210px] flex flex-col justify-between">
            <div>
              <div className="font-semibold text-white text-lg">{c.title}</div>
            </div>
            <div className="mt-5 text-sm text-slate-400">{c.date}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
