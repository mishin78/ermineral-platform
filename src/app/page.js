'use client'
import styles from './page.module.css'
import Header from './header'
import Link from 'next/link'


export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <Link href='/about'>
        <div className={styles.inst}>
        <h1>Инструкция</h1>
        <hr className={styles.l}/>
        <hr className={styles.l}/>
        <p>Показания к применению. Применяют у взрослых и детей в качестве иммуномодулятора (вещества, влияющего на защитные силы организма) и биостимулятора (вещества, повышающего обмен веществ, стимулирующего защитные силы организма) при состояниях и заболеваниях, сопровождающихся понижением иммунитета, в том числе при острых и хронических гнойновоспалительных заболеваниях костей и мягких тканей; острых и хронических вирусных и бактериальных инфекциях...</p>
        </div> 
    </Link>
    </main>
  )
}
