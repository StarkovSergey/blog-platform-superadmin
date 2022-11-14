import { AppRootState } from '../../app/store'

export const selectBlogsStatus = (state: AppRootState) => state.blogs.status
export const selectBlogs = (state: AppRootState) => state.blogs.blogs
