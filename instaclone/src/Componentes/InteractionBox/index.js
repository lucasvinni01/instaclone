import {  useState  } from 'react'
import {  FiHeart, FiMessageCircle, FiSend, FiBookmark, FiSmile } from 'react-icons/fi'
import styles from './interactionbox.module.css'

export default function InteractionBox({tempo}) {

    const [curtidas, setCurtidas] = useState(182)
    const [curtido, setCurtido] = useState(false)
    const [salvo, setSalvo] = useState(false)

    function handleCurtidas () {
        curtidas === 182 ? setCurtidas(curtidas+1) : setCurtidas(curtidas-1)
        setCurtido(!curtido)
    }

    function handleSalvo () {
        setSalvo(!salvo)
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <div className={styles.mainBtn}>
                    <FiHeart 
                        onClick={handleCurtidas} 
                        fill={curtido ? 'red' : 'none'} 
                        color={curtido ? 'red' : 'black'}
                        size={26}/>
                    <FiMessageCircle size={26}/>
                    <FiSend size={26}/>
                </div>
                <FiBookmark 
                    onClick={handleSalvo} 
                    fill={salvo ? 'black' : 'none'}
                    size={26}/>
            </div>
            <div>
                <p className={styles.curtidas}>{`${curtidas} curtidas`}</p>
                <p className={styles.tempo}>{tempo}</p>
            </div>
            <div className={styles.comentar}>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='Seu ícone'/>
                <input type='text' placeholder='Comentários desativados'/>
                <FiSmile size={26} color='gray'/>
            </div>
        </div>
    )
}