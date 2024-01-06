// postSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Post {
  id: number
  title: string
  // Add other properties as needed
}

export interface PostState {
  data: Post[]
  loading: boolean
  error: string | null
}

const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'An error occurred'
      })
  },
})

export const { setPosts } = postSlice.actions
export default postSlice.reducer
