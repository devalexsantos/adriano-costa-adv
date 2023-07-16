import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter(
    { 
      weight: ['300', '700'],
      subsets: ['latin'],
    }
  )

export default function FooterLayout(){
    return(
        <div className={`${inter.className} bg-[#121212] py-10 flex justify-center items-center w-full`}>
            <span>© COPYRIGHT - ADRIANO COSTA ADVOCACIA - DESENVOLVIDO POR <Link className="underline" href="https://devalex.com.br" target="_blank"><strong>DEVALEX</strong></Link></span>
        </div>
    )
}