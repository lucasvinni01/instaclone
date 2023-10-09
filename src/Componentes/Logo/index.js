import LogoSVG from './instatype.svg'

export default function Logo({largura}) {
    return (
        <img src={LogoSVG} alt='Logo Instaclone' style={{width: largura}}/>
    )
}