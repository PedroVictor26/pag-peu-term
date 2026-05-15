import { Download, ShieldCheck, AlertTriangle, ArrowRight, Settings } from 'lucide-react'

export function Install() {
  return (
    <section id="install" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Em 3 passos
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Como instalar
        </h2>
        <p className="mt-4 text-balance text-neutral-400">
          Windows 10/11 64-bit. Não precisa criar conta — funciona offline
          (exceto features de IA, que dependem da Groq).
        </p>
      </div>

      {/* CTA principal */}
      <div className="mb-12 flex justify-center">
        <a
          href="#"
          className="glow-cta flex items-center gap-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 px-8 py-4 text-base font-semibold text-white transition hover:brightness-110"
        >
          <Download className="h-5 w-5" />
          Baixar Peu-Term Setup v0.3.3
          <span className="text-xs font-normal opacity-80">· 72 MB</span>
        </a>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Step
          n={1}
          title="Baixar o instalador"
          body={
            <>
              Clica no botão acima e salva o{' '}
              <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-xs text-fuchsia-300">
                Peu-Term-Setup-0.3.3.exe
              </code>{' '}
              em qualquer pasta.
            </>
          }
        />
        <Step
          n={2}
          title="Aceitar o SmartScreen"
          body={
            <div className="flex flex-col gap-2">
              <p>
                O Windows vai pedir confirmação porque o app ainda não é
                assinado (vem aí). Click em{' '}
                <strong className="text-amber-300">"Mais informações"</strong> →{' '}
                <strong className="text-amber-300">"Executar mesmo assim"</strong>.
              </p>
              <div className="flex items-start gap-2 rounded-md border border-amber-900/40 bg-amber-950/20 p-3 text-xs text-amber-200">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                <span>
                  Aviso esperado em apps de devs indie. Sem vírus — código
                  open-source pra quem comprou.
                </span>
              </div>
            </div>
          }
        />
        <Step
          n={3}
          title="Configurar a voz (opcional)"
          body={
            <>
              Pra usar o microfone + explicar erro, gera uma API key grátis em{' '}
              <a
                href="https://console.groq.com/keys"
                target="_blank"
                rel="noopener"
                className="text-fuchsia-300 underline-offset-2 hover:underline"
              >
                console.groq.com/keys
              </a>{' '}
              e cola em <strong>Configurações → Voz → Terminal</strong>.
            </>
          }
        />
      </div>

      {/* Trust block */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        <TrustItem
          icon={<ShieldCheck className="h-4 w-4 text-emerald-400" />}
          title="Privacidade"
          desc="API key encriptada via DPAPI do Windows. Áudio nunca toca o nosso servidor — vai direto pra Groq."
        />
        <TrustItem
          icon={<Settings className="h-4 w-4 text-fuchsia-300" />}
          title="Customização"
          desc="Tudo persiste localmente em ~/.peu-term/. Sem cloud sync, sem login, sem telemetria."
        />
        <TrustItem
          icon={<ArrowRight className="h-4 w-4 text-sky-400" />}
          title="Pra Mac/Linux"
          desc="No roadmap. Por hora só Windows 10/11. Quer ser avisado? Entra na comunidade."
        />
      </div>
    </section>
  )
}

function Step({
  n,
  title,
  body
}: {
  n: number
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 text-sm font-bold text-white">
          {n}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-neutral-300">{body}</div>
    </div>
  )
}

function TrustItem({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white/5">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <p className="mt-0.5 text-xs leading-relaxed text-neutral-400">{desc}</p>
      </div>
    </div>
  )
}
