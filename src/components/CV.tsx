import React from 'react'

const skills = [
  { name: 'JavaScript', icon: 'code' },
  { name: 'TypeScript', icon: 'code' },
  { name: 'React', icon: 'integration_instructions' },
  { name: 'Node.js', icon: 'cloud' },
  { name: 'Python', icon: 'memory' },
  { name: 'SQL', icon: 'storage' },
  { name: 'Git', icon: 'merge_type' },
  { name: 'Docker', icon: 'layers' },
  { name: 'Linux', icon: 'terminal' },
  { name: 'Testing', icon: 'bug_report' }
]

function SkillCard({ skill }: { skill: { name: string; icon?: string } }) {
  return (
    <div className="cv-card p-4 rounded-lg flex flex-col items-center justify-center text-center">
      <span className="material-icons text-3xl text-gold mb-3">{skill.icon}</span>
      <div className="font-medium">{skill.name}</div>
    </div>
  )
}

export default function CV() {
  return (
    <div className="cv-shell min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left column */}
          <aside className="md:col-span-4 p-6 cv-card rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold to-[rgba(202,161,74,0.6)] flex items-center justify-center text-black font-bold">JD</div>
              <div>
                <div className="text-sm text-slate-400">CURRICULUM VITAE</div>
                <div className="text-lg font-bold mt-1">BOTONES, JOHN DAVE B.</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-slate-300 font-medium">Contact</h4>
              <ul className="mt-2 text-sm text-slate-400 space-y-2">
                <li>Address: Wawa, Nasugbu, Batangas</li>
                <li>Email: <a href="mailto:22-72104@g.batstate-u.edu.ph" className="text-gold">22-72104@g.batstate-u.edu.ph</a></li>
                <li>Phone: <a href="tel:09675735409" className="text-gold">09675735409</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-slate-300 font-medium">Personal</h4>
              <ul className="mt-2 text-sm text-slate-400 space-y-2">
                <li>Nickname: Jd</li>
                <li>Date of birth: May 18, 2004</li>
                <li>Place of birth: Nasugbu, Batangas</li>
                <li>Age: 21</li>
                <li>Gender: Male</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-slate-300 font-medium">Reference</h4>
              <div className="mt-2 text-sm text-slate-400">
                Dr. Lorissa Joana E. Buenas<br />
                Dean, College of Informatics and Computing Sciences<br />
                Batangas State University ARASOF - Nasugbu<br />
                <a href="mailto:joan.buenas@g.batstate-u.edu.ph" className="text-gold">joan.buenas@g.batstate-u.edu.ph</a>
              </div>
            </div>
          </aside>

          {/* Right column */}
          <div className="md:col-span-8">
            <div className="p-6 cv-card rounded-lg">
              <h1 className="text-3xl font-extrabold">John Dave Botones</h1>
              <p className="mt-2 text-slate-300">I am a Bachelor of Science in Information Technology major in Business Analytics graduate (2026). I build web applications and enjoy working with TypeScript, React, and modern tooling.</p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Educational Background</h3>
                <div className="mt-3 space-y-3 text-sm text-slate-300">
                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)]">
                    <div className="font-medium">Tertiary — Batangas State University ARASOF-Nasugbu</div>
                    <div className="text-slate-400">Bachelor of Science in Information Technology major in Business Analytics — 2026</div>
                    <div className="text-slate-400 mt-1">R. Martinez St., Brgy. Bucana Nasugbu Batangas</div>
                  </div>

                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)]">
                    <div className="font-medium">Secondary — Pantalan Senior High School</div>
                    <div className="text-slate-400">Senior High School Graduate — 2022</div>
                  </div>

                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)]">
                    <div className="font-medium">Junior High — Dr. Crisogono B. Ermita Sr Memorial High School</div>
                    <div className="text-slate-400">Junior High School Graduate — 2020</div>
                  </div>

                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)]">
                    <div className="font-medium">Elementary — Nasugbu West Central School</div>
                    <div className="text-slate-400">Elementary Graduate — 2016</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((s) => (
                    <SkillCard key={s.name} skill={s} />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Certificates & Achievements</h3>
                <div className="mt-3 grid gap-3">
                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)] text-sm text-slate-300">
                    <div className="font-medium">Frontend Developer - Coursera</div>
                    <div className="text-slate-400">2024</div>
                  </div>
                  <div className="p-4 rounded-md bg-[rgba(255,255,255,0.02)] text-sm text-slate-300">
                    <div className="font-medium">TypeScript Mastery - Udemy</div>
                    <div className="text-slate-400">2023</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Declaration</h3>
                <p className="mt-2 text-slate-300 text-sm">I hereby certify that the above and attached information is correct and true.</p>
                <div className="mt-6 font-semibold text-slate-200">BOTONES, JOHN DAVE.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
