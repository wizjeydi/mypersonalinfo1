import React from 'react'

export default function Hero() {
  return (
    <section className="pt-12 pb-20">
      <div className="grid gap-8 items-center md:grid-cols-2">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-primary">Your Name</span>.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            I build modern web applications with TypeScript, React and Tailwind CSS.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="inline-block px-5 py-3 bg-primary text-white rounded-md shadow">View projects</a>
            <a href="#contact" className="inline-block px-5 py-3 border border-slate-200 rounded-md text-slate-700">Contact me</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-xl overflow-hidden bg-gradient-to-tr from-primary to-indigo-400 shadow-lg flex items-center justify-center">
            <span className="text-white text-lg">Profile</span>
          </div>
        </div>
      </div>
    </section>
  )
}