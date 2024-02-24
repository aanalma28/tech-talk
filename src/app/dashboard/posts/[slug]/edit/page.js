import style from '../../../../../../styles/editpost.module.css'

export default function Page({params}){
    return (<h3 className={style.test}>{params.slug}</h3>)
}