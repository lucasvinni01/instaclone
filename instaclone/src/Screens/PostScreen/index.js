import styles from './postscreen.module.css'
import PostImage from '../../Componentes/PostImage'
import InteractionScreen from '../InteractionScreen'

export default function PostScreen() {
    const info = {
        username: 'logoeu.web',
        userImage: '/logoeu.png',
        postTime: 'ontem',
        postImage: 'https://github.com/lucasvinni01.png',
        postText: '``Só o desenvolvedor FullStack domina os quatro elementos, mas quando o mundo mais precisa dele, ele desaparece. 100 anos se passaram, e meu irmão e eu encontramos um novo FullStack, um jovem designer, embora a sua aptidão com sites seja ótima, ele terá que aprender os outros 3 elementos antes de dizer: eu sou Vinni. Mas eu acredito... que ele possa salvar o mundo!``-Música dramática ao fundo-',
        postTranslation: '"Only the FullStack developer masters the four elements, but when the world needs them most, they vanish. A hundred years have passed, and my brother and I have found a new FullStack, a young designer. While his web skills are great, he must learn the other three elements before he can say, I am Vinni. But I believe... he can save the world!" - Dramatic music in the background -'
    }

    return (
        <div className={styles.container}>
            <PostImage postImage={info.postImage} username={info.username}/>
            <InteractionScreen username={info.username} userImage={info.userImage} postTime={info.postTime} postText={info.postText} postTranslation={info.postTranslation}/>
        </div>
    )
}