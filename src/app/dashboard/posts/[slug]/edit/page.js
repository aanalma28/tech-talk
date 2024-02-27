require('dotenv').config()
import style from '../../../../../../styles/editpost.module.css'

const getData = async (slug) => {
    const res = await fetch(`${process.env.dev}/post/${slug}`, {next: {revalidate: 5}})

    if(!res.ok){
        throw new Error("Could not find post")
    }

    return res.json()
}

export default async function Page({params}){
    const getPostData = await getData(params.slug)
    console.log(getPostData)
    console.log(getPostData.data)
    return (<h3 className={style.test}>{params.slug}</h3>)
}