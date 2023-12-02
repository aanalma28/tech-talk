import style from '../styles/dashboard.module.css'
import Icons from './icons'


export default function BtnLogout(){
    return (
        <>
        <div className={style.logoutPopUp} id="popup-wrapper">
            <ul>
                <li><a href=""><Icons name="user" width="1.4rem" position="popup"></Icons><p id="p-popup">Profile</p></a></li>
                <li><a href=""><Icons name="logout" width="1.4rem"></Icons><p id="p-popup">Log out</p></a></li>
            </ul>
        </div>
        <div className={style.buttonLogout}>
            <div className={style.dotWrapper} id="dot-wrapper">
                <div className={style.dotSpan}></div>
                <div className={style.dotSpan}></div>
                <div className={style.dotSpan}></div>
            </div>
        </div>
        </>
    )
}