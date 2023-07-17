import IconArrowDownShort from "@/icons/IconArrowDownShort";
import IconWhatsapp from "@/icons/IconWhatsApp";
import Link from "next/link";

export default function DireitoDoConsumidor(){
    return(
        <div className="flex flex-col gap-10 p-6 text-[#3A3A3A] relative">
            <IconArrowDownShort width={50} height={50} color='#3A3A3A' className="fixed bottom-2 right-2 sm:hidden" />
        <ul className="flex flex-col gap-3 list-disc">
            <li>
                Propositura de ações de indenização por dano moral ou material;
            </li>
            <li>
                Defesa em ações de indenização por dano moral ou material;
            </li>
            <li>
                Ajuizamento de ações para retirada do nome dos cadastros negativos de crédito ou
                órgão de proteção ao crédito, bem como a indenização pela inscrição indevida;
            </li>
            <li>
                Propositura de ações para entrega ou substituição de produtos;
            </li>
            <li>
                Defesa em ações envolvendo relações de consumo;
            </li>
            <li>
                Defesa em ações indenizatórias, obrigações de fazer não fazer;
            </li>
            <li>
                Defesa em Ações Civis Públicas;
            </li>
            <li>
                Ações para rescisão de contrato por descumprimento contratual;
            </li>
            <li>
                Fraudes bancarias ( cartão de credito, empréstimos consignados)
            </li>
        </ul>
        <div>
            <Link href="https://api.whatsapp.com/send?phone=557187976341" target="_blank" className="font-[500] uppercase p-2 bg-green-600 rounded flex items-center gap-2 text-center justify-center text-white"><IconWhatsapp width={20} height={20}/> CHAMAR NO WHATS</Link>
        </div>
        </div>
    )
}