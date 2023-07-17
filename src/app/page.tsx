import AboutLayout from '@/components/AboutLayout'
import CallToAction from '@/components/CallToAction'
import CardsSessionLayout from '@/components/CardsSessionLayout'
import ContactLayout from '@/components/ContactLayout'
import FooterLayout from '@/components/FooterLayout'
import HeaderLayout from '@/components/HeaderLayout'
import Separator from '@/components/Separator'
import SliderPhotos from '@/components/SliderPhotos'
import WhatsAppIconFixed from '@/components/WhatsAppIconFixed'
import { Lateef } from 'next/font/google'



const lateef = Lateef(
  { 
    weight: ['200', '500', '600', '700'],
    subsets: ['latin'],
  }
)

export default function Home() {
  return (
    <main className={`flex flex-col ${lateef.className} items-center`}>
      <WhatsAppIconFixed />
      <HeaderLayout />
      <Separator />
      <AboutLayout />
      <div className="w-full bg-[#300202] p-4 text-[#3A3A3A]">
        <SliderPhotos />
      </div>
      <CardsSessionLayout />
      <CallToAction />
      <Separator />
      <ContactLayout />
      <FooterLayout />
    </main>
  )
}
