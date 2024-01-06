// postSlice.test.ts
import postReducer, { fetchPosts, setPosts } from './postSlice'

describe('post reducer', () => {
  it('should handle initial state', () => {
    expect(postReducer(undefined, { type: 'unknown' })).toEqual({
      data: [],
      loading: false,
      error: null,
    })
  })

  it('should handle setPosts', () => {
    const initialState = { data: [], loading: true, error: null }
    const newState = postReducer(
      initialState,
      setPosts([{ id: 1, title: 'Test Post' }])
    )
    expect(newState).toEqual({
      data: [{ id: 1, title: 'Test Post' }],
      loading: false,
      error: null,
    })
  })

  it('should handle fetchPosts.pending', () => {
    const initialState = { data: [], loading: false, error: null }
    const newState = postReducer(initialState, fetchPosts.pending as any)
    expect(newState).toEqual({
      data: [],
      loading: true,
      error: null,
    })
  })

  it('should handle fetchPosts.fulfilled', () => {
    const initialState = { data: [], loading: true, error: null }
    const newState = postReducer(
      initialState,
      fetchPosts.fulfilled(
        [{ id: 1, title: 'Test Post' }],
        'requestId',
        fetchPosts.fulfilled as any
      )
    )
    expect(newState).toEqual({
      data: [{ id: 1, title: 'Test Post' }],
      loading: false,
      error: null,
    })
  })

  it('should handle fetchPosts.rejected', () => {
    const initialState = { data: [], loading: true, error: null }
    const newState = postReducer(
      initialState,
      fetchPosts.rejected(
        new Error('Test Error'),
        'requestId',
        fetchPosts.rejected as any
      )
    )
    expect(newState).toEqual({
      data: [],
      loading: false,
      error: 'Test Error',
    })
  })
})
