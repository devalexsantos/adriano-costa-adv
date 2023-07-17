import IconArrowDownShort from "@/icons/IconArrowDownShort";
import IconWhatsapp from "@/icons/IconWhatsApp";
import Link from "next/link";

export default function DireitoPrevidenciario(){
    return(
        <div className="flex flex-col gap-10 p-6 text-[#3A3A3A] relative">
            <IconArrowDownShort width={50} height={50} color='#3A3A3A' className="fixed bottom-2 right-2 sm:hidden" />
            <p>
                Expertise na área, prestamos assessoria e consultoria em Direito Previdenciário no regime próprio e geral, buscando auxiliar os segurados na programação de seus benefícios.
            </p>
            <p>
                Com a apuração do tempo de contribuição, simulação de valores e análise de documentos, é possível buscar o melhor benefício de aposentadoria. Atuamos também no contencioso e administrativo, desde o requerimento até a fase recursal, revertendo decisões arbitrárias de indeferimento e cessação de benefícios, para segurados empregados, autônomos, especiais e benefícios por incapacidade.
            </p>
            <p>
                Efetuamos cálculos e ajuizamos ações de revisão de benefícios equivocados. Oferecemos ainda serviço diferenciado de elaboração de defesas para empresas demandadas pelo INSS em ações de regresso em casos de benefícios acidentários, dentre outros.
            </p>

            <div>
                <Link href="https://api.whatsapp.com/send?phone=557187976341" target="_blank" className="font-[500] uppercase p-2 bg-green-600 rounded flex items-center gap-2 text-center justify-center text-white"><IconWhatsapp width={20} height={20}/> CHAMAR NO WHATS</Link>
            </div>
        </div>
    )
}