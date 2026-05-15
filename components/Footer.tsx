import { Terminal, MessageSquare, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Peu-Term</div>
              <div className="text-xs text-neutral-500">
                Terminal com IA pra quem fala com bot o dia todo.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <a
              href="https://chat.whatsapp.com/BbcvuNrFM57JPBl9vDBE5q"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1.5 transition hover:text-fuchsia-300"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Comunidade WhatsApp
            </a>
            <a
              href="#install"
              className="flex items-center gap-1.5 transition hover:text-fuchsia-300"
            >
              Download
            </a>
            <a
              href="#features"
              className="flex items-center gap-1.5 transition hover:text-fuchsia-300"
            >
              Recursos
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-neutral-600 md:flex-row md:items-center">
          <span>
            © 2026 Peu-Term · Feito por{' '}
            <a
              href="#"
              className="text-neutral-400 transition hover:text-fuchsia-300"
            >
              Pedro Victor
            </a>
          </span>
          <span>v0.3.3 · Windows 10/11 64-bit</span>
        </div>
      </div>
    </footer>
  )
}
