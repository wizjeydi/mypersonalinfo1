import React from 'react'
import profile from './assets/jd.jpg'
import Skills from './Skills'
import Projects from './Projects'
import Certificates from './Certificates'
import usePaletteFromImage from '../hooks/usePaletteFromImage'

export default function Home() {
  usePaletteFromImage(profile)
  return (
    <div className="cv-shell min-h-screen">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center font-bold text-black">J</div>
          <div className="text-gold font-semibold">John Dave Botones</div>
        </div>
        <nav className="space-x-6 text-sm text-slate-300 hidden md:block">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Portfolio</a>
          <a href="#skills" className="hover:text-white">Skills</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="grid md:grid-cols-2 gap-8 items-center cv-card p-8 rounded-lg animate-fadeUp">
          <div>
            <p className="text-sm text-slate-400">Digital Agency & Personal Portfolio Template</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">I'M <span className="text-gold">John Dave Botones</span></h1>
            <p className="mt-4 text-slate-300">Frontend Developer & IT graduate (Business Analytics). I build modern web applications using TypeScript, React and Tailwind CSS.</p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="inline-block bg-gold text-black px-5 py-3 rounded-md font-medium">View Work</a>
              <a href="#certificates" className="inline-block border border-slate-700 text-slate-300 px-5 py-3 rounded-md">Resume</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="profile-circle bg-white rounded-full overflow-hidden w-64 h-64 border border-slate-200 flex items-center justify-center shadow-lg">
              <img src={profile} alt="John Dave Botones" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section id="about" className="mt-10 cv-card p-6 rounded-lg">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-slate-300">I'm John Dave Botones, a Bachelor of Science in Information Technology majoring in Business Analytics (2026). I focus on building accessible, performant, and delightful user experiences. Based in Wawa, Nasugbu, Batangas.</p>
        </section>

        <section id="projects" className="mt-8">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <div className="mt-4">
            <Projects />
          </div>
        </section>

        <section id="skills" className="mt-8">
          <h2 className="text-2xl font-bold">My Skills</h2>
          <div className="mt-4">
            <Skills />
          </div>
        </section>

        <section id="certificates" className="mt-8">
          <Certificates />
        </section>

        {/* Contact section removed */}
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} John Dave Botones — Built with TypeScript & Tailwind CSS.
      </footer>
    </div>
  )
}
