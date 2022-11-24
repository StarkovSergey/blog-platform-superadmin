import { instance } from '../../common/api-instances/basic-instance'
import { Post } from '../../common/types'

export const postAPI = {
  fetchPost(id: string) {
    return instance.get<Post>(`posts/${id}`)
  },
}
