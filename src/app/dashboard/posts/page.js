import PostCard from "../../../../components/postcard";
import style from '../../../../styles/posts.module.css'
import Link from "next/link";
import { cookies } from 'next/headers'
import { Suspense } from "react";
import SkeletonCard from "./skeletonCard";
import Loading from "./loading";

async function getData(){
    const cookie = cookies()    
    const data = cookie.get('data') || {}        
    const parse = JSON.parse(data.value)
    const user_id = parse.user_id

    if(!data){
        throw new Error('data tidak ada')
    }

    if(!user_id){
        throw new Error('email tidak ada')
    }
    
    const response = await fetch(`http://localhost:3000/posts?user_id=${user_id}`)
    
    if(!response.status){
        throw new Error('Failed to fetch data')
    }

    return response.json()    
}

export default async function Posts(){
    const posts = await getData()
    const postData = posts.data
    
    console.log(postData)

    return (
        <>
            <div id="posts-wrapper" className={style.postsWrapper}>
                <span >
                    <Link href="/dashboard/posts/create">+ New</Link>
                </span>
                <div className={style.postsCardWrapper}>
                    <Suspense fallback={<Loading />}>
                        {postData.length > 0 ? 
                            postData.map((item, index) => {
                                const link = `/dashboard/posts/${item.post_id}/edit`
                                return(
                                    <Link href={link} key={index}>
                                        <PostCard                                        
                                            title={item.title} 
                                            description={item.description}
                                            imageSrc={item.image}                                            
                                        />
                                    </Link>
                                )
                            })                 
                            : null
                        }                                                                                                        
                    </Suspense>             
                </div>
            </div>
        </>
    )
}