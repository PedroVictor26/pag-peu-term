import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peu-Term — Terminal com IA pro seu workflow',
  description:
    'Terminal moderno pra Windows com split view, voz pra IA, explicação de erro com Groq, editor de arquivos integrado e snippets. Feito pra quem usa Claude Code, Gemini, Codex e CLIs customizados.',
  keywords: [
    'terminal',
    'IA',
    'AI',
    'Claude Code',
    'Gemini CLI',
    'Codex',
    'Groq',
    'Windows',
    'desenvolvedor',
    'produtividade',
    'split terminal',
    'voz pra terminal'
  ],
  openGraph: {
    title: 'Peu-Term — Terminal com IA',
    description:
      'Split view, voz, explicação de erros, snippets — tudo num terminal só pra Windows.',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
