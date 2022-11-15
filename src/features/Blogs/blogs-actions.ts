import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { blogsAPI } from './blogs-api'

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, { rejectWithValue }) => {
  try {
    const response = await blogsAPI.getBlogs()

    return { blogs: response.data.items }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return rejectWithValue(e.message)
    }
  }
})

export const addBlog = createAsyncThunk(
  'blogs/addBlog',
  async (param: { name: string; youtubeUrl: string }, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.addBlog(param)

      return { blog: response.data }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
