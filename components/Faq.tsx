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
        Não. O free tier (~25 req/min, 30s por gravação) é suficiente pro uso pessoal o dia inteiro.
      </>
    )
  },
  {
    q: 'Roda em qual Windows?',
    a: (
      <>
        Windows 10 e 11, 64-bit. Mac, Linux e ARM estão no roadmap.
      </>
    )
  },
  {
    q: 'Funciona com WSL, PowerShell, CMD?',
    a: (
      <>
        Sim — PowerShell 5/7, CMD, Git Bash, WSL (via{' '}
        <code className="font-mono text-[color:var(--color-accent)]">wsl.exe</code>
        ), pwsh-core. Troca o default por projeto via favorito.
      </>
    )
  },
  {
    q: 'Posso usar com Claude Code, Gemini CLI e Codex que já tenho instalados?',
    a: (
      <>
        Sim — a TopBar executa{' '}
        <code className="font-mono text-[color:var(--color-accent)]">claude</code>,{' '}
        <code className="font-mono text-[color:var(--color-accent)]">gemini</code>{' '}
        e{' '}
        <code className="font-mono text-[color:var(--color-accent)]">codex</code>{' '}
        do PATH. Outras CLIs (Aider, Cody, sgpt…) viram provider em 1 click.
      </>
    )
  },
  {
    q: 'Meus prompts e conversas saem do meu PC?',
    a: (
      <>
        Não — zero telemetria. Só sai o que você manda à Groq (voz e explicar erro).
        Tudo persiste em{' '}
        <code className="font-mono text-[color:var(--color-accent)]">~/.peu-term/</code>{' '}
        local; key no Windows Credential Manager.
      </>
    )
  },
  {
    q: 'Tem auto-update?',
    a: (
      <>
        Sim. Checa ao abrir, baixa e instala com o seu OK. Quem comprou já recebeu tudo até a v0.8.0 de graça.
      </>
    )
  },
  {
    q: 'Posso usar comercialmente / na minha empresa?',
    a: (
      <>
        Sim, por usuário. Times de 5+ fala na comunidade — acertamos valor empresarial.
      </>
    )
  },
  {
    q: 'O .exe é seguro? SmartScreen reclamou.',
    a: (
      <>
        Sim. O aviso é porque ainda não há assinatura digital — esperado em apps indie.
        Code signing entra com volume mínimo atingido.
      </>
    )
  },
  {
    q: 'É baseado no Dante Shell?',
    a: (
      <>
        Sim —{' '}
        <a
          href="https://academy.dantetesta.com.br/"
          target="_blank"
          rel="noopener"
          className="link-sweep"
        >
          Dante Shell ↗
        </a>{' '}
        (macOS) foi a referência. Adaptei pra Windows com Groq, custom providers e editor embutido.
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
              <span className="section-marker">№09 · Q&amp;A</span>
              <h2 className="headline-section">
                Antes que você <em style={{ color: 'var(--color-accent)' }}>pergunte</em>.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                Faltou algo? Fala direto no WhatsApp — respondo eu mesmo.
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
                      className="font-mono text-[11px] text-[color:var(--color-accent)]"
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
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] mr-2">
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
