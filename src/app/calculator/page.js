'use client'
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'
import Image from 'next/image';


export default function Calculator({ searchParams }) {
    const [ langModal, setLangModal ] = useState(false)
    const [ language, setLanguage ] = useState(searchParams.lang)
    const [ gender, setGender ] = useState(true)
    const [ iScreen, setiScreen] = useState(false)
    const [ weight, setWeight ] = useState(80)
    const [ wScreen, setWScreen ] = useState(false)

    return (
        <div className='calcuclatorBox'>
            <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
            {langModal && <LangModal setLang={setLanguage}/>}
            <div className='testBox'>
                {!iScreen && <div className='gender'>
                    <div className='up'>
                        <h6>Gender</h6>
                        <span onClick={() => setiScreen(true)}>i</span>
                    </div>
                    <hr />
                    <div className='images'>
                        <img onClick={() => setGender(false)} src={gender ? '/male-gray.svg' : '/male.svg'}/>
                        <img onClick={() => setGender(true)} src={gender ? '/female.svg' : '/female-gray.svg'}/>
                    </div>
                </div>}
                {iScreen && <div className='genderScreen'>
                    <div className='up'>
                        <h6>Gender</h6>
                        <img onClick={() => setiScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='images'>
                        <h1>Every day the kidneys process around 180 litres of blood and produce about 1-1.5 litres of urine.</h1>
                    </div>
                </div>}
                
                {!wScreen && <div className='weight'>
                    <div className='up'>
                        <h6>Weight</h6>
                        <span onClick={() => setWScreen(true)}>i</span>
                    </div>
                    <hr />
                    <div className='numberBox'>
                        <button onClick={() => setWeight(weight - 1)}>-</button>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        /><span>kg</span>
                        <button onClick={() => setWeight(weight + 1)}>+</button>
                    </div>
                </div>}

                {wScreen && <div className='weightBlue'>
                    <div className='upBlue'>
                        <h6>Weight</h6>
                        <img onClick={() => setWScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='text'>
                        <h1>60% of our body is water. For a person weighing 70kg, that means 42 kg or 42 litres!</h1>
                    </div>
                </div>}
                
            </div>

    </div>
    )
}