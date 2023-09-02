import styles from './page.module.css'
import Link from 'next/link'


export default function InstructionLink() {

    return (
        <Link href='/about'>
            <div className={styles.inst}>
                <h1>Instruction</h1>
            </div>
        </Link>
    )
}