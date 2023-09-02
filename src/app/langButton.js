'use client'
import styles from './page.module.css'

export default function LangButton({state , text, setLang }) {

    return (
        <div onClick={() => setLang(state)} className={styles.langButtonBox}>
         <button className={styles.LangButton}>{text}</button>
         <img className={styles.flag} src={`/${state}.png`}/>
        </div>
    )
}