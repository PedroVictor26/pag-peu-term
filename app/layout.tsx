import type { Metadata } from 'next'
import { Geist, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Tipografia escolhida com intenção:
// - Instrument Serif: italic editorial, presença em headlines, contraste com mono
// - Geist: neutro técnico, body texts (mesma família que devs já reconhecem do Vercel)
// - JetBrains Mono: específica pra código + kbd + datapoints
const serifDisplay = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Peu-Term v0.8.0 — Terminal com IA pra Windows',
  description:
    'Terminal pra Windows feito pra quem usa Claude, Gemini e Codex. Split view, SSH, navegador embutido, biblioteca de prompts, fuzzy finder, voz pra IA, explica erro com Groq. Tudo num app — R$ 50, pagamento único.',
  authors: [{ name: 'Pedro Victor' }],
  keywords: [
    'terminal',
    'IA',
    'AI',
    'Claude Code',
    'Gemini CLI',
    'Codex',
    'Groq',
    'Windows',
    'desenvolvedor BR',
    'produtividade',
    'split terminal',
    'voz pra terminal',
    'SSH terminal',
    'Aider',
    'Cody',
    'fuzzy finder'
  ],
  openGraph: {
    title: 'Peu-Term v0.8.0',
    description:
      'O terminal que faltava no Windows. SSH, navegador embutido, split, voz, explica erro com IA — R$ 50, pagamento único.',
    type: 'website',
    locale: 'pt_BR'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${serifDisplay.variable} ${geistSans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
