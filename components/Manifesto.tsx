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
                  três tmux improvisados via WSL — e duas reuniões pra
                  comparecer entre as 30 abas de browser.
                </p>
                <p>
                  Tentei Windows Terminal, Warp, Wave, Tabby. Todos resolvem o
                  problema do split. Nenhum entende que o que eu mais faço é
                  <span style={{ color: 'var(--color-ink)' }}> conversar com IA dentro de um terminal</span>.
                </p>
              </div>
              <div className="space-y-5">
                <p>
                  Quis um botão pra falar — porque digitar prompt de 300 chars
                  cansa. Quis um botão pra selecionar erro e o GPT explicar.
                  Quis configurar meus próprios CLIs (Aider, Cody, sgpt, o que
                  for) com 1 click — não escrever <em className="text-[color:var(--color-ink)]">alias</em> no perfil
                  do PowerShell.
                </p>
                <p
                  className="border-l-2 pl-5 italic"
                  style={{
                    borderColor: 'var(--color-amber)',
                    color: 'var(--color-ink)'
                  }}
                >
                  Não existia pra Windows. Então fiz. Em <span className="font-mono not-italic">~6 semanas</span>, sozinho. Eis o resultado.
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
