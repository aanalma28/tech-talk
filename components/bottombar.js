import style from '../styles/bottombar.module.css'
import Icons from './icons'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function BottomBar(){
    const path = usePathname()
    const [isClick, setIsClick] = useState('')

    useEffect(() => {
        if(path == '/dashboard'){
            setIsClick('dashboard')
        }else if(path == '/dashboard/posts'){
            setIsClick('posts')
        }
        else{
            setIsClick('')
        }

    })


    return (
        <div className={style.bottomBarWrapper}>
            <ul className={style.bottomBar}>
                <li>
                    <Link href="/profile">
                        <Image src="/uploads/profile/default1.png" width={50} height={50}></Image>            
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        <Icons name="home" position="bottombar" click={isClick}></Icons>            
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/posts">
                        <Icons name="posts" position="bottombar" click={isClick}></Icons>
                    </Link>
                </li>
            </ul>
        </div>
    )
}