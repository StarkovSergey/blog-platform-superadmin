import { AppRootState } from '../../app/store'

export const selectPost = (state: AppRootState) => state.post.post
export const selectPostStatus = (state: AppRootState) => state.post.status
