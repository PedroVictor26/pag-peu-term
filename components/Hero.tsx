import { Terminal, Sparkles, Download, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 pt-20 text-center md:pt-32">
      {/* Pill announcement */}
      <a
        href="#install"
        className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 backdrop-blur transition hover:border-fuchsia-500/40 hover:text-fuchsia-200"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
        <span>v0.3.3 disponível — Windows 10/11 64-bit</span>
        <ArrowRight className="h-3 w-3" />
      </a>

      {/* Title */}
      <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
        O terminal feito pra quem{' '}
        <span className="bg-gradient-to-br from-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
          fala com IA o dia inteiro
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-neutral-400 md:text-xl">
        Split view, comando de voz, explicação de erro com IA, snippets,
        editor de arquivos. Tudo num terminal só pra Windows — pensado pra
        rodar <span className="text-fuchsia-300">Claude Code, Gemini CLI, Codex</span>{' '}
        sem se perder em 30 janelas abertas.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#install"
          className="glow-cta flex items-center gap-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          <Download className="h-4 w-4" />
          Baixar pra Windows
        </a>
        <a
          href="#features"
          className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
        >
          Ver recursos
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Trust line */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500">
        <span className="flex items-center gap-1.5">
          <Terminal className="h-3 w-3" /> 72 MB · Electron 33
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-fuchsia-400" /> Grátis pra usar a voz (Groq Whisper)
        </span>
        <span>Sem telemetria · roda 100% local</span>
      </div>
    </section>
  )
}
