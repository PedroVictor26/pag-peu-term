import type { ReactNode } from 'react'

interface SpecRow {
  label: string
  value: ReactNode
}

interface SpecGroup {
  title: string
  rows: SpecRow[]
}

const SHORTCUTS: SpecGroup[] = [
  {
    title: 'Navegação',
    rows: [
      { label: 'Nova tab Shell', value: <KbdRow keys={['Ctrl', 'T']} /> },
      { label: 'Fechar tab', value: <KbdRow keys={['Ctrl', 'W']} /> },
      { label: 'Próxima / anterior', value: <KbdRow keys={['Ctrl', 'Tab']} /> },
      { label: 'Ir pra tab N', value: <KbdRow keys={['Ctrl', '1—9']} /> }
    ]
  },
  {
    title: 'Layout',
    rows: [
      { label: 'Split pane', value: <KbdRow keys={['Ctrl', 'Shift', 'D']} /> },
      { label: 'Fechar pane', value: <KbdRow keys={['Ctrl', 'Shift', 'W']} /> },
      { label: 'Maximizar / restaurar', value: <KbdRow keys={['Ctrl', 'M']} /> }
    ]
  },
  {
    title: 'Terminal',
    rows: [
      { label: 'Limpar', value: <KbdRow keys={['Ctrl', 'L']} /> },
      { label: 'Zoom fonte', value: <KbdRow keys={['Ctrl', '+ / —']} /> },
      { label: 'Buscar no buffer', value: <KbdRow keys={['Ctrl', 'F']} /> },
      { label: 'Copiar seleção', value: <KbdRow keys={['Ctrl', 'Shift', 'C']} /> },
      { label: 'Colar (bracket paste)', value: <KbdRow keys={['Ctrl', 'V']} /> }
    ]
  },
  {
    title: 'Editor + arquivos',
    rows: [
      { label: 'Fuzzy finder', value: <KbdRow keys={['Ctrl', 'Shift', 'P']} /> },
      { label: 'Abrir arquivo', value: <KbdRow keys={['Ctrl', 'O']} /> },
      { label: 'Salvar', value: <KbdRow keys={['Ctrl', 'S']} /> },
      { label: 'Fechar modal', value: <KbdRow keys={['Esc']} /> }
    ]
  },
  {
    title: 'Seleção + CLI',
    rows: [
      { label: 'Enviar seleção pro CLI', value: <KbdRow keys={['Ctrl', 'Shift', 'E']} /> }
    ]
  }
]

const TECH: SpecGroup[] = [
  {
    title: 'Plataforma',
    rows: [
      { label: 'Sistema', value: 'Windows 10 · 11 · 64-bit' },
      { label: 'Tamanho do instalador', value: '~4 MB' },
      { label: 'Tipo', value: 'NSIS · install per-user' },
      { label: 'Assinatura', value: <span className="text-[color:var(--color-ink-dim)]">— ainda não</span> }
    ]
  },
  {
    title: 'Stack interno',
    rows: [
      { label: 'Runtime', value: 'Tauri 2 · Rust · WebView2' },
      { label: 'Shells suportados', value: 'pwsh · powershell · cmd · bash · wsl' },
      { label: 'Fonte', value: 'Cascadia · Geist Mono · JetBrains Mono · Fira Code' },
      { label: 'Persistência', value: '~/.peu-term/ · JSON local' }
    ]
  },
  {
    title: 'Extras silenciosos',
    rows: [
      { label: 'SSH / VPS', value: 'Perfis · reconexão auto · ping status' },
      { label: 'Navegador embutido', value: 'Barra de endereço · histórico local' },
      { label: 'Biblioteca de prompts', value: 'Salvar + injetar no CLI ativo' },
      { label: 'Editor', value: 'Texto + imagem + PDF · ~60 extensões' },
      { label: 'Snippets', value: 'Drag-reorder · emoji · auto-run' },
      { label: 'Favoritos', value: 'Sidebar · arrasta pasta = cd na pane' },
      { label: 'Sessão', value: 'Tabs + layout + cores restaurados no boot' },
      { label: 'Scrollback', value: 'Até 100k linhas configurável' },
      { label: 'Monitor', value: 'CPU + RAM por pane (verde/âmbar/vermelho)' },
      { label: 'Barra de status', value: 'Projeto · branch · hora · ping SSH' }
    ]
  }
]

export function Specs() {
  return (
    <section
      id="specs"
      className="relative border-b border-[color:var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3">
            <span className="section-marker">№06 · Datasheet</span>
            <hr className="editorial-rule-accent mt-3 w-12" />
          </div>
          <div className="col-span-12 mt-6 md:col-span-9 md:mt-0">
            <h2 className="headline-section max-w-3xl">
              Especificações <em style={{ color: 'var(--color-accent)' }}>completas</em>.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              Dados brutos. Decide você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12">
          {/* Esquerda — Atalhos */}
          <div className="md:col-span-7">
            <div className="mb-6 flex items-baseline justify-between border-b border-[color:var(--color-rule-strong)] pb-3">
              <h3 className="font-display-italic text-2xl" style={{ fontStyle: 'italic' }}>
                Atalhos de teclado
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                19 combos
              </span>
            </div>
            <div className="space-y-10">
              {SHORTCUTS.map((g) => (
                <SpecBlock key={g.title} group={g} />
              ))}
            </div>
          </div>

          {/* Direita — Tech specs */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-baseline justify-between border-b border-[color:var(--color-rule-strong)] pb-3">
              <h3 className="font-display-italic text-2xl" style={{ fontStyle: 'italic' }}>
                Tech specs
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                v0.11.18
              </span>
            </div>
            <div className="space-y-10">
              {TECH.map((g) => (
                <SpecBlock key={g.title} group={g} />
              ))}
            </div>

            {/* Privacidade bloco */}
            <div className="mt-12 border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)] p-5">
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                Privacidade
              </div>
              <p className="font-display-italic text-xl leading-snug" style={{ fontStyle: 'italic' }}>
                "Nada sai do seu PC. Exceto o que VOCÊ manda
                pra Groq — explicitamente, com seu próprio API key."
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-[color:var(--color-rule)] pt-4 font-mono text-[11px] leading-relaxed text-[color:var(--color-ink-muted)]">
                <li>— API key da Groq no Windows Credential Manager</li>
                <li>— Sem cloud sync · sem login · sem analytics</li>
                <li>— Auto-update com confirmação — você decide quando instalar</li>
                <li>— Áudio do mic → Groq direto, nunca passa por nós</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpecBlock({ group }: { group: SpecGroup }) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
        {group.title}
      </h4>
      <dl className="divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
        {group.rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 py-3"
          >
            <dt className="text-sm text-[color:var(--color-ink-muted)]">{row.label}</dt>
            <dd className="font-mono text-xs text-[color:var(--color-ink)]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function KbdRow({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((k, i) => (
        <span key={i} className="kbd">
          {k}
        </span>
      ))}
    </span>
  )
}
