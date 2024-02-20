import PostCard from "../../../../components/postcard";
import style from '../../../../styles/posts.module.css'
import Link from "next/link";
import { cookies } from 'next/headers'
import { Suspense } from "react";
import Loading from "./loading";

async function getData(){
    const cookie = cookies()
    const data = cookie.get('data')
    return data
    // const response = await fetch(`/posts?email=${email}`)
    
    // if(!response.status){
    //     throw new Error('Failed to fetch data')
    // }

    // return response.json()    
}

export default async function Posts(){
    const posts = await getData()
    console.log(posts)    

    return (
        <>
            <div id="posts-wrapper" className={style.postsWrapper}>
                <span >
                    <Link href="/dashboard/posts/create">+ New</Link>
                </span>
                <div className={style.postsCardWrapper}>
                    <Suspense fallback={<Loading />}>
                        {/* {posts ? posts.map((post) => {
                            <Link href="">
                                <PostCard 
                                    title={post.title} 
                                    description={post.description}
                                    imageUrl={post.image}
                                />
                            </Link>
                        }) : ''} */}
                        <h3>Hello</h3>
                    </Suspense>                    
                </div>
            </div>
        </>
    )
}