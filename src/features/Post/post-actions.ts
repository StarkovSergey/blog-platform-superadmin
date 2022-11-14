import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { postAPI } from './post-api'

export const fetchPost = createAsyncThunk(
  'post/fetchPost',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await postAPI.fetchPost(id)

      return { post: response.data }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
