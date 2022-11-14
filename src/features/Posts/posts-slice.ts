import { createSlice } from '@reduxjs/toolkit'

import { Post, RequestStatus } from '../../common/types'

import { fetchPosts } from './posts-actions'

const slice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle' as RequestStatus,
    posts: [] as Post[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload!.posts
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

export const postsReducer = slice.reducer
