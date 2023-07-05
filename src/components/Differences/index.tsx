import Image from "next/image";

export function Differences() {
  return (
    <section className="flex justify-center items-center mb-32">
      <div className="container flex flex-col justify-center items-center gap-y-12">
        <div className="text-center">
          <span className="text-2xl text-black">Veja a diferença entre:</span>
          <br />
          <span className="text-2xl text-black font-medium">
            modo tradicional
            <span className="text-2xl text-black font-normal"> e o</span>
            <span className="text-2xl text-custon-green-light font-medium"> Invisalign</span>
          </span>
        </div>
        <div className="flex flex-col justify-center gap-y-8 md:gap-x-8 md:flex-row">
          <div className="flex flex-col text-center gap-y-6">
            <span className="text-2xl text-gray-400">Tradicional</span>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Aparelho fixo</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Acumula sujeira</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Incomoda esteticamente</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Demora a ver resultados</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Atrapalha para comer</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
              <div className="relative max-w-max">
                <span className="text-lg font-medium text-gray-500">Desconfortáveis</span>
                <div className="absolute w-full h-TwoPx bg-red-400 origin-bottom -rotate-3 top-1/2" />
              </div>
            </div>
          </div>
          <div className="w-80 h-TwoPx bg-gray-300 md:h-80 md:w-TwoPx" />
          <div className="flex flex-col items-center text-center gap-y-5">
            <div>
              <Image
                src="/invisalign.jpg"
                width={130}
                height={50}
                alt="Invisalign"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <span className="text-lg font-medium text-custon-green-light">
                Completamente
                <span className="text-lg font-medium text-custom-green"> móvel</span>
              </span>
              <span className="text-lg font-medium text-custon-green-light">
                Tira para comer e pode lavar
              </span>
              <span className="text-lg font-medium text-custom-green">
                100% transparente
              </span>
              <span className="text-lg font-medium text-custon-green-light">
                Resultados rápidos
              </span>
              <span className="text-lg font-medium text-custon-green-light">
                Muito confortáveis
              </span>
              <span className="text-lg font-medium text-custon-green-light">
                Gengivas mais saudáveis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}