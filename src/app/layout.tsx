import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adriano Costa especialista em direito do Consumidor. Procura sempre reparar os danos do consumidor diante das injustiças existentes frente as grandes empresas.',
  description: 'O escritório, prima pela excelência na prestação de serviços, objetivando o melhor resultado para seus clientes. Pautamos nossas atividades na ética, comprometimento, honestidade, celeridade e no rigor técnico com que analisamos as situações que nos sãos apresentados, transmitindo aos clientes, de forma transparente, descomplicada e objetiva nossos pareceres e soluções para cada caso.',
  keywords: 'advogado consumidor advogado consumidor bahia advogado consumidor camaçari advogado consumidor lauro de freitas atraso na entrega produto com defeito produto com defeito o que fazer advogado consumidor perto de mim fraude no cartão de credito juros abusivos emprestimo nao solicitado adriano costa advogado camaçari adriano costa advogado lauro de freitas adriano costa advogado bahia golpes de emprestimo consignado cobrança e inscrição indevida falha na prestação do serviço cortes de serviços essenciais problemas bancarios problemas com voo problemas com plano de saude problemas com seguros e seguradoras nome negativado indevidamente analise contratual de juros abusivos defeito do produto'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
