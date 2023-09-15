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
                <li>Test. How well do you know your body?</li>
                <li>Articles</li>
            </ul> 
            )}

            {lang === 'ua' && (
                <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                    <li>Калькулятор норми води на добу</li>
                </Link>
                <li>Тест. Наскільки добре ти знаєш своє тіло?</li>
                <li>Статті</li>
            </ul> 
            )} 

            {lang === 'ru' && (
                <ul>
                <Link
                    href={{
                     pathname: '/calculator',
                     query: { lang: `${lang}`, langModal: `${langModal}`},
                    }}>
                    <li>Калькулятор нормы воды в сутки</li>
                </Link>
                <li>Тест. Насколько хорошо вы знаете свое тело?</li>
                <li>Статьи</li>
            </ul> 
            )} 
        </aside>
    )
}