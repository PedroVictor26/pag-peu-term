interface QA {
  q: string
  a: React.ReactNode
}

const QAS: QA[] = [
  {
    q: 'Preciso pagar pela Groq pra usar a voz?',
    a: (
      <>
        Não. A Groq tem um free tier generoso (~25 requisições/min, 30s de
        áudio por vez) — suficiente pra uso pessoal o dia todo. Só paga se
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
    q: 'Funciona com WSL? PowerShell? CMD?',
    a: (
      <>
        Funciona com qualquer shell instalado: PowerShell 5/7, CMD, Git Bash,
        WSL (via <code className="rounded bg-neutral-900 px-1 font-mono text-xs">wsl.exe</code>), pwsh-core. O default é PowerShell — você
        pode trocar por projeto na configuração do Favorito.
      </>
    )
  },
  {
    q: 'Posso usar com Claude Code, Gemini CLI e Codex que já tenho instalados?',
    a: (
      <>
        Sim — os 4 botões da TopBar (Shell, Claude, Gemini, Codex) só executam{' '}
        <code className="rounded bg-neutral-900 px-1 font-mono text-xs">claude</code>,{' '}
        <code className="rounded bg-neutral-900 px-1 font-mono text-xs">gemini</code> e{' '}
        <code className="rounded bg-neutral-900 px-1 font-mono text-xs">codex</code>{' '}
        no PATH. Se tiver outras CLIs (Aider, Cody, sgpt, Queen), use o botão
        "+" pra criar provider customizado.
      </>
    )
  },
  {
    q: 'Meus prompts ou conversas saem do meu PC?',
    a: (
      <>
        Não — exceto pelas chamadas explícitas à Groq (transcrição de voz e
        explicação de erro). Nem o app, nem o instalador faz qualquer
        telemetria. Tudo persiste localmente em{' '}
        <code className="rounded bg-neutral-900 px-1 font-mono text-xs">~/.peu-term/</code>.
      </>
    )
  },
  {
    q: 'Tem auto-update?',
    a: (
      <>
        Ainda não — versões novas avisamos via grupo da comunidade. Auto-update
        real (OTA) está no roadmap pra v0.4.
      </>
    )
  },
  {
    q: 'Posso usar comercialmente / na minha empresa?',
    a: (
      <>
        Sim. Cada licença vale por usuário. Pra times, fala comigo na comunidade
        que a gente acerta valor.
      </>
    )
  },
  {
    q: 'O .exe é seguro? SmartScreen reclamou.',
    a: (
      <>
        Sim. SmartScreen avisa porque o instalador ainda não é assinado
        digitalmente (certificado custa caro pra dev indie). Quem testou já
        está rodando há semanas. O processo de assinatura está planejado
        quando atingirmos volume mínimo.
      </>
    )
  }
]

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Antes de comprar
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Perguntas frequentes
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {QAS.map((qa, i) => (
          <details
            key={i}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition open:border-fuchsia-500/30"
          >
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white">
              {qa.q}
              <span className="text-fuchsia-300 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="mt-3 text-sm leading-relaxed text-neutral-400">
              {qa.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
