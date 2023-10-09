import styles from './postscreen.module.css'
import PostImage from '../../Componentes/PostImage'
import InteractionScreen from '../InteractionScreen'

export default function PostScreen() {


    return (
        <div className={styles.container}>
            <PostImage />
            <InteractionScreen />
        </div>
    )
}