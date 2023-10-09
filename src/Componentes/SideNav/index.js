import { FiHome, FiSearch, FiGlobe, FiInstagram, FiMessageCircle, FiBell, FiPlusCircle, FiUser, FiMenu } from 'react-icons/fi'
import styles from './sidenav.module.css'

const options = [
    {
        nome: 'Página Inicial',
        icone: FiHome,
        link: 'https://www.instagram.com/'
    },
    {
        nome: 'Pesquisa',
        icone: FiSearch,
        link: 'https://github.com/lucasvinni01'
    },
    {
        nome: 'Explorar',
        icone: FiGlobe,
        link: 'https://vercel.com/lucasvinni01'
    },
    {
        nome: 'Reels',
        icone: FiInstagram,
        link: 'https://www.instagram.com/logoeu.web/'
    },
    {
        nome: 'Mensagens',
        icone: FiMessageCircle,
        link: 'https://www.linkedin.com/in/lucas-vinnicio-089327288/'
    },
    {
        nome: 'Notificações',
        icone: FiBell,
        link: '#'
    },
    {
        nome: 'Criar',
        icone: FiPlusCircle,
        link: '#'
    },
    {
        nome: 'Perfil',
        icone: FiUser,
        link: '#'
    },
    {
        nome: 'Mais',
        icone: FiMenu,
        link: '#'
    }
]
export default function SideNav() {

    return (
        <div className={styles.container}>
            <ul>
                {options.map((opt => (
                    <li key={opt.nome}>
                        <a href={opt.link} target='_blank'>
                            <opt.icone size={24}/>
                            <p>{opt.nome}</p>
                        </a>
                    </li>
                )))}
            </ul>
        </div>
    )
}