import styles from './interactionscreen.module.css'
import FollowBox from "../../Componentes/FollowBox";
import InteractionBox from "../../Componentes/InteractionBox";
import LegendaBox from "../../Componentes/LegendaBox";

export default function InteractionScreen({username, userImage, postTime, postText, postTranslation}) {

    return (
        <div className={styles.container}>
            <div  className={styles.followbox}>
                <FollowBox nome={username}/>
            </div>
            <div className={styles.legendabox}>
                <LegendaBox nome={username} userImage={userImage} tempo={postTime} legenda={postText} traducao={postTranslation}/>
            </div>
            <div   className={styles.interactionbox}>
                <InteractionBox tempo={postTime}/>
            </div>
        </div>
    )
}