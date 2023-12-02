import Head from 'next/head'
import styles from '../styles/style.module.css'
import style from '../styles/dashboard.module.css'

export default function Layout({children, dashboard}){
    return (
        <>
            {dashboard ? (
                <div className={style.dashboardPage}>
                    <Head>
                        <meta 
                            name="description"
                            content="Pages"
                        />
                    </Head>
                    <main>{children}</main>
                </div>
            ) : (
                <div className={styles.containerpage}>
                    <Head>
                        <meta 
                            name="description"
                            content="Pages"
                        />
                    </Head>
                    <main>{children}</main>
                </div>
            )}
        </>
    )
}