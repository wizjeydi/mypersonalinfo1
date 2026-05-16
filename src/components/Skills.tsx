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
    <section id="skills" className="mt-8">
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
