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
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="cv-card p-4 rounded-lg flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform">
            <span className="material-icons text-gold text-3xl mb-2">{s.icon}</span>
            <div className="font-medium text-sm">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
