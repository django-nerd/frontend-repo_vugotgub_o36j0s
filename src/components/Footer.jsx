import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#0A0B0F] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© 2025 All-in-One AI Hub • Dark Neon Edition</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/test" className="text-white/70 hover:text-white">Backend Test</a>
            <a href="#features" className="text-white/70 hover:text-white">Features</a>
            <a href="#app" className="text-white/70 hover:text-white">App Demo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
