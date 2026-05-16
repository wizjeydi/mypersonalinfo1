import React from 'react'

export default function ProfileOverview() {
  return (
    <section id="profile" className="mt-12 grid gap-6 md:grid-cols-3 items-center">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-tr from-primary to-indigo-400 shadow-lg flex items-center justify-center">
          <span className="text-white text-xl font-semibold">Your Photo</span>
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="mt-3 text-slate-600">
          I'm a frontend developer focused on building accessible, performant,
          and delightful user experiences. I specialize in TypeScript, React,
          and Tailwind CSS.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Frontend</span>
          <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">React</span>
          <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">TypeScript</span>
          <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">Accessibility</span>
        </div>
      </div>
    </section>
  )
}
