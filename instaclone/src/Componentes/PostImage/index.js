import styles from './postimage.module.css'

export default function PostImage({postImage, username}) {
    return (
        <img src={postImage} alt={`Post de ${username}`} className={styles.imagem}/>
    )
}