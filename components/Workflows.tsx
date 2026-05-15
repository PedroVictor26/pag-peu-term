import { Sparkles, Bot, Code2, Box, ArrowRight } from 'lucide-react'

interface Workflow {
  title: string
  steps: { actor: string; action: string; icon?: React.ReactNode }[]
}

const WORKFLOWS: Workflow[] = [
  {
    title: 'Debug com Claude Code num projeto Next.js',
    steps: [
      { actor: 'Você', action: 'Abre o Peu-Term no projeto via Favoritos' },
      { actor: 'Você', action: 'Click no botão "Claude" — abre a CLI direta na pasta', icon: <Sparkles className="h-3 w-3 text-orange-400" /> },
      { actor: 'Você', action: 'Aperta o mic, fala "corrige esse erro de tipo no header"' },
      { actor: 'Claude', action: 'Faz o patch e mostra o stack trace' },
      { actor: 'Você', action: 'Seleciona o erro → click no Sparkles → IA explica' },
      { actor: 'IA', action: 'Mostra fix com "Enviar comando pro terminal"' }
    ]
  },
  {
    title: '4 projetos rodando ao mesmo tempo em split 2×2',
    steps: [
      { actor: 'Layout', action: 'Configura 2×2 no LayoutPicker' },
      { actor: 'Pane 1', action: 'Claude no projeto frontend', icon: <Sparkles className="h-3 w-3 text-orange-400" /> },
      { actor: 'Pane 2', action: 'Gemini analisando logs do backend', icon: <Bot className="h-3 w-3 text-sky-400" /> },
      { actor: 'Pane 3', action: 'npm run dev no Next.js' },
      { actor: 'Pane 4', action: 'Codex refatorando teste E2E', icon: <Code2 className="h-3 w-3 text-emerald-400" /> },
      { actor: 'Header', action: 'Mostra CPU/RAM de cada pane — sabe qual está travando' }
    ]
  },
  {
    title: 'Provider customizado: "Queen" (CLI próprio)',
    steps: [
      { actor: 'Você', action: 'Click no botão "+" tracejado da TopBar', icon: <Box className="h-3 w-3 text-violet-400" /> },
      { actor: 'Modal', action: 'Cria provider: nome "Queen", comando "queen --pretty"' },
      { actor: 'Você', action: 'Escolhe 👑 + cor violeta' },
      { actor: 'TopBar', action: 'Aparece botão Queen entre Codex e o +' },
      { actor: 'Você', action: 'Click — abre a tab com o comando rodando' }
    ]
  }
]

export function Workflows() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Casos reais
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Como o Peu-Term encaixa no seu fluxo
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {WORKFLOWS.map((w, i) => (
          <WorkflowCard key={i} workflow={w} index={i} />
        ))}
      </div>
    </section>
  )
}

function WorkflowCard({
  workflow,
  index
}: {
  workflow: Workflow
  index: number
}) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-fuchsia-500/15 text-xs font-bold text-fuchsia-300">
          {index + 1}
        </span>
        <h3 className="text-sm font-semibold text-white">{workflow.title}</h3>
      </div>
      <ol className="flex flex-1 flex-col gap-2.5 text-xs">
        {workflow.steps.map((s, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 text-neutral-600">
              <ArrowRight className="h-3 w-3" />
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-medium text-fuchsia-300">{s.actor}:</span>{' '}
              <span className="text-neutral-300">{s.action}</span>
              {s.icon && <span className="ml-1.5 inline-flex align-middle">{s.icon}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
