import React from 'react'

const skills = [
  { name: 'TypeScript', icon: 'code' },
  { name: 'React', icon: 'integration_instructions' },
  { name: 'Tailwind CSS', icon: 'palette' },
  { name: 'Node.js', icon: 'cloud' },
  { name: 'Testing', icon: 'bug_report' },
  { name: 'Python', icon: 'memory' },
  { name: 'SQL', icon: 'storage' },
  { name: 'Git', icon: 'merge_type' },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-fade mt-8">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Programming Languages</h2>
        <p className="mt-3 max-w-2xl text-slate-400">Core languages and technologies I use to build modern web experiences.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((s) => (
          <div key={s.name} className="cv-card rounded-[1.75rem] p-5 text-center border border-white/10 hover:-translate-y-1 transition-transform">
            <span className="material-icons text-gold text-4xl mb-4">{s.icon}</span>
            <div className="font-semibold text-white">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
