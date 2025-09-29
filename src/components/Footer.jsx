import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-10">
      <div className="container-responsive py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/90" />
            <span className="font-semibold text-white text-lg">IELTS Institute</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/90">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-white/90">
            <div>info@ieltsinstitute.com</div>
            <div>1123-456-7860</div>
          </div>
        </div>
      </div>
    </footer>
  )
}


