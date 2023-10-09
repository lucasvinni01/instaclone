import {  useState  } from 'react'
import styles from './legendabox.module.css'

export default function LegendaBox({userImage, nome, tempo}) {
    const [traduzir, setTraduzir] = useState(true)

    function toggleTranslate() {
        setTraduzir(!traduzir)
    }

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={userImage} alt='imagem do usuário'/>
                <span className={styles.nome}>{nome}</span>
                <span className={styles.tempo}>{tempo}</span>
            </div>
            <div className={styles.legenda}>
                <p>
                    {traduzir ? 'Oi, meu nome é Lucas e eu tenho trabalhado duro para me tornar um desenvolvedor Web.' : 'Hi, my name is Lucas, and I havve been working hard to become a Web developer.'}
                </p>
                <button
                onClick={toggleTranslate}
                className={styles.btn}>
                    {traduzir ?'Ver tradução': 'Ver original'}
                </button>
            </div>
        </div>
    )
}