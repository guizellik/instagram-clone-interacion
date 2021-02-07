import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { PostProps } from '../types/post'

import Post from './Post'

const PostList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:4001/posts')
      .then(resposta => dispatch({ type: 'GET_POST', payload: resposta.data})
    )},[dispatch])

  const posts: PostProps[] = useSelector((state: any) => state.post.arrayPost)

  return (
    <>
    {
      posts.map((item: PostProps) => {
        return (
          <Post
            id={item.id}
            userPicture={item.userPicture}
            user={item.user}
            location={item.location}
            postPicture={item.postPicture}
            likes={item.likes}
            description={item.description}
          />
        )
      })
    }
    </>
  )
}

export default PostList