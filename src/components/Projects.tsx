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
          <article key={p.title} className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.description}</p>
            <div className="mt-4">
              <a href="#" className="text-primary hover:underline">View →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}