import './styles.sass'
import Link from 'next/link'
// import Contacts from './contacts'


export default function Header() {
 
    return (
        <nav>
            <h1 className='titleLogo'>ERMINERAL</h1>
            <ul>
                <li>Partnership </li>
                <span>|</span>
                <li>About the author</li>
                <span>|</span>
                <li>Contacts</li>
                <span>|</span>
                <Link href='/about'><li>Instructions</li></Link>
                <span>|</span>
                <li>Recommendations</li>
                <span>|</span>
                <li>Game</li>
            </ul>
            <div className='icons'>
                <img src='./dark.svg'/>
                <img src='./lan.svg'/>
            </div>
        </nav>
    )
}

