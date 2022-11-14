import { AppRootState } from '../../app/store'

export const selectBlog = (state: AppRootState) => state.blog.blog
export const selectBlogStatus = (state: AppRootState) => state.blog.status
