import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

export function Agentes() {
  return (
    <section id="agentes" className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
      {/* Glow violeta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 20% 50%, rgba(167,139,250,0.18) 0%, transparent 70%)'
        }}
      />

      <div className="container-wide section-pad relative z-10">
        {/* Duas imagens lado a lado */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="device-frame shot-glow h-full">
              <div className="device-titlebar">
                <span className="window-dot window-dot-r" />
                <span className="window-dot window-dot-y" />
                <span className="window-dot window-dot-g" />
                <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                  Workspace principal · sidebar + Claude Code
                </span>
              </div>
              <Image
                src="/shots/workspace-sidebar.png"
                alt="Workspace principal do Peu-Term com sidebar Favoritos, Claude Code rodando e status bar"
                width={700}
                height={440}
                className="w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={80}>
            <div className="device-frame shot-glow h-full">
              <div className="device-titlebar">
                <span className="window-dot window-dot-r" />
                <span className="window-dot window-dot-y" />
                <span className="window-dot window-dot-g" />
                <span className="ml-3 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
                  Cockpit · Ctrl+Shift+K
                </span>
              </div>
              <Image
                src="/shots/modal-cockpit.png"
                alt="Modal Cockpit do Peu-Term mostrando 2 agentes rodando com status RODANDO e botão Focar"
                width={700}
                height={440}
                className="w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Texto */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <span className="section-marker">№03 · Multi-agente</span>
            <h2 className="headline-section mt-5">
              <em style={{ color: 'var(--color-accent)' }}>Vários</em> Claude Code<br />
              rodando lado a lado.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="flex flex-col justify-center gap-6">
              <p className="text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
                Split de até 9 terminais por aba, cada um com PTY próprio.
                O <span className="text-[color:var(--color-ink)]">Cockpit</span>{' '}
                (<kbd className="kbd">Ctrl+Shift+K</kbd>) mostra o estado de todos —
                rodando, esperando, travado — e deixa você Focar num em 1 clique.
              </p>

              <ul className="space-y-3">
                {[
                  ['Layout 1×1 até 3×3', 'cada slot é PTY independente'],
                  ['Ctrl+Shift+D', 'split · Ctrl+Shift+W fecha pane'],
                  ['PTY sobrevive a re-layout', 'buffer de 200 KB preservado'],
                  ['Monitor CPU/RAM por pane', 'sabe qual agente está travando'],
                ].map(([key, val]) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[color:var(--color-accent)]">→</span>
                    <span className="font-mono text-[12px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      <span className="text-[color:var(--color-ink)]">{key}</span>{' '}
                      — {val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
