import {  useState  } from 'react'
import {  useNavigate  } from 'react-router-dom'
import {  useHistory  } from 'react-router-dom'
import styles from './loginbar.module.css'
import FaceBookIcon from './facebook-icon.png'
import Logo from '../Logo'
import PostPage from '../../Pages/PostPage'

export default function LoginBar() {
    const [userValue, setUserValue] = useState('')
    const [senhaValue, setSenhaValue] = useState('')
    const navegar = useNavigate()

    return (
        <div className={styles.container}>
            <Logo largura='200px'/>
            <form onSubmit={() => navegar('/post')} className={styles.form}>
                <input type='text' placeholder='Usuário' value={userValue} className={styles.input} onChange={(e)=>setUserValue(e.target.value)}/>
                <input type='password' placeholder='Senha' value={senhaValue} className={styles.input}/>
                <button type='submit' className={styles.button}>Entrar</button>
            </form>
            <div>
            <span className={styles.span}>OU</span>
                <div  className={styles.facebook}>
                    <img src={FaceBookIcon} alt='Icone do Facebook'/>
                    <a href='https://www.facebook.com/' target='_blank'>Entrar com o Facebook</a>
                </div>
            <a href='#'  className={styles.esqueci}>Esqueci minha senha</a>
            </div>
        </div>
    )
}