import {  useNavigate  } from 'react-router-dom'
import styles from './sidebarscreen.module.css'
import Logo from '../../Componentes/Logo'
import SideNav from '../../Componentes/SideNav'


export default function SideBarScreen() {
    const navegar = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.logoDiv} onClick={() => navegar('/')}>
                <Logo largura='110px'/>
            </div>
            <SideNav/>
        </div>
    )
}