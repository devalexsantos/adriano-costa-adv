import IconWhatsapp from "@/icons/IconWhatsApp";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter(
    { 
      weight: ['200', '500', '700'],
      subsets: ['latin'],
    }
  )

export default function CallToAction(){
    return(
      <div className="w-full py-10 px-20 sm:p-20 bg-call-to-action bg-fixed bg-center bg-cover flex flex-col gap-4 justify-center items-center">
        <h1 className="max-w-[500px] text-center font-[500] text-6xl leading-10 text-[#D7C03A]">Que tal conversarmos sobre o seu caso?</h1>
        <Link href="#" className={`${inter.className} font-[500] mt-3 p-2 bg-green-600 rounded flex items-center gap-2 w-full text-center justify-center mb-10 md:w-auto`}><IconWhatsapp width={20} height={20}/> Chamar no WhatsApp</Link>
      </div>    
    )
}