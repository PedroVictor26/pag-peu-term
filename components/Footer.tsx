import { VERSION } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative">
      <div className="container-wide py-12">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[color:var(--color-rule)] pb-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-baseline gap-2">
              <span className="font-display-italic text-3xl leading-none" style={{ fontStyle: 'italic' }}>
                Peu
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
                term
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
              Terminal que entende quem usa IA o dia inteiro.
              Feito em casa, no Windows, em 2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <FooterCol
              title="Produto"
              items={[
                { label: 'Wizard', href: '#wizard' },
                { label: 'Multi-agente', href: '#agentes' },
                { label: 'Companion', href: '#companion' },
                { label: 'Preço', href: '#pricing' },
                { label: 'FAQ', href: '#faq' }
              ]}
            />
            <FooterCol
              title="Links"
              items={[
                {
                  label: 'Comprar · R$ 50 ↗',
                  href: 'https://academy.dantetesta.com.br/download/peu-term-windows',
                  external: true
                },
                {
                  label: 'Dante Testa Academy ↗',
                  href: 'https://academy.dantetesta.com.br/',
                  external: true
                },
                {
                  label: 'Comunidade WhatsApp ↗',
                  href: 'https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q',
                  external: true
                }
              ]}
            />
          </div>
        </div>

        {/* Crédito */}
        <p className="mt-6 text-[12px] leading-relaxed text-[color:var(--color-ink-muted)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
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
            (Dante Testa · macOS). Vendido na{' '}
            <a
              href="https://academy.dantetesta.com.br/download/peu-term-windows"
              target="_blank"
              rel="noopener"
              className="link-sweep"
            >
              Dante Testa Academy ↗
            </a>
          </span>
        </p>

        {/* Bottom meta */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-rule)] pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)] md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{VERSION}</span>
            <span className="text-[color:var(--color-accent)]">◊</span>
            <span>Windows 10/11 · x64</span>
            <span className="text-[color:var(--color-accent)]">◊</span>
            <span>~4 MB</span>
            <span className="text-[color:var(--color-accent)]">◊</span>
            <span>Tauri 2 · Nativo</span>
            <span className="text-[color:var(--color-accent)]">◊</span>
            <span>Built in Brasil · 2026</span>
          </div>
          <span>Pedro V. · © MMXXVI</span>
        </div>
      </div>

      {/* Big outline wordmark */}
      <div
        aria-hidden
        className="overflow-hidden border-t border-[color:var(--color-rule)] pb-1 pt-3"
      >
        <div
          className="flex items-baseline justify-center font-display-italic leading-none"
          style={{
            fontStyle: 'italic',
            fontSize: 'clamp(5rem, 22vw, 24rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(56,189,248,0.12)',
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
              className="text-sm text-[color:var(--color-ink)] transition hover:text-[color:var(--color-accent)]"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
