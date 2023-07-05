import styles from './about.module.css';
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export function About() {
  return (
    <section className="flex flex-col justify-center items-center mt-12 mb-20">
      <div className="container flex items-start justify-center mb-28 gap-x-16 xl:justify-start xl:mb-0">
        <div className="hidden ml-12 xl:block">
          <Image
            src="/face.png"
            width={780}
            height={720}
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-5 w-96 mb-28 xl:mb-0">
          <h2 className="text-2xl text-gray-400">O futuro chegou e ele é transparente!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nemo eligendi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <h2 className="text-2xl text-gray-400">
            Conheça o procedimento com a
            <span className="text-2xl text-custom-green font-medium"> Dra. Leda Monguilhott</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nemo eligendi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.bgAbout}>
        <div className="flex max-w-lg text-center">
          <RiDoubleQuotesL className="text-custom-green text-4xl ml-1" />
          <span className='text-2xl italic mt-4 text-custom-green'>
            Sensação de liberdade é perceber que você não está amarrado a nada.
          </span>
          <RiDoubleQuotesR className="text-custom-green text-4xl mr-1" />
        </div>
      </div>
    </section >
  )
}