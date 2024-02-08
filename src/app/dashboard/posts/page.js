import PostCard from "../../../../components/postcard";
import style from '../../../../styles/posts.module.css'
import Link from "next/link";

export default function Posts(){
    return (
        <div id="post-wrapper" className={style.postsWrapper}>
            <span >
                <Link href="/dashboard/posts/create">+ New</Link>
            </span>
            <div className={style.postsCardWrapper}>
                <Link href="">
                    <PostCard></PostCard>
                </Link>
                <Link href="">
                    <PostCard></PostCard>
                </Link>
                <Link href="">
                    <PostCard></PostCard>
                </Link>
                <Link href="">
                    <PostCard></PostCard>
                </Link>
            </div>
        </div>
    )
}