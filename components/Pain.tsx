import { ScrollReveal } from './ScrollReveal'

const PAIN_ITEMS = [
  { n: '01', text: 'Você abre 14 janelas de terminal pra rodar Claude, Codex e Gemini ao mesmo tempo' },
  { n: '02', text: 'Alt+Tab 30 vezes pra encontrar o terminal certo no meio de 8 apps abertos' },
  { n: '03', text: 'Precisa mandar uma imagem ou arquivo pro Claude e fica copiando caminho na mão' },
  { n: '04', text: 'Não tem como ver o que os agentes estão fazendo quando você sai da frente do PC' },
]

export function Pain() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Esquerda */}
          <ScrollReveal>
            <span className="section-marker">№01 · Contexto</span>
            <h2 className="headline-section mt-5">
              O Windows não foi <br />
              feito pra <em style={{ color: 'var(--color-term-red)' }}>quem usa IA</em><br />
              o dia inteiro.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Terminal padrão. PowerShell. Windows Terminal. Nenhum deles
              entende que você está rodando cinco CLIs de IA ao mesmo tempo.
            </p>
          </ScrollReveal>

          {/* Direita — lista de dores */}
          <div className="space-y-0">
            {PAIN_ITEMS.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="group flex items-start gap-5 border-b border-[color:var(--color-rule)] py-7 first:border-t first:border-[color:var(--color-rule)]">
                  <span
                    className="mt-0.5 flex-shrink-0 font-mono text-[10px] text-[color:var(--color-ink-dim)]"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {item.n}
                  </span>
                  <p className="text-[16px] leading-relaxed text-[color:var(--color-ink-muted)] transition-colors group-hover:text-[color:var(--color-ink)]">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Transição — resposta */}
        <ScrollReveal delay={200}>
          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <hr className="glow-rule w-40" />
            <p className="font-display-italic text-2xl leading-snug text-[color:var(--color-ink-muted)] md:text-3xl" style={{ fontStyle: 'italic' }}>
              Fiz um terminal que{' '}
              <span className="text-[color:var(--color-ink)]">entende tudo isso.</span>
            </p>
            <hr className="glow-rule w-40" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
