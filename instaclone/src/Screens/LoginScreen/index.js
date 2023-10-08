import AppDownload from "../../Componentes/AppDownload";
import LoginBar from "../../Componentes/LoginBar";
import Signin from "../../Componentes/Signin";
import styles from './loginscreen.module.css'

export default function LoginScreen() {
    return (
        <div className={styles.container}>
            <LoginBar/>
            <Signin/>
            <AppDownload />
        </div>
    )
}