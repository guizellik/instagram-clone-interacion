export interface Story {
  id: number,
  user: string,
  userPicture: string,
  time: string
}

export interface StoriesState {
  arrayStories: Story[]
}