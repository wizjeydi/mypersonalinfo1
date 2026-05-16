import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-4 text-slate-600">Interested in working together? Send me a message.</p>
      <form className="mt-6 grid gap-3 sm:grid-cols-2">
        <input className="p-3 border rounded-md" placeholder="Your name" />
        <input className="p-3 border rounded-md" placeholder="Your email" />
        <textarea className="p-3 border rounded-md sm:col-span-2" placeholder="Message" />
        <button type="button" className="sm:col-span-2 inline-block px-5 py-3 bg-primary text-white rounded-md">Send</button>
      </form>
    </section>
  )
}