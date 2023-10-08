import SideBanner from '../../Componentes/SideBanner'
import LoginScreen from '../../Screens/LoginScreen'
import styles from './login.module.css'

export default function LoginPage() {

    return (
        <div className={styles.container}>
        <SideBanner />
        <LoginScreen />
        </div>
    )
} 