import style from '../styles/postscard.module.css'
import Image from 'next/image'
import Icons from './icons'

export default function PostCard({ title, description, imageSrc }) {
    return (
        <div className={style.cardWrapper}>
            <Image src={`/uploads/${imageSrc}`} width={100} height={100}></Image>
            <div className={style.content}>
                <h2>{title}</h2>
                <p>{description}</p>
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