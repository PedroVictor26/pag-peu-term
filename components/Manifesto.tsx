import { ScrollReveal } from './ScrollReveal'

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]"
    >
      <div className="container-wide section-pad">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Side annotation */}
          <aside className="col-span-12 mb-10 md:col-span-3 md:mb-0">
            <ScrollReveal>
              <div className="sticky top-10 flex flex-col gap-3">
                <span className="section-marker">Manifesto</span>
                <span className="eyebrow">Por que isso existe</span>
                <hr className="editorial-rule-accent w-12" />
                <p className="font-mono text-[10px] leading-relaxed text-[color:var(--color-ink-dim)]">
                  Jun 2026 — rodando Claude Code,
                  Gemini CLI e Codex ao mesmo tempo no Windows.
                </p>
              </div>
            </ScrollReveal>
          </aside>

          {/* Copy editorial */}
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <ScrollReveal>
              <h2 className="headline-section mb-12">
                Queria um terminal que{' '}
                <em style={{ color: 'var(--color-accent)' }}>entendesse</em>{' '}
                que eu uso IA o dia inteiro.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-x-12 gap-y-6 text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)] md:grid-cols-2 md:text-[18px]">
              <ScrollReveal delay={60}>
                <div className="space-y-5">
                  <p className="drop-cap" style={{ color: 'var(--color-ink)' }}>
                    Em abril eu tinha quatro Claudes rodando ao mesmo tempo, um
                    Gemini, dois <em className="text-[color:var(--color-ink)]">npm run dev</em> — e umas
                    30 abas de browser no meio.
                  </p>
                  <p>
                    Vi o{' '}
                    <a
                      href="https://academy.dantetesta.com.br/"
                      target="_blank"
                      rel="noopener"
                      className="link-sweep"
                    >
                      Dante Shell ↗
                    </a>{' '}
                    do Dante Testa (macOS) e adaptei pro Windows.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="space-y-5">
                  <p>
                    O resultado:{' '}
                    <span style={{ color: 'var(--color-ink)' }}>tudo num app só</span> — split de até 9 terminais,
                    Wizard de Missão, Companion mobile, voz que vira prompt, IA que explica erro.
                  </p>
                  <p
                    className="border-l-2 pl-5 italic"
                    style={{
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-ink)'
                    }}
                  >
                    Pra Windows não existia. Agora existe.{' '}
                    <span className="font-mono not-italic">v0.11.18</span>
                  </p>
                  <p className="pt-2 font-display-italic text-2xl leading-tight" style={{ color: 'var(--color-ink)' }}>
                    — Pedro V.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={180}>
              <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[color:var(--color-rule)] pt-10 md:grid-cols-4">
                <PullStat n="4+" label="CLIs de IA suportados" />
                <PullStat n="9" label="terminais simultâneos" />
                <PullStat n="0" label="dados saem do seu PC" />
                <PullStat n="∞" label="providers customizáveis" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function PullStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="font-display-italic text-5xl leading-none md:text-6xl"
        style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}
      >
        {n}
      </span>
      <span className="font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-[color:var(--color-ink-dim)]">
        {label}
      </span>
    </div>
  )
}
