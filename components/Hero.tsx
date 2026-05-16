import { ArrowUpRight } from 'lucide-react'
import { HeroTerminal } from './HeroTerminal'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-rule)]">
      {/* Top bar (header tipo magazine) */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 pt-6 md:px-10 md:pt-8">
        <div className="flex items-center gap-3">
          <Wordmark />
        </div>
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] md:flex">
          <a href="#manifesto" className="link-sweep" style={{ color: 'var(--color-ink)' }}>
            Manifesto
          </a>
          <a href="#capabilities" className="link-sweep" style={{ color: 'var(--color-ink)' }}>
            Capacidades
          </a>
          <a href="#specs" className="link-sweep" style={{ color: 'var(--color-ink)' }}>
            Specs
          </a>
          <a href="#pricing" className="link-sweep" style={{ color: 'var(--color-ink)' }}>
            Comprar
          </a>
        </nav>
        <a
          href="#pricing"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]"
        >
          v0.3.4 →
        </a>
      </header>

      {/* Hero grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-12 px-6 pb-20 pt-10 md:px-10 md:pb-32 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-x-16">
        {/* COLUNA ESQUERDA — statement editorial */}
        <div className="relative flex flex-col justify-center">
          {/* Marker tipo magazine */}
          <div className="reveal reveal-1 mb-6 flex items-center gap-4 text-[10px]">
            <span className="font-mono uppercase tracking-[0.18em] text-[color:var(--color-amber)]">
              Issue №01
            </span>
            <span className="h-px w-12 bg-[color:var(--color-rule-strong)]" />
            <span className="font-mono uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
              Terminal · Windows · 2026
            </span>
          </div>

          {/* Headline em duas linhas — efeito serif italic */}
          <h1 className="reveal reveal-2 headline-display">
            <span className="block">Cansei de</span>
            <span className="block">
              ter <em className="not-italic" style={{ fontStyle: 'normal', fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '-0.04em' }}>14</em> janelas
            </span>
            <span className="block text-[color:var(--color-amber)]">— fiz isso.</span>
          </h1>

          {/* Sub editorial — não é "tagline corporativa" */}
          <p className="reveal reveal-3 mt-8 max-w-md text-base leading-relaxed text-[color:var(--color-ink-muted)] md:text-lg">
            Um terminal pra Windows que entende quem trabalha com{' '}
            <span className="text-[color:var(--color-ink)]">Claude</span>,{' '}
            <span className="text-[color:var(--color-ink)]">Gemini</span>,{' '}
            <span className="text-[color:var(--color-ink)]">Codex</span> e qualquer outro
            CLI de IA. Split view, voz que vira texto, IA que explica erro. Sem
            cloud, sem login, sem 8 ícones na bandeja.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="btn-prime amber-glow">
              <span>Adquirir · R$ 25</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </a>
            <a href="#capabilities" className="btn-ghost">
              Como funciona
            </a>
          </div>

          {/* Micro-texto de preço — reforça barato + vitalício */}
          <p className="reveal reveal-4 mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
            Pagamento único · acesso vitalício · sem mensalidade
          </p>

          {/* Trust line — datapoints em mono, não "trusted by N developers" */}
          <dl className="reveal reveal-5 mt-14 grid grid-cols-3 gap-x-4 border-t border-[color:var(--color-rule)] pt-6 text-xs">
            <Datapoint label="Tamanho" value="72 MB" />
            <Datapoint label="Panes / tab" value="até 9" />
            <Datapoint label="Telemetria" value="zero" />
          </dl>
        </div>

        {/* COLUNA DIREITA — terminal vivo */}
        <div className="reveal reveal-3 relative flex items-center justify-center lg:justify-end">
          <HeroTerminal />
        </div>
      </div>

      {/* Marquee na base — "currently running" */}
      <div className="relative z-10 overflow-hidden border-t border-[color:var(--color-rule)] py-3">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <ul
              key={i}
              className="flex shrink-0 items-center gap-12 px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]"
              aria-hidden={i === 1}
            >
              <li>★ Claude Code</li>
              <li>◊</li>
              <li>★ Gemini CLI</li>
              <li>◊</li>
              <li>★ Codex</li>
              <li>◊</li>
              <li>★ Aider</li>
              <li>◊</li>
              <li>★ Cody</li>
              <li>◊</li>
              <li>★ sgpt</li>
              <li>◊</li>
              <li>★ Pyenv</li>
              <li>◊</li>
              <li>★ Docker CLI</li>
              <li>◊</li>
              <li>★ npm / pnpm / bun</li>
              <li>◊</li>
              <li>★ Git</li>
              <li>◊</li>
              <li>★ WSL2</li>
              <li>◊</li>
              <li>★ PowerShell 7</li>
              <li>◊</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function Datapoint({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
        {label}
      </dt>
      <dd className="font-mono text-sm text-[color:var(--color-ink)]" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </dd>
    </div>
  )
}

function Wordmark() {
  return (
    <a href="/" className="flex items-baseline gap-2">
      <span
        className="font-display-italic text-2xl leading-none"
        style={{ fontStyle: 'italic' }}
      >
        Peu
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
        term
      </span>
    </a>
  )
}
