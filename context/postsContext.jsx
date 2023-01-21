import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext({})

const PostsProvider = ({children}) => {

    const myName = "devSamahd"
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
  

    return(
        <PostsContext.Provider value={{posts, myName}}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider