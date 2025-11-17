import React, { useEffect, useState } from 'react'

const MOCK_PROVIDERS = [
  { id: 'leonardo', name: 'Leonardo', credits: 150, remaining: 28, type: 'image' },
  { id: 'providerx', name: 'Provider X', credits: 50, remaining: 0, type: 'video' },
  { id: 'nova', name: 'Nova', credits: 100, remaining: 10, type: 'image' },
]

function ProviderCard({ p, selected, onToggle }) {
  const disabled = p.remaining === 0
  return (
    <button
      onClick={() => !disabled && onToggle(p.id)}
      className={`group flex items-center justify-between rounded-xl border p-4 text-left transition ${
        disabled
          ? 'cursor-not-allowed border-white/10 bg-white/5 text-white/40'
          : 'border-white/10 bg-white/10 text-white hover:bg-white/15'
      }`}
    >
      <div>
        <div className="text-sm font-semibold text-white">{p.name}</div>
        <div className="mt-1 text-xs text-white/70">{p.remaining}/{p.credits} daily credits left</div>
      </div>
      <div className="flex items-center gap-3">
        {disabled ? (
          <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-white/70">Refills Daily</span>
        ) : null}
        <input type="checkbox" checked={!!selected} readOnly className="h-4 w-4 rounded border-white/20 bg-transparent text-cyan-400 accent-cyan-400" />
      </div>
    </button>
  )
}

function DashboardDemo() {
  const [providers, setProviders] = useState(MOCK_PROVIDERS)
  const [selected, setSelected] = useState({})
  const [prompt, setPrompt] = useState('A neon cyberpunk skyline with flying cars, moody rain, dramatic rim lighting')
  const [outputType, setOutputType] = useState('image')
  const [busy, setBusy] = useState(false)
  const [results, setResults] = useState([])

  const toggle = (id) => {
    setSelected((s) => ({ ...s, [id]: !s[id] }))
  }

  const selectedCount = Object.values(selected).filter(Boolean).length

  const fakeGenerate = async () => {
    if (selectedCount === 0) return
    setBusy(true)
    await new Promise((r) => setTimeout(r, 1200))
    // Mock results
    const outs = providers
      .filter((p) => selected[p.id])
      .map((p) => ({ id: `${p.id}-${Date.now()}`, provider: p.name, url: `https://picsum.photos/seed/${p.id}-${Date.now()}/640/360` }))
    setResults((prev) => [...outs, ...prev])
    setBusy(false)
  }

  return (
    <section id="app" className="bg-[#0A0B0F] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-2">
            <div className="flex items-center gap-3">
              <button onClick={() => setOutputType('image')} className={`rounded-lg px-3 py-1.5 text-sm transition ${outputType==='image'?'bg-white/20 text-white':'bg-white/5 text-white/70 hover:bg-white/10'}`}>Image</button>
              <button onClick={() => setOutputType('video')} className={`rounded-lg px-3 py-1.5 text-sm transition ${outputType==='video'?'bg-white/20 text-white':'bg-white/5 text-white/70 hover:bg-white/10'}`}>Video</button>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={5}
              className="mt-4 w-full rounded-xl border border-white/10 bg-[#0F1117] p-4 text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
              placeholder="Describe what you want to create..."
            />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={fakeGenerate}
                disabled={busy || selectedCount===0}
                className={`rounded-lg bg-gradient-to-r from-[#4DDCFF] to-[#A66BFF] px-5 py-2 text-sm font-semibold text-[#0A0B0F] shadow-[0_0_30px_rgba(77,220,255,0.35)] transition ${busy||selectedCount===0?'opacity-60 cursor-not-allowed':'hover:opacity-90'}`}
              >
                {busy ? 'Generating…' : `Generate with ${selectedCount} provider${selectedCount===1?'':'s'}`}
              </button>
              <span className="text-xs text-white/60">Advanced options soon: aspect, steps, seed, style strength</span>
            </div>

            {results.length > 0 && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((r) => (
                  <div key={r.id} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <img src={r.url} alt={r.provider} className="h-40 w-full object-cover" />
                    <div className="flex items-center justify-between p-3 text-xs text-white/80">
                      <span>{r.provider}</span>
                      <button className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/80">Save</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
            {providers.map((p) => (
              <ProviderCard key={p.id} p={p} selected={selected[p.id]} onToggle={toggle} />
            ))}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/70">
              <div className="text-sm font-semibold text-white">Tip</div>
              <p className="mt-1 text-xs">When a provider hits 0 daily credits, we gray it out until it refreshes. Connect accounts to fetch live credit info.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardDemo
