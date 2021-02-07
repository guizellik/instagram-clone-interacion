export interface PostProps {
  id: number | string,
  userPicture: string,
  user: string,
  location: string,
  postPicture?: string,
  likes: number,
  description?: string,
}

export interface PostsState {
  arrayPost: PostProps[]
}

export interface PostHeaderProps {
  userPicture: string,
  user: string,
  location: string,
}
