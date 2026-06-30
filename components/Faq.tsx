'use client'

import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { Plus } from 'lucide-react'

const CHECKOUT = 'https://academy.dantetesta.com.br/download/peu-term-windows'

const FAQS = [
  {
    q: 'Funciona com qual versão do Windows?',
    a: 'Windows 10 e 11, 64-bit. Tauri roda nativamente — sem WSL obrigatório, sem Docker pra o app em si.'
  },
  {
    q: 'Precisa instalar algo além do Peu-Term?',
    a: 'Não. Instalador de ~4 MB. O WebView2 já vem no Windows 10/11. Se quiser voz, só precisa de uma chave Groq (free tier). Para Companion, instalar Tailscale (grátis).'
  },
  {
    q: 'Quem já comprou antes precisa pagar de novo?',
    a: 'Não. Pagamento único mesmo — quem já comprou qualquer versão anterior recebe o v0.11.18 de graça pela atualização automática.'
  },
  {
    q: 'O Companion exige conta de nuvem?',
    a: 'Não. A conexão PC↔celular é via Tailscale (rede privada gratuita). Nenhum dado passa por servidor meu — é ponto a ponto criptografado.'
  },
  {
    q: 'Funciona com Claude Code sem problema?',
    a: 'Sim. É o caso de uso principal. Split até 9 panes, cada um com PTY independente — vários Claude Code rodando ao mesmo tempo sem conflito de sessão.'
  },
  {
    q: 'O Wizard de Missão usa qual IA?',
    a: 'Ele cria o plano de subtarefas e você valida antes de disparar. A execução é feita pelos agentes que você tem configurados (Claude, Codex, Gemini, etc.) — não é uma IA própria minha.'
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Se não funcionar no seu Windows depois de tentar a instalação, me chama na comunidade WhatsApp. A gente resolve ou devolve — sem stress.'
  }
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
      <div className="container-wide section-pad">
        <ScrollReveal className="mb-14">
          <span className="section-marker">№08 · Perguntas</span>
          <h2 className="headline-section mt-4 max-w-lg">
            Perguntas <em style={{ color: 'var(--color-accent)' }}>frequentes.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-14 lg:grid-cols-[1fr_1.5fr]">
          {/* Coluna esquerda — contexto */}
          <ScrollReveal className="hidden lg:block">
            <div className="sticky top-10 space-y-6">
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                Tem mais dúvida? Me chama na comunidade WhatsApp — respondo pessoalmente.
              </p>
              <a
                href="https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q"
                target="_blank"
                rel="noopener"
                className="btn-ghost inline-flex"
              >
                Entrar na comunidade ↗
              </a>
            </div>
          </ScrollReveal>

          {/* Acordeão */}
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="border-b border-[color:var(--color-rule)]">
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-[color:var(--color-accent)]"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="text-[15px] font-medium leading-snug text-[color:var(--color-ink)]">
                      {faq.q}
                    </span>
                    <Plus
                      className="h-4 w-4 flex-shrink-0 text-[color:var(--color-accent)] transition-transform"
                      style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      strokeWidth={2}
                    />
                  </button>
                  {open === i && (
                    <div className="pb-5 text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <ScrollReveal delay={200} className="mt-20 flex flex-col items-center gap-6 text-center">
          <h3 className="headline-feature mx-auto max-w-xl">
            Pronto pra rodar{' '}
            <em style={{ color: 'var(--color-accent)' }}>vários agentes</em>{' '}
            de uma vez?
          </h3>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener"
            className="btn-prime"
          >
            Comprar · R$ 50 · Pagamento único →
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
            Vitalício · sem mensalidade · quem já tem recebe grátis
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
