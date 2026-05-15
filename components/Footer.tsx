export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Top row: brand + links */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[color:var(--color-rule)] pb-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-baseline gap-2">
              <span
                className="font-display-italic text-3xl leading-none"
                style={{ fontStyle: 'italic' }}
              >
                Peu
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                term
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
              Um terminal que entende quem usa IA o dia inteiro. Feito sozinho,
              em casa, no Windows, em 2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <FooterCol
              title="Produto"
              items={[
                { label: 'Manifesto', href: '#manifesto' },
                { label: 'Capacidades', href: '#capabilities' },
                { label: 'Specs', href: '#specs' },
                { label: 'Pricing', href: '#pricing' }
              ]}
            />
            <FooterCol
              title="Suporte"
              items={[
                {
                  label: 'WhatsApp ↗',
                  href: 'https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q',
                  external: true
                },
                { label: 'Q&A', href: '#faq' }
              ]}
            />
          </div>
        </div>

        {/* Crédito de inspiração — curto */}
        <p className="mt-6 border-t border-[color:var(--color-rule)] pt-5 text-[12px] leading-relaxed text-[color:var(--color-ink-muted)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">
            Inspiração
          </span>
          <span className="ml-3">
            Adaptado pra Windows a partir do{' '}
            <a
              href="https://academy.dantetesta.com.br/"
              target="_blank"
              rel="noopener"
              className="link-sweep"
            >
              Dante Shell ↗
            </a>{' '}
            (Dante Testa · macOS).
          </span>
        </p>

        {/* Bottom row: meta info */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)] md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>v0.3.4</span>
            <span>◊</span>
            <span>Windows 10/11 · x64</span>
            <span>◊</span>
            <span>~72 MB</span>
            <span>◊</span>
            <span>Built in Brasil · 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Pedro V.</span>
            <span>·</span>
            <span>© MMXXVI</span>
          </div>
        </div>
      </div>

      {/* Big amber wordmark — caché editorial no fim */}
      <div
        aria-hidden
        className="overflow-hidden border-t border-[color:var(--color-rule)] pb-1 pt-3"
      >
        <div
          className="flex items-baseline justify-center font-display-italic leading-none"
          style={{
            fontStyle: 'italic',
            fontSize: 'clamp(5rem, 22vw, 24rem)',
            color: 'var(--color-bg-paper)',
            WebkitTextStroke: '1px var(--color-rule-strong)',
            letterSpacing: '-0.04em'
          }}
        >
          Peu—term
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  items
}: {
  title: string
  items: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target={it.external ? '_blank' : undefined}
              rel={it.external ? 'noopener' : undefined}
              className="text-sm text-[color:var(--color-ink)] transition hover:text-[color:var(--color-amber)]"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
