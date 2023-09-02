import styles from './page.module.css'
import Link from 'next/link'


export default function Header() {

    return (
        <div className={styles.up}>
            <div className={styles.upperHeader}>
                <h4 style={{color: "#FFE501", fontSize: "1.2rem"}}>Contacts</h4>
                <h4 className={styles.socialWords}>Facebook</h4>
                <h4 className={styles.socialWords}>Viber</h4>
                <h4 className={styles.socialWords}>Telegram</h4>
                <h4 className={styles.socialWords}>Whatsapp</h4>
            </div>
            <div className={styles.header}>
                <h1 className={styles.titleLogo}>ERMINERAL</h1>
            </div>
        </div>
    )
}