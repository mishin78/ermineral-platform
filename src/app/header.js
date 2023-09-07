import './styles.sass'
import Link from 'next/link'
// import Contacts from './contacts'


export default function Header({ lang, langModal, showLangModal }) {
 
    return (
        <nav>
            <h1 className='titleLogo'>ERMINERAL<span className='r'>®</span></h1>
            {lang === 'en' && <ul>
                <li>Partnership</li>
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
            </ul>}
            {lang === 'ru' && <ul>
                <li>Партнерство</li>
                <span>|</span>
                <li>Об авторе</li>
                <span>|</span>
                <li>Контакты</li>
                <span>|</span>
                <Link href='/about'><li>Инструкции</li></Link>
                <span>|</span>
                <li>Рекомендации</li>
                <span>|</span>
                <li>Игра</li>
            </ul>}
            {lang === 'ua' && <ul>
                <li>Партнерство</li>
                <span>|</span>
                <li>Про автора</li>
                <span>|</span>
                <li>Контакти</li>
                <span>|</span>
                <Link href='/about'><li>Інструкція</li></Link>
                <span>|</span>
                <li>Рекомендації</li>
                <span>|</span>
                <li>Гра</li>
            </ul>}
            <div className='icons'>
                <img src='./dark.svg'/>
                <img onClick={() => showLangModal(!langModal)} className='lang' src='./lan.svg'/>
            </div>
        </nav>
    )
}

