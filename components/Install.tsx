import { AlertTriangle, ArrowUpRight } from 'lucide-react'

interface Step {
  num: string
  title: string
  body: React.ReactNode
  aside?: React.ReactNode
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Você compra. Recebe o link.',
    body: (
      <>
        Após o pagamento (Pix · Cartão · Boleto), você recebe automaticamente um
        link pra baixar o instalador{' '}
        <code className="font-mono text-[color:var(--color-amber)]">
          Peu-Term-Setup-X.X.X.exe
        </code>{' '}
        (≈ 72 MB). Salva em qualquer pasta.
      </>
    ),
    aside: <span className="font-mono text-xs text-[color:var(--color-ink-dim)]">~30s</span>
  },
  {
    num: '02',
    title: 'Windows reclama. Você passa por cima.',
    body: (
      <>
        O instalador não é assinado digitalmente (cert custa caro pra dev indie
        — vem em release próximo). O SmartScreen vai mostrar um aviso. Click em{' '}
        <strong style={{ color: 'var(--color-ink)' }}>Mais informações</strong> →{' '}
        <strong style={{ color: 'var(--color-amber)' }}>Executar mesmo assim</strong>.
      </>
    ),
    aside: (
      <div
        className="flex items-start gap-2 border-l border-[color:var(--color-amber)] bg-[color:var(--color-bg-paper)] p-3 text-[11px] leading-relaxed text-[color:var(--color-ink-muted)]"
        style={{ borderLeftWidth: '2px' }}
      >
        <AlertTriangle
          className="mt-0.5 h-3 w-3 flex-shrink-0"
          style={{ color: 'var(--color-amber)' }}
        />
        <span>
          Aviso esperado em apps de dev indie. Sem vírus — código aberto pra
          quem comprou (NDA), revisado por antivirus padrão.
        </span>
      </div>
    )
  },
  {
    num: '03',
    title: 'Pra usar voz/IA, gera 1 key na Groq.',
    body: (
      <>
        A voz e o "explicar erro" usam Groq (free tier ~25 req/min, mais que
        suficiente). Vai em{' '}
        <a
          href="https://console.groq.com/keys"
          target="_blank"
          rel="noopener"
          className="link-sweep"
        >
          console.groq.com/keys ↗
        </a>{' '}
        — cria conta grátis, gera uma API key, cola em{' '}
        <strong style={{ color: 'var(--color-ink)' }}>
          Configurações → Voz → Terminal
        </strong>
        . Key fica cifrada localmente (DPAPI).
      </>
    ),
    aside: <span className="font-mono text-xs text-[color:var(--color-ink-dim)]">opcional · ~1 min</span>
  }
]

export function Install() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <span className="section-marker">№06 · Instalação</span>
            <h2 className="headline-section mt-4">
              Como você <em style={{ color: 'var(--color-amber)' }}>recebe</em>.
            </h2>
          </div>
          <div className="col-span-12 mt-6 max-w-md md:col-span-8 md:col-start-5 md:mt-2 md:pt-3">
            <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Não tem download direto na landing (a gente vende, não regala).
              Você compra, recebe o link, instala. Tudo em menos de 3 minutos.
            </p>
          </div>
        </div>

        <ol className="divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
          {STEPS.map((step) => (
            <li
              key={step.num}
              className="grid grid-cols-12 gap-x-6 gap-y-3 py-10 md:py-14"
            >
              {/* Num grande */}
              <div className="col-span-2 md:col-span-1">
                <span
                  className="font-display-italic text-5xl leading-none"
                  style={{
                    color: 'var(--color-amber)',
                    fontStyle: 'italic'
                  }}
                >
                  {step.num}
                </span>
              </div>
              {/* Title + body */}
              <div className="col-span-10 md:col-span-7">
                <h3
                  className="font-display-italic text-2xl leading-tight md:text-3xl"
                  style={{ fontStyle: 'italic', color: 'var(--color-ink)' }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  {step.body}
                </p>
              </div>
              {/* Aside */}
              <div className="col-span-12 md:col-span-4">{step.aside}</div>
            </li>
          ))}
        </ol>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border border-[color:var(--color-amber)] bg-[color:var(--color-bg-paper)] p-8 md:flex-row md:items-center">
          <div>
            <h4 className="font-display-italic text-2xl" style={{ fontStyle: 'italic' }}>
              Pronto pra trocar 14 janelas por uma?
            </h4>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
              v0.3.4 · Windows 10/11 · 72 MB
            </p>
          </div>
          <a href="#pricing" className="btn-prime amber-glow">
            Adquirir agora
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  )
}
