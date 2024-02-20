import PostCard from "../../../../components/postcard";
import style from '../../../../styles/posts.module.css'
import Link from "next/link";
import { cookies } from 'next/headers'
import { Suspense } from "react";

async function getData(email){
    try{
        const cookie = cookies()
        const data = JSON.parse(cookie.get('data'))
        console.log(data)
        const response = await fetch(`/posts?email=${email}`)
        
        if(!response.status){
            throw new Error('Failed to fetch data')
        }

        return response.json()
    }catch(err){
        throw new Error(err)
    }
}

export default async function Posts(){    
    const posts = await getData()
    return (
        <>
            <div id="posts-wrapper" className={style.postsWrapper}>
                <span >
                    <Link href="/dashboard/posts/create">+ New</Link>
                </span>
                <div className={style.postsCardWrapper}>
                    <Suspense fallback={<Loading />}>
                        {posts ? posts.map((post) => {
                            <Link href="">
                                <PostCard 
                                    title={post.title} 
                                    description={post.description}
                                    imageUrl={post.image}
                                />
                            </Link>
                        }) : ''}
                    </Suspense>
                </div>
            </div>
        </>
    )
}