import CardsAtuations from "./CardsAtuations";
import WhatsAppButton from "./WhatsAppButton";

export default function CardsSessionLayout(){
    return(
        <div id="areas-de-atuacao" className="w-full p-5 md:p-20 flex flex-col justify-between">
            <h1 className="mt-5 text-5xl sm:text-6xl leading-10 text-[#3A3A3A] flex items-center justify-center">Áreas de atuação</h1>
            <CardsAtuations />
            <div className="w-full flex justify-center">
            <WhatsAppButton />
            </div>
      </div>
    )
}