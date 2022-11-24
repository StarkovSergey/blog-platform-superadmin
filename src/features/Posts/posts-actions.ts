import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { addPostParam, postsAPI } from './posts-api'

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
  async (param: addPostParam, { rejectWithValue }) => {
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
