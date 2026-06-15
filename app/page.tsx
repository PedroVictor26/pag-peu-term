import { Hero } from '@/components/Hero'
import { Pain } from '@/components/Pain'
import { Wizard } from '@/components/Wizard'
import { Agentes } from '@/components/Agentes'
import { Companion } from '@/components/Companion'
import { Embutidos } from '@/components/Embutidos'
import { Monitor } from '@/components/Monitor'
import { Extras } from '@/components/Extras'
import { Manifesto } from '@/components/Manifesto'
import { Pricing } from '@/components/Pricing'
import { Install } from '@/components/Install'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="grain relative isolate">
      <Hero />
      <Pain />
      <Wizard />
      <Agentes />
      <Companion />
      <Embutidos />
      <Monitor />
      <Extras />
      <Manifesto />
      <Pricing />
      <Install />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </main>
  )
}
