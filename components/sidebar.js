import style from '../styles/dashboard.module.css'
import Image from 'next/image'
import Icons from './icons'
import Link from 'next/link'

export default function Sidebar(){
    return (
        <div className={style.sidebar} id="sidebar">
            <div className={style.containerSidebar}>
                <ul className={style.ulSidebar}>
                    <a href="/dashboard/profile" className={style.profileSidebar} id="profile-sidebar">
                        <Image src="/images/batikboy.png" width={60} height={60} className={style.profileImage}/>
                        <h3>LinkinPark</h3>
                    </a>                    
                    <div className={style.dividerSidebar}></div>
                    <li id="home">
                        <Link href="/dashboard">
                            <Icons name="home" position="sidebar"></Icons>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li id="posts">
                        <Link href="/dashboard/posts">
                            <Icons name="posts" position="sidebar"></Icons>
                            <p>Your Posts</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}