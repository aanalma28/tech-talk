'use client'
import style from '../../../styles/dashboard.module.css'
import Card from '../../../components/card'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Dashboard(){
    const [data, setData] = useState({username: '', email: '', password: ''})
    useEffect(() => {
        const storeData = Cookies.get('data')
        const parse = JSON.parse(storeData)      

        if(storeData){
            setData({
                username: parse.username,
                email: parse.email,
                password: parse.password
            })
        }        
    }, [])
    return(
        <>
            <h3>Dashboard</h3>
            <h3>Welcome, <span>{data.username}</span></h3>
                <div className={style.mainContentWrapper}>
                    <h5>Welcome to Beta Tester</h5>
                    <p>Congratulation for you about choosen Beta Tester Person. 
                        Hopefully you can try all features in this website and dont forget to 
                        leave your feedbacks.
                    </p>
                </div>
            <div className={style.statusWrapper}>
                <Card title="Total Stars" icon_name="star" position="dashboard"></Card>
                <Card title="Total Comments" icon_name="comments" position="dashboard"></Card>
                <Card title="Total Share" icon_name="share" position="dashboard"></Card>
            </div>
        </>
    )
}