import styles from './interactionscreen.module.css'
import FollowBox from "../../Componentes/FollowBox";
import InteractionBox from "../../Componentes/InteractionBox";
import LegendaBox from "../../Componentes/LegendaBox";

export default function InteractionScreen() {
    const userInfo = {
        nome: 'logoeu.web',
        userImage: 'https://cdn.vox-cdn.com/thumbor/s6cI4NEU9hgaUFjXfyVPMmMc044=/cdn.vox-cdn.com/uploads/chorus_asset/file/3847870/11376655_479893395513491_201556343_n.0.jpg',
        tempo: 'ontem'
    }
    return (
        <div className={styles.container}>
            <div  className={styles.followbox}>
                <FollowBox nome={userInfo.nome}/>
            </div>
            <div className={styles.legendabox}>
                <LegendaBox nome={userInfo.nome} userImage={userInfo.userImage} tempo={userInfo.tempo}/>
            </div>
            <div   className={styles.interactionbox}>
                <InteractionBox tempo={userInfo.tempo}/>
            </div>
        </div>
    )
}