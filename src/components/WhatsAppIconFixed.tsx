"use client"
import { motion } from "framer-motion"
import Link from "next/link";

export default function WhatsAppIconFixed(){
    return(
        <Link href="https://api.whatsapp.com/send?phone=557187976341" target="_blank">
        <motion.div 
        className="fixed z-20 top-5 right-5"
        animate={{ scale: [1, 0.8, 1] }}
        transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
        }}
        >
            <img src="assets/whatsapp-svgrepo-com.svg" width={50} height={50} alt="Símbolo do WhatsApp"/>
        </motion.div>
        </Link>
    )
}