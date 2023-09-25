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
                    ><li>Hydration Calculator</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/author',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>About the author</li>
                </Link>
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
            </ul>}
            {lang === 'ru' && <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                    <li>Интересно</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/author',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Об авторе</li>
                </Link>
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
            </ul>}
            {lang === 'ua' && <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                <li>Цікаво</li>
                </Link>
                <span>|</span>
                <Link
                    href={{
                     pathname: '/author',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Про автора</li>
                </Link>
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
            </ul>}
            <div className='icons'>
                <img onClick={() => showLangModal(!langModal)} className='lang' src='./language-picker.svg'/>
            </div>
        </nav>
    )
}

