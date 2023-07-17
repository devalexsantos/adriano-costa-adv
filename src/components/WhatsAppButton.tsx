"use client"

import IconWhatsapp from "@/icons/IconWhatsApp"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter(
    { 
      weight: ['700'],
      subsets: ['latin'],
    }
  )

export default function WhatsAppButton(){
    return(
        <Link className="w-full flex justify-center" href="https://api.whatsapp.com/send?phone=557187976341" target="_blank">
        <motion.button 
        animate={{ scale: [1, 1.05, 1], boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}
        transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
        }}
        className={`${inter.className} mt-5 shadow shadow-white font-[500] uppercase py-3 px-6 border border-white border-opacity-10 bg-green-600 rounded-full flex items-center gap-2 w-full text-center justify-center max-w-[300px]`}>
            <IconWhatsapp width={24} height={24} /> WhatsApp
        </motion.button>
        </Link>
    )
}