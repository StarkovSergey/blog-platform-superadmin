import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { blogAPI } from './blog-api'

export const fetchBlog = createAsyncThunk(
  'blog/fetchBlog',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await blogAPI.getBlog(id)

      return { blog: response.data }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
