import IconArrowDownShort from "@/icons/IconArrowDownShort";
import IconWhatsapp from "@/icons/IconWhatsApp";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter(
    { 
      weight: ['200', '700'],
      subsets: ['latin'],
    }
  )

export default function HeaderLayout(){


    
    return(
        <header className="flex flex-col md:flex-row sm:h-screen bg-black bg-hero bg-contain bg-cover">
         <div className="pb-12 text-white w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-1 justify-center items-center px-10 md:px-20">
              <Image src="/assets/logo-adriano-costa.svg" alt="Adriano Costa" width={250} height={148}/>
                <h1 className="mt-[-40px] text-6xl leading-10 text-[#D7C03A]">Que tal conversarmos sobre o seu caso?</h1>
                <p className="text-3xl mt-3 leading-8">
                  Com atendimento abrangente na capital baiana e cidades circunvizinhas, prestamos serviço de advocacia de apoio, com equipe especializada em logística jurídica composta por jovens advogados e prepostos altamente capacitados.
                </p>
                <div className="w-full mt-8 flex flex-col sm:flex-row justify-start gap-3 items-center">
                  <Link href="#areas-de-atuacao" className={`${inter.className} uppercase p-2 border rounded flex items-center justify-center text-center gap-2 w-full md:w-auto`}><IconArrowDownShort width={20} height={20} />Áreas de atuação</Link>
                  <Link href="#" className={`${inter.className} uppercase p-2 bg-green-600 rounded flex items-center gap-2 w-full text-center justify-center md:w-auto`}><IconWhatsapp width={20} height={20}/> WhatsApp</Link>
                </div>
            </div>
         </div>
         <div className="w-full h-[400px] sm:h-full bg-adriano-costa bg-contain bg-cover" />
      </header>
    )
}