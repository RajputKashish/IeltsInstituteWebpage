import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-sky/60 backdrop-blur supports-[backdrop-filter]:bg-sky/60 sticky top-0 z-50 border-b border-slate-200/60">
      <div className="container-responsive flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-navy" />
          <span className="font-semibold text-navy text-lg">IELTS Institute</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#" className="hover:text-navy">Home</a>
          <a href="#courses" className="hover:text-navy">Courses</a>
          <a href="#about" className="hover:text-navy">About</a>
          <a href="#contact" className="hover:text-navy">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-white" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          <span className="i-bars block h-0.5 w-6 bg-navy mb-1"></span>
          <span className="block h-0.5 w-6 bg-navy mb-1"></span>
          <span className="block h-0.5 w-6 bg-navy"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-responsive py-3 flex flex-col gap-3">
            <a href="#" className="hover:text-navy">Home</a>
            <a href="#courses" className="hover:text-navy">Courses</a>
            <a href="#about" className="hover:text-navy">About</a>
            <a href="#contact" className="hover:text-navy">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}


