'use client'
import Header from '../header';
import LangModal from '../langModal'
import { useState } from 'react';
import '../styles.sass'
import Image from 'next/image';

export default function Recommendations({ searchParams }) {
    const [ langModal, setLangModal ] = useState(false)
    const [ language, setLanguage ] = useState(searchParams.lang)

    return (
        <div className="recommendationBox">
            <Header lang={language}  langModal={langModal}  showLangModal={setLangModal} />
            {langModal && <LangModal setLang={setLanguage}/>}
            {language === 'en' && <div className='text'>
                <h1>These recommendations will help you to strengthen the effect of the tincture several times and noticeably accelerate the recovery of your body.</h1>
                <h3>1. Increase the absorption of the medicinal components of the tincture. This can be done in two ways.</h3>
                <p>A) Add a few drops of the tincture (as directed) to a glass of water. Take the water into your mouth, hold it for a while (8-15 seconds) and then swallow. Drink the entire glass in this way. Thanks to this (through the salivary canals) part of the therapeutic components of the tincture will get faster into the lymphatic and circulatory system bypassing the stomach.</p>
                <p>B) After taking the tincture, start squatting (as many times as you can). The contraction of large muscles and the effect on the diaphragm will ensure good blood and lymph flow. Thanks to this, the therapeutic components of the tincture will quickly spread throughout your body (especially the lymphatic system).</p>
                <h3>2. Help your body dissolve toxins faster.</h3>
                <p>The herbal tincture triggers the detoxification (cleansing of the body) process. This involves dissolving the toxins and eliminating them from the body. To aid this process, we recommend increasing your intake of pure water. Add an extra 2-3 glasses of pure water per day. It is better to drink water between meals, in warm form (~ 40 C).</p>
                <h3>3. Help the body to eliminate toxins faster.</h3>
                <p>The tincture contains herbs that have a devastating effect on parasites and fungi. The body itself gradually gets rid of dead pests, but you can speed up this process. To accelerate the elimination of toxins, you can do the following.</p>
                <p>During the period of taking the tincture: </p>
                <p>A) Stop altogether or minimize the use of sugar and all products (drinks) containing it.</p>
                <p>B) Consume more foods containing fiber: vegetable salads, fruits, citrus fruits. Preferably, vegetable salads should be on your menu at least 2 times a day.</p>
                <p>C) Sweat more often and more intensely. Physical exercise, bath, sauna, running, etc. will help.</p>
                <p>D) Take a shower (bath) in the morning and evening.</p>
                <p>The above recommendations will help your body to quickly cleanse itself of toxins and toxins. This in turn will have a positive effect on your entire body.</p>
                <p>Diseases will gradually leave you, your skin, hair and nails will become better. Your body weight will return to normal, your strength will return, and most importantly, your quality of life will improve.</p>
                <p>Your health is in your hands. Start investing in beauty, health and longevity right now!</p>
            </div>}

            {language === 'ua' && <div className='text'>
                <h1>Ці рекомендації допоможуть вам у кілька разів посилити дію настоянки й помітно прискорити одужання вашого тіла.</h1>
                <h3>1. Підвищіть засвоєння лікувальних компонентів настоянки. Це можна зробити двома способами.</h3>
                <p>А) Додайте кілька крапель настоянки (згідно з інструкцією) в склянку води. Наберіть воду в рот, трохи потримайте (8-15 сек) і потім проковтнете. Таким чином випийте всю склянку. Завдяки цьому (через слинні канали) частина лікувальних компонентів настоянки швидше потрапить у лімфатичну та кровоносну систему, оминаючи шлунок.</p>
                <p>Б) Після прийому настоянки почніть присідати (стільки разів, скільки у вас вийде). Скорочення великих м'язів і вплив на діафрагму забезпечить хороший кровообіг і лімфоток. Завдяки цьому лікувальні компоненти настоянки швидко рознесуться по вашому тілу (особливо по лімфатичній системі).</p>
                <h3>2. Допоможіть організму розчиняти шлаки швидше.</h3>
                <p>Трав'яна настоянка запускає процес детоксикації (очищення організму). У зв'язку з цим відбувається розчинення шлаків і виведення їх з організму. Щоб сприяти цьому процесу, ми рекомендуємо збільшити споживання чистої води. Додайте додаткові 2-3 склянки чистої води на день. При цьому ліпше пити воду між прийомами їжі, в теплому вигляді (~40 С).</p>
                <h3>3. Допоможіть організму швидше виводити токсини.</h3>
                <p>Настоянка містить трави, які руйнівно впливають на паразитів і грибки. Організм сам поступово позбувається загиблих шкідників, але ви можете прискорити цей процес. Для прискорення виведення токсинів, ви можете зробити наступне.</p>
                <p>У період прийому настоянки: </p>
                <p>А) Припиніть зовсім або скоротіть до мінімуму вживання цукру і всі продукти (напої), що його містять.</p>
                <p>Б) Вживайте більше продуктів, що містять клітковину: овочеві салати, фрукти, цитрусові. Бажано, щоб овочеві салати були у вашому меню не менше 2 разів на день.</p>
                <p>В) Спітнійте частіше та інтенсивніше. Допоможуть фізичні вправи, лазня, сауна, біг тощо.</p>
                <p>Г) Приймайте душ (ванну) вранці та ввечері.</p>
                <p>Вищевикладені рекомендації допоможуть вашому організму швидше очищатися від шлаків і токсинів. Це своєю чергою позитивно вплине на весь ваш організм.</p>
                <p>Хвороби поступово залишать вас, ваша шкіра, волосся і нігті стануть кращими. Вага вашого тіла прийде в норму, повернуться сили, а найголовніше, якість вашого життя покращиться.</p>
                <p>Ваше здоров'я у ваших руках. Почніть інвестувати в красу, здоров'я і довголіття просто зараз!</p>
            </div>}

            {language === 'ru' && <div className='text'>
                <h1>Данные рекомендации помогут вам в несколько раз усилить действие настойки и заметно ускорить выздоровление вашего тела.</h1>
                <h3>1. Повысьте усвоение лечебных компонентов настойки. Это можно сделать двумя способами.</h3>
                <p>А) Добавите несколько капель настойки (согласно инструкции) в стакан воды. Наберите воду в рот, немного подержите (8-15 сек) и затем проглотите. Таким образом выпейте весь стакан. Благодаря этому (через слюнные каналы) часть лечебных компонента настойки быстрее попадет в лимфатическую и кровеносную систему минуя желудок.</p>
                <p>Б) После приема настойки начните приседать (столько раз, сколько у вас получится). Сокращение крупных мышц и воздействие на диафрагму обеспечит хороший кровоток и лимфоток. Благодаря этому лечебные компоненты настойки быстро разнесутся по вашему телу (особенно по лимфатической системе).</p>
                <h3>2. Помогите организму растворять шлаки быстрее.</h3>
                <p>Травяная настойка запускает процесс детоксикации (очищения организма). В связи с этим происходит растворение шлаков и выведение их из организма. Чтобы содействовать этому процессу, мы рекомендуем увеличить потребление чистой воды. Добавьте дополнительные 2-3 стакана чистой воды в день. При этом лучше пить воду между приемами пищи, в теплом виде (~ 40 С).</p>
                <h3>3. Помогите организму быстрее выводить токсины.</h3>
                <p>Настойка содержит травы, которые разрушительно влияют на паразитов и грибки. Организм сам постепенно избавляется от погибших вредителей, но вы можете ускорить этот процесс. Для ускорения вывода токсинов, вы можете сделать следующее.</p>
                <p>В период приёма настойки: </p>
                <p>А) Прекратите совсем или сократите до минимума употребление сахара и все продукты (напитки) его содержащие.</p>
                <p>Б) Употребляйте больше продуктов содержащих клетчатку: овощные салаты, фрукты, цитрусовые. Желательно, чтобы овощные салаты были в вашем меню не меньше 2 раз в день.</p>
                <p>В) Потейте чаще и интенсивнее. Помогут физические упражнения, баня, сауна, бег и т.п.</p>
                <p>Г) Принимайте душ (ванную) утром и вечером.</p>
                <p>Вышеизложенные рекомендации помогут вашему организму быстрее очищаться от шлаков и токсинов. Это в свою очередь положительно повлияет на весь ваш организм.</p>
                <p>Болезни постепенно оставят вас, ваша кожа, волосы и ногти станут лучше. Вес вашего тела придёт в норму, возвратятся силы, а самое главное, качество вашей жизни улучшится.</p>
                <p>Ваше здоровье в ваших руках. Начните инвестировать в красоту, здоровье и долголетие прямо сейчас!</p>
            </div>}
        </div>
    )
}