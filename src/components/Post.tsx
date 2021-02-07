import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import axios from 'axios'
import PostHeader from './PostHeader'
import { PostProps } from '../types/post'


const Post = (props: PostProps) => {
  const {
    id,
    userPicture,
    user,
    location,
    postPicture,
    likes,
    description
  } = props

  const [likesCount, setLikesCount] = useState(likes)

  const handleLike = (id: number | string, likes: number) => {
    axios.patch(`http://localhost:4001/posts/${id}`, { likes: likes + 1 })
    setLikesCount(likesCount + 1)
  }

  return (
    <div key={id} className="post">
      <PostHeader userPicture={userPicture} user={user} location={location} />
      <div className="post-image">
        <img src={postPicture} alt="post" />
      </div>
      <div className="post-likes">
        <FiHeart onClick={() => handleLike(id, likes)} />
        <span>{likesCount}</span>
      </div>
      <p>{description || ''}</p>
    </div>
  )
}

export default Post