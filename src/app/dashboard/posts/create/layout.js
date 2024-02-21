'use client'

import '../../../../../styles/globals.css'
import style from '../../../../../styles/dashboard.module.css'
import Btn from '../../../../../components/btn'
import BtnLogout from '../../../../../components/btnlogout'
import Sidebar from '../../../../../components/sidebar'
import Search from '../../../../../components/search'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import BottomBar from '../../../../../components/bottombar'

export default function CreatePostLayout({ children }) {
    const path = usePathname()

    const TitleMap = {
        '/dashboard':  'Dashboard',
        '/dashboard/posts':  'Posts',
        '/dashboard/posts/create': 'Create Post'
    }

    const title = TitleMap[path] || 'Default Path'

    useEffect(() => {
        const btnBurger = document.getElementById('btn-burger')
        // const container = document.getElementById('container')
        const sidebar = document.getElementById('sidebar')
        const contentWrapper = document.getElementById('content-wrapper')
        const profileSidebar = document.getElementById('profile-sidebar')
        const h3 = profileSidebar.querySelector('h3')
        const liElements = sidebar.querySelectorAll('li')
        const topBarWrapper = document.getElementById('topbar-wrapper')
        const topBar = document.getElementById('top-bar')
        const span = btnBurger.querySelectorAll('span')
        
        const postsWrapper = document.getElementById('posts-wrapper')
        const dashboardWrapper = document.getElementById('dashboard-wrapper')                

        window.addEventListener('resize', function(){
            if(this.window.innerWidth < 1000){
                postsWrapper != null ? postsWrapper.style.paddingLeft = '15px' : 0
                dashboardWrapper != null ? dashboardWrapper.style.paddingLeft = '15px' : 0
            }else{
                postsWrapper != null ? postsWrapper.style.paddingLeft = '23%' : 0
                dashboardWrapper != null ? dashboardWrapper.style.paddingLeft = '23%' : 0
            }
        })

        let count = 0
        btnBurger.addEventListener('click', () => {
            count+=1
            if(count%2 != 0){
                span[0].style.transform = 'translate(0, 12px)'                
                span[2].style.transform = 'translate(0, -12px)'
                h3.style.display = 'none'
                // container.style.gridTemplateColumns = '115px 1fr'
                // topBarWrapper.style.width = '90%'
                topBar.style.paddingLeft = '120px'
                sidebar.style.width = '110px'
                liElements.forEach((li) => {
                    const p = li.querySelector('p')
                    p.style.display = 'none'
                })
                contentWrapper != null ? contentWrapper.style.paddingLeft = '140px' : 0                
                postsWrapper != null ? postsWrapper.style.paddingLeft = '140px' : 0                
                dashboardWrapper != null ? dashboardWrapper.style.paddingLeft = '140px' : 0                
            }
            else{
                span[0].style.transform = 'translate(0, 0)'
                span[2].style.transform = 'translate(0, 0)'
                // container.style.gridTemplateColumns = '0.3fr 1fr'
                sidebar.style.width = '20%'
                // topBarWrapper.style.width = '78%'
                topBar.style.paddingLeft = '22%'
                h3.style.display = 'flex'
                liElements.forEach((li) => {
                    const p = li.querySelector('p')
                    p.style.display = 'flex'
                })
                contentWrapper != null ? contentWrapper.style.paddingLeft = '22%' : 0
                dashboardWrapper != null ? dashboardWrapper.style.paddingLeft = '23%' : 0
                postsWrapper != null ? postsWrapper.style.paddingLeft = '23%' : 0
            }
        })

        const dot = document.getElementById('dot-wrapper')
        const popup = document.getElementById('popup-wrapper')        

        let countPopUp = 0
        dot.addEventListener('click', () => {
            countPopUp+=1
            if(countPopUp%2 != 0){
                popup.style.transform = 'translate(30px, 80px)'
                popup.style.opacity = '1'
                popup.style.zIndex = '1'
            }
            else{
                popup.style.transform = 'translate(30px, -50px)'
                popup.style.opacity = '0'
                popup.style.zIndex = '-1'
            }
        })

        const home = document.getElementById('home')
        const posts = document.getElementById('posts')
        const linkHome = home.querySelector('a')
        const linkPosts = posts.querySelector('a')

        if(path == '/dashboard'){
            linkHome.style.backgroundSize = '5px'
            linkPosts.style.backgroundSize = '0'
        } else if (path == '/dashboard/posts'){
            linkPosts.style.backgroundSize = '5px'
            linkHome.style.backgroundSize = '0'
        }
        
    })
    
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
            </head>
            <body>
                <div className={style.containerDashboard} id="container">                    
                    <Sidebar></Sidebar>
                    <div className={style.mainWrapper} id="main-wrapper"> 
                        <div className={style.topBar} id="top-bar">
                            <div className={style.topBarWrapper} id="topbar-wrapper">
                                <Btn></Btn>
                                <Search page={path === "/dashboard/posts" ? true : false}></Search>
                                <BtnLogout></BtnLogout>
                            </div>
                        </div>
                        <div className={style.mainContent}>
                            {children}
                        </div>
                    </div>
                </div>
                <div id="bottom-bar">
                    <BottomBar></BottomBar>
                </div>
            </body>
        </html>
    )
}

