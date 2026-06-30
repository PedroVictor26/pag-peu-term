import type { Metadata } from 'next'
import {
  ArrowUpRight,
  Layers,
  SunMoon,
  Globe,
  Server,
  BookMarked,
  Search,
  Send,
  FileSymlink,
  Image,
  BarChart2,
  Settings2,
  Zap,
  Check,
  Clipboard,
  Smartphone,
} from 'lucide-react'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Peu-Term v0.11.17 — Novidades · Terminal com IA pra Windows',
  description:
    'Canvas espacial: espalhe terminais, notas e browser lado a lado. Andares = git worktrees com agentes em paralelo. Mais tema claro/escuro e configurações repaginadas. R$ 50, pagamento único, vitalício — quem já comprou recebe de graça.',
  openGraph: {
    title: 'Peu-Term v0.11.17 — Canvas + tema claro + settings novos',
    description:
      'Canvas espacial, andares = branches git, cabos entre terminais. Tema claro/escuro e painel de configurações estilo macOS. R$ 50, pagamento único, vitalício.',
    type: 'website',
    locale: 'pt_BR',
  },
}

const CHECKOUT = 'https://academy.dantetesta.com.br/download/peu-term-windows'

// ─────────────────────────────────────────────────────────────────────────────
// Sub-componentes inline (design system idêntico ao site)
// ─────────────────────────────────────────────────────────────────────────────

function Wordmark() {
  return (
    <a href="/" className="flex items-baseline gap-2">
      <span className="font-display-italic text-2xl leading-none" style={{ fontStyle: 'italic' }}>
        Peu
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
        term
      </span>
    </a>
  )
}

function CtaBuy({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener"
      className="btn-prime accent-glow"
      style={size === 'lg' ? { padding: '1.125rem 2rem', fontSize: '0.8125rem' } : {}}
    >
      <span>Comprar · R$ 50</span>
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
    </a>
  )
}

// Terminal art — mockup estático sem imagens
function TerminalMockup({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div
      className="relative overflow-hidden border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg)]"
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      {/* barra de título */}
      <div className="flex items-center justify-between border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)] px-4 py-2">
        <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          {label}
        </span>
        <div className="flex gap-1.5">
          {['var(--color-term-red)', 'var(--color-ink-dim)', 'var(--color-term-green)'].map(
            (c, i) => (
              <span
                key={i}
                style={{ background: `var(${c.replace('var(', '').replace(')', '')})`, width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }}
              />
            )
          )}
        </div>
      </div>
      {/* linhas */}
      <div className="space-y-1.5 p-5 text-[13px]">
        {lines.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.startsWith('$') ? (
              <span style={{ color: 'var(--color-accent)' }}>{line}</span>
            ) : line.startsWith('//') ? (
              <span style={{ color: 'var(--color-ink-dim)' }}>{line}</span>
            ) : (
              <span style={{ color: 'var(--color-ink-muted)' }}>{line}</span>
            )}
          </div>
        ))}
        <span
          className="cursor-blink inline-block h-4 w-2.5"
          style={{ background: 'var(--color-accent)', verticalAlign: 'middle' }}
        />
      </div>
    </div>
  )
}

// Card das features secundárias
function UpdateCard({
  icon: Icon,
  title,
  desc,
  kbd,
}: {
  icon: React.ElementType
  title: string
  desc: string
  kbd?: string[]
}) {
  return (
    <li className="group flex flex-col gap-4 border border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)] p-6 transition hover:bg-[color:var(--color-bg-elevated)]">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center border border-[color:var(--color-rule-strong)] transition group-hover:border-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)]">
          <Icon
            className="h-4 w-4 transition group-hover:text-[color:var(--color-bg)]"
            style={{ color: 'var(--color-accent)' }}
            strokeWidth={1.6}
          />
        </span>
        {kbd && (
          <span className="inline-flex items-center gap-1">
            {kbd.map((k: string, ki: number) => (
              <span key={ki} className="kbd">{k}</span>
            ))}
          </span>
        )}
      </div>
      <h3 className="font-display-italic text-xl leading-tight" style={{ fontStyle: 'italic', color: 'var(--color-ink)' }}>
        {title}
      </h3>
      <p className="flex-1 text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {desc}
      </p>
    </li>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Página principal
// ─────────────────────────────────────────────────────────────────────────────

