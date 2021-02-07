import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


const UserInfo = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:4001/user')
      .then(resposta => dispatch({ type: 'GET_USER_INFO', payload: resposta.data}))
  },[dispatch])

  const name: string = useSelector((state: any) => state.userInfo.name)
  const userPicture: string = useSelector((state: any) => state.userInfo.userPicture)
  const username: string = useSelector((state: any) => state.userInfo.username)

  return (
    <div className="user-info">
      <img
        alt="Perfil"
        src={userPicture}
      />
      <div className="user-bio">
        <strong>{name}</strong>
        <span>{username}</span>
      </div>
    </div>
  )
}

export default UserInfo