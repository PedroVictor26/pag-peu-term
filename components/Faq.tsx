import type { ReactNode } from 'react'

interface QA {
  q: string
  a: ReactNode
}

const QAS: QA[] = [
  {
    q: 'Preciso pagar pela Groq pra usar a voz?',
    a: (
      <>
        Não. A Groq tem um free tier generoso (~25 requisições/min, 30s de áudio
        por vez) — suficiente pra uso pessoal o dia inteiro. Você só paga se
        quiser limites maiores ou usar comercialmente em produção.
      </>
    )
  },
  {
    q: 'Roda em qual Windows?',
    a: (
      <>
        Windows 10 e 11, 64-bit. Não tem versão pra Mac, Linux ou ARM por
        enquanto — está no roadmap pra v0.5+.
      </>
    )
  },
  {
    q: 'Funciona com WSL, PowerShell, CMD?',
    a: (
      <>
        Funciona com qualquer shell instalado: PowerShell 5/7, CMD, Git Bash,
        WSL (via{' '}
        <code className="font-mono text-[color:var(--color-amber)]">wsl.exe</code>
        ), pwsh-core. O default é PowerShell — você pode trocar por projeto
        via favorito.
      </>
    )
  },
  {
    q: 'Posso usar com Claude Code, Gemini CLI e Codex que já tenho instalados?',
    a: (
      <>
        Sim — os 4 botões da TopBar (Shell, Claude, Gemini, Codex) executam{' '}
        <code className="font-mono text-[color:var(--color-amber)]">claude</code>
        ,{' '}
        <code className="font-mono text-[color:var(--color-amber)]">gemini</code>{' '}
        e{' '}
        <code className="font-mono text-[color:var(--color-amber)]">codex</code>{' '}
        no PATH. Se tiver outras CLIs (Aider, Cody, sgpt, Queen, sua own),
        o botão "+" cria provider customizado em 1 click.
      </>
    )
  },
  {
    q: 'Meus prompts e conversas saem do meu PC?',
    a: (
      <>
        Não — exceto pelas chamadas explícitas à Groq (transcrição de voz e
        explicar erro). Nem o app nem o instalador faz qualquer telemetria.
        Tudo persiste local em{' '}
        <code className="font-mono text-[color:var(--color-amber)]">
          ~/.peu-term/
        </code>
        , API key cifrada via DPAPI.
      </>
    )
  },
  {
    q: 'Tem auto-update?',
    a: (
      <>
        Ainda não — versões novas avisamos via grupo da comunidade. Auto-update
        real (OTA) está planejado pra v0.4.
      </>
    )
  },
  {
    q: 'Posso usar comercialmente / na minha empresa?',
    a: (
      <>
        Sim. Cada licença vale por usuário. Pra times de 5+, fala comigo na
        comunidade que a gente acerta valor empresarial.
      </>
    )
  },
  {
    q: 'O .exe é seguro? SmartScreen reclamou.',
    a: (
      <>
        Sim. SmartScreen avisa porque o instalador ainda não é assinado
        digitalmente (cert custa caro pra dev indie). Quem testou já roda há
        semanas sem incidente. Code signing entra na lista quando atingimos
        volume mínimo.
      </>
    )
  }
]

export function Faq() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Esquerda — title sticky */}
          <div className="col-span-12 mb-10 md:col-span-4 md:mb-0">
            <div className="sticky top-10 flex flex-col gap-3">
              <span className="section-marker">№07 · Q&amp;A</span>
              <h2 className="headline-section">
                Antes que você <em style={{ color: 'var(--color-amber)' }}>pergunte</em>.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                Achou que faltou algo? Fala comigo direto no WhatsApp da
                comunidade — respondo eu mesmo.
              </p>
              <a
                href="https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q"
                target="_blank"
                rel="noopener"
                className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] link-sweep"
              >
                Entrar na comunidade ↗
              </a>
            </div>
          </div>

          {/* Direita — Q&A list */}
          <div className="col-span-12 md:col-span-8">
            <ol className="divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
              {QAS.map((qa, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-x-4 gap-y-3 py-6 md:py-8"
                >
                  <div className="col-span-1">
                    <span
                      className="font-mono text-[11px] text-[color:var(--color-amber)]"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      Q{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="col-span-11">
                    <h3
                      className="font-display-italic text-xl leading-snug md:text-2xl"
                      style={{ fontStyle: 'italic', color: 'var(--color-ink)' }}
                    >
                      {qa.q}
                    </h3>
                    <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-amber)] mr-2">
                        R.
                      </span>
                      {qa.a}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
