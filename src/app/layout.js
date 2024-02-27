import '../../styles/globals.css'
import Search from '../../components/search'
import style from '../../styles/landingpage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../../components/icons'
import Cookies from 'js-cookie'

async function getUser(id){
  const res = await fetch(`${process.env.dev}/user/${id}`)

  if(!res.ok){
    return false
  }

  return res.json()
}

export default async function RootLayout({ children }) {  
  // useEffect(() => {
  //   const tech = document.getElementById('tech')
  //   const sci = document.getElementById('sci')

  //   const spanTech = document.getElementById('span-technology')
  //   const ulTech = document.getElementById('tech-list')

  //   const spanSci = document.getElementById('span-science')
  //   const ulSci = document.getElementById('sci-list')

  //   spanTech.addEventListener('click', () => {
  //     if (ulTech.style.display === "none") {
  //       tech.style.transform = 'rotate(180deg)'
  //       ulTech.style.display = "block"
  //     }
  //     else{
  //       tech.style.transform = 'rotate(90deg)'
  //       ulTech.style.display = "none"
  //     }
  //   })
    
  //   spanSci.addEventListener('click', () => {
  //     if (ulSci.style.display === "none") {
  //       sci.style.transform = 'rotate(180deg)'
  //       ulSci.style.display = "block"
  //     }
  //     else{
  //       sci.style.transform = 'rotate(90deg)'
  //       ulSci.style.display = "none"
  //     }
  //   })
  // })

  const cookie = Cookies.get('data') || '{}'
  const parseData = JSON.parse(cookie)
  const userData = await getUser(parseData.user_id)
  const data = userData.data

  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
      </head>
      <body>
        <header className={style.header}>
            <nav className={style.nav}>
              <h3>Tech<span>talk</span></h3>
              <ul>
                <li><Link href="/">Home</Link></li>
              </ul>
              {data ? 
                <Image src='/uploads/profile/default1.png' alt="" width={100} height={100}></Image>
                : 
                <Link href="/login">Login</Link>
              }
            </nav>  
          </header>
          <main className={style.landingPageContainer}>
            <section className={style.introPage}>
              <div className={style.introWrapper}>
                <h3>Create your conversation or talk conversation with other people</h3>
                <Image src='/images/iconpage.png' width={700} height={450}></Image>
              </div>
            </section>
            <section className={style.mainContent}>
              <div className={style.contentLeft} id="content-left">            
                <div className={style.categoryWrapper}>
                  <Link href="">
                    <h3>All Category</h3>
                  </Link>
                  <span className={style.spanCategory} id="span-technology">             
                      <Icons name="arrows" position="tech"></Icons>
                      <h3>Technology</h3>
                  </span>
                  <ul className={style.list} id="tech-list">
                    <Link href="">
                      <Icons name="web"></Icons>
                      <p>Web Development</p>
                    </Link>                
                    <Link href="">
                      <Icons name="android"></Icons>
                      <p>Android Development</p>
                    </Link>                
                  </ul>
                  <span className={style.spanCategory} id="span-science">
                    <Icons name="arrows" position="sci"></Icons>
                    <h3>Science</h3>
                  </span>
                  <ul className={style.list} id="sci-list">
                    <Link href="">Physics</Link>
                    <Link href="">Chemist</Link>
                  </ul>              
                </div>
              </div>
              <div className={style.contentMiddle}>
                <div className={style.searchWrapper}>
                  <Search page></Search>
                </div>
                <div className={style.contentWrapper}>
                  {children}                                                               
                </div>
              </div>
              <div className={style.contentRight}>
                            
              </div>
            </section>
          </main>
          <footer className={style.footer}>
          <div className={style.createPost}>
            <div className={style.hPlus}></div>
            <div className={style.vPlus}></div>
          </div>        
        </footer>       
      </body>
    </html>
  )
}

