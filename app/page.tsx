import { Hero } from '@/components/Hero'
import { Manifesto } from '@/components/Manifesto'
import { Capabilities } from '@/components/Capabilities'
import { Extras } from '@/components/Extras'
import { Specs } from '@/components/Specs'
import { Pricing } from '@/components/Pricing'
import { Install } from '@/components/Install'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="grain relative isolate">
      <Hero />
      <Manifesto />
      <Capabilities />
      <Extras />
      <Specs />
      <Pricing />
      <Install />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </main>
  )
}
