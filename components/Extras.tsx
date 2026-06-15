import { ScrollReveal } from './ScrollReveal'
import {
  FileCode2,
  ImageIcon,
  FolderHeart,
  Zap,
  Tags,
  Save,
  Boxes,
  Mic,
  HelpCircle,
  Hash
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Extra {
  icon: LucideIcon
  title: string
  desc: string
}

const EXTRAS: Extra[] = [
  {
    icon: Mic,
    title: 'Voz pra IA',
    desc: 'Aperta, fala, vira texto no PTY. Groq Whisper Large v3 Turbo — ~25 req/min grátis, auto-Enter opcional.'
  },
  {
    icon: HelpCircle,
    title: 'IA explica erro',
    desc: 'Seleciona stack trace, clica Explicar. Vem diagnóstico + como resolver + comando injetável no PTY. llama-3.3-70b, PT-BR.'
  },
  {
    icon: FileCode2,
    title: 'Editor embutido',
    desc: 'Duplo clique no arquivo — editor interno, Ctrl+S salva. ~60 extensões, warning antes de perder mudanças.'
  },
  {
    icon: ImageIcon,
    title: 'Viewer imagem + PDF',
    desc: 'PNG, JPG, GIF, WebP, AVIF, SVG, ICO e PDF na mesma janela — zoom, rolagem, busca. Decode local, sem upload.'
  },
  {
    icon: Hash,
    title: 'SSH com perfis',
    desc: 'Gerenciamento completo: perfis, chaves, reconexão automática, ping. Acessa VPS em 2 cliques.'
  },
  {
    icon: Zap,
    title: 'Fuzzy finder',
    desc: 'Ctrl+Shift+P abre paleta de comandos. Busca fuzzy em projetos, snippets, providers — sem decorar atalho.'
  },
  {
    icon: FolderHeart,
    title: 'Favoritos + tree',
    desc: 'Sidebar com Favoritos e tree de pastas. Arrasta uma pasta pra qualquer pane — cd instantâneo.'
  },
  {
    icon: Tags,
    title: 'Tabs customizáveis',
    desc: 'Click direito: renomear, cor, emoji, duplicar. 17 atalhos de teclado, CWD rastreado por pane.'
  },
  {
    icon: Save,
    title: 'Sessão restaurada',
    desc: 'Fecha e abre — tudo está lá: tabs, layout, providers, tema. Auto-save debounced em JSON local.'
  },
  {
    icon: Boxes,
    title: 'MCP por projeto',
    desc: 'MCPs no .mcp.json de cada projeto. Painel segue a aba ativa — global e projeto mesclados no spawn.'
  }
]

export function Extras() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)]">
      <div className="container-wide section-pad">
        <ScrollReveal className="mb-14 grid grid-cols-1 gap-6 border-b border-[color:var(--color-rule)] pb-10 md:grid-cols-2">
          <div>
            <span className="section-marker">№06 · E mais isso tudo</span>
            <h2 className="headline-section mt-5">
              O detalhe que faz<br />
              você não <em style={{ color: 'var(--color-accent)' }}>voltar.</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-md text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Cada feature abaixo existe porque um dia eu precisei dela e o Windows Terminal não tinha.
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          {EXTRAS.map((extra, i) => (
            <ScrollReveal key={extra.title} delay={(i % 4) * 60}>
              <ExtraCard extra={extra} index={i} />
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ExtraCard({ extra, index }: { extra: Extra; index: number }) {
  const Icon = extra.icon
  return (
    <li className="group flex flex-col">
      <div className="mb-4 flex items-start justify-between border-b border-[color:var(--color-rule)] pb-4">
        <span
          className="font-mono text-[10px] text-[color:var(--color-ink-dim)]"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="flex h-8 w-8 items-center justify-center border border-[color:var(--color-rule-strong)] transition-colors group-hover:border-[color:var(--color-accent)] group-hover:bg-[rgba(56,189,248,0.08)]"
          aria-hidden
        >
          <Icon
            className="h-3.5 w-3.5 transition-colors group-hover:text-[color:var(--color-accent)]"
            style={{ color: 'var(--color-ink-dim)' }}
            strokeWidth={1.6}
          />
        </span>
      </div>
      <h3 className="mb-2 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-accent)]">
        {extra.title}
      </h3>
      <p className="flex-1 text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {extra.desc}
      </p>
    </li>
  )
}
