"use client"

import IconBxMap from "@/icons/IconBxMap";
import IconDividerVertical from "@/icons/IconDividerVertical";
import IconPhoneCall from "@/icons/IconPhoneCall";
import IconWhatsapp from "@/icons/IconWhatsApp";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Resend } from 'resend';

const inter = Inter(
    { 
      weight: ['200', '500', '700'],
      subsets: ['latin'],
    }
  )

  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  const apiResend = process.env.NEXT_PUBLIC_RESEND_API as string
  const resend = new Resend(apiResend);

export default function ContactLayout(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => 
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'devalexsantos@gmail.com',
        subject: 'Nova mensagem do site',
        html: `
        <p>Opa Adriano, beleza? Você recebeu uma nova mensagem através do formulário de contato do seu site</p>
        <p>Confira a mensagem abaixo:</p>
        <strong>Nome:</strong> ${data.name}
        <strong>E-mail:</strong> ${data.email}<br/>
        <strong>Telefone:</strong> ${data.phone}<br/>
        <strong>Mensagem:</strong> ${data.message}<br/>
        `
      })
    );


    return(
        <div className="bg-[#300202] py-20 w-full text-2xl flex flex-col sm:flex-row">
        <div className="w-full justify-center flex flex-col items-center">
          <h1 className="mt-5 text-6xl leading-10 text-[#D7C03A] flex items-center">
            <IconDividerVertical /> Mande uma mensagem
          </h1>
          <form onSubmit={onSubmit} className="mt-4 w-full max-w-[450px] flex flex-col gap-3 items-center justify-center p-6">
            <input {...register("name")} required className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='Nome' />
            <input {...register("email")} type="email" required className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='E-mail' />
            <input {...register("phone")} required className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none" placeholder='Telefone / WhatsApp' />
            <textarea {...register("message")} required className="bg-[#3A0909] rounded w-full py-2 px-4 outline-none h-[150px]" placeholder='Mensagem' />
            <button className="text-[#300202] py-1 px-4 bg-white rounded" type='submit'>ENVIAR</button>
          </form>
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center mt-6">
          <h2 className="text-4xl mb-4">Informações para contato:</h2>
          <Link href="https://api.whatsapp.com/send?phone=557187976341" target="_blank" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconWhatsapp width={24} height={24} /> WhatsApp</span>
            <span className="text-sm">chamar no WhatsApp</span>
          </Link>

          <Link href="tel:5571987976341" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconPhoneCall width={24} height={24} /> Telefone</span>
            <span className="text-sm">+55 (71) 8797-6341</span>
          </Link>

          <Link href="https://goo.gl/maps/aTVRuMfG5bivKo2y5" target="_blank" className={`${inter.className} flex flex-col justify-center items-center`}>
            <span className="flex items-center gap-2 text-md"><IconBxMap width={24} height={24} /> Endereço</span>
            <span className="text-sm text-center">Av. Luis Viana Filho, 7532, <br/>Edf Cosmopolitan, Sala 506 Alphaville I, <br/>Salvador-BA <br/>CEP: 41701-005</span>
          </Link>
        </div>
      </div>
    )
}