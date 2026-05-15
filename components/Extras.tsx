import {
  FileCode2,
  ImageIcon,
  FolderHeart,
  Zap,
  Tags,
  MousePointerClick,
  Save,
  Eye
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Extra {
  icon: LucideIcon
  title: React.ReactNode
  desc: React.ReactNode
  tech: string[]
}

const EXTRAS: Extra[] = [
  {
    icon: FileCode2,
    title: <>Editor de arquivos<br />embutido</>,
    desc: (
      <>
        Duplo click em qualquer arquivo do tree de pastas e ele abre num editor
        de texto interno. <strong style={{ color: 'var(--color-ink)' }}>Ctrl+S</strong> salva.
        Suporta ~60 extensões — de <code className="font-mono text-[color:var(--color-amber)]">.js</code>
        {' '}/{' '}<code className="font-mono text-[color:var(--color-amber)]">.tsx</code> a
        {' '}<code className="font-mono text-[color:var(--color-amber)]">.cob</code>,{' '}
        <code className="font-mono text-[color:var(--color-amber)]">.toml</code>,{' '}
        <code className="font-mono text-[color:var(--color-amber)]">.svg</code>. Diff de save
        com warning antes de perder mudanças.
      </>
    ),
    tech: ['Máx 5 MB por arquivo', 'Detecção binário automática', 'Encoding UTF-8 / BOM']
  },
  {
    icon: ImageIcon,
    title: <>Viewer de imagem<br />+ PDF</>,
    desc: (
      <>
        Mesma janela do editor também abre imagens e PDFs.{' '}
        <strong style={{ color: 'var(--color-ink)' }}>PNG, JPG, GIF, WebP, AVIF, SVG, ICO</strong>{' '}
        com checkered background pra ver alpha. PDF via embed nativo do Chromium —
        rolagem, zoom, busca. Tudo sem trocar de janela.
      </>
    ),
    tech: ['Embed Chromium pra PDF', 'Checkered bg pra transparência', 'Decode local · sem upload']
  },
  {
    icon: FolderHeart,
    title: <>Favoritos<br />+ tree de pastas</>,
    desc: (
      <>
        Sidebar com 2 abas:{' '}
        <strong style={{ color: 'var(--color-ink)' }}>Favoritos</strong> (projetos
        que você marca) e{' '}
        <strong style={{ color: 'var(--color-ink)' }}>Pastas</strong> (tree
        expandable das drives do Windows). Arrasta uma pasta pra qualquer pane
        e ela faz <code className="font-mono text-[color:var(--color-amber)]">cd</code> instantâneo.
        Click no favorito = nova tab no diretório.
      </>
    ),
    tech: ['Drag pasta → cd na pane específica', 'Drives detectados em paralelo', 'Bloqueio de UNC paths']
  },
  {
    icon: Zap,
    title: <>Snippets<br />reutilizáveis</>,
    desc: (
      <>
        Salva comandos longos com nome, emoji e cor — aparecem na sidebar
        embaixo. Click manda direto pro PTY ativo. Modo{' '}
        <strong style={{ color: 'var(--color-ink)' }}>auto-run</strong> envia
        já com Enter (cuidado pra <code className="font-mono text-[color:var(--color-amber)]">rm</code>{' '}
        — app pede confirmação se detectar padrão destrutivo).
      </>
    ),
    tech: ['Drag-reorder · cor + emoji', 'Auto-run com confirm anti-destruição', 'Persiste no .peu-term']
  },
  {
    icon: Tags,
    title: <>Tabs customizáveis<br />+ context menu</>,
    desc: (
      <>
        Click direito numa aba pra renomear (F2), pintar cor, escolher emoji ou
        duplicar. Click direito numa{' '}
        <strong style={{ color: 'var(--color-ink)' }}>pane</strong> pra: limpar
        terminal, split, maximizar, abrir tab no mesmo cwd, favoritar pasta
        atual ou copiar caminho. Tudo navegável sem mouse.
      </>
    ),
    tech: ['32 emojis · 8 cores · rename inline', 'Cwd atual rastreado por pane', '17 atalhos de teclado']
  },
  {
    icon: Save,
    title: <>Sessão<br />restaurada</>,
    desc: (
      <>
        Fecha o app, abre de novo — tudo volta como estava: tabs abertas,
        split layout, providers customizados, projetos favoritos, scrollback
        configurado, tema escolhido. Persistência cifrada localmente, com toast
        de erro persistente se 3 saves falharem em sequência.
      </>
    ),
    tech: ['Auto-save debounced 500ms', 'Bounds da janela preservados', 'Fallback safe se JSON corrompido']
  }
]

export function Extras() {
  return (
    <section className="relative border-b border-[color:var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <span className="section-marker">№04 · Extras</span>
            <h2 className="headline-section mt-4 max-w-md">
              E mais <em style={{ color: 'var(--color-amber)' }}>seis coisas</em> que ninguém te conta.
            </h2>
          </div>
          <div className="col-span-12 mt-6 md:col-span-7 md:col-start-6 md:mt-3 md:pt-4">
            <p className="max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Acima são as quatro capacidades que justificam comprar o app.
              Aqui embaixo é o resto — o detalhe que faz você não voltar pro
              Windows Terminal padrão.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
          {EXTRAS.map((extra, i) => (
            <ExtraItem key={i} extra={extra} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ExtraItem({ extra, index }: { extra: Extra; index: number }) {
  const Icon = extra.icon
  return (
    <li className="group flex flex-col">
      {/* Header: index + glyph */}
      <div className="mb-5 flex items-start justify-between border-b border-[color:var(--color-rule)] pb-4">
        <span
          className="font-mono text-[11px]"
          style={{
            color: 'var(--color-ink-dim)',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          {String(index + 1).padStart(2, '0')} / 06
        </span>
        <span
          className="flex h-9 w-9 items-center justify-center border border-[color:var(--color-rule-strong)] transition group-hover:border-[color:var(--color-amber)] group-hover:bg-[color:var(--color-amber)]"
          aria-hidden
        >
          <Icon
            className="h-4 w-4 transition group-hover:text-[color:var(--color-bg)]"
            style={{ color: 'var(--color-amber)' }}
            strokeWidth={1.6}
          />
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display-italic text-[28px] leading-[1.05] md:text-[32px]"
        style={{ fontStyle: 'italic', color: 'var(--color-ink)' }}
      >
        {extra.title}
      </h3>

      {/* Description */}
      <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {extra.desc}
      </p>

      {/* Tech datapoints */}
      <ul className="mt-5 space-y-1 border-t border-[color:var(--color-rule)] pt-3">
        {extra.tech.map((t, i) => (
          <li
            key={i}
            className="flex gap-2 font-mono text-[10px] uppercase tracking-[0.05em] text-[color:var(--color-ink-dim)]"
          >
            <span className="text-[color:var(--color-amber)]">·</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}
