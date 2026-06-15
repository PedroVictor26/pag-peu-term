import type { ReactNode } from 'react'
import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'
import { Shield, Smartphone, Eye } from 'lucide-react'

/** Moldura de celular reutilizável */
function PhoneFrame({
  children,
  shadow = 'strong'
}: {
  children: ReactNode
  shadow?: 'strong' | 'soft'
}) {
  const boxShadow =
    shadow === 'strong'
      ? `0 0 0 2px rgba(0,0,0,0.9), 0 50px 120px rgba(0,0,0,0.8), 0 0 80px rgba(56,189,248,0.28), inset 0 0 0 1px rgba(56,189,248,0.12)`
      : `0 0 0 2px rgba(0,0,0,0.7), 0 30px 70px rgba(0,0,0,0.6), 0 0 40px rgba(56,189,248,0.12)`

  return (
    <div
      className="relative overflow-hidden rounded-[2.2rem] border-[2.5px] border-[rgba(56,189,248,0.28)]"
      style={{ background: '#080A0F', boxShadow }}
    >
      {/* Notch */}
      <div className="flex items-center justify-center pt-2.5 pb-1" aria-hidden>
        <div className="h-[14px] w-[72px] rounded-full bg-[rgba(0,0,0,0.9)]" />
      </div>
      {/* Screenshot */}
      <div className="overflow-hidden">{children}</div>
      {/* Home indicator */}
      <div className="flex justify-center py-2" aria-hidden>
        <div className="h-[3px] w-16 rounded-full bg-[rgba(255,255,255,0.18)]" />
      </div>
    </div>
  )
}

export function Companion() {
  return (
    <section
      id="companion"
      className="relative isolate overflow-hidden border-b border-[color:var(--color-rule)]"
    >
      {/* Glow dramático ciano */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1000px 700px at 50% 60%, rgba(56,189,248,0.08) 0%, transparent 70%)'
        }}
      />

      {/* Linha de destaque no topo */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-40" />

      <div className="container-wide section-pad relative z-10">
        {/* Label de destaque */}
        <ScrollReveal className="mb-4 flex justify-center">
          <span className="badge">
            <span className="badge-dot" />
            Recurso exclusivo
          </span>
        </ScrollReveal>

        {/* Headline central */}
        <ScrollReveal delay={60} className="mb-6 text-center">
          <h2 className="headline-display mx-auto max-w-3xl">
            <span className="block">Controle seus</span>
            <span className="block text-gradient-sky">terminais</span>
            <span className="block">do celular.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mx-auto mb-16 max-w-xl text-center">
          <p className="text-[17px] leading-relaxed text-[color:var(--color-ink-muted)]">
            Manda foto, arquivo ou texto do celular direto pro terminal.
            Vê e comanda os agentes de{' '}
            <span className="text-[color:var(--color-ink)]">qualquer lugar</span> —
            tudo via rede privada Tailscale, nada exposto na internet.
          </p>
        </ScrollReveal>

        {/* Prints reais do celular */}
        <div className="relative flex flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:items-end sm:gap-10">
          {/* Linha de conexão decorativa (só no desktop, onde os celulares ficam lado a lado) */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex" aria-hidden>
            <svg className="h-full w-full max-w-3xl opacity-8" viewBox="0 0 800 500" fill="none">
              <line x1="160" y1="250" x2="400" y2="250" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="640" y1="250" x2="400" y2="250" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" />
              <circle cx="160" cy="250" r="4" fill="#38bdf8" opacity="0.6" />
              <circle cx="640" cy="250" r="4" fill="#38bdf8" opacity="0.6" />
              <circle cx="400" cy="250" r="6" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* Celular 2 — aba Enviar — atrás/ao lado, levemente rotacionado */}
          <ScrollReveal delay={80}>
            <div
              className="phone-float relative"
              style={{
                width: 'min(220px, 45vw)',
                transform: 'rotate(-4deg) translateY(24px)',
                transformOrigin: 'bottom center'
              }}
            >
              <PhoneFrame shadow="soft">
                <Image
                  src="/shots/companion-mobile-enviar.png"
                  alt="Aba Enviar do Peu-Term Companion — envia arquivo ou foto do celular pro terminal"
                  width={440}
                  height={880}
                  className="w-full object-cover"
                  quality={90}
                />
              </PhoneFrame>
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
                Mande do celular num toque
              </p>
            </div>
          </ScrollReveal>

          {/* Celular 1 — aba Terminais — principal, frente, sem rotação */}
          <ScrollReveal delay={0}>
            <div
              className="phone-float relative z-10"
              style={{ width: 'min(260px, 70vw)' }}
            >
              <PhoneFrame shadow="strong">
                <Image
                  src="/shots/companion-mobile-terminais.png"
                  alt="Aba Terminais do Peu-Term Companion — vê e comanda o terminal do PC pelo celular"
                  width={520}
                  height={1040}
                  className="w-full object-cover"
                  quality={90}
                />
              </PhoneFrame>
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
                Veja e comande de qualquer lugar
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 features do Companion */}
        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-[color:var(--color-rule)] pt-12 md:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: 'Foto e arquivo direto',
              desc: 'Tira foto da tela, manda pra um Claude específico. Ou arrasta um PDF, ZIP, qualquer arquivo — chega no terminal em segundos.'
            },
            {
              icon: Eye,
              title: 'Vê tudo em tempo real',
              desc: 'Painel Recebidos mostra todos os agentes: rodando, esperando, travado. Você foca, manda continuar ou para de onde estiver.'
            },
            {
              icon: Shield,
              title: 'Rede privada Tailscale',
              desc: 'Nada exposto na internet. Conexão direto PC↔celular via rede privada criptografada. Sem conta de cloud, sem servidor.'
            }
          ].map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="group relative border border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)] p-6 transition hover:border-[rgba(56,189,248,0.3)]">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center border border-[rgba(56,189,248,0.25)]"
                  style={{ background: 'rgba(56,189,248,0.08)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                </div>
                <h3 className="mb-2 font-mono text-[13px] font-semibold uppercase tracking-[0.10em] text-[color:var(--color-ink)]">
                  {title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  {desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
