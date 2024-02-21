import PostCard from '../../components/postcard'
import { Suspense } from 'react'
import Loading from './loading'

async function getData(){
  const res = await fetch('http://localhost:3000/getallposts')
  
  if(!res.status){
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function Home() {
  const postsData = await getData()
  console.log(postsData)

  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        {postsData.data.length > 0 ? postsData.data.map((item, index) => {
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
