import { Hero } from '@/components/Hero'
import { Pain } from '@/components/Pain'
import { Wizard } from '@/components/Wizard'
import { Agentes } from '@/components/Agentes'
import { Companion } from '@/components/Companion'
import { Embutidos } from '@/components/Embutidos'
import { Monitor } from '@/components/Monitor'
import { Extras } from '@/components/Extras'
import { Updates } from '@/components/Updates'
import { Manifesto } from '@/components/Manifesto'
import { Pricing } from '@/components/Pricing'
import { Install } from '@/components/Install'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Zap, ArrowUpRight } from 'lucide-react'
import { CHECKOUT } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <main className="grain relative isolate pb-16 md:pb-0">
        <Hero />
        <Pain />
        <Wizard />
        <Agentes />
        <Companion />
        <Embutidos />
        <Monitor />
        <Extras />

        {/* ── CTA intermediário (Item 5) ── */}
        <section className="border-b border-[color:var(--color-rule)]">
          <div className="container-wide flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
            <p
              className="font-display-italic text-2xl leading-tight md:text-3xl"
              style={{ fontStyle: 'italic' }}
            >
              Seu terminal de IA,{' '}
              <span className="text-[color:var(--color-accent)]">R$ 50 pra sempre.</span>
            </p>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener"
              className="btn-prime pulse-glow shrink-0"
            >
              <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span>Comprar · R$ 50</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </a>
          </div>
        </section>

        {/* ── Updates / Canvas section (Item 1) ── */}
        <Updates />

        <Manifesto />
        <Pricing />
        <Install />
        <div id="faq">
          <Faq />
        </div>
        <Footer />
      </main>

      {/* Sticky mobile CTA (Item 4) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg-glass)] p-3 backdrop-blur-sm md:hidden">
        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener"
          className="btn-prime w-full justify-center"
          style={{ clipPath: 'none' }}
        >
          Comprar · R$ 50
        </a>
      </div>
    </>
  )
}
