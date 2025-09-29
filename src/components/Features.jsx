import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const features = [
  {
    title: 'Speaking Practice',
    desc: 'Improve your speaking skills with our expert instructors',
    icon: (
      <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
        <span className="block h-6 w-6 rounded-full bg-navy" />
      </div>
    ),
  },
  {
    title: 'Mock Tests',
    desc: 'Take practice tests to assess your readiness',
    icon: (
      <div className="h-12 w-12 rounded-md bg-navy/10 flex items-center justify-center">
        <div className="h-6 w-4 bg-navy" />
      </div>
    ),
  },
  {
    title: 'AI Band Score',
    desc: 'Get an estimated IELTS score using our AI tool',
    icon: (
      <div className="h-12 w-12 rounded-md border-2 border-navy/20 grid place-items-center">
        <div className="h-5 w-5 bg-navy" />
      </div>
    ),
  },
]

export default function Features() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-responsive grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card card-hover">
            <div className="flex items-start gap-4">
              {f.icon}
              <div>
                <h3 className="text-lg font-semibold text-navy">{f.title}</h3>
                <div className="text-slate-600 mt-1 min-h-[48px]">
                  <TypeAnimation
                    sequence={[f.desc, 1500, '']}
                    cursor={true}
                    repeat={Infinity}
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                    omitDeletionAnimation
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


