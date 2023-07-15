import IconBxMap from "@/icons/IconBxMap";
import IconDividerVertical from "@/icons/IconDividerVertical";
import IconPhoneCall from "@/icons/IconPhoneCall";
import IconWhatsapp from "@/icons/IconWhatsApp";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter(
    { 
      weight: ['200', '500', '700'],
      subsets: ['latin'],
    }
  )

export default function ContactLayout(){
    return(
        <div className="bg-[#300202] py-20 w-full text-2xl flex flex-col sm:flex-row">
        <div className="w-full justify-center flex flex-col items-center">
          <h1 className="mt-5 text-6xl leading-10 text-[#D7C03A] flex items-center">
            <IconDividerVertical /> Mande uma mensagem
          </h1>
          <form className="mt-4 w-full max-w-[450px] flex flex-col gap-3 items-center justify-center p-6">
            <input className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='Nome' />
            <input className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='E-mail' />
            <input className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='Telefone / WhatsApp' />
            <textarea className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none h-[150px]" placeholder='Mensagem' />
            <button className="text-[#300202] py-1 px-4 bg-white rounded" type='submit'>ENVIAR</button>
          </form>
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center mt-6">
          <h2 className="text-4xl mb-4">Informações para contato:</h2>
          <Link href="/" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconWhatsapp width={24} height={24} /> WhatsApp</span>
            <span className="text-sm">chamar no WhatsApp</span>
          </Link>

          <Link href="/" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconPhoneCall width={24} height={24} /> Telefone</span>
            <span className="text-sm">+55 (71) 8797-6341</span>
          </Link>

          <Link href="/" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconBxMap width={24} height={24} /> Endereço</span>
            <span className="text-sm text-center">Av. Luis Viana Filho, 7532, <br/>Edf Cosmopolitan, Sala 506 Alphaville I, <br/>Salvador-BA <br/>CEP: 41701-005</span>
          </Link>
        </div>
      </div>
    )
}