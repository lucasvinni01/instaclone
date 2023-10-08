import { FiHome, FiSearch, FiGlobe, FiInstagram, FiMessageCircle, FiBell, FiPlusCircle, FiUser, FiMenu } from 'react-icons/fi'
import styles from './sidenav.module.css'

const iconeProps = {
    color: '#000000',
    size: 24,
}

const options = [
    {
        nome: 'Página Inicial',
        icone: FiHome,
    },
    {
        nome: 'Pesquisa',
        icone: FiSearch,
    },
    {
        nome: 'Explorar',
        icone: FiGlobe,
    },
    {
        nome: 'Reels',
        icone: FiInstagram,
    },
    {
        nome: 'Mensagens',
        icone: FiMessageCircle,
    },
    {
        nome: 'Notificações',
        icone: FiBell,
    },
    {
        nome: 'Criar',
        icone: FiPlusCircle,
    },
    {
        nome: 'Perfil',
        icone: FiUser,
    },
    {
        nome: 'Mais',
        icone: FiMenu,
    }
]
export default function SideNav() {

    return (
        <div className={styles.container}>
            <ul>
                {options.map((opt => (
                    <li key={opt.nome}>
                        <opt.icone size={24}/>
                        <p>{opt.nome}</p>
                    </li>
                )))}
            </ul>
        </div>
    )
}