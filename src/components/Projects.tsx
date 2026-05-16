import React from 'react'

const projects = [
  {
    title: 'TALAKALUSUGAN',
    description: 'A comprehensive healthcare management system designed for hospitals to efficiently track and manage patient records. It features intuitive tools to monitor and analyze patient health metrics over time, improving clinical workflows and patient care.',
  },
  {
    title: 'Athlete Monitoring System',
    description: 'A data-driven performance tracking platform designed for athletes and coaches. By leveraging analytics, it monitors training loads, recovery metrics, and physical health over time to optimize athletic performance and prevent injuries.',
  },
  {
    title: 'Dormitory Finder',
    description: 'A user-friendly mapping and listing platform that helps students and professionals find accommodation. It simplifies the housing search with filtered queries, location-based tracking, and detailed amenity breakdowns.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="cv-card rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-4 text-slate-400">{p.description}</p>
            <div className="mt-5">
              <a href="#" className="text-primary font-semibold hover:underline">View project →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}