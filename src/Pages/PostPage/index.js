import styles from './postpage.module.css'
import SideBarScreen from '../../Screens/SideBarScreen'
import PostScreen from '../../Screens/PostScreen'

export default function PostPage() {
    return (
        <div className={styles.container}>
            <SideBarScreen/>
            <PostScreen/>
        </div>
    )
}