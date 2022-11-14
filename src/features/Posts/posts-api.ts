import { instance } from '../../common/api-instances/basic-instance'
import { Post } from '../../common/types/posts'

export const postsAPI = {
  getPosts() {
    return instance.get<GetPostsResponse>('posts')
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
