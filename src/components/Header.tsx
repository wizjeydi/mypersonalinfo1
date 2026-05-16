import React from 'react'

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-primary">Your Name</a>
        <nav className="space-x-4 text-sm text-slate-700">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  )
}