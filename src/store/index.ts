import { createStore, combineReducers } from 'redux'
import { PostsState } from '../types/post'
import { StoriesState } from '../types/story'
import { UserInfo } from '../types/user'


const initialStateUserInfo: UserInfo = {
  name: '',
  userPicture: '',
  username: ''
}

function reducerUserInfo (state = initialStateUserInfo, action: any) {
  switch(action.type) {
    case 'GET_USER_INFO':
      return {
        ...state,
        name: action.payload.name,
        userPicture: action.payload.userPicture,
        username: action.payload.username
      }
      default:
        return state
  }
}

  const initialStateStories: StoriesState = {
    arrayStories: []
  }

function reducerStory (state = initialStateStories, action: any) {
  switch(action.type) {
    case 'GET_STORIES':
      return {
        ...state,
        arrayStories: action.payload
      }
      default:
        return state
  }
}

const initialStatePost: PostsState = {
  arrayPost: []
}

function reducerPost (state = initialStatePost, action: any) {
switch(action.type) {
  case 'GET_POST':
    return {
      ...state,
      arrayPost: action.payload
    }
  case 'ADD_POST':
    return {
      arrayPost: [...state.arrayPost, action.payload]
    }
  default:
    return state
}
}

const createRootReducer = () => combineReducers({
  userInfo: reducerUserInfo,
  story: reducerStory,
  post: reducerPost
})

const store = createStore(createRootReducer())

export { store }