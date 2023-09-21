import Link from 'next/link'


export default function Aside( { lang, langModal } ) {

    return (
        <aside>
            {lang === 'en' && (
            <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}
                    ><li>Hydration Calculator</li>
                </Link>
            </ul> 
            )}

            {lang === 'ua' && (
                <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                    <li>Калькулятор<br/>норми води на добу</li>
                </Link>
            </ul> 
            )} 

            {lang === 'ru' && (
                <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                    <li>Калькулятор<br />нормы воды в сутки</li>
                </Link>
            </ul> 
            )} 
        </aside>
    )
}