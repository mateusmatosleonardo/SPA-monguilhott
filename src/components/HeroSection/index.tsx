import styles from './hero.module.css';
import Image from "next/image";

export function HeroSection() {
  return (
    <section>
      <div className={styles.heroSection}>
        <div className='container flex flex-col items-start justify-center px-6 gap-12 xl:gap-20 lg:flex-row'>
          <div className='flex w-full mb-32 flex-col gap-7 lg:mb-0 xl:w-2/4 lg:w-2/4'>
            <h2 className='text-4xl text-custom-green'>
              Seu <span className='text-4xl font-bold'>sorriso perfeito</span> através de um tratamento discreto e inovador,
              <span className='text-4xl font-bold'> em Florianópolis.</span>
            </h2>
            <span>Alinhe seus dentes com conforto, praticidade e liberdade!
              <span className='font-bold'> Deixe seu email</span>
              <span> para que a Dr.Leda possa entrar em contato e </span>
              <span className='font-bold'> agendar uma avaliação gratuita.</span>
            </span>
            <form action="" className='flex flex-col gap-4 md:flex-row lg:flex-col xl:flex-row'>
              <input
                type="email"
                name='email'
                placeholder='E-mail'
                className='w-60 h-12 rounded-full border-gray-400 border-2 outline-none px-4 text-gray-400'
              />
              <button
                className='w-60 h-12 text-white text-xs font-bold bg-custom-green rounded-full'>
                AGENDAR AVALIAÇÃO GRATUITA
              </button>
            </form>
            <span>Ligue para a clínica Monguilhott: <span className='font-bold'> (11) 98288-5240</span></span>
          </div>
          <div className='hidden lg:block'>
            <div className='grid grid-cols-2 gap-10'>
              <Image
                src="/circle01.png"
                width={215}
                height={215}
                alt="circle01"
              />
              <Image
                src="/circle02.png"
                width={215}
                height={215}
                alt="circle02"
              />
              <Image
                src="/circle03.png"
                width={215}
                height={215}
                alt="circle03"
              />
              <Image
                src="/circle04.png"
                width={215}
                height={215}
                alt="circle04"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}