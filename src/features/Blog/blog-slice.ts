import { createSlice } from '@reduxjs/toolkit'

import { Blog, RequestStatus } from '../../common/types'

import { fetchBlog } from './blog-actions'

export const slice = createSlice({
  name: 'blog',
  initialState: {
    status: 'idle' as RequestStatus,
    blog: {} as Blog,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.blog = action.payload!.blog
    })
    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      (state, action) => {
        state.status = 'loading'
        state.error = null
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.status = 'succeeded'
        state.error = null
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error.message
      }
    )
  },
})

export const blogReducer = slice.reducer
