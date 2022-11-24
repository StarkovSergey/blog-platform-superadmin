import { instance } from '../../common/api-instances/basic-instance'
import { Post } from '../../common/types'

export const postsAPI = {
  getPosts() {
    return instance.get<GetPostsResponse>('posts')
  },
  addPost(param: addPostParam) {
    return instance.post<Post>('posts', param)
  },
}

// types
type GetPostsResponse = {
  pagesCount: 2
  page: 1
  pageSize: 10
  totalCount: 13
  items: Post[]
}

export type addPostParam = {
  title: string
  shortDescription: string
  content: string
  blogId: string
}
