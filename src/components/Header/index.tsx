import Image from "next/image";
import styles from './header.module.css';

export function Header() {
  return (
    <header className="w-full py-6 flex items-center justify-center border-b border-gray-400 absolute"
      style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
      <div className="container px-6 flex items-center justify-between">
        <div className="h-11">
          <a href="">
            <Image
              src="/logo.png"
              width={120}
              height={200}
              alt="Logo"
            />
          </a>
        </div>
        <nav>
          <ul className="flex gap-10 text-white font-roboto ">
            <li className="relative hover:text-custom-green transition-colors ease-in duration-150">
              <a href="">Invisalign</a>
              <span className={styles.hoverSpan}></span>
            </li>
            <li className="relative hover:text-custom-green transition-colors ease-in duration-150">
              <a href="">Benefícios</a>
              <span className={styles.hoverSpan}></span>
            </li>
            <li className="relative hover:text-custom-green transition-colors ease-in duration-150">
              <a href="">Serve para mim?</a>
              <span className={styles.hoverSpan}></span>
            </li>
            <li className="relative hover:text-custom-green transition-colors ease-in duration-150">
              <a href="">Contato</a>
              <span className={styles.hoverSpan}></span>
            </li>
          </ul>
        </nav>
        <div>
          <span className="text-white text-lg font-serif">(11) 98288-5240</span>
        </div>
      </div>
    </header >
  )
}