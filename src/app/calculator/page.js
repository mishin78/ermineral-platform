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
            {language === 'en' && <><div className='titleBox'>
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
                
            </div></>}


            {language === 'ua' && <><div className='titleBox'>
                <h1>Скільки води потрібно випивати на день</h1>
            </div>
            <div className='testBox'>
                {!iScreen && <div className='gender'>
                    <div className='up'>
                        <h6>Стать</h6>
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
                        <h6>Стать</h6>
                        <img onClick={() => setiScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='images'>
                        <h1>Щодня нирки переробляють близько 180 літрів крові і виробляють близько 1-1,5 літрів сечі.</h1>
                    </div>
                </div>}
                
                {!wScreen && <div className='weight'>
                    <div className='up'>
                        <h6>Вага</h6>
                        <span onClick={() => setWScreen(true)}>i</span>
                    </div>
                    <hr />
                    <div className='numberBox'>
                        <button onClick={() => setWeight(weight - 1)}>-</button>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        /><span>кг</span>
                        <button onClick={() => setWeight(weight + 1)}>+</button>
                    </div>
                </div>}

                {wScreen && <div className='weightBlue'>
                    <div className='upBlue'>
                        <h6>Вага</h6>
                        <img onClick={() => setWScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='text'>
                        <h1>60% нашого тіла - це вода. Для людини вагою 70 кг це означає 42 кг або 42 літри!</h1>
                    </div>
                </div>}

                <div className='activeHours'>
                    <h6>Фізична активність</h6>
                    <div className='hours'>
                        <h5>{activity}</h5>
                        <span>годин</span>
                    </div>
                    <input 
                        value={activity}
                        type='range'
                        onChange={(e) => setActivity(e.target.value)}
                        min='0' max="10"
                    />
                </div>
                
                <div className='resultBox'>
                    <h1>Ваша добова норма споживання води</h1>
                    <h1><span>{result.toFixed(1)}</span> літрів на день</h1>
                </div>
                
                {gender ? <button onClick={() => setResult(resultForFemale)} className='resultButton'>Розрахувати</button> 
                : <button onClick={() => setResult(resultForMen)} className='resultButton'>Розрахувати</button>}
                
            </div></>}


            {language === 'ru' && <><div className='titleBox'>
                <h1>Сколько воды нужно пить в день</h1>
            </div>
            <div className='testBox'>
                {!iScreen && <div className='gender'>
                    <div className='up'>
                        <h6>Пол</h6>
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
                        <h6>Пол</h6>
                        <img onClick={() => setiScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='images'>
                        <h1>Ежедневно почки перерабатывают около 180 литров крови и выделяют около 1-1,5 литров мочи.</h1>
                    </div>
                </div>}
                
                {!wScreen && <div className='weight'>
                    <div className='up'>
                        <h6>Вес</h6>
                        <span onClick={() => setWScreen(true)}>i</span>
                    </div>
                    <hr />
                    <div className='numberBox'>
                        <button onClick={() => setWeight(weight - 1)}>-</button>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        /><span>кг</span>
                        <button onClick={() => setWeight(weight + 1)}>+</button>
                    </div>
                </div>}

                {wScreen && <div className='weightBlue'>
                    <div className='upBlue'>
                        <h6>Вес</h6>
                        <img onClick={() => setWScreen(false)} src='close-white.svg' />
                    </div>
                    <hr />
                    <div className='text'>
                        <h1>60% нашего тела составляет вода. Для человека весом 70 кг это означает 42 кг или 42 литра!</h1>
                    </div>
                </div>}

                <div className='activeHours'>
                    <h6>Физическая активность</h6>
                    <div className='hours'>
                        <h5>{activity}</h5>
                        <span>часы</span>
                    </div>
                    <input 
                        value={activity}
                        type='range'
                        onChange={(e) => setActivity(e.target.value)}
                        min='0' max="10"
                    />
                </div>
                
                <div className='resultBox'>
                    <h1>Ваша суточная норма потребления воды</h1>
                    <h1><span>{result.toFixed(1)}</span> литров в сутки</h1>
                </div>
                
                {gender ? <button onClick={() => setResult(resultForFemale)} className='resultButton'>Рассчитать</button> 
                : <button onClick={() => setResult(resultForMen)} className='resultButton'>Рассчитать</button>}
                
            </div></>}
    </div>
    )
}