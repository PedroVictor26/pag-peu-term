import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

export function Wizard() {
  return (
    <section id="wizard" className="relative border-b border-[color:var(--color-rule)]">
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 900px 600px at 80% 50%, rgba(56,189,248,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="container-wide section-pad relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16 grid grid-cols-1 gap-6 border-b border-[color:var(--color-rule)] pb-10 md:grid-cols-2">
          <div>
            <span className="section-marker">№02 · Wizard de Missão</span>
            <h2 className="headline-section mt-5">
              Descreve a tarefa.<br />
              A IA monta o <em style={{ color: 'var(--color-accent)' }}>plano.</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-md text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Você fala o objetivo em linguagem natural. O Wizard quebra em subtarefas,
              aloca agentes e dispara tudo — em paralelo ou em sequência com papéis definidos.
            </p>
          </div>
        </ScrollReveal>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-[1.2fr_1fr]">
          {/* Imagem — modal Montar Missão */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 opacity-40"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, transparent 60%)',
                  filter: 'blur(50px)'
                }}
              />
              <div className="device-frame shot-glow relative">
                <div className="device-titlebar">
                  <span className="window-dot window-dot-r" />
                  <span className="window-dot window-dot-y" />
                  <span className="window-dot window-dot-g" />
                  <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                    Montar Missão
                  </span>
                </div>
                <Image
                  src="/shots/modal-missao.png"
                  alt="Modal Montar Missão — Wizard com chips de subtarefas e seleção de modo Paralelo ou Sequencial"
                  width={800}
                  height={520}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                Fig. 02 — Modal Wizard · chips de subtarefa + modo de execução
              </p>
            </div>
          </ScrollReveal>

          {/* Texto + bullets */}
          <div className="space-y-10">
            <ScrollReveal delay={100}>
              <ModeCard
                label="Modo Paralelo"
                accent="var(--color-accent)"
                description="Dispara todas as subtarefas ao mesmo tempo — cada agente atua no próprio pane, de forma independente."
                bullets={[
                  'Ideal pra tarefas sem dependência',
                  'Cada agente tem contexto isolado',
                  'Cockpit mostra todos os status em tempo real'
                ]}
              />
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <ModeCard
                label="Modo Sequencial"
                accent="var(--color-violet)"
                description="Papéis Líder → Executor → Revisor em ordem. Cada agente espera o anterior terminar antes de começar."
                bullets={[
                  'Líder planeja, Executor roda, Revisor valida',
                  'Contexto do anterior alimenta o próximo',
                  'Ideal pra refactor, deploy, revisão de código'
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function ModeCard({
  label,
  accent,
  description,
  bullets
}: {
  label: string
  accent: string
  description: string
  bullets: string[]
}) {
  return (
    <div
      className="border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)] p-6 transition hover:border-[color:var(--color-rule-strong)]"
      style={{
        borderLeftColor: accent,
        borderLeftWidth: '2px'
      }}
    >
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: accent }}>
        {label}
      </div>
      <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {description}
      </p>
      <ul className="mt-4 space-y-2 border-t border-[color:var(--color-rule)] pt-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 font-mono text-[11px] leading-relaxed text-[color:var(--color-ink-muted)]">
            <span style={{ color: accent }} className="mt-0.5 flex-shrink-0">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
