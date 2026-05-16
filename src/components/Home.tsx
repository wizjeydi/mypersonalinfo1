import React from 'react'
import profile from './assets/jeyd.png'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'

export default function Home() {
  return (
    <div className="cv-shell min-h-screen text-slate-200">
      <header className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.32em] text-slate-400">John Dave Botones</div>
          <div className="text-xl font-semibold text-white">Software Developer</div>
        </div>

      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center mt-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 shadow-sm shadow-slate-900/30">
              Software Developer
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white">Hello. <br /> I'm <span className="text-gold">John Dave Botones</span></h1>
              <p className="max-w-2xl text-slate-300 leading-relaxed">A developer who builds meaningful digital experiences, always driven by a passion for continuous learning and technical growth.</p>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-950/40">
              <img src={profile} alt="John Dave Botones" className="h-[520px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="cv-card rounded-[2rem] p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">About me</p>
                <h2 className="mt-4 text-3xl font-bold text-white">A developer who builds meaningful digital experiences.</h2>
              </div>
              <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Based in Batangas, Philippines</span>
            </div>
            <div className="mt-6 space-y-4 text-slate-300 leading-7">
              <p>A developer who builds meaningful digital experiences, always driven by a passion for continuous learning and technical growth.</p>
              <p>Based in Batangas, Philippines, I design and develop modern websites with performance, accessibility, and responsive user interfaces in mind. My approach combines strong technical foundations with thoughtful interactions and a polished visual style.</p>
              <p>As technology evolves, I am always eager to learn new tools, master modern frameworks, and adopt industry best practices to deliver cutting-edge solutions.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-gold">4+</p>
                <p className="mt-2 text-sm text-slate-400">Years of experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-gold">30+</p>
                <p className="mt-2 text-sm text-slate-400">Happy clients</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="cv-card rounded-[2rem] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">What I do</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Web Development</h3>
              <p className="mt-3 text-slate-300">Building responsive, accessible, and fast web apps using React, TypeScript, and modern tooling.</p>
            </div>
            <div className="cv-card rounded-[2rem] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Design</p>
              <h3 className="mt-4 text-xl font-semibold text-white">UI / UX Design</h3>
              <p className="mt-3 text-slate-300">Crafting polished interfaces with consistent spacing, hierarchy, and visual clarity.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Latest Projects</h2>
            </div>
          </div>
          <Projects />
        </section>

        <Skills />

        <Certificates />

        <section id="contact" className="mt-16 cv-card rounded-[2rem] p-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Ready to build something great?</h2>
              <p className="mt-4 text-slate-300 leading-7">Let’s collaborate on your next product, website, or app. I’m available for freelance and full-time opportunities.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 text-white">botonesjd@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Phone</p>
                <p className="mt-2 text-white">+63 967 573 5409</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://www.facebook.com/jayydii.botones.7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 hover:bg-white/10">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.073C22 6.507 17.523 2 12 2S2 6.507 2 12.073c0 4.991 3.657 9.124 8.438 9.931v-7.03H7.898v-2.901h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.901h-2.33v7.03C18.343 21.197 22 17.064 22 12.073Z" />
                    </svg>
                  </span>
                  Facebook
                </a>
                <a href="https://www.instagram.com/botonesjd.b/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 hover:bg-white/10">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-gold">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M7.75 2C4.678 2 2.25 4.428 2.25 7.5v9C2.25 19.572 4.678 22 7.75 22h8.5c3.072 0 5.5-2.428 5.5-5.5v-9C21.75 4.428 19.322 2 16.25 2h-8.5Zm8.25 2.5c.69 0 1.25.56 1.25 1.25S16.69 7 16 7s-1.25-.56-1.25-1.25S15.31 4.5 16 4.5Zm-4.25 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
                    </svg>
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} John Dave Botones.
      </footer>
    </div>
  )
}
