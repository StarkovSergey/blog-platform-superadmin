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

  async (param: { name: string; websiteUrl: string; description: string }, { rejectWithValue }) => {
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

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id: string, { rejectWithValue }) => {
    try {
      await blogsAPI.deleteBlog(id)

      return id
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
