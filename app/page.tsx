import { Hero } from '@/components/Hero'
import { TerminalMockup } from '@/components/TerminalMockup'
import { Features } from '@/components/Features'
import { Workflows } from '@/components/Workflows'
import { Shortcuts } from '@/components/Shortcuts'
import { Install } from '@/components/Install'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative isolate">
      {/* Grid pattern overlay subtle */}
      <div
        aria-hidden="true"
        className="grid-pattern pointer-events-none fixed inset-0 -z-10 opacity-40"
      />
      <Hero />
      <TerminalMockup />
      <Features />
      <Workflows />
      <Shortcuts />
      <Install />
      <Faq />
      <Footer />
    </main>
  )
}
