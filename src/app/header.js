import './styles.sass'
import Link from 'next/link'


export default function Header({ lang, langModal, showLangModal }) {

    return (
        <nav>
            <Link href={{ pathname: '/', query: { lang: `${lang}`},}}>
                <h1 className='titleLogo'>ERMINERAL<span className='r'>®</span></h1>
            </Link>
            {lang === 'en' && <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Water cal</li>
                </Link>
                <span>|</span>
                <li>About the author</li>
                <span>|</span>
                <li>Contacts</li>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/about',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Instruction</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/recommendations',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Recommendations</li>
                </Link>
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
                <Link
                    href={{
                     pathname: '/about',
                     query: {lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Инструкция</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/recommendations',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Рекомендации</li>
                </Link>
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
                <Link
                    href={{
                     pathname: '/about',
                     query: {lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Інструкція</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/recommendations',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Рекомендації</li>
                </Link>
                <span>|</span>
                <li>Гра</li>
            </ul>}
            <div className='icons'>
                <img className='darkMode' src='./dark-mode.svg'/>
                <img onClick={() => showLangModal(!langModal)} className='lang' src='./language-picker.svg'/>
            </div>
        </nav>
    )
}

