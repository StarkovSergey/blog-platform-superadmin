import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { PostRequestParam, postsAPI } from './posts-api'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await postsAPI.getPosts()

    return { posts: response.data.items }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return rejectWithValue(e.message)
    }
  }
})

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (param: PostRequestParam, { rejectWithValue }) => {
    try {
      const response = await postsAPI.addPost(param)

      return { post: response.data }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)

export const editPost = createAsyncThunk(
  'posts/editPost',
  async (
    { inputModel, id }: { inputModel: PostRequestParam; id: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await postsAPI.editPost({
        inputModel,
        id,
      })

      dispatch(fetchPosts())
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
