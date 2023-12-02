import style from '../styles/dashboard.module.css'

export default function Btn(){
    
    return (
        <div className={style.btnSidebar} id="btn-burger">
            <span className={style.burgerBar}></span>
            <span className={style.burgerBar}></span>
            <span className={style.burgerBar}></span>
        </div>
    )
}