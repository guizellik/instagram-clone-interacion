import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import axios from 'axios'
import { PostProps } from '../types/post'

const Form  = () => {
  let inputImage = useRef<HTMLInputElement>(null)
  let inputDescription = useRef<HTMLInputElement>(null)
  const userPicture: string = useSelector((state: any) => state.userInfo.userPicture)
  const username: string = useSelector((state: any) => state.userInfo.username)
  const dispatch = useDispatch()

  const sendForm = () => {
    const postImage = inputImage.current?.value
    const postDescription = inputDescription.current?.value
    const postToBeSent: PostProps = {
      id: v4(),
      user: username,
      userPicture: userPicture,
      postPicture: postImage,
      location: '',
      description: postDescription,
      likes: 0
    }
    axios.post('http://localhost:4001/posts', postToBeSent)
    dispatch({ type: 'ADD_POST', payload: postToBeSent })
  }

 return (
  <div className="form">
    <p>Faça uma postagem aqui</p>
    <input type="text" ref={inputImage} placeholder="Cole a url da imagem" />
    <input type="text" ref={inputDescription} placeholder="Digite uma descrição" />
    <button onClick={sendForm}>Postar!</button>
  </div>
  );
}

export default Form;