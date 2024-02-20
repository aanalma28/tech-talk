import style from '../styles/skeleton.module.css'

export default function Skeleton(){
    return(
        <div className={style.cardWrapper}>
            <Image src="/images/book.png" width={100} height={100}></Image>
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