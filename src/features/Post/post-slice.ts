import { createSlice } from '@reduxjs/toolkit'

import { RequestStatus, Post } from '../../common/types'

import { fetchPost } from './post-actions'

export const slice = createSlice({
  name: 'post',
  initialState: {
    status: 'idle' as RequestStatus,
    post: {} as Post,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload!.post
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

export const postReducer = slice.reducer
