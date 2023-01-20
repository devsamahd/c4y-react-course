import { useEffect, useState } from "react"

const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        (async()=>{
            try{
               const data = await fetch('http://localhost:300/posts')
               const res = await data.json()
               setPosts(res) 
            }catch(e){
                console.log(e)
            }   
        })()
    },[])
  return (
    <>
    <div className="container">
        <div className="row">
    {posts.map((post, key)=> (
        <div className="col-md-4">
        <div className="card p-2" key={key}>
            <div className="card-title"><h3>{post.title}</h3></div>
            <div className="card-body">{post.body}</div>
        </div>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default PostList