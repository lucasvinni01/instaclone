import styles from './appdownload.module.css'
import Google from './google-play.png'
import Microsoft from './microsoft.png'

export default function AppDownload() {
    return (
        <div className={styles.container}>
            <p>Obtenha o aplicativo</p>
            <div className={styles.link}>
                <a href='https://play.google.com/store/search?q=instagram&c=apps&hl=pt_BR&gl=US' target='_blank'><img src={Google}/></a>
                <a href='https://apps.microsoft.com/detail/9NBLGGH5L9XT?hl=pt-br&gl=BR' target='_blank'><img src={Microsoft}/></a>
            </div>
        </div>
    )
}