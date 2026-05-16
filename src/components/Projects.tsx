import React from 'react'

const projects = [
  { title: 'Project One', description: 'A short description of project one.' },
  { title: 'Project Two', description: 'A short description of project two.' },
  { title: 'Project Three', description: 'A short description of project three.' },
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