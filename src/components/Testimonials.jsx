import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const testimonials = [
  {
    name: 'Emily',
    text:
      'The courses were extremely helpful in improving my score. Highly recommend!',
  },
  {
    name: 'John',
    text:
      'The instructors were knowledgeable and very supportive throughout the course.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-navy text-center">Student Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="card card-hover">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-navy/10 grid place-items-center">
                  <div className="h-6 w-6 rounded-full bg-navy" />
                </div>
                <div>
                  <div className="text-slate-700 min-h-[56px]">
                    <TypeAnimation
                      sequence={[t.text, 1500, '']}
                      cursor={true}
                      repeat={Infinity}
                      style={{ whiteSpace: 'pre-line', display: 'block' }}
                      omitDeletionAnimation
                    />
                  </div>
                  <p className="mt-3 font-semibold text-navy">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


