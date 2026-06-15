import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

export function Monitor() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-[1.15fr_1fr]">
          {/* Print — consumo de recursos */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, transparent 60%)',
                  filter: 'blur(50px)'
                }}
              />
              <div className="device-frame shot-glow">
                <div className="device-titlebar">
                  <span className="window-dot window-dot-r" />
                  <span className="window-dot window-dot-y" />
                  <span className="window-dot window-dot-g" />
                  <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                    Monitor de Consumo
                  </span>
                </div>
                <Image
                  src="/shots/consumo-recursos.png"
                  alt="Painel de consumo de recursos do Peu-Term mostrando CPU, RAM e gráfico por agente"
                  width={700}
                  height={460}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                Fig. 05 — CPU / RAM por agente · histórico em gráfico
              </p>
            </div>
          </ScrollReveal>

          {/* Texto */}
          <div>
            <ScrollReveal delay={100}>
              <span className="section-marker">№05 · Monitor</span>
              <h2 className="headline-section mt-5">
                Sabe o que cada IA<br />
                <em style={{ color: 'var(--color-accent)' }}>consome</em> de verdade.
              </h2>
              <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
                Painel honesto: CPU e RAM por agente em tempo real, histórico em gráfico.
                Não fica chutando qual Claude está engolindo o PC.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <ul className="mt-8 space-y-3 border-t border-[color:var(--color-rule)] pt-6">
                {[
                  'CPU e RAM por pane — em tempo real',
                  'Indicador verde / âmbar / vermelho no pane',
                  'Gráfico histórico dos últimos minutos',
                  'Identifica travamento antes de virar problema',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-mono text-[12px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    <span className="mt-0.5 flex-shrink-0 text-[color:var(--color-accent)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
