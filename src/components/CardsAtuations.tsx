"use client"

import IconArrowRight from "@/icons/IconArrowRight";
import { Inter } from "next/font/google";

import * as Dialog from '@radix-ui/react-dialog';
import DialogModal from "./DialogModal";
import DireitoDoConsumidor from "./atuationsContents/DireitoDoConsumidor";
import DireitoDoTrabalho from "./atuationsContents/DireitoDoTrabalho";
import DireitoPrevidenciario from "./atuationsContents/DireitoPrevidenciario";


const inter = Inter(
    { 
      weight: ['200', '400', '500', '700'],
      subsets: ['latin'],
    }
  )


const atuationsAreas = [
    {
        title: "Direito do Consumidor",
        description: "O escritório oferece consultoria e assessoria contenciosa e administrativa em demandas relacionadas à relação de consumo tanto pelo ponto de vista do Fornecedor quanto do Consumidor.",
        image: "area-direito-do-consumidor.jpg",
        content:<DireitoDoConsumidor />
    },
    {
        title: 'Direito do Trabalho',
        description: 'Contamos com profissionais especializados na área trabalhista para atender pessoas jurídica e física de forma ágil assessorando nas ações trabalhistas.',
        image: "area-direito-do-trabalho.jpg",
        content:<DireitoDoTrabalho />
    },
    {
        title: 'Direito Previdenciário',
        description: 'Expertise na área, prestamos assessoria e consultoria em Direito Previdenciário no regime próprio e geral, buscando auxiliar os segurados na programação de seus benefícios.',
        image: "area-direito-previdenciario.jpg",
        content:<DireitoPrevidenciario />
    }
]

export default function CardsAtuations(){
    return(
        <div className="flex flex-col sm:flex-row m-auto gap-5 mt-5 items-center flex-wrap">        
            {atuationsAreas.map((areas, index) => (
        <Dialog.Root key={index}>
                    
            <Dialog.Trigger asChild>
            <div className="text-[#3A3A3A] bg-white rounded object-cover my-3 rounded-xl shadow shadow-xl flex flex-col max-w-[350px] hover:bg-[#300202] hover:text-white cursor-pointer transition-all">
                <img 
                    src={`/assets/areas-de-atuacao/${areas.image}`}
                    className="bg-cover object-cover"
                    width={350} height={224}
                    alt="Foto de um martelo do direito com um carrinho de compras de mercado"    
                    />
                <div className="p-4">
                    <h2 className="text-4xl">{areas.title}</h2>
                    <p className={`${inter.className} leading-6`}>{areas.description}</p>
                    <button className={`${inter.className} uppercase mt-3 flex items-center gap-2 hover:underline`}><IconArrowRight width={20} height={20} /> Saiba Mais</button>
                </div>
                    <Dialog.Portal>
                    <Dialog.Overlay className="bg-black inset-0 fixed opacity-70" />
                    <DialogModal title={areas.title} content={areas.content}/>
                    </Dialog.Portal>
            </div>
            </Dialog.Trigger>
            </Dialog.Root>
            ))}
        </div>
    )
}