import PostCard from '../../components/postcard'
import { Suspense } from 'react'
// import Loading from './loading'

async function getData(){
  const res = await fetch('http://localhost:3000/getallposts', 
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
  const getPostsData = await getData()
  const postsData = await getPostsData.data

  return (
    <>
      <Suspense fallback={<h3>Sedang mengambil data</h3>}>        
        {postsData.length > 0 ? postsData.map((item, index) => {
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
