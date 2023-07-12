import IconDividerVertical from "@/icons/IconDividerVertical";
import Image from "next/image";

export default function AboutLayout(){
    return(
        <div className="w-full flex flex-col bg-[#3A0909] p-10 md:p-20">
        <h1 className="mt-5 text-6xl leading-10 text-[#D7C03A] flex items-center"><IconDividerVertical /> Sobre Nós</h1>
        <p className="mt-5 text-3xl mt-3 leading-8 text-justify">
            O escritório, prima pela excelência na prestação de serviços, objetivando o melhor resultado para seus clientes.
            Pautamos nossas atividades na ética, comprometimento, honestidade, celeridade e no rigor técnico com que analisamos as situações que nos sãos apresentados, transmitindo aos clientes, de forma transparente, descomplicada e objetiva nossos pareceres e soluções para cada caso.
        </p>

        <p className="mt-10 text-3xl mt-3 leading-8 text-justify">
            <strong>CAUSA GANHA DOUTOR!!!</strong><br/>
            Essa é uma afirmativa muito comum. Seria antiético e até mesmo ilegal garantirmos qualquer resultado, pois isso depende de diversos fatores, incluindo formas de contratação, provas a serem feitas e entendimento dos julgadores. Inclusive MUITO CUIDADO com quem promete resultados! Nossa equipe sempre classifica os casos entre “pouco prováveis de êxito”, “prováveis de êxito” e “muito prováveis de êxito”, baseado em todos os casos em que já atuamos e acompanhamos na jurisprudência. Faremos uma análise inicial sem compromisso e somente iremos recomendar que você ingresse com a ação se for muito provável de êxito! Estamos disponíveis agora!! Clique aqui e converse com dos nosso especialistas
        </p>

        <div className="flex flex-col items-center sm:flex-row justify-center mt-10 gap-6">
            <div className="flex flex-col items-center justify-center max-w-[300px] text-center">
              <Image src="/assets/atendimento-personalizado.png" width={75} height={75} alt="Ícone de uma pessoa com um símbolo de um check." />
              <h2 className="text-3xl font-bold">Atendimento Personalizado</h2>
              <p className="text-2xl leading-6">
                Atendimento direcionado ao que você precisa, as suas reais necessidades.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center max-w-[300px] text-center">
              <Image src="/assets/controle-de-qualidade.png" width={75} height={75} alt="Ícone de uma pessoa com um símbolo de um check." />
            <h2 className="text-3xl font-bold">Controle de Qualidade</h2>
              <p className="text-2xl leading-6">
                Rigoroso controle de qualidade, proporcionando serviços em grau de excelência.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center max-w-[300px] text-center">
              <Image src="/assets/custo-beneficio.png" width={75} height={75} alt="Ícone de uma pessoa com um símbolo de um check." />
            <h2 className="text-3xl font-bold">Custo Benefício</h2>
              <p className="text-2xl leading-6">
                Propor excelente custobenefício aos nossos clientes
              </p>
            </div>
        </div>
      </div>
    )
}