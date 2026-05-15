import { Terminal, Sparkles, Bot, Code2, Plus, Settings, Plug, Cpu, MemoryStick, Mic, Box } from 'lucide-react'

/**
 * Mockup visual do app (não é screenshot real — é HTML/CSS).
 * Reproduz a UI principal pra dar contexto antes do user ver o software.
 */
export function TerminalMockup() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="relative">
        {/* Glow atrás */}
        <div
          aria-hidden="true"
          className="absolute inset-x-12 -bottom-8 top-8 bg-gradient-to-br from-fuchsia-500/30 to-pink-500/20 blur-3xl"
        />
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 shadow-2xl">
          {/* Window chrome */}
          <div className="flex h-8 items-center gap-2 border-b border-white/5 bg-neutral-900/60 px-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 text-[11px] text-neutral-400">
              <Terminal className="h-3 w-3" />
              Peu-Term
            </div>
          </div>

          {/* Top bar */}
          <div className="flex h-10 items-center gap-1.5 border-b border-white/5 bg-neutral-950/80 px-3">
            <TopBtn icon={<Terminal className="h-3 w-3" />} label="Shell" />
            <div className="h-4 w-px bg-white/10" />
            <TopBtn icon={<Sparkles className="h-3 w-3 text-orange-400" />} label="Claude" />
            <TopBtn icon={<Bot className="h-3 w-3 text-sky-400" />} label="Gemini" />
            <TopBtn icon={<Code2 className="h-3 w-3 text-emerald-400" />} label="Codex" />
            <TopBtn icon={<span className="text-sm leading-none">👑</span>} label="Queen" violet />
            <button className="flex h-6 w-6 items-center justify-center rounded-md border border-dashed border-white/10 text-neutral-500">
              <Plus className="h-3 w-3" />
            </button>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="text-[10px] text-neutral-500">CPU 12% · 386 MB</span>
              <Plug className="h-3 w-3 text-neutral-500" />
              <Settings className="h-3 w-3 text-neutral-500" />
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex h-8 items-center gap-1 border-b border-white/5 bg-neutral-900 px-2">
            <Tab active label="shell · 1" />
            <Tab label="claude · 2" dot="bg-orange-400" />
            <Tab label="gemini · 3" dot="bg-sky-400" emoji="🚀" />
            <button className="flex h-6 w-6 items-center justify-center rounded text-neutral-500">
              <Plus className="h-3 w-3" />
            </button>
            <div className="ml-auto flex items-center gap-1 text-[10px] text-neutral-500">
              <span>2×2</span>
            </div>
          </div>

          <div className="grid grid-cols-[224px_1fr] gap-0 bg-neutral-950">
            {/* Sidebar */}
            <div className="border-r border-white/5 bg-neutral-950 p-2 text-[11px]">
              <div className="flex border-b border-white/5 pb-1.5 text-[10px] font-medium">
                <span className="flex-1 text-center text-fuchsia-300">★ Favoritos</span>
                <span className="flex-1 text-center text-neutral-500">📁 Pastas</span>
              </div>
              <div className="mt-2 px-1 text-[10px] uppercase tracking-wide text-neutral-500">
                Projetos
              </div>
              <FavItem icon="🧪" label="Lab Claude Code" active />
              <FavItem icon="📦" label="Automação ClickUp" />
              <FavItem icon="🗄️" label="Banco NGV" />
              <FavItem icon="🌐" label="Landing VSL" />

              <div className="mt-3 border-t border-white/5 pt-2 text-[10px] uppercase tracking-wide text-neutral-500">
                Snippets <span className="text-neutral-600">(4)</span>
              </div>
              <SnippetItem icon="📋" label="List dir" />
              <SnippetItem icon="🌳" label="git status" />
              <SnippetItem icon="🚀" label="npm run dev" />
            </div>

            {/* Terminal panes grid 2x2 */}
            <div className="grid grid-cols-2 grid-rows-2 gap-px bg-neutral-800/40">
              <Pane title="🧪 Lab" cpu={12} mem="63 MB">
                <Line prompt cmd="claude" />
                <Line out="✨ Welcome to Claude Code v2.1" muted />
                <Line out="What can I help you with?" />
                <span className="inline-block h-3 w-1.5 animate-pulse bg-fuchsia-400" />
              </Pane>
              <Pane title="📦 Automação" cpu={3} mem="42 MB">
                <Line prompt cmd="gemini" />
                <Line out="📡 Gemini 1.5 Pro ready" muted />
                <Line prompt cmd='> "explain n8n workflow"' />
              </Pane>
              <Pane title="🗄️ Banco NGV" cpu={0} mem="38 MB">
                <Line prompt cmd="psql -d ngvprod" />
                <Line out="psql (16.1) Type \\? for help." muted />
                <Line prompt cmd="\\dt" />
              </Pane>
              <Pane title="🚀 Deploy" cpu={67} mem="124 MB">
                <Line prompt cmd="vercel --prod" />
                <Line out="↗ Building..." muted />
                <Line out="✓ Production: ngv.com.br" success />
              </Pane>
            </div>
          </div>

          {/* Bottom right buttons (mic + settings) */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-500">
              <Settings className="h-3.5 w-3.5" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-rose-500/50 bg-rose-600 shadow-lg shadow-rose-500/40">
              <Mic className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TopBtn({
  icon,
  label,
  violet
}: {
  icon: React.ReactNode
  label: string
  violet?: boolean
}) {
  return (
    <button
      className={`flex h-6 items-center gap-1 rounded-md border border-white/10 px-2 text-[11px] font-medium text-neutral-200 ${
        violet ? 'border-violet-500/30' : ''
      }`}
    >
      {icon}
      {label}
    </button>
  )
}

function Tab({
  label,
  active,
  dot = 'bg-neutral-500',
  emoji
}: {
  label: string
  active?: boolean
  dot?: string
  emoji?: string
}) {
  return (
    <div
      className={`flex h-6 items-center gap-1.5 rounded-md px-2 text-[11px] ${
        active ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {emoji ? <span className="text-[12px] leading-none">{emoji}</span> : <Terminal className="h-3 w-3" />}
      {label}
    </div>
  )
}

function FavItem({
  icon,
  label,
  active
}: {
  icon: string
  label: string
  active?: boolean
}) {
  return (
    <div
      className={`mt-0.5 flex items-center gap-2 rounded px-2 py-1 ${
        active ? 'bg-white/5 text-neutral-100' : 'text-neutral-400'
      }`}
    >
      <span className="text-xs leading-none">{icon}</span>
      <span className="truncate text-[11px]">{label}</span>
    </div>
  )
}

function SnippetItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="mt-0.5 flex items-center gap-2 px-2 py-1 text-[11px] text-neutral-400">
      <span className="leading-none">{icon}</span>
      {label}
    </div>
  )
}

function Pane({
  title,
  cpu,
  mem,
  children
}: {
  title: string
  cpu: number
  mem: string
  children: React.ReactNode
}) {
  const cpuColor =
    cpu < 30 ? 'text-emerald-400' : cpu < 70 ? 'text-amber-400' : 'text-rose-400'
  return (
    <div className="flex flex-col bg-neutral-950">
      <div className="flex h-5 items-center justify-between border-b border-white/5 bg-neutral-900/60 px-2 text-[10px]">
        <span className="text-neutral-300">{title}</span>
        <div className="flex items-center gap-2 font-mono text-neutral-500">
          <span className={`flex items-center gap-0.5 ${cpuColor}`}>
            <Cpu className="h-2.5 w-2.5" />
            {cpu}%
          </span>
          <span className="flex items-center gap-0.5">
            <MemoryStick className="h-2.5 w-2.5" />
            {mem}
          </span>
        </div>
      </div>
      <div className="flex-1 px-2 py-1.5 font-mono text-[10px] leading-tight">
        {children}
      </div>
    </div>
  )
}

function Line({
  prompt,
  cmd,
  out,
  muted,
  success
}: {
  prompt?: boolean
  cmd?: string
  out?: string
  muted?: boolean
  success?: boolean
}) {
  if (prompt && cmd) {
    return (
      <div>
        <span className="text-fuchsia-300">PS&gt;</span>{' '}
        <span className="text-neutral-100">{cmd}</span>
      </div>
    )
  }
  return (
    <div
      className={
        success
          ? 'text-emerald-300'
          : muted
            ? 'text-neutral-500'
            : 'text-neutral-300'
      }
    >
      {out}
    </div>
  )
}