export default function NovididadesPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-[color:var(--color-rule)] px-6 py-5 md:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.18em] md:flex">
          <a href="/#updates" className="link-sweep" style={{ color: 'var(--color-ink-muted)' }}>
            Capacidades
          </a>
          <a href="/#pricing" className="link-sweep" style={{ color: 'var(--color-ink-muted)' }}>
            Preço
          </a>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener"
            className="btn-prime"
            style={{ padding: '0.5rem 1rem', fontSize: '0.6875rem' }}
          >
            Comprar · R$ 50
          </a>
        </nav>
        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] md:hidden"
        >
          Comprar →
        </a>
      </header>

      <main>
        {/* ── HERO DE VENDA ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-[color:var(--color-rule)]">
          {/* scanline decorativa */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="scanline" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
            {/* eyebrow */}
            <div className="reveal reveal-1 mb-8 flex items-center gap-4">
              <span className="eyebrow">Saiu atualização grande</span>
              <span className="h-px w-10 bg-[color:var(--color-rule-strong)]" />
              <span className="section-marker">v0.11.17 · 2026</span>
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-2 headline-display max-w-5xl">
              <span className="block">Peu-Term v0.11.17 —</span>
              <span className="block text-[color:var(--color-accent)]">
                seu terminal ganhou
              </span>
              <span className="block">um Canvas.</span>
            </h1>

            {/* Subhead */}
            <p className="reveal reveal-3 mt-8 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-muted)] md:text-lg">
              Espalhe terminais, notas e um browser de preview num plano espacial. Andares = branches git com agentes rodando em paralelo. Mais tema claro, configurações repaginadas — tudo por{' '}
              <span className="text-[color:var(--color-ink)] font-semibold">R$ 50, pagamento único, pra sempre</span>.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-4">
              <CtaBuy size="lg" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
                pagamento único · vitalício · todas as atualizações
              </span>
            </div>

            {/* Badges */}
            <div className="reveal reveal-5 mt-12 flex flex-wrap gap-3">
              <span
                className="inline-flex items-center gap-2 border border-[color:var(--color-accent)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-accent)]"
              >
                <Zap className="h-3 w-3" strokeWidth={2} />
                v0.11.17 disponível agora
              </span>
              <span
                className="inline-flex items-center gap-2 border border-[color:var(--color-rule-strong)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]"
              >
                <Check className="h-3 w-3" strokeWidth={2.5} />
                Já cliente? Auto-update — é só abrir o app
              </span>
            </div>
          </div>
        </section>

        {/* ── CARROS-CHEFE: CANVAS + TEMA CLARO ──────────────────────────── */}
        <section className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="mb-14 flex flex-col gap-3 border-b border-[color:var(--color-rule)] pb-10">
              <span className="section-marker">№01 · Destaques</span>
              <h2 className="headline-section">
                Dois recursos que{' '}
                <em style={{ color: 'var(--color-accent)' }}>mudam o jeito de trabalhar</em>.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* ── Card Canvas ── */}
              <div className="flex flex-col gap-6 border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg)] p-8 transition hover:border-[color:var(--color-accent)]">
                {/* ícone + badge */}
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-elevated)]">
                    <Layers
                      className="h-5 w-5"
                      style={{ color: 'var(--color-accent)' }}
                      strokeWidth={1.6}
                    />
                  </span>
                  <span className="eyebrow">Novo</span>
                </div>

                <div>
                  <h3 className="headline-section" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                    <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Canvas</em>{' '}
                    espacial
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    Espalhe terminais, notas, grupos, imagens e um browser de preview num plano infinito. Andares viram branches git — rode um agente por branch, em paralelo, sem misturar contexto. Cabos conectam a saída de um terminal direto na entrada do próximo.
                  </p>
                </div>

                {/* Terminal art mostrando o recurso */}
                <TerminalMockup
                  label="peu-term — canvas"
                  lines={[
                    '// Andar 1 — branch: feature/auth',
                    '$ claude code — agente rodando',
                    '',
                    '// Andar 2 — branch: feature/ui',
                    '$ claude code — agente paralelo',
                    '  → saída conectada via cabo',
                  ]}
                />

                <ul className="space-y-2 text-[13px] text-[color:var(--color-ink-muted)]">
                  {[
                    'Terminais, notas, imagens e browser lado a lado',
                    'Andares = git worktrees — agentes em branches paralelas',
                    'Cabos ligam a saída de um terminal na entrada do próximo',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-1 h-3 w-3 flex-shrink-0 text-[color:var(--color-accent)]" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Card Tema claro/escuro ── */}
              <div className="flex flex-col gap-6 border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg)] p-8 transition hover:border-[color:var(--color-accent)]">
                {/* ícone + badge */}
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[color:var(--color-rule-strong)] bg-[color:var(--color-bg-elevated)]">
                    <SunMoon
                      className="h-5 w-5"
                      style={{ color: 'var(--color-accent)' }}
                      strokeWidth={1.6}
                    />
                  </span>
                  <span className="eyebrow">Novo</span>
                </div>

                <div>
                  <h3 className="headline-section" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                    <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Tema claro</em>{' '}
                    além do obsidian
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    Chega de forçar escuro em reunião ou sala iluminada. Modo claro completo adicionado — troca em Configurações → Aparência, salva e lembra entre sessões. Junto com as configurações repaginadas estilo macOS.
                  </p>
                </div>

                {/* Terminal art */}
                <TerminalMockup
                  label="peu-term — aparência"
                  lines={[
                    '// Configurações → Aparência',
                    '$ tema: claro',
                    '',
                    '● Tema aplicado e salvo',
                    '  → lembra entre sessões',
                    '  → alterna sem reiniciar',
                  ]}
                />

                <ul className="space-y-2 text-[13px] text-[color:var(--color-ink-muted)]">
                  {[
                    'Modo claro completo além do obsidian',
                    'Configura em Configurações → Aparência',
                    'Painel estilo macOS — categorias na lateral',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-1 h-3 w-3 flex-shrink-0 text-[color:var(--color-accent)]" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── GRID DE NOVIDADES ───────────────────────────────────────────── */}
        <section className="border-b border-[color:var(--color-rule)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="mb-14 flex flex-col gap-4 border-b border-[color:var(--color-rule)] pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-marker">№02 · Mais novidades</span>
                <h2 className="headline-section mt-4">
                  E mais <em style={{ color: 'var(--color-accent)' }}>capacidades</em>.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                Todas disponíveis agora. Quem comprou recebe sem pagar nada extra.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
              <UpdateCard
                icon={Settings2}
                title="Configurações repaginadas"
                desc="Painel estilo macOS — categorias na lateral. Aparência, Terminal, SSH e Atalhos sem procurar em modal."
              />
              <UpdateCard
                icon={Smartphone}
                title="Companion — controle pelo celular"
                desc="Monitore ou envie comandos pro terminal pelo celular. Funciona na mesma rede, sem conta em nuvem."
              />
              <UpdateCard
                icon={Server}
                title="Perfis SSH / VPS"
                desc="Salve servidores e conecte num clique. Reconexão automática, gerenciador de chaves e ping na barra de status."
              />
              <UpdateCard
                icon={Globe}
                title="Navegador embutido"
                desc="Abra sites e painéis direto dentro do terminal — barra de endereço, histórico, sem sair do app."
              />
              <UpdateCard
                icon={BookMarked}
                title="Biblioteca de prompts"
                desc="Salve seus prompts favoritos e injete direto no CLI ativo. Chega de copiar e colar do Notion."
              />
              <UpdateCard
                icon={Search}
                title="Fuzzy finder"
                desc="Abre arquivos de qualquer pasta em milissegundos."
                kbd={['Ctrl', 'Shift', 'P']}
              />
              <UpdateCard
                icon={Send}
                title="Enviar seleção pro CLI"
                desc="Seleciona qualquer texto na saída e manda pro terminal ativo sem copiar e colar."
                kbd={['Ctrl', 'Shift', 'E']}
              />
              <UpdateCard
                icon={FileSymlink}
                title="Caminhos clicáveis"
                desc="Arquivos e caminhos na saída do terminal viram links — click abre no editor embutido."
              />
              <UpdateCard
                icon={Image}
                title="Imagem de fundo"
                desc="Personalize o fundo do terminal com qualquer imagem. Opacidade ajustável."
              />
              <UpdateCard
                icon={BarChart2}
                title="Barra de status"
                desc="Projeto, branch git, hora e ping SSH — tudo visível sem tirar o olho do código."
              />
              <UpdateCard
                icon={Clipboard}
                title="Colar imagem no prompt"
                desc="Ctrl+V com imagem no clipboard injeta @<path> no Claude / Codex / Gemini. Mostra miniatura por 3s."
                kbd={['Ctrl', 'V']}
              />
            </ul>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
              <span style={{ color: 'var(--color-accent)' }}>→</span>{' '}
              Auto-update incluso — recebe tudo automaticamente, sem pagar nada extra.
            </p>
          </div>
        </section>

        {/* ── GATILHO DE CONVERSÃO ─────────────────────────────────────────── */}
        <section className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-paper)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              {/* Já é cliente */}
              <div className="flex flex-col gap-6 border border-[color:var(--color-rule-strong)] p-8">
                <div className="flex items-center gap-3">
                  <Check
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--color-term-green)' }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: 'var(--color-term-green)' }}
                  >
                    Já é cliente
                  </span>
                </div>
                <h3 className="headline-section" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
                  Recebe de <em style={{ color: 'var(--color-term-green)', fontStyle: 'italic' }}>graça</em>.
                </h3>
                <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  Comprou qualquer versão do Peu-Term? A v0.11.17 já tá no seu app. É só abrir — o auto-update entregou enquanto você dormia. Nenhum centavo extra.
                </p>
                <TerminalMockup
                  label="auto-update"
                  lines={[
                    '● Peu-Term v0.11.17',
                    '  Atualização instalada automaticamente',
                    '',
                    '  ✓ Canvas espacial + Andares git',
                    '  ✓ Tema claro/escuro',
                    '  ✓ Configurações estilo macOS',
                  ]}
                />
              </div>

              {/* Ainda não comprou */}
              <div className="flex flex-col gap-6 border border-[color:var(--color-accent)] p-8">
                <div className="flex items-center gap-3">
                  <ArrowUpRight
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--color-accent)' }}
                    strokeWidth={2}
                  />
                  <span className="eyebrow">Ainda não comprou</span>
                </div>
                <h3 className="headline-section" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
                  R$ 50 e é seu{' '}
                  <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>pra sempre</em>.
                </h3>
                <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  Pagamento único. Sem mensalidade. Sem renovação. Todas as atualizações futuras já estão dentro — incluindo as próximas que ainda nem anunciei.
                </p>
                <ul className="space-y-2 text-[13px] text-[color:var(--color-ink-muted)]">
                  {[
                    'Canvas espacial com Andares (git worktrees) e Cabos',
                    'Tema claro/escuro e configurações repaginadas',
                    'Companion — controle pelo celular',
                    'Colar imagem direto no Claude / Codex / Gemini',
                    'Perfis SSH, fuzzy finder, biblioteca de prompts',
                    'Funciona com Claude Code, Gemini, Codex, Antigravity',
                    '~4 MB · sem cloud · sem login · sem telemetria',
                    'Windows 10 / 11 x64',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check
                        className="mt-1 h-3 w-3 flex-shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                        strokeWidth={2.5}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <CtaBuy size="lg" />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
                    Pix · Cartão · Boleto — pagamento único · sem mensalidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
        <section className="border-b border-[color:var(--color-rule)]">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-36">
            {/* Big number display */}
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span
                className="font-display-italic leading-none"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: 'var(--color-ink-muted)',
                }}
              >
                R$
              </span>
              <span
                className="font-display leading-none"
                style={{
                  fontSize: 'clamp(6rem, 18vw, 12rem)',
                  color: 'var(--color-accent)',
                  fontStyle: 'italic',
                  letterSpacing: '-0.04em',
                }}
              >
                50
              </span>
            </div>

            <h2 className="headline-section mx-auto max-w-2xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
              Pagamento único. Vitalício.{' '}
              <em style={{ color: 'var(--color-accent)' }}>Todas as atualizações</em>.
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[color:var(--color-ink-muted)]">
              Canvas, tema claro, SSH, fuzzy finder, Companion no celular — e tudo que vier depois. Compra uma vez, usa pra sempre.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener"
                className="btn-prime accent-glow"
                style={{ padding: '1.125rem 2.5rem', fontSize: '0.875rem' }}
              >
                <span>Comprar agora · R$ 50</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a href="/" className="btn-ghost">
                Ver landing completa
              </a>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-dim)]">
              Pix · Cartão · Boleto · Windows 10/11 x64 · ~4 MB
            </p>

            {/* editorial-rule-accent separador */}
            <hr className="editorial-rule-accent mx-auto mt-16 max-w-xs" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
