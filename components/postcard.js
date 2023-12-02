import style from '../styles/posts.module.css'
import Image from 'next/image'
import Icons from './icons'

export default function PostCard(){
    return (
        <div className={style.cardWrapper}>
            <Image src="/images/book.png" width={100} height={100}></Image>
            <div className={style.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <div className={style.dividerContent}></div>
                <div className={style.reactWrapper}>
                    <Icons></Icons>
                    <Icons></Icons>
                    <Icons></Icons>
                </div>
            </div>
        </div>
    )
}