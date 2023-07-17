import IconArrowDownShort from "@/icons/IconArrowDownShort";
import IconWhatsapp from "@/icons/IconWhatsApp";
import Link from "next/link";

export default function DireitoDoTrabalho(){
    return(
        <div className="flex flex-col gap-10 p-6 text-[#3A3A3A] relative">
            <IconArrowDownShort width={50} height={50} color='#3A3A3A' className="fixed bottom-2 right-2" />
            <p>
                O Trabalho é elemento fundamental da Cidadania e da própria sobrevivência da Humanidade.
            </p>
            <p>
                Justamente por isso, a relação entre patrão e empregado precisa ser minuciosamente regulamentada, para evitar abusos do empregador.
            </p>
            <p>
                Porém, ainda há grande quantidade de empresas que não se adaptaram à estas regras e as violam constantemente.
            </p>
            <p>
                Nesse caso, a cada dia de trabalho o empregado recebe uma parcela a mais de direito, que poderá ser reivindicado posteriormente.
            </p>
            <p>
                Analisando-se as relações de trabalho podemos encontrar diversos problemas; dentre os mais comuns destacamos a não observância pelo Empregador dos seguintes pontos:    
            </p>

            <ul className="flex flex-col gap-1 list-disc">
                <li>Não pagamento de horas extras devidas;</li>
                <li>Atraso em pagamento;</li>
                <li>Supressão do intervalo para alimentação;</li>
                <li>Não pagar o salário de acordo com o cargo exercido (equiparação salarial);</li>
                <li>Pagamento de salário de forma irregular, ou seja, o Empregador faz o depósito de uma
determinada quantia e informa estarem pagas todas as verbas devidas;</li>
                <li>Rescisão irregular do contrato. Em muitos casos tem o trabalhador a garantia de
permanência no emprego mas é demitido;</li>
                <li>Não comunicação do auxílio acidente de trabalho;</li>
                <li>Não pagamento de auxílio acidente no período de responsabilidade do Empregador;</li>
                <li>Descontos realizados de maneira irregular;</li>
                <li>Não pagamento de adicionais de periculosidade ou insalubridade;</li>
                <li>Não pagamento de adicional noturno devido;</li>
                <li>As humilhações e ameaças durante o emprego podem gerar dano moral e são passíveis de indenizações.</li>
                <li>Ausência de registro na carteira de trabalho;</li>
                <li>Assédio Moral;</li>
                <li>Assédio Sexual;</li>
            </ul>

            <p>
            Se você
entre em contato com um de nossos advogados para uma avaliação do seu caso.
acredita que não recebeu tudo o que teria direito no fim da sua relação de trabalho,
            </p>    
            <div>
            <Link href="https://api.whatsapp.com/send?phone=557187976341" target="_blank" className="font-[500] uppercase p-2 bg-green-600 rounded flex items-center gap-2 text-center justify-center text-white"><IconWhatsapp width={20} height={20}/> CHAMAR NO WHATS</Link>
            </div>
        </div>
    )
}