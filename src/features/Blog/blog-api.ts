import { instance } from '../../common/api-instances/basic-instance'
import { Blog } from '../../common/types'

export const blogAPI = {
  getBlog(id: string) {
    return instance.get<Blog>(`blogs/${id}`)
  },
}
