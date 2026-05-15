export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative border-b border-[color:var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Side annotation */}
          <aside className="col-span-12 mb-10 md:col-span-3 md:mb-0">
            <div className="sticky top-10 flex flex-col gap-3">
              <span className="section-marker">№02 · Manifesto</span>
              <span className="eyebrow text-[color:var(--color-amber)]">
                Por que isso existe
              </span>
              <hr className="editorial-rule-amber w-12" />
              <p className="font-mono text-[10px] leading-relaxed text-[color:var(--color-ink-dim)]">
                Escrito em Maio 2026, depois de 4 meses tendo
                Claude Code, Gemini CLI e Codex abertos ao mesmo
                tempo no Windows.
              </p>
            </div>
          </aside>

          {/* Main editorial copy */}
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="headline-section mb-12">
              Eu queria um terminal que <span style={{ color: 'var(--color-amber)' }}>entendesse</span> que eu uso IA o dia inteiro.
            </h2>

            <div className="grid grid-cols-1 gap-x-12 gap-y-6 text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)] md:grid-cols-2 md:text-[18px]">
              <div className="space-y-5">
                <p className="drop-cap" style={{ color: 'var(--color-ink)' }}>
                  Cada CLI nova de IA virava mais uma janela de PowerShell. Em
                  abril eu tinha quatro Claudes rodando ao mesmo tempo, um
                  Gemini, dois <em className="text-[color:var(--color-ink)]">npm run dev</em>,
                  três tmux improvisados via WSL — e umas 30 abas de browser
                  entre as reuniões.
                </p>
                <p>
                  Vi o{' '}
                  <a
                    href="https://academy.dantetesta.com.br/"
                    target="_blank"
                    rel="noopener"
                    className="link-sweep"
                  >
                    Dante Shell ↗
                  </a>
                  , do Dante Testa, pra macOS. Peguei a referência e adaptei pro
                  Windows com o que eu precisava no dia a dia.
                </p>
              </div>
              <div className="space-y-5">
                <p>
                  O resultado faz <span style={{ color: 'var(--color-ink)' }}>tudo isso num app só</span>:
                  split de até 9 terminais, microfone que vira prompt pra IA,
                  IA que explica seu erro de stack trace, editor de arquivos
                  embutido, viewer de imagem/PDF, snippets reutilizáveis,
                  favoritos com drag-and-drop e custom providers — pra plugar
                  qualquer CLI (Aider, Cody, sgpt, Queen…) em 1 click.
                </p>
                <p
                  className="border-l-2 pl-5 italic"
                  style={{
                    borderColor: 'var(--color-amber)',
                    color: 'var(--color-ink)'
                  }}
                >
                  Pra Windows não existia. Agora existe. <span className="font-mono not-italic">v0.3.4</span>, e crescendo.
                </p>
                <p className="pt-2 font-display-italic text-2xl leading-tight" style={{ color: 'var(--color-ink)' }}>
                  — Pedro V.
                </p>
              </div>
            </div>

            {/* Pull-stats — datapoints brutos */}
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[color:var(--color-rule)] pt-10 md:grid-cols-4">
              <PullStat n="4" label="agentes de IA suportados" />
              <PullStat n="9" label="terminais simultâneos numa tela" />
              <PullStat n="0" label="dados saem do seu PC" />
              <PullStat n="∞" label="providers customizáveis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PullStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="font-display-italic text-5xl leading-none md:text-6xl"
        style={{ color: 'var(--color-amber)', fontStyle: 'italic' }}
      >
        {n}
      </span>
      <span className="font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-[color:var(--color-ink-dim)]">
        {label}
      </span>
    </div>
  )
}
