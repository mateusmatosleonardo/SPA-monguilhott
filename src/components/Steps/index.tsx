import Image from "next/image";

export function Steps() {
  return (
    <section className="flex justify-center items-center mb-32">
      <div className="container flex flex-col justify-center items-center px-6 gap-y-12">
        <div className="text-center">
          <h2 className="text-2xl text-black">Sem dúvidas,
            <span className="text-gray-500 font-medium"> serve para você!</span>
          </h2>
          <span className="text-2xl text-black">Veja como funciona:</span>
        </div>
        <div className="flex flex-col gap-y-12 justify-between gap-x-12 lg:flex-row lg:gap-y-0">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/round_etapas_01.jpg"
                width={250}
                height={250}
                alt="Etapa 1"
              />
              <span className="font-medium text-custom-green text-sm w-52">Aparelho tradicional e Invisalign</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <span className="font-medium text-gray-400 text-sm w-52 text-right">Tratamento móvel com resultados para toda a vida</span>
              <Image
                src="/round_etapas_03.jpg"
                width={200}
                height={200}
                alt="Etapa 1"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/round_etapas_02.jpg"
                width={150}
                height={150}
                alt="Etapa 1"
              />
              <span className="font-medium text-gray-400 text-sm w-52">Antes e após 6 meses de Invisalign</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-6">
              <div className="relative flex justify-center items-center w-20 h-20 border-gray-400 border rounded-full">
                <span className="text-4xl text-custon-green-light">1</span>
                <div className="absolute left-1/2 w-px h-12 bottom-0 top-full bg-custon-green-light transform -translate-x-1/2" />
              </div>
              <div className="flex flex-col w-60 lg:w-80">
                <span className="text-custon-green-light">
                  lorem ipsum.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est, quibusdam a commodi
                </span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="relative flex justify-center items-center w-20 h-20 border-gray-400 border rounded-full">
                <span className="text-4xl text-custon-green-light">2</span>
                <div className="absolute left-1/2 w-px h-12 top-full bg-custon-green-light transform -translate-x-1/2" />
              </div>
              <div className="flex flex-col w-60 lg:w-80">
                <span className="text-custon-green-light">
                  lorem ipsum.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est, quibusdam a commodi
                </span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="relative flex justify-center items-center w-20 h-20 border-gray-400 border rounded-full">
                <span className="text-4xl text-custon-green-light">3</span>
                <div className="absolute left-1/2 w-px h-12 top-full bg-custon-green-light transform -translate-x-1/2" />
              </div>
              <div className="flex flex-col w-60 lg:w-80">
                <span className="text-custon-green-light">
                  lorem ipsum.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est, quibusdam a commodi
                </span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="relative flex justify-center items-center w-20 h-20 border-gray-400 border rounded-full">
                <span className="text-4xl text-custon-green-light">4</span>
                <div className="absolute left-1/2 w-px h-12 top-full bg-custon-green-light transform -translate-x-1/2" />
              </div>
              <div className="flex flex-col w-60 lg:w-80">
                <span className="text-custon-green-light">
                  lorem ipsum.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est, quibusdam a commodi
                </span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex justify-center items-center w-20 h-20 border-gray-400 border rounded-full">
                <span className="text-4xl text-custon-green-light">5</span>
              </div>
              <div className="flex flex-col w-60 lg:w-80">
                <span className="text-custon-green-light">
                  lorem ipsum.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est, quibusdam a commodi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}