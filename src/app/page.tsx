import AboutLayout from '@/components/AboutLayout'
import CardsAtuations from '@/components/CardsAtuations'
import CardsSessionLayout from '@/components/CardsSessionLayout'
import HeaderLayout from '@/components/HeaderLayout'
import Separator from '@/components/Separator'
import SliderPhotos from '@/components/SliderPhotos'
import IconWhatsapp from '@/icons/IconWhatsApp'
import { Inter, Lateef } from 'next/font/google'
import Link from 'next/link'

const inter = Inter(
  { 
    weight: ['200', '500', '700'],
    subsets: ['latin'],
  }
)

const lateef = Lateef(
  { 
    weight: ['200', '500', '600', '700'],
    subsets: ['latin'],
  }
)

export default function Home() {
  return (
    <main className={`flex flex-col ${lateef.className} items-center`}>
      <HeaderLayout />
      <Separator />
      <AboutLayout />
      <div className="w-full bg-[#300202] p-4 text-[#3A3A3A]">
        <SliderPhotos />
      </div>
      <CardsSessionLayout />
      <div className="w-full p-10 sm:p-20 bg-call-to-action bg-fixed bg-center bg-cover flex flex-col gap-4 justify-center items-center">
        <h1 className="max-w-[500px] text-center font-[500] text-6xl leading-10 text-[#D7C03A]">Que tal conversarmos sobre o seu caso?</h1>
        <Link href="#" className={`${inter.className} font-[500] mt-3 p-2 bg-green-600 rounded flex items-center gap-2 w-full text-center justify-center md:w-auto`}><IconWhatsapp width={20} height={20}/> Chamar no WhatsApp</Link>
      </div>
    </main>
  )
}
