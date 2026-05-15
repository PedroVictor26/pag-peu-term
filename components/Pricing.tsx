import { Check } from 'lucide-react'

const INCLUSO = [
  'Acesso vitalício à versão atual',
  'Updates futuros — v0.4, v1.0, sem mensalidade',
  'Comunidade WhatsApp direta comigo',
  'Custom AI providers ilimitados',
  'Voz pra IA (free tier Groq)',
  'Editor + visualizador integrado',
  'Suporte priorizado por email'
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-b border-[color:var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-12">
          {/* Esquerda — manifesto de preço */}
          <div className="md:col-span-5">
            <span className="section-marker">№05 · Preço</span>
            <h2 className="headline-section mt-4">
              Paga uma vez.<br />
              Usa <em style={{ color: 'var(--color-amber)' }}>pra sempre</em>.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Não tem mensalidade. Não tem trial de 7 dias. Você paga, recebe o
              instalador, instala. Updates futuros já vêm dentro — mesmo na v1.0.
            </p>

            {/* Pull quote */}
            <blockquote
              className="mt-10 border-l-2 pl-5 font-display-italic text-2xl leading-snug"
              style={{
                borderColor: 'var(--color-amber)',
                fontStyle: 'italic'
              }}
            >
              "É um produto. Não é um SaaS. Eu não quero
              renovar nada todo mês — então não vou fazer
              você renovar."
            </blockquote>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
              — Pedro V., autor
            </p>
          </div>

          {/* Direita — card de preço brutalista */}
          <div className="md:col-span-7">
            <div className="relative border border-[color:var(--color-amber)] bg-[color:var(--color-bg-paper)]">
              {/* Cabeçalho */}
              <div className="flex items-center justify-between border-b border-[color:var(--color-rule)] px-6 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)]">
                  Licença individual
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                  Pagamento único
                </span>
              </div>

              {/* Preço — gigante */}
              <div className="px-6 pb-2 pt-8 md:pb-4 md:pt-10">
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display-italic leading-none"
                    style={{
                      fontStyle: 'italic',
                      fontSize: 'clamp(5rem, 12vw, 9rem)',
                      color: 'var(--color-ink)'
                    }}
                  >
                    R$
                  </span>
                  <span
                    className="font-display leading-none"
                    style={{
                      fontSize: 'clamp(5rem, 12vw, 9rem)',
                      color: 'var(--color-amber)',
                      fontStyle: 'italic'
                    }}
                  >
                    ——
                  </span>
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                  Preço será definido em breve · Pix · Cartão · Boleto
                </p>
              </div>

              {/* CTA */}
              <div className="border-y border-[color:var(--color-rule)] px-6 py-5">
                <a
                  href="#comprar"
                  className="group flex w-full items-center justify-between gap-3 border border-[color:var(--color-amber)] bg-[color:var(--color-amber)] px-6 py-4 text-[color:var(--color-bg)] transition hover:bg-[color:var(--color-amber-bright)]"
                  aria-disabled="true"
                >
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.18em]">
                    Em breve · entrar na lista
                  </span>
                  <span className="text-base">→</span>
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
                        className="mt-1 h-3 w-3 flex-shrink-0"
                        style={{ color: 'var(--color-amber)' }}
                        strokeWidth={2.5}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rodapé técnico */}
              <div className="grid grid-cols-3 border-t border-[color:var(--color-rule)] text-center">
                {[
                  ['vitalício', 'sem renovação'],
                  ['1 user', 'por licença'],
                  ['offline', 'roda local']
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="border-r border-[color:var(--color-rule)] py-3 last:border-r-0"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink)]">
                      {k}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--color-ink-dim)]">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-[color:var(--color-ink-dim)]">
              Tem time de 5+ pessoas? Fala comigo na{' '}
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
          </div>
        </div>
      </div>
    </section>
  )
}
