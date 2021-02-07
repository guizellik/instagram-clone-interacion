import React from 'react'
import { PostHeaderProps } from '../types/post'


const PostHeader = (props: PostHeaderProps) => {
  const {userPicture, user, location} = props
  return (
    <header>
      <img src={userPicture} alt="user" />
      <div className="post-user">
        <strong>{user}</strong>
        <span>{location || ''}</span>
      </div>
    </header>
  )
}
export default PostHeader