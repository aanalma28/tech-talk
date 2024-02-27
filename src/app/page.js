import PostCard from '../../components/postcard'
import { Suspense } from 'react'
require('dotenv').config()

// import Loading from './loading'
async function getPostsData(){
  const res = await fetch(`${process.env.dev}/getallposts`, 
    {next: {
      revalidate: 5      
    }}
  )

  if(!res.status){
      throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function Home() {  
  const postsData = await getPostsData()
  const posts = postsData.data  

  return (
    <>
      <Suspense fallback={<h3>Sedang mengambil data</h3>}>        
        {posts.length > 0 ? posts.map((item, index) => {
          return (
            <PostCard             
              title={item.title} 
              description={item.description}
              imageSrc={item.image}              
              key={index}
            />
          )
        }) : null}
      </Suspense> 
    </>
  )
}
