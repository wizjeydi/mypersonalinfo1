import React from 'react'
import profile from './assets/jd.jpg'
import Projects from './Projects'
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

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-gold/20 transition hover:-translate-y-0.5">Get a proposal</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="cv-card rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-white">120+</div>
                <p className="mt-3 text-sm text-slate-400">Projects Completed</p>
              </div>
              <div className="cv-card rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <p className="mt-3 text-sm text-slate-400">Client Satisfaction</p>
              </div>
              <div className="cv-card rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <p className="mt-3 text-sm text-slate-400">Awards & Recognitions</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/40">
              <img src={profile} alt="John Dave Botones" className="h-[420px] w-full object-cover" />
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
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} John Dave Botones — Built with React, Tailwind CSS.
      </footer>
    </div>
  )
}
