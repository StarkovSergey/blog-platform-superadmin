import { instance } from '../../common/api-instances/basic-instance'
import { Post } from '../../common/types'

export const postsAPI = {
  getPosts() {
    return instance.get<GetPostsResponse>('posts')
  },
  addPost(inputModel: PostRequestParam) {
    return instance.post<Post>('posts', inputModel)
  },
  editPost({ inputModel, id }: { inputModel: PostRequestParam; id: string }) {
    return instance.put(`posts/${id}`, inputModel)
  },
  deletePost(id: string) {
    return instance.delete(`posts/${id}`)
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

export type PostRequestParam = {
  title: string
  shortDescription: string
  content: string
  blogId: string
}
