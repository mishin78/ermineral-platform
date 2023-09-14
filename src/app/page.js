'use client'
import Header from './header'
import './styles.sass'
import LangModal from './langModal'
import MainPage from './mainPage'
import { useState, useEffect } from 'react'

export default function Home() {
  const [ langModal, setLangModal ] = useState(false)
  const [ language, setLanguage ] = useState('en')

  useEffect(() => {
    localStorage.setItem('langModal', String(langModal))

    return () => {
      localStorage.removeItem('langModal')
    }
  } ,[langModal])
  
  return (
    <main>
      <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
      {langModal && <LangModal setLang={setLanguage}/>}
      <MainPage lang={language} />
    </main>
  )
}


