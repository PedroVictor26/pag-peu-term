import {
  Mic,
  Sparkles,
  SplitSquareHorizontal,
  Maximize2,
  FileCode2,
  Image as ImageIcon,
  FolderTree,
  Zap,
  Cpu,
  Box,
  Eraser,
  Save
} from 'lucide-react'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  badge?: string
}

const FEATURES: Feature[] = [
  {
    icon: SplitSquareHorizontal,
    title: 'Split view dinâmico',
    desc: 'Divide a tela em até 9 terminais (2×2, 3×3, customizável). Arrasta pra trocar slots. Cada pane mantém PTY próprio.'
  },
  {
    icon: Mic,
    title: 'Voz pra terminal',
    desc: 'Aperta o microfone, fala o prompt, e o texto vai direto pro Claude/Gemini. Transcrição via Groq Whisper (grátis até ~25 req/min).',
    badge: 'Groq'
  },
  {
    icon: Sparkles,
    title: 'Explica erro com IA',
    desc: 'Seleciona o stack trace, click no botão Explicar — Groq LLaMA 3.3 diz a causa, dá os passos e ainda manda o comando de fix pro terminal.',
    badge: 'IA'
  },
  {
    icon: Box,
    title: 'Custom AI Providers',
    desc: 'Adiciona quantos CLIs de IA quiser na TopBar: Aider, Cody, sgpt, Queen, ou qualquer comando shell. Emoji + cor por provider.'
  },
  {
    icon: FileCode2,
    title: 'Editor de arquivos integrado',
    desc: 'Click duplo num arquivo do tree e ele abre num editor com sintaxe básica e Ctrl+S pra salvar. Suporta ~60 extensões.'
  },
  {
    icon: ImageIcon,
    title: 'Viewer de imagem + PDF',
    desc: 'PNG, JPG, SVG, GIF, WebP, AVIF e PDF abrem nativos dentro do app — sem precisar trocar de janela.'
  },
  {
    icon: FolderTree,
    title: 'Sidebar com Favoritos + Pastas',
    desc: 'Favoritos pra projetos comuns (1 click abre tab). Aba Pastas com tree expandable das drives — arrasta a pasta pra qualquer pane e ele faz cd.'
  },
  {
    icon: Zap,
    title: 'Snippets reutilizáveis',
    desc: 'Salva comandos longos com emoji + cor. Click no snippet manda direto pro terminal ativo. Auto-run opcional pra prompts grandes.'
  },
  {
    icon: Maximize2,
    title: 'Maximize por pane',
    desc: 'Foco total num terminal individual com Ctrl+M. Os outros continuam vivos no background — só some o split visualmente.'
  },
  {
    icon: Cpu,
    title: 'Monitor de recursos',
    desc: 'CPU + RAM por terminal no header da pane (verde/âmbar/vermelho). Resumo global no topo. Sabe na hora qual pane está pesando.'
  },
  {
    icon: Eraser,
    title: 'Limpar com 1 click',
    desc: 'Botão Eraser ou Ctrl+L limpa o buffer visual. Preserva o scrollback histórico — diferente do clear nativo do shell.'
  },
  {
    icon: Save,
    title: 'Sessão restaurada',
    desc: 'Fecha o app, abre de novo, tudo volta: tabs, layout, favoritos, cores, emojis, providers customizados, scrollback. Nada perdido.'
  }
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Tudo num app só
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Recursos pensados pra quem usa IA no terminal
        </h2>
        <p className="mt-4 text-balance text-neutral-400">
          Nada de window manager virou bagunça. Tudo organizado num único app
          leve, dentro do seu fluxo.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-fuchsia-500/30 hover:bg-white/[0.04]">
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-fuchsia-500/0 blur-2xl transition group-hover:bg-fuchsia-500/20" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 text-fuchsia-300">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white">{feature.title}</h3>
            {feature.badge && (
              <span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-fuchsia-300">
                {feature.badge}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
            {feature.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
