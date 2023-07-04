import { DifferentialSingle } from "./DifferentialsSingle";

export function Differentials() {
  return (
    <section className="flex justify-center items-center mt-12 mb-20">
      <div className="container flex flex-wrap justify-center gap-y-12 gap-x-8">
        <DifferentialSingle
          wIcon={50}
          hIcon={50}
          icon="/icone04.png"
          title="Discreto por ser transparente"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <DifferentialSingle
          wIcon={46}
          hIcon={46}
          icon="/icone02.png"
          title="Movél, não atrapalha para comer ou beber"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <DifferentialSingle
          wIcon={50}
          hIcon={50}
          icon="/icone03.png"
          title="Livre de fios ou metais muito mais conforto"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <DifferentialSingle
          wIcon={50}
          hIcon={50}
          icon="/icone06.png"
          title="Consultas e resultados mais rápidos"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <DifferentialSingle
          wIcon={36}
          hIcon={30}
          icon="/icone01.png"
          title="Não atrapalha para falar ou cantar"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <DifferentialSingle
          wIcon={46}
          hIcon={46}
          icon="/icone05.png"
          title="Veja os resultados antes de começar"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  )
}