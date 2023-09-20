'use client'
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'
import './calculator.sass'
import { calculateWaterForMen } from './waterCalc'
import { calculateWaterForFemale } from './waterCalc'

export default function Calculator({ searchParams }) {
    const [ langModal, setLangModal ] = useState(false)
    const [ language, setLanguage ] = useState(searchParams.lang)
    const [ gender, setGender ] = useState(false)
    const [ iScreen, setiScreen] = useState(false)
    const [ weight, setWeight ] = useState(80)
    const [ wScreen, setWScreen ] = useState(false)
    const [ activity, setActivity ] = useState(2)
    const [ result, setResult ] = useState(0)

    const resultForMen = calculateWaterForMen(weight, activity)
    const resultForFemale = calculateWaterForFemale(weight, activity)

    return (
        <div className='calcuclatorBox'>
            <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
            {langModal && <LangModal setLang={setLanguage}/>}
            <div className='titleBox'>
                <h1>How much water should you drink per day</h1>
            </div>
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

                <div className='activeHours'>
                    <h6>Physical Activity</h6>
                    <div className='hours'>
                        <h5>{activity}</h5>
                        <span>hours</span>
                    </div>
                    <input 
                        value={activity}
                        type='range'
                        onChange={(e) => setActivity(e.target.value)}
                        min='0' max="10"
                    />
                </div>
                
                <div className='resultBox'>
                    <h1>Your daily water consumption rate</h1>
                    <h1><span>{result.toFixed(1)}</span> liters per day</h1>
                </div>
                
                {gender ? <button onClick={() => setResult(resultForFemale)} className='resultButton'>Calculate</button> 
                : <button onClick={() => setResult(resultForMen)} className='resultButton'>Calculate</button>}
                
            </div>

    </div>
    )
}