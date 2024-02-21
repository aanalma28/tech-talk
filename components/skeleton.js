import style from '../styles/skeleton.module.css'
import Image from 'next/image'
import Icons from './icons'

export default function Skeleton(){
    return(        
        <div className={style.cardWrapper}>
            <div className={style.imageSkeleton}></div>
            <div className={style.content}>
                <div className={style.skeletonTitle}></div>
                <div className={style.skeletonDesc}></div>
                <div className={style.dividerContent}></div>
                <div className={style.reactWrapper}>
                    <Icons name="star" position="card" color="#d8d8d8"></Icons>
                    <Icons name="comments" position="card" color="#d8d8d8"></Icons>
                    <Icons name="share" position="card" color="#d8d8d8"></Icons>
                </div>
            </div>
        </div>
    )
}