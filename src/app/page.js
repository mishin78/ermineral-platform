'use client'
import styles from './page.module.css'
import Header from './header'
import Background from './backGround'
import InstructionLink from './instructionLink'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <InstructionLink />
    </main>
  )
}
