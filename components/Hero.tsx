import Image from 'next/image'
import { ArrowUpRight, Zap } from 'lucide-react'

const CHECKOUT = 'https://academy.dantetesta.com.br/download/peu-term-windows'

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b border-[color:var(--color-rule)]">
      {/* Imagem ambiente — camada sutil atrás da aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-ambient-layer"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/shots/hero-ambient.png"
          alt=""
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.18, mixBlendMode: 'lighten' }}
        />
      </div>

      {/* Aurora de fundo */}
      <div className="aurora-bg" aria-hidden>
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Mesh grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-[1280px] items-center justify-between px-6 pb-6 pt-6 md:px-10 md:pt-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] md:flex">
          {[
            { href: '#wizard', label: 'Wizard' },
            { href: '#agentes', label: 'Agentes' },
            { href: '#companion', label: 'Companion' },
            { href: '#pricing', label: 'Preço' }
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[color:var(--color-ink-muted)] transition hover:text-[color:var(--color-ink)]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener"
          className="hidden items-center gap-2 border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#050810] transition hover:bg-[color:var(--color-accent-bright)] md:flex"
        >
          Comprar · R$ 50
        </a>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
        {/* Eyebrow badge */}
        <div className="reveal reveal-1 mb-8 inline-flex items-center gap-3">
          <span className="badge">
            <span className="badge-dot" />
            v0.11.11 · Novo
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
            Windows · Tauri 2 · Nativo
          </span>
        </div>

        {/* Grid: texto + imagem */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Coluna texto */}
          <div>
            <h1 className="reveal reveal-2 headline-display">
              <span className="block">Seu exército</span>
              <span className="block">de IAs,</span>
              <span className="block text-gradient-sky">num só lugar.</span>
            </h1>

            <p className="reveal reveal-3 mt-8 max-w-[480px] text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)]">
              Terminal desktop para Windows feito pra quem vive em{' '}
              <span className="text-[color:var(--color-ink)]">Claude Code</span>,{' '}
              <span className="text-[color:var(--color-ink)]">Codex</span> e{' '}
              <span className="text-[color:var(--color-ink)]">Gemini</span>{' '}
              — Wizard de Missão, multi-agente, controle pelo celular.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener"
                className="btn-prime"
              >
                <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
                <span>Comprar · R$ 50</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </a>
              <a href="#wizard" className="btn-ghost">
                Ver como funciona
              </a>
            </div>

            {/* Selos */}
            <div className="reveal reveal-4 mt-5 flex flex-wrap gap-x-5 gap-y-1">
              {[
                'Pagamento único',
                'Acesso vitalício',
                'Sem mensalidade',
                'Quem já tem recebe grátis'
              ].map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]"
                >
                  · {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <dl className="reveal reveal-5 mt-12 grid grid-cols-3 gap-x-6 border-t border-[color:var(--color-rule)] pt-7">
              <StatItem value="~4 MB" label="instalador" />
              <StatItem value="até 9" label="terminais" />
              <StatItem value="zero" label="telemetria" />
            </dl>
          </div>

          {/* Coluna imagem — print real */}
          <div className="reveal reveal-3 relative">
            {/* Glow atrás da imagem */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 opacity-50"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.15) 0%, transparent 65%)',
                filter: 'blur(60px)'
              }}
            />
            <div className="device-frame shot-glow relative float">
              <div className="device-titlebar">
                <span className="window-dot window-dot-r" />
                <span className="window-dot window-dot-y" />
                <span className="window-dot window-dot-g" />
                <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                  Peu-Term v0.11 — 4 agentes · WhatsApp
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/shots/grid-4-terminais.png"
                  alt="Grid de 4 terminais Claude Code rodando em paralelo com WhatsApp embutido"
                  width={900}
                  height={560}
                  className="w-full object-cover"
                  priority
                />
                {/* Scanline */}
                <div className="scanline" aria-hidden />
              </div>
            </div>
            {/* Label da imagem */}
            <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
              Fig. 01 — 4 Claude Code + WhatsApp · simultâneos
            </p>
          </div>
        </div>
      </div>

      {/* Marquee base */}
      <div className="relative z-10 overflow-hidden border-t border-[color:var(--color-rule)] py-3">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <ul
              key={i}
              className="flex shrink-0 items-center gap-10 px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]"
              aria-hidden={i === 1}
            >
              {['Claude Code','★','Gemini CLI','★','Codex','★','Antigravity','★','Aider','★','Cody','★','sgpt','★','Docker CLI','★','npm / pnpm','★','Git','★','WSL2','★','PowerShell 7','★','SSH','★'].map((item, idx) => (
                <li key={idx} style={{ color: item === '★' ? 'var(--color-accent)' : undefined }}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function Wordmark() {
  return (
    <a href="/" className="flex items-baseline gap-2">
      <span className="font-display-italic text-[1.6rem] leading-none" style={{ fontStyle: 'italic' }}>
        Peu
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
        term
      </span>
    </a>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
        {label}
      </dt>
      <dd className="font-mono text-sm text-[color:var(--color-ink)]" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </dd>
    </div>
  )
}
