import type { ReactNode } from 'react'

interface Capability {
  num: string
  eyebrow: string
  title: ReactNode
  body: ReactNode
  bullets: string[]
  mockup: ReactNode
  side: 'L' | 'R'
}

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative border-b border-[color:var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-10 md:pt-32">
        <div className="mb-16 flex items-end justify-between gap-6 border-b border-[color:var(--color-rule)] pb-8 md:mb-24">
          <div>
            <span className="section-marker">№03 · Capacidades</span>
            <h2 className="headline-section mt-4 max-w-2xl">
              O que existe <em style={{ color: 'var(--color-accent)' }}>dentro</em>.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)] md:block">
            Quatro coisas que nenhum terminal pra Windows tem juntas. As outras
            doze ficam na folha de specs abaixo.
          </p>
        </div>

        {CAPABILITIES.map((cap, i) => (
          <CapabilityBlock key={i} cap={cap} />
        ))}
      </div>
    </section>
  )
}

function CapabilityBlock({ cap }: { cap: Capability }) {
  const reverse = cap.side === 'R'
  return (
    <article
      className={`grid grid-cols-1 items-center gap-x-12 gap-y-10 border-b border-[color:var(--color-rule)] py-20 last:border-b-0 md:grid-cols-2 md:gap-x-16 md:py-28 ${
        reverse ? 'md:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div>
        <div className="flex items-center gap-4">
          <span
            className="font-display-italic text-4xl leading-none"
            style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}
          >
            {cap.num}
          </span>
          <span className="eyebrow">{cap.eyebrow}</span>
        </div>
        <h3 className="headline-section mt-6 max-w-md">{cap.title}</h3>
        <div className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--color-ink-muted)] md:text-[17px]">
          {cap.body}
        </div>
        <ul className="mt-8 max-w-md space-y-2.5 border-t border-[color:var(--color-rule)] pt-6 text-sm">
          {cap.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 font-mono text-[12px] leading-relaxed text-[color:var(--color-ink-muted)]"
            >
              <span className="select-none text-[color:var(--color-accent)]">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex justify-center">
        <div className="w-full max-w-[520px]">{cap.mockup}</div>
      </div>
    </article>
  )
}

// ============================================================================
// Mockups específicos por capability
// ============================================================================

function SplitMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent-glow) 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
      <div className="relative border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)] p-1">
        <div className="grid grid-cols-2 grid-rows-2 gap-[1px] bg-[color:var(--color-rule)]">
          <Pane title="claude · projeto-a" cmd="claude" out="✶ Analisando arquivo..." cpu={42} />
          <Pane title="gemini · api" cmd="gemini" out="Loading model..." cpu={8} />
          <Pane title="codex · refactor" cmd="codex --rev" out="✓ Patch aplicado" cpu={3} />
          <Pane title="shell · deploy" cmd="vercel --prod" out="↗ Building..." cpu={67} accent />
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
        Fig. 02 — Layout 2×2 · 4 PTYs simultâneos
      </p>
    </div>
  )
}

function VoiceMockup() {
  return (
    <div className="relative">
      <div className="relative border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)] p-8">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--color-accent)]"
               style={{
                 boxShadow: '0 0 32px var(--color-accent-glow)',
                 animation: 'blink 2s ease infinite'
               }}>
            <svg className="h-6 w-6" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"/>
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
              <span>Gravando · 00:08</span>
            </div>
            {/* Waveform falso */}
            <div className="flex items-center gap-[3px] py-2">
              {[10, 18, 24, 14, 28, 20, 32, 22, 16, 26, 14, 30, 20, 12, 28, 18, 22, 14, 26, 16, 20, 24, 12].map((h, i) => (
                <span
                  key={i}
                  className="block w-[3px] rounded-full"
                  style={{
                    height: `${h}px`,
                    background: 'var(--color-accent)',
                    opacity: 0.7 + (Math.sin(i) * 0.3)
                  }}
                />
              ))}
            </div>
            <p className="font-mono text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
              <span className="text-[color:var(--color-ink-dim)]">você → </span>
              "Refatora o componente do header pra usar React Server Components"
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-[color:var(--color-rule)] pt-5">
          <div className="font-mono text-[11px] leading-relaxed">
            <div className="text-[color:var(--color-accent)]">PS C:\projeto&gt;</div>
            <div className="mt-1 text-[color:var(--color-ink)]">
              <span style={{ background: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0 4px' }}>
                Refatora o componente do header pra usar React Server Components
              </span>
              <span className="cursor-blink ml-0.5 text-[color:var(--color-accent)]">▎</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
        Fig. 03 — Voz → Texto · Whisper Large v3 Turbo
      </p>
    </div>
  )
}

function ExplainMockup() {
  return (
    <div className="relative">
      <div className="relative border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)]">
        <div className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
          ◇ Explicação do erro · llama-3.3-70b
        </div>
        <div className="space-y-4 p-5 font-mono text-[11px] leading-relaxed">
          <div className="border-l-2 border-[color:var(--color-term-red)] pl-3 text-[color:var(--color-term-red)]">
            <div>TypeError: Cannot read properties of</div>
            <div>undefined (reading 'map') at Posts.tsx:24:18</div>
          </div>
          <div className="space-y-2 text-[color:var(--color-ink)]">
            <div>
              <span className="font-bold text-[color:var(--color-accent)]">Diagnóstico:</span>{' '}
              <span className="text-[color:var(--color-ink-muted)]">
                <em>posts</em> chegou como undefined porque a fetch
                ainda não terminou no SSR.
              </span>
            </div>
            <div>
              <span className="font-bold text-[color:var(--color-accent)]">Como resolver:</span>
            </div>
            <ol className="ml-1 space-y-1 text-[color:var(--color-ink-muted)]">
              <li>1. await na chamada antes do map</li>
              <li>2. fallback <code>posts ?? []</code></li>
              <li>3. checar tipo no zod</li>
            </ol>
          </div>
          <div
            className="-mx-5 mt-4 border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg)] px-5 py-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
                Comando sugerido
              </span>
              <button className="font-mono text-[10px] text-[color:var(--color-accent)] underline-offset-2 hover:underline">
                Enviar pro terminal ↗
              </button>
            </div>
            <div className="text-[color:var(--color-ink)]">
              const posts = await fetch(url).then(r =&gt; r.json()) ?? []
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
        Fig. 04 — Stack trace → IA → fix injetado
      </p>
    </div>
  )
}

function ProvidersMockup() {
  const providers = [
    { name: 'Shell', glyph: '⌘', cmd: 'powershell', tone: 'default' },
    { name: 'Claude', glyph: '✶', cmd: 'claude', tone: 'accent' },
    { name: 'Gemini', glyph: '◈', cmd: 'gemini', tone: 'default' },
    { name: 'Codex', glyph: '◊', cmd: 'codex --rev', tone: 'default' },
    { name: 'Aider', glyph: '☼', cmd: 'aider --no-color', tone: 'default' },
    { name: 'Cody', glyph: '♔', cmd: 'cody chat', tone: 'default' },
    { name: 'Queen', glyph: '♛', cmd: 'queen --pretty', tone: 'accent' }
  ]
  return (
    <div className="relative">
      <div className="relative border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-paper)]">
        <div className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
          Providers configurados · ~/.peu-term/custom-providers.json
        </div>
        <ul>
          {providers.map((p, i) => (
            <li
              key={p.name}
              className={`flex items-center gap-4 px-5 py-3 ${
                i !== providers.length - 1 ? 'border-b border-[color:var(--color-rule)]' : ''
              }`}
            >
              <span className="font-mono text-[10px] text-[color:var(--color-ink-dim)]"
                    style={{ fontVariantNumeric: 'tabular-nums' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="flex h-7 w-7 items-center justify-center text-base"
                style={{
                  background: p.tone === 'accent' ? 'var(--color-accent)' : 'var(--color-bg-elevated)',
                  color: p.tone === 'accent' ? 'var(--color-bg)' : 'var(--color-ink)',
                  border: '1px solid var(--color-rule-strong)'
                }}
              >
                {p.glyph}
              </span>
              <span className="flex-1 text-sm">{p.name}</span>
              <code className="font-mono text-[11px] text-[color:var(--color-ink-dim)]">
                $ {p.cmd}
              </code>
            </li>
          ))}
          <li className="flex items-center gap-4 px-5 py-3 text-[color:var(--color-ink-dim)]">
            <span className="font-mono text-[10px]">+ </span>
            <span className="text-sm italic">adicione o seu</span>
          </li>
        </ul>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
        Fig. 05 — Cada provider = 1 botão na TopBar
      </p>
    </div>
  )
}

// Pane visual reutilizável pro split mockup
function Pane({
  title,
  cmd,
  out,
  cpu,
  accent
}: {
  title: string
  cmd: string
  out: string
  cpu: number
  accent?: boolean
}) {
  return (
    <div className="bg-[color:var(--color-bg-paper)]">
      <div className="flex items-center justify-between border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)] px-2.5 py-1.5 font-mono text-[9px]">
        <span className="text-[color:var(--color-ink-muted)]">{title}</span>
        <span className="text-[color:var(--color-ink-dim)]" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {cpu}%
        </span>
      </div>
      <div className="px-3 py-2 font-mono text-[10px] leading-snug">
        <div>
          <span className="text-[color:var(--color-accent)]">PS&gt;</span>{' '}
          <span className="text-[color:var(--color-ink)]">{cmd}</span>
        </div>
        <div className={accent ? 'text-[color:var(--color-accent-bright)]' : 'text-[color:var(--color-ink-muted)]'}>
          {out}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Conteúdo
// ============================================================================

const CAPABILITIES: Capability[] = [
  {
    num: '01',
    eyebrow: 'Split view sem dó',
    title: <>Até <em style={{ color: 'var(--color-accent)' }}>9 terminais</em> ao mesmo tempo. Cada um com PTY próprio.</>,
    body: (
      <>
        Divide a tela em layouts{' '}
        <span className="text-[color:var(--color-ink)]">1×1, 1×2, 2×2, até 3×3</span>{' '}
        — ou ajusta linha-por-linha. Cada slot spawn um shell completo
        (PowerShell, pwsh, cmd, bash, WSL) com PTY independente: rodam em
        paralelo sem competir por buffer. Arrasta um header pra trocar slots
        com outro. Maximiza um pra foco total com{' '}
        <kbd className="kbd">Ctrl</kbd>
        <kbd className="kbd">M</kbd> e restaura sem perder uma linha do
        scrollback. CPU e RAM individuais aparecem no header de cada pane —
        sabe na hora qual processo está pesando.
      </>
    ),
    bullets: [
      'PTY sobrevive a re-layout (reattach + replay de 200KB buffer)',
      'Drag-and-drop entre slots troca o conteúdo, não copia',
      'Monitor CPU/RAM por pane (verde <30% · âmbar <70% · vermelho >70%)',
      'Maximize preserva todas as outras panes vivas no background',
      'Atalho rápido pra split: Ctrl+Shift+D · fechar pane: Ctrl+Shift+W'
    ],
    mockup: <SplitMockup />,
    side: 'L'
  },
  {
    num: '02',
    eyebrow: 'Voz pra IA',
    title: <>Aperta. Fala. <em style={{ color: 'var(--color-accent)' }}>Vira texto</em> no terminal.</>,
    body: (
      <>
        Botão de microfone na barra inferior. O áudio é gravado via{' '}
        <span className="text-[color:var(--color-ink)]">MediaRecorder</span>{' '}
        nativo do Chromium, enviado pro Groq Whisper Large v3 Turbo, e o texto
        retorna direto no PTY ativo. Pra Claude/Gemini, isso é prompt
        instantâneo — sem digitar muralha de 300 caracteres. Auto-stop em 60s
        protege sua quota. Contador ao vivo no tooltip.
      </>
    ),
    bullets: [
      'Modelo: whisper-large-v3-turbo · ~25 req/min grátis',
      'Idioma: auto-detect, PT-BR forçado ou EN-US forçado',
      'Auto-Enter opcional (envia ↵ após transcrever)',
      'Áudio nunca passa por servidor nosso · vai direto pra Groq',
      'API key salva no Windows Credential Manager'
    ],
    mockup: <VoiceMockup />,
    side: 'R'
  },
  {
    num: '03',
    eyebrow: 'IA explica erro',
    title: <>Seleciona o stack trace. IA <em style={{ color: 'var(--color-accent)' }}>diz o porquê</em> + manda o fix.</>,
    body: (
      <>
        Highlight em qualquer texto da pane (stack trace, erro de TypeScript,
        log feio), clica no botão{' '}
        <span style={{ color: 'var(--color-accent)' }}>Explicar</span> ou no
        item do menu de contexto. O texto vai pro Groq LLaMA 3.3 com prompt
        estruturado e a resposta volta em formato fixo:{' '}
        <span className="text-[color:var(--color-ink)]">Diagnóstico</span> →{' '}
        <span className="text-[color:var(--color-ink)]">Como resolver</span>{' '}
        (passo-a-passo) →{' '}
        <span className="text-[color:var(--color-ink)]">Comando</span>. O
        comando vem com botão "Enviar pro terminal" — não precisa copy/paste.
      </>
    ),
    bullets: [
      'Modelo: llama-3.3-70b-versatile (mais rápido que GPT-4)',
      'Resposta em PT-BR · formato Diagnóstico/Resolver/Comando',
      'Botão "enviar pro terminal" injeta direto no PTY ativo',
      'Texto truncado a 8k chars · resposta cap em 800 tokens',
      'Se nada selecionado, pega as últimas 60 linhas visíveis automático'
    ],
    mockup: <ExplainMockup />,
    side: 'L'
  },
  {
    num: '04',
    eyebrow: 'Custom AI Providers',
    title: <>Qualquer CLI vira um <em style={{ color: 'var(--color-accent)' }}>botão</em> na sua TopBar.</>,
    body: (
      <>
        Aider, Cody, sgpt, Queen, llm, ollama-cli, ou qualquer binário no PATH.
        Cria o provider uma vez (nome + comando shell + emoji + cor), aparece
        como botão na TopBar pra sempre. Click = abre tab nova com o CLI já
        rodando. Cada provider é validado contra padrões de injection antes
        de ser persistido em{' '}
        <code className="font-mono text-[color:var(--color-accent)]">~/.peu-term/custom-providers.json</code>
        {' '}— bloqueia <em>rm -rf</em>, redirects pra <em>/dev/</em>,
        <em>iex</em> + download, etc.
      </>
    ),
    bullets: [
      'Comando shell até 200 chars · sem caracteres de controle',
      'Validação anti-injection no save (bloqueio de padrões shell perigosos)',
      '16 emojis preset · 11 cores · ou cole o seu próprio',
      'Click = nova tab Shell com autoSend do comando',
      'Persistência via JSON local em ~/.peu-term/'
    ],
    mockup: <ProvidersMockup />,
    side: 'R'
  }
]
