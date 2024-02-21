import style from '../styles/postscard.module.css'
import Image from 'next/image'
import Icons from './icons'

export default function PostCard({ title, description, imageSrc, key }) {
    return (
        <div className={style.cardWrapper} key={key}>
            <Image src={`/uploads/${imageSrc}`} width={100} height={100} key={key}></Image>
            <div className={style.content} key={key}>
                <h2 key={key}>{title}</h2>
                <p key={key}>{description}</p>
                <div className={style.dividerContent} key={key}></div>
                <div className={style.reactWrapper} key={key}>
                    <Icons name="star" position="card" color="#d8d8d8"></Icons>
                    <Icons name="comments" position="card" color="#d8d8d8"></Icons>
                    <Icons name="share" position="card" color="#d8d8d8"></Icons>
                </div>
            </div>
        </div>
    )
}