interface Shortcut {
  combo: string[]
  action: string
}

interface Group {
  title: string
  items: Shortcut[]
}

const GROUPS: Group[] = [
  {
    title: 'Navegação',
    items: [
      { combo: ['Ctrl', 'T'], action: 'Nova tab Shell' },
      { combo: ['Ctrl', 'W'], action: 'Fechar tab atual' },
      { combo: ['Ctrl', 'Tab'], action: 'Próxima tab' },
      { combo: ['Ctrl', 'Shift', 'Tab'], action: 'Tab anterior' },
      { combo: ['Ctrl', '1-9'], action: 'Ir pra tab N' }
    ]
  },
  {
    title: 'Layout',
    items: [
      { combo: ['Ctrl', 'Shift', 'D'], action: 'Split pane' },
      { combo: ['Ctrl', 'Shift', 'W'], action: 'Fechar pane' },
      { combo: ['Ctrl', 'M'], action: 'Maximizar/Restaurar pane' }
    ]
  },
  {
    title: 'Terminal',
    items: [
      { combo: ['Ctrl', 'L'], action: 'Limpar terminal' },
      { combo: ['Ctrl', '+'], action: 'Aumentar fonte' },
      { combo: ['Ctrl', '-'], action: 'Diminuir fonte' },
      { combo: ['Ctrl', '0'], action: 'Resetar fonte' },
      { combo: ['Ctrl', 'F'], action: 'Buscar no buffer' },
      { combo: ['Ctrl', 'Shift', 'C'], action: 'Copiar seleção' },
      { combo: ['Ctrl', 'V'], action: 'Colar (bracket paste)' }
    ]
  },
  {
    title: 'Editor + Arquivos',
    items: [
      { combo: ['Ctrl', 'O'], action: 'Abrir arquivo no editor' },
      { combo: ['Ctrl', 'S'], action: 'Salvar arquivo (no editor)' },
      { combo: ['Esc'], action: 'Fechar modal/editor' }
    ]
  }
]

export function Shortcuts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Decora isso
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Atalhos de teclado
        </h2>
        <p className="mt-4 text-balance text-neutral-400">
          Tudo navegável sem mouse. Mesmo as features de IA (Explicar, Voz)
          têm botões — mas você vai querer decorar pelo menos os de navegação.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-fuchsia-300">
              {group.title}
            </h3>
            <div className="flex flex-col gap-1">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1.5 text-sm"
                >
                  <span className="text-neutral-300">{item.action}</span>
                  <span className="flex items-center gap-1">
                    {item.combo.map((key, j) => (
                      <kbd
                        key={j}
                        className="rounded border border-white/15 bg-neutral-900 px-1.5 py-0.5 font-mono text-[10px] text-neutral-200"
                      >
                        {key}
                      </kbd>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
