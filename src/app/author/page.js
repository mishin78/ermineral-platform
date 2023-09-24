'use client'
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'
import { info } from './info';


export default function Author( { searchParams } ) {
    const [ langModal, setLangModal ] = useState(false)
    const [ language, setLanguage ] = useState(searchParams.lang)

    return (
        <div className='authorBox'>
            <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
            {langModal && <LangModal setLang={setLanguage}/>}
            {info.filter(i => i.lang === language).map(j => {
                return (
                    <div key={j.lang} className='infoBox'>
                        <h1><em>{j.title}</em></h1>
                        <p>{j.p}</p>
                    </div>
                )
            })}
        </div>
    )
}