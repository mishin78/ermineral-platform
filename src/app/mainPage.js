import './styles.sass'


export default function MainPage({ lang }) {

    return (
        <>
        {lang === 'en' && <div className='mainPageBox'>
                <h1>About Product</h1>
                <p>Ermineral herbal drops come from the Dayak tribe (Palankaraya, Central Kalimantan), who are well known for their fermentation methods. This local method has been well preserved for many generations. In the archipelago, herbal infusion has been used as an alternative medicine to treat serious diseases such as diabetes, stroke, kidney failure, heart disease, hyperthyroidism, cataracts, glaucoma, ulcers, etc.
                   The uniqueness of the Ermineral herbal drops product lies in its fresh, natural ingredients and in its manufacturing process without the use of any heating processes. 
                   Ermineral is rich in SOD (Superoxide dismutase) antioxidant enzymes, the advantage of which is the fight against free radicals on healthy cells. Other benefits are anti-inflammatory effects, improved immune system, increased stamina, and many other health benefits.</p>
                <h1>Overview</h1>
                <p>Main physico-chemical properties: yellow-brown liquid with aromatic odor, presence of sediment is allowed.
                   Form of release. Tincture.
                   Pharmacotherapeutic group. Immunomodulatory and antiviral agent. The effectiveness of the drug is due to a wide range of biological activity has: anti-inflammatory, antiproliferative, antiviral, immunomodulatory effect.</p>
                <img src='./ind.webp' alt='photo of field in Indonesia'/>
        </div> }
        {lang === 'ru' && <div className='mainPageBox'>
                <h1>О продукте</h1>
                <p>Травяные капли Ermineral происходят от племени даяков (Паланкарая, Центральный Калимантан), которые хорошо известны своими методами ферментации. Этот местный метод хорошо сохранился на протяжении многих поколений. На архипелаге травяной настой используется в качестве альтернативной медицины для лечения таких серьезных заболеваний, как диабет, инсульт, почечная недостаточность, болезни сердца, гипертиреоз, катаракта, глаукома, язвы и т.д.
                   Уникальность препарата Эрминерал заключается в свежих, натуральных ингредиентах и в том, что при его производстве не используются процессы нагревания. 
                   Ermineral богат антиоксидантными ферментами SOD (супероксиддисмутаза), преимущество которых заключается в борьбе со свободными радикалами на здоровых клетках. Другими преимуществами являются противовоспалительное действие, улучшение иммунной системы, повышение выносливости и многие другие полезные свойства.</p>
                <h1>Общая характеристика</h1>
                <p>Основные физико-химические свойства: жидкость жёлто-коричневого цвета, с ароматным запахом, допускается присутствие осадка.
                   Форма выпуска. Настойка.
                   Фармакотерапевтическая группа. Иммуномодулирующее и противовирусное средство. Эффективность препарата обусловлена широким спектром биологической активности имеет: противовоспалительное, антипролиферативное, противовирусное, иммуномодулирующее действие.</p>
                <img src='./ind.webp' alt='photo of field in Indonesia'/>
        </div> }
        {lang === 'ua' && <div className='mainPageBox'>
                <h1>Про продукт</h1>
                <p>Травяні краплі Ermineral походять від племені даяків (Паланкарая, Центральний Калімантан), які добре відомі своїми методами ферментації. Цей місцевий метод добре зберігся протягом багатьох поколінь. На архіпелазі травяний настій використовують як альтернативну медицину для лікування таких серйозних захворювань, як діабет, інсульт, ниркова недостатність, хвороби серця, гіпертиреоз, катаракта, глаукома, виразки тощо.
                   Унікальність препарату Ермінерал полягає у свіжих, натуральних інгредієнтах і в тому, що під час його виробництва не використовуються процеси нагрівання. 
                   Ermineral багатий на антиоксидантні ферменти SOD (супероксиддисмутаза), перевага яких полягає в боротьбі з вільними радикалами на здорових клітинах. Іншими перевагами є протизапальна дія, поліпшення імунної системи, підвищення витривалості та багато інших корисних властивостей.</p>
                <h1>Загальна інформація</h1>
                <p>Основні фізико-хімічні властивості: рідина жовто-коричневого кольору, з ароматним запахом, допускається присутність осаду.
                   Форма випуску. Настоянка настойка.
                   Фармакотерапевтична група. Імуномодулювальний та противірусний засіб. Ефективність препарату зумовлена широким спектром біологічної активності, що має: протизапальну, антипроліферативну, противірусну, імуномодулюючу дію.</p>
                <img src='./ind.webp' alt='photo of field in Indonesia'/>
        </div> }
        </>
    )
}