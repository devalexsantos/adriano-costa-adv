import IconArrowRight from "@/icons/IconArrowRight";
import { Inter } from "next/font/google";
import Image from "next/image";

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
        image: "area-direito-do-consumidor.jpg"
    },
    {
        title: 'Direito do Trabalho',
        description: 'Contamos com profissionais especializados na área trabalhista para atender pessoas jurídica e física de forma ágil assessorando nas ações trabalhistas.',
        image: "area-direito-do-trabalho.jpg"
    },
    {
        title: 'Direito Previdenciário',
        description: 'Expertise na área, prestamos assessoria e consultoria em Direito Previdenciário no regime próprio e geral, buscando auxiliar os segurados na programação de seus benefícios.',
        image: "area-direito-previdenciario.jpg"
    }
]

export default function CardsAtuations(){
    return(
        <div className="flex flex-col sm:flex-row m-auto gap-5 mt-10 items-center flex-wrap">
            {atuationsAreas.map((areas, index) => (
            <div key={index} className="text-[#3A3A3A] bg-white rounded object-cover my-3 rounded-xl shadow shadow-xl flex flex-col max-w-[350px] hover:bg-[#300202] hover:text-white hover:cursor-pointer transition-all">
                <Image 
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
            </div>
            ))}
        </div>
    )
}