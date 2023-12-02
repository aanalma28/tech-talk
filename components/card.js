import Icons from "./icons";
import style from '../styles/dashboard.module.css'

export default function Card({title, icon_name, position}){
    return (
        <div className={style.statusCard} 
            style={icon_name==='star'?{backgroundColor: '#FCE22A'}:
            icon_name==='comments'?{backgroundColor: '#03C988'}:
            icon_name==='share'?{backgroundColor: '#75C2F6'}: ''}> 
            <h3 >{title}
                <p >100.000+</p>
            </h3>
            <Icons name={icon_name} position={position}></Icons>
        </div>
    )
}
