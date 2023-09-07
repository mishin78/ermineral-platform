import './styles.sass'


export default function LangModal({ setLang }) {

    return (
        <div className='langModal'>
            <li onClick={() => setLang('ua')}>Українська</li>
            <li onClick={() => setLang('en')}>English</li>
            <li onClick={() => setLang('ru')}>Русский</li>
        </div>
    )
}