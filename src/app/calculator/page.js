'use client'
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'
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
                <h1>How much water should you drink?</h1>
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
            <div className='article'>
                <p>How much water should you drink a day? Most people need about four to six cups of plain water each day. But it may be surprising to learn that water intake is an individualized number.</p>
                <p>While the daily four-to-six cup rule is for generally healthy people, that amount differs based on how much water they take in from other beverages and food sources. Also, certain health conditions, medications, activity level, and ambient temperature influence total daily water intake.</p>
                <p>Unfortunately, many of us arent getting enough to drink, especially older adults. Well help you understand how much water you need to drink in a day to stay healthy.</p>
                <ul>
                    Benefits of drinking water
                    <li>carrying nutrients and oxygen to your cells</li>
                    <li>flushing bacteria from your bladder</li>
                    <li>aiding digestion</li>
                    <li>preventing constipation</li>
                    <li>normalizing blood pressure</li>
                    <li>cushioning joints</li>
                    <li>protecting organs and tissues</li>
                    <li>regulating body temperature</li>
                    <li>maintaining electrolyte (sodium) balance</li>
                </ul>
                <img className='glass' src='glass.jpg'/>
                <h4>Fluids to keep you hydrated</h4>
                <p>Water is not your only choice when it comes to hydration. All beverages containing water contribute toward your daily needs. And some people even tout the benefits of <a href='https://www.health.harvard.edu/blog/when-replenishing-fluids-does-milk-beat-water-202211142849'>milk</a> for hydration.</p>
                <p>And its a myth that caffeinated beverages are dehydrating because they make you urinate. They do, but over the course of the day, the water from these beverages still leads to a net positive contribution to total fluid consumption.</p>
                <p>Of course, there are many reasons why <a href='https://www.health.harvard.edu/blog/big-benefits-plain-water-201605269675'>water is still the better choice</a>. Remember, sugary drinks can lead to weight gain and <a href='https://www.health.harvard.edu/staying-healthy/playing-with-the-fire-of-inflammation'>inflammation</a>, which can increase your risk for developing diseases such as diabetes. Too much caffeine can give you the jitters or keep you from sleeping.</p>
            </div>
            </>}


            {language === 'ua' && <><div className='titleBox'>
                <h1>Скільки води потрібно випивати на день?</h1>
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
                
            </div>
            <div className='article'>
                <p>Скільки води потрібно пити в день? Більшість людей потребують від чотирьох до шести чашок звичайної води щодня. Але, можливо, ви здивуєтеся, дізнавшись, що споживання води - це індивідуальна справа.</p>
                <p>Хоча правило чотирьох-шести склянок на день розраховане на загалом здорових людей, ця кількість залежить від того, скільки води вони отримують з іншими напоями та продуктами харчування. Крім того, певні стани здоровя, ліки, рівень активності та температура навколишнього середовища впливають на загальну добову норму споживання води.</p>
                <p>На жаль, багато хто з нас не отримує достатньої кількості води, особливо люди похилого віку. Ми допоможемо вам зрозуміти, скільки води потрібно випивати в день, щоб залишатися здоровим.</p>
                <ul>
                    Користь від споживання питної води
                    <li>поживні речовини та кисень до ваших клітин</li>
                    <li>вимивання бактерій з сечового міхура</li>
                    <li>сприяння травленню</li>
                    <li>запобігання запорам</li>
                    <li>нормалізації артеріального тиску</li>
                    <li>помякшення суглобів</li>
                    <li>захист органів і тканин</li>
                    <li>регулювання температури тіла</li>
                    <li>підтримання електролітного (натрієвого) балансу</li>
                </ul>
                <img className='glass' src='glass.jpg'/>
                <h4>Рідини для підтримання водного балансу</h4>
                <p>Вода - не єдиний вибір, коли мова йде про гідратацію. Усі напої, що містять воду, задовольняють ваші щоденні потреби. А деякі люди навіть говорять про користь <a href='https://www.health.harvard.edu/blog/when-replenishing-fluids-does-milk-beat-water-202211142849'>молока</a> для зволоження організму.</p>
                <p>І це міф, що напої з кофеїном зневоднюють організм, тому що змушують сечовипускання. Це так, але протягом дня вода з цих напоїв все одно призводить до чистого позитивного внеску в загальне споживання рідини.</p>
                <p>Звичайно, є багато причин, чому <a href='https://www.health.harvard.edu/blog/big-benefits-plain-water-201605269675'>вода все ще є кращим вибором</a>. Памятайте, що солодкі напої можуть призвести до збільшення ваги і <a href='https://www.health.harvard.edu/staying-healthy/playing-with-the-fire-of-inflammation'>запалення</a>, що може підвищити ризик розвитку таких захворювань, як діабет. Занадто велика кількість кофеїну може викликати тремтіння або заважати вам спати.</p>
            </div>
            </>}


            {language === 'ru' && <><div className='titleBox'>
                <h1>Сколько воды нужно пить в день?</h1>
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
                
            </div>
            <div className='article'>
                <p>Сколько воды нужно пить в день? Большинство людей нуждаются от четырех до шести чашек обычной воды ежедневно. Но, возможно, вы удивитесь, узнав, что потребление воды - это индивидуальное дело.</p>
                <p>Хотя правило четырех-шести стаканов в день рассчитано на в целом здоровых людей, это количество зависит от того, сколько воды они получают с другими напитками и продуктами питания. Кроме того, определенные состояния здоровья, лекарства, уровень активности и температура окружающей среды влияют на общую суточную норму потребления воды.</p>
                <p>К сожалению, многие из нас не получают достаточного количества воды, особенно пожилые люди. Мы поможем вам понять, сколько воды нужно выпивать в день, чтобы оставаться здоровым.</p>
                <ul>
                    Польза от потребления питьевой воды
                    <li>питательные вещества и кислород к вашим клеткам</li>
                    <li>вымывание бактерий из мочевого пузыря</li>
                    <li>содействие пищеварению</li>
                    <li>предотвращение запоров</li>
                    <li>нормализации артериального давления</li>
                    <li>смягчения суставов</li>
                    <li>защита органов и тканей</li>
                    <li>регулирование температуры тела</li>
                    <li>поддержания электролитного (натриевого) баланса</li>
                </ul>
                <img className='glass' src='glass.jpg'/>
                <h4>Жидкости для поддержания водного баланса</h4>
                <p>Вода - не единственный выбор, когда речь идет о гидратации. Все напитки, содержащие воду, удовлетворяют ваши ежедневные потребности. А некоторые люди даже говорят о пользе <a href='https://www.health.harvard.edu/blog/when-replenishing-fluids-does-milk-beat-water-202211142849'>молока</a> для улучшения баланса.</p>
                <p>И это миф, что напитки с кофеином обезвоживают организм, потому что заставляют мочеиспускание. Это так, но в течение дня вода из этих напитков все равно приводит к чистому положительному вкладу в общее потребление жидкости.</p>
                <p>Конечно, есть много причин, почему <a href='https://www.health.harvard.edu/blog/big-benefits-plain-water-201605269675'>вода все еще является лучшим выбором</a>. Помните, что сладкие напитки могут привести к увеличению веса и <a href='https://www.health.harvard.edu/staying-healthy/playing-with-the-fire-of-inflammation'>воспаление</a>, что может повысить риск развития таких заболеваний, как диабет. Слишком большое количество кофеина может вызвать дрожь или мешать вам спать.</p>
            </div>
            </>}
    </div>
    )
}