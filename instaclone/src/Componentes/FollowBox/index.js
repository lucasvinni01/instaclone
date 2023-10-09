import {  useState  } from 'react'
import {  FiMoreHorizontal  } from 'react-icons/fi'
import styles from './followbox.module.css'

export default function FollowBox({nome}) {
    const [seguindo, setSeguindo] = useState(false)
    
    function handleChange() {
        setSeguindo(!seguindo)
    }
    return (
        <div className={styles.container}>
            <div className={styles.options}>
                <p className={styles.nome}>{nome}</p>
                <span className={styles.dot}>⚫</span>
                <button
                className={styles.btn}
                onClick={handleChange}>
                    {seguindo? 'Seguir' : 'Seguindo'}
                </button>
            </div>
            <FiMoreHorizontal size={22}/>
        </div>
    )
}