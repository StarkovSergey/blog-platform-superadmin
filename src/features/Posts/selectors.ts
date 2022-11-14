import { AppRootState } from '../../app/store'

export const selectPosts = (state: AppRootState) => state.posts.posts
export const selectPostsStatus = (state: AppRootState) => state.posts.status
