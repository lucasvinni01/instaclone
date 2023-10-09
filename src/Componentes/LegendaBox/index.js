import {  useState  } from 'react'
import styles from './legendabox.module.css'

export default function LegendaBox({userImage, nome, tempo, legenda, traducao}) {
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
                    {traduzir ? `${legenda}` : `${traducao}`}
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