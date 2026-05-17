'use client'
import { useEffect, useState } from 'react'

/**
 * Terminal "vivo" do hero — digita comandos um após o outro em loop
 * pra simular fluxo real. Cor accent/fuchsia no prompt e destaques.
 *
 * NÃO é screenshot. É HTML/CSS — performance ótima, animado.
 */

interface Scene {
  prompt: string
  cmd: string
  out?: string[]
  outDelay?: number
}

const SCENES: Scene[] = [
  {
    prompt: 'PS C:\\projeto>',
    cmd: 'claude',
    out: [
      '✶ Claude Code v2.1 ready',
      'O que vamos fazer hoje?'
    ],
    outDelay: 1200
  },
  {
    prompt: '~ via voz ~',
    cmd: 'Refatora o componente Header pra usar Server Components',
    out: ['↗ enviado pro claude']
  },
  {
    prompt: 'PS C:\\api>',
    cmd: 'npm run dev',
    out: [
      '▲ Next.js 15.0.3',
      '- Local:   http://localhost:3000',
      '- Ready in 1.2s'
    ],
    outDelay: 1000
  }
]

export function HeroTerminal() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Sombra ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -bottom-20 -top-10 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent-glow) 0%, transparent 60%)',
          filter: 'blur(48px)'
        }}
      />

      <div
        className="relative overflow-hidden border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)]"
        style={{
          boxShadow:
            '0 24px 80px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(139, 166, 214, 0.04) inset'
        }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-ink-quiet)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-ink-quiet)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-ink-quiet)]" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            <span>peu-term · shell · 1</span>
          </div>
          <span className="font-mono text-[10px] text-[color:var(--color-ink-dim)]">
            8% · 42 MB
          </span>
        </div>

        {/* Buffer area */}
        <div className="relative h-[340px] overflow-hidden px-5 py-4 font-mono text-[13px] leading-[1.55] text-[color:var(--color-ink)]">
          {/* Scanline sutil pra dar feel de terminal */}
          <div className="scanline" />

          <TypingLoop />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
          <div className="flex items-center gap-3">
            <span>POWERSHELL 7</span>
            <span>·</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ color: 'var(--color-accent)' }}>● rec 12s</span>
            <span>·</span>
            <span>2×2</span>
          </div>
        </div>
      </div>

      {/* Caption pequena tipo magazine */}
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
        Fig. 01 — Pane principal · Claude rodando · voz ativa
      </p>
    </div>
  )
}

function TypingLoop() {
  const [sceneIdx, setSceneIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [showOut, setShowOut] = useState(false)
  const [outVisibleLines, setOutVisibleLines] = useState(0)

  const scene = SCENES[sceneIdx]

  useEffect(() => {
    // Reset
    setTyped('')
    setShowOut(false)
    setOutVisibleLines(0)

    // Typing chunks
    const target = scene.cmd
    let i = 0
    const typingInterval = setInterval(() => {
      i += 1
      setTyped(target.slice(0, i))
      if (i >= target.length) {
        clearInterval(typingInterval)
        // Espera, então mostra output
        setTimeout(() => {
          setShowOut(true)
          if (scene.out && scene.out.length > 0) {
            scene.out.forEach((_, idx) => {
              setTimeout(() => setOutVisibleLines(idx + 1), idx * 280)
            })
          }
          // Avança pra próxima cena
          setTimeout(() => {
            setSceneIdx((s) => (s + 1) % SCENES.length)
          }, (scene.outDelay ?? 800) + (scene.out?.length ?? 0) * 280 + 1400)
        }, 280)
      }
    }, 55)

    return () => clearInterval(typingInterval)
  }, [sceneIdx, scene])

  return (
    <div className="flex h-full flex-col justify-end">
      {/* Histórico anterior — fade-up visual */}
      <div className="space-y-1.5 opacity-50">
        <Line prompt="PS C:\projeto>" cmd="git pull origin main" />
        <Out>From github.com:user/project</Out>
        <Out muted> * branch  main  → FETCH_HEAD</Out>
        <Out muted>Already up to date.</Out>
      </div>
      <div className="mt-5 space-y-1.5">
        <div className="flex items-baseline gap-2">
          <span
            className="text-[color:var(--color-accent)]"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {scene.prompt}
          </span>
          <span>{typed}</span>
          {!showOut && <span className="cursor-blink">▎</span>}
        </div>

        {showOut &&
          scene.out?.slice(0, outVisibleLines).map((line, i) => {
            const isMuted = line.startsWith('-') || line.startsWith('From')
            const isSuccess = line.includes('Ready') || line.includes('✶') || line.includes('▲')
            return (
              <div
                key={`${sceneIdx}-${i}`}
                style={{
                  color: isSuccess
                    ? 'var(--color-accent-bright)'
                    : isMuted
                      ? 'var(--color-ink-dim)'
                      : 'var(--color-ink-muted)'
                }}
              >
                {line}
              </div>
            )
          })}
      </div>
    </div>
  )
}

function Line({ prompt, cmd }: { prompt: string; cmd: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[color:var(--color-accent)]">{prompt}</span>
      <span>{cmd}</span>
    </div>
  )
}

function Out({
  children,
  muted
}: {
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <div
      style={{
        color: muted ? 'var(--color-ink-dim)' : 'var(--color-ink-muted)'
      }}
    >
      {children}
    </div>
  )
}
