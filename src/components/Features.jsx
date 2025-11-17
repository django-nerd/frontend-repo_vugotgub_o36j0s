import React from 'react'

const features = [
  {
    title: 'Connect AI Accounts',
    desc: 'Link providers like image/video generators. Use your own daily free credits—securely and in one place.',
  },
  {
    title: 'Credit-Aware Selection',
    desc: 'Checkbox select providers for a run. When credits hit 0, the provider grays out until refresh.',
  },
  {
    title: 'One Prompt, Many Outputs',
    desc: 'Type your description once. The app routes to selected providers and fetches results back to your library.',
  },
]

function Features() {
  return (
    <section id="features" className="bg-[#0A0B0F] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Modern, futuristic interface. Dark theme, vibrant neon accents, and glassmorphic panels.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
