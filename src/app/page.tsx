import Image from 'next/image'
import styles from '../app/styles/styles.module.css'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <div className={styles.show}>

        </div>
      </section>
      <section>

      </section>
    </main>
  )
}
