import {
  Server,
  Globe,
  BookMarked,
  Search,
  Send,
  FileSymlink,
  Image,
  BarChart2,
  Clipboard
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Update {
  icon: LucideIcon
  title: string
  desc: string
  kbd?: string[]
}

const UPDATES: Update[] = [
  {
    icon: Clipboard,
    title: 'Colar imagem no Claude / Codex / Gemini',
    desc: 'Print screen → Ctrl+V → o Peu-Term salva o PNG e injeta o caminho no prompt. Mostra miniatura por 3s pra você confirmar.',
    kbd: ['Ctrl', 'V']
  },
  {
    icon: Server,
    title: 'Perfis SSH / VPS',
    desc: 'Salve servidores e conecte num clique. Reconexão automática, gerenciador de chaves e ping na barra de status.'
  },
  {
    icon: Globe,
    title: 'Navegador embutido',
    desc: 'Abra sites e painéis direto dentro do terminal — barra de endereço, histórico, sem sair do app.'
  },
  {
    icon: BookMarked,
    title: 'Biblioteca de prompts',
    desc: 'Salve seus prompts favoritos e injete direto no CLI ativo. Chega de copiar e colar do Notion.'
  },
  {
    icon: Search,
    title: 'Fuzzy finder',
    desc: 'Abre arquivos de qualquer pasta em milissegundos.',
    kbd: ['Ctrl', 'Shift', 'P']
  },
  {
    icon: Send,
    title: 'Enviar seleção pro CLI',
    desc: 'Seleciona qualquer texto na saída e manda pro terminal ativo sem copiar e colar.',
    kbd: ['Ctrl', 'Shift', 'E']
  },
  {
    icon: FileSymlink,
    title: 'Caminhos clicáveis',
    desc: 'Arquivos e caminhos na saída do terminal viram links — click abre no editor embutido.'
  },
  {
    icon: Image,
    title: 'Imagem de fundo',
    desc: 'Personalize o fundo do terminal com qualquer imagem. Opacidade ajustável.'
  },
  {
    icon: BarChart2,
    title: 'Barra de status',
    desc: 'Projeto, branch git, hora e ping SSH — tudo visível sem tirar o olho do código.'
  }
]

export function Updates() {
  return (
    <section
      id="updates"
      className="relative border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-[color:var(--color-rule)] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-marker">№02 · Novidades</span>
            <h2 className="headline-section mt-4">
              v0.8.3 —{' '}
              <em style={{ color: 'var(--color-accent)' }}>o que chegou</em>.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            Cola imagem direto no prompt do Claude Code, Codex e Gemini. Mais 8 features do dia a dia. Sem pagar de novo.
          </p>
        </div>

        {/* Grid de updates */}
        <ul className="grid grid-cols-1 gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {UPDATES.map((up, i) => (
            <UpdateCard key={i} update={up} />
          ))}
        </ul>

        {/* Nota de atualização */}
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
          <span className="text-[color:var(--color-accent)]">→</span>
          {' '}Auto-update incluso — recebe tudo automaticamente, sem pagar nada extra.
        </p>
      </div>
    </section>
  )
}

function UpdateCard({ update }: { update: Update }) {
  const Icon = update.icon
  return (
    <li className="group flex flex-col gap-4 bg-[color:var(--color-bg-paper)] p-6 transition hover:bg-[color:var(--color-bg-elevated)]">
      {/* Icon + optional kbd */}
      <div className="flex items-center justify-between">
        <span
          className="flex h-9 w-9 items-center justify-center border border-[color:var(--color-rule-strong)] transition group-hover:border-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)]"
          aria-hidden
        >
          <Icon
            className="h-4 w-4 transition group-hover:text-[color:var(--color-bg)]"
            style={{ color: 'var(--color-accent)' }}
            strokeWidth={1.6}
          />
        </span>
        {update.kbd && (
          <span className="inline-flex items-center gap-1">
            {update.kbd.map((k, ki) => (
              <span key={ki} className="kbd">{k}</span>
            ))}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display-italic text-xl leading-tight" style={{ fontStyle: 'italic', color: 'var(--color-ink)' }}>
        {update.title}
      </h3>

      {/* Desc */}
      <p className="flex-1 text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {update.desc}
      </p>
    </li>
  )
}
