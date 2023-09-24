'use client'
import Manual from '../manual';
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'


export default function Instruction( { searchParams } ) {
    const [ langModal, setLangModal ] = useState(false)
    const [ language, setLanguage ] = useState(searchParams.lang)

    return (
        <div className='instructionBox'>
            <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
            <Manual lang={language} />
            {langModal && <LangModal setLang={setLanguage}/>}
        </div>
    )
}