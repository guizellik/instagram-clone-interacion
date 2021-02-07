import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Story } from '../types/story'

const Stories = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:4001/stories')
      .then(resposta => dispatch({ type: 'GET_STORIES', payload: resposta.data})
        )},[dispatch])

  const arrayStory: Story[]= useSelector((state: any) => state.story.arrayStories)

  return (
    <div className="stories">
      <h2>Stories</h2>
      {
        arrayStory?.map((item: Story) => {
          return (
            <div key={item.id} className="storie">
              <div className="storie-image">
                <img src={item.userPicture} alt="user" />
              </div>
              <div className="storie-user">
                <strong>{item.user}</strong>
                <span>{item.time}</span>
              </div>
            </div>
          )
        })
      }
    </div>

  )
}

export default Stories