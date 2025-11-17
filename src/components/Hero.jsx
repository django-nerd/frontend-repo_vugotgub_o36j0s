import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0A0B0F]">
      {/* Spline background */}
      <div className="absolute inset-0 -z-10">
        <spline-viewer url="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"></spline-viewer>
        <div className="absolute inset-0 bg-[#0A0B0F]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">All-in-One AI Generators Hub</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Create across AI platforms from one sleek dashboard
          </h1>
          <p className="mt-5 text-lg leading-7 text-white/80">
            Connect your favorite AI sites, use your own daily free credits, and generate images or videos without leaving the app. When credits run out, providers auto gray-out until they refresh.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#app" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4DDCFF] to-[#A66BFF] px-6 py-3 text-sm font-semibold text-[#0A0B0F] shadow-[0_0_40px_rgba(77,220,255,0.35)] transition hover:opacity-90">
              Launch App Demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0B0F] to-transparent" />
    </section>
  )
}

export default Hero
