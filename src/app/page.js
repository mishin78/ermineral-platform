'use client'
import Header from './header'
import Image from 'next/image'
import './styles.sass'
import LangModal from './langModal'
import MainPage from './mainPage'
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

        <div className='images'>
          <img src='/animals.gif'/>
          <img src='/food.gif'/>
        </div>

        <MainPage lang={language} />
    </main>
  )
}


