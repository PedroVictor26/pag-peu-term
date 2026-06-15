import type { Metadata } from 'next'
import { Instrument_Serif, JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'

// Tipografia cinematográfica:
// - Instrument Serif italic: headlines com presença editorial
// - Syne: body sans que quebra o óbvio (Vercel/Inter estão por toda parte)
// - JetBrains Mono: código, kbd, datapoints técnicos
const serifDisplay = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono'
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://peu-term.vercel.app'

export const metadata: Metadata = {
  title: 'Peu-Term v0.11 — Terminal com IA pra Windows',
  description:
    'Terminal desktop nativo para Windows feito pra quem vive em CLIs de IA. Claude Code, Codex, Gemini — vários agentes rodando juntos, Wizard de Missão, Companion mobile, SSH, fuzzy finder. R$ 50, pagamento único, vitalício.',
  authors: [{ name: 'Pedro Victor' }],
  keywords: [
    'terminal', 'IA', 'AI', 'Claude Code', 'Gemini CLI', 'Codex', 'Groq',
    'Windows', 'desenvolvedor BR', 'produtividade', 'split terminal',
    'voz pra terminal', 'SSH terminal', 'Peu-Term'
  ],
  openGraph: {
    title: 'Peu-Term v0.11 — Terminal com IA pra Windows',
    description:
      'Vários Claude Code rodando juntos, Wizard de Missão, controle pelo celular — R$ 50, pagamento único.',
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Peu-Term — Terminal com IA para Windows'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peu-Term v0.11 — Terminal com IA pra Windows',
    description:
      'Vários Claude Code rodando juntos, Wizard de Missão, controle pelo celular — R$ 50, pagamento único.',
    images: [`${BASE_URL}/og.jpg`]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${serifDisplay.variable} ${syne.variable} ${mono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
