import { instance } from '../../common/api-instances/basic-instance'
import { Blog } from '../../common/types'

export const blogsAPI = {
  getBlogs(params?: GetBlogsParamsType) {
    return instance.get<GetBlogsResponse>('blogs', {
      params: {
        pageSize: params?.pageSize || 15,
      },
    })
  },
}

export type GetBlogsResponse = {
  pageCount: number
  page: number
  pageSize: number
  totalCount: number
  items: Blog[]
}

export type GetBlogsParamsType = {
  searchNameTerm?: string
  pageNumber?: number
  pageSize?: number
  sortBy?: keyof Blog
  sortDirection?: 'asc' | 'desc'
}
