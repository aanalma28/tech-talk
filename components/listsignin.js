import style from '../styles/style.module.css'
import Images from './imagesvg'

export default function ListSignIn({ login, text }){
    switch(login){
        case "google":
            return (
                <li className={style.listLogin}>
                    <Images name="google"></Images>
                    <h3 className={style.loginH3}>{text}</h3>
                </li>
            )
        case "discord":
            return (
                <li className={style.listLogin}>
                    <Images name="github"></Images>
                    <h3 className={style.loginH3}>{text}</h3>
                </li>
            )
    }
}