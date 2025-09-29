import React from 'react'

export default function Hero() {
  return (
    <section className="relative">
      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center py-16 md:py-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Achieve Your IELTS Goals
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            Prepare with the best instructors and resources.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#courses" className="btn-primary">Get Started</a>
          </div>
        </div>
        <div className="relative">
          <img src="/image.png" alt="Student with tablet" className="relative z-10 w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  )
}


