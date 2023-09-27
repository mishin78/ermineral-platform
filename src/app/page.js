'use client'
import Header from './header'
import Image from 'next/image'
import './styles.sass'
import LangModal from './langModal'
import MainPage from './mainPage'
import { useState, useEffect } from 'react'
import Head from 'next/head';


export default function Home({ searchParams }) {
  const [ langModal, setLangModal ] = useState(false)
  const [ language, setLanguage ] = useState('en')

  useEffect(() => {
    if(searchParams.lang) setLanguage(searchParams.lang)
  }, [searchParams.lang])
  
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="green.png" />
      </Head>
      <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
      {langModal && <LangModal setLang={setLanguage}/>}
      <MainPage lang={language} />
    </main>
  )
}


