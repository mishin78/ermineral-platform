'use client'
import Header from './header'
import Footer from './footer'
import './styles.sass'
import LangModal from './langModal'
import MainPage from './mainPage'
import Aside from './aside'
import { useState, useEffect } from 'react'


export default function Home({ searchParams }) {
  const [ langModal, setLangModal ] = useState(false)
  const [ language, setLanguage ] = useState('en')

  useEffect(() => {
    if(searchParams.lang) setLanguage(searchParams.lang)
  }, [searchParams.lang])
  
  return (
    <main>
      <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
      {langModal && <LangModal setLang={setLanguage}/>}
        <MainPage lang={language} />
      <Footer />
    </main>
  )
}


