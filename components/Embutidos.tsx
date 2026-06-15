import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'
import { MessageSquare, Globe, Image as ImageIcon } from 'lucide-react'

export function Embutidos() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)]">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Esquerda — texto */}
          <div>
            <ScrollReveal>
              <span className="section-marker">№04 · Embutidos</span>
              <h2 className="headline-section mt-5">
                WhatsApp e navegador —<br />
                <em style={{ color: 'var(--color-accent)' }}>sem sair</em> do terminal.
              </h2>
              <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
                Bolha flutuante. Você arrasta pro canto, responde um WhatsApp,
                volta pro terminal. Sem Alt+Tab. Sem perder o foco.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: 'WhatsApp Web',
                  desc: 'Criptografia ponta a ponta preservada. É literalmente o WhatsApp Web num Webview interno — não é integração por API.'
                },
                {
                  icon: Globe,
                  title: 'Navegador embutido',
                  desc: 'Barra de endereço completa. Docs, StackOverflow, PRs no GitHub — tudo sem sair do app.'
                },
                {
                  icon: ImageIcon,
                  title: 'Colar imagem (Ctrl+V)',
                  desc: 'Tira screenshot, Ctrl+V no terminal — miniatura aparece por 3 segundos e vai direto pro Claude, Codex ou Gemini.'
                }
              ].map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 70}>
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[rgba(56,189,248,0.2)]"
                      style={{ background: 'rgba(56,189,248,0.06)' }}
                    >
                      <Icon className="h-4 w-4" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="mb-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink)]">
                        {title}
                      </div>
                      <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Direita — print */}
          <ScrollReveal direction="right" delay={100}>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.2) 0%, transparent 60%)',
                  filter: 'blur(50px)'
                }}
              />
              <div className="device-frame shot-glow relative">
                <div className="device-titlebar">
                  <span className="window-dot window-dot-r" />
                  <span className="window-dot window-dot-y" />
                  <span className="window-dot window-dot-g" />
                  <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                    Terminal + WhatsApp Web
                  </span>
                </div>
                <Image
                  src="/shots/terminal-whatsapp.png"
                  alt="Terminal Peu-Term com WhatsApp Web embutido em bolha flutuante"
                  width={700}
                  height={460}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                Fig. 04 — WhatsApp Web embutido · criptografia ponta a ponta
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
