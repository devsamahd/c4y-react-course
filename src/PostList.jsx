import { useContext } from "react"
import { PostsContext } from "../context/postsContext"

const PostList = () => {  
    const {posts, myName} = useContext(PostsContext)
  return (
    <>
    <div className="container">
        <div className="row">
    {posts.map((post, key)=> (
        <div className="col-md-4">
        <div className="card p-2" key={key}>
            <div className="card-title"><h3>{post.title}</h3></div>
            <div className="card-body">{post.body}</div>
            <p>Author: {myName}</p>
        </div>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default PostList