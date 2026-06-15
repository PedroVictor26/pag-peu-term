import { Check } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const CHECKOUT = 'https://academy.dantetesta.com.br/download/peu-term-windows'

const INCLUSO = [
  'Acesso vitalício à versão atual',
  'Updates automáticos — chegam sozinhos',
  'Quem já comprou recebe de graça',
  'Comunidade WhatsApp com o autor',
  'Custom AI providers ilimitados',
  'Voz pra IA (Groq free tier)',
  'Perfis SSH com reconexão automática',
  'Navegador + WhatsApp embutidos',
  'Biblioteca de prompts + fuzzy finder',
  'Wizard de Missão multi-agente',
  'Companion celular ↔ PC',
  'Suporte por email com o Pedro'
]

export function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-[color:var(--color-rule)]">
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(56,189,248,0.08) 0%, transparent 70%)'
        }}
      />

      <div className="container-wide section-pad relative z-10">
        <div className="grid grid-cols-1 gap-x-14 gap-y-16 md:grid-cols-12">
          {/* Esquerda — manifesto de preço */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <span className="section-marker">№07 · Preço</span>
              <h2 className="headline-section mt-4">
                Paga uma vez.<br />
                Usa <em style={{ color: 'var(--color-accent)' }}>pra sempre.</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                Sem trial. Sem mensalidade. Sem surpresa no cartão todo mês.
                Paga, instala, pronto — updates futuros já estão dentro.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <blockquote
                className="mt-10 border-l-2 pl-5 font-display-italic text-[1.35rem] leading-snug"
                style={{ borderColor: 'var(--color-accent)', fontStyle: 'italic' }}
              >
                "É um produto. Não é um SaaS. Eu não quero
                renovar nada todo mês — então não vou fazer
                você renovar."
              </blockquote>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                — Pedro V., autor
              </p>
            </ScrollReveal>

            {/* Selos simples */}
            <ScrollReveal delay={160}>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  ['vitalício', 'sem renovação'],
                  ['1 user', 'por licença'],
                  ['offline', 'roda local'],
                  ['<4 MB', 'instalador']
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="border border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)] p-3 text-center"
                  >
                    <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-ink)]">{k}</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.10em] text-[color:var(--color-ink-dim)]">{v}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Direita — card preço */}
          <ScrollReveal delay={80} className="md:col-span-7">
            <div
              className="relative border border-[rgba(56,189,248,0.4)] bg-[color:var(--color-bg-paper)]"
              style={{
                boxShadow: '0 0 60px rgba(56,189,248,0.08), 0 32px 80px rgba(0,0,0,0.5)'
              }}
            >
              {/* Linha de glow no topo */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-60" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-[color:var(--color-rule)] px-6 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  Licença individual
                </span>
                <span className="badge">
                  <span className="badge-dot" />
                  Pagamento único
                </span>
              </div>

              {/* Preço */}
              <div className="px-6 pb-4 pt-8 md:pt-10">
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display-italic leading-none text-[color:var(--color-ink-muted)]"
                    style={{ fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                  >
                    R$
                  </span>
                  <span
                    className="font-display-italic leading-none text-gradient-sky"
                    style={{ fontSize: 'clamp(5rem, 13vw, 9rem)', fontStyle: 'italic' }}
                  >
                    50
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
                    único
                  </span>
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
                  Pix · Cartão · Boleto · sem mensalidade · quem já tem recebe grátis
                </p>
              </div>

              {/* CTA */}
              <div className="border-y border-[color:var(--color-rule)] px-6 py-5">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener"
                  className="group flex w-full items-center justify-between gap-3 bg-[color:var(--color-accent)] px-6 py-4 text-[#050810] transition hover:bg-[color:var(--color-accent-bright)]"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                    Comprar na Dante Academy ↗
                  </span>
                  <span className="text-lg transition group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Inclusos */}
              <div className="px-6 py-6">
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
                  Tudo dentro
                </h4>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {INCLUSO.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-[color:var(--color-ink)]"
                    >
                      <Check
                        className="mt-0.5 h-3 w-3 flex-shrink-0 text-[color:var(--color-accent)]"
                        strokeWidth={2.5}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-ink-dim)]">
              Time de 5+ pessoas? Fala na{' '}
              <a
                href="https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q"
                target="_blank"
                rel="noopener"
                className="link-sweep"
              >
                comunidade
              </a>{' '}
              que a gente acerta valor empresarial.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
