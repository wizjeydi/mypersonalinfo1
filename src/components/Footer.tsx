import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name. Built with TypeScript & Tailwind CSS.
      </div>
    </footer>
  )
}