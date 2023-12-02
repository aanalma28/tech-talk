import style from '../styles/style.module.css'

export default function DividerLogin(){
    return(
        <ul className={style.listDivider}>
            <li><div className={style.divider}></div></li>
            <li><p className={style.loginP}>or</p></li>
            <li><div className={style.divider}></div></li>
        </ul>
    )
}