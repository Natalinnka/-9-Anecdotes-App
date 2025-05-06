import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, content: 'But it works in my machine...', votes: 8 },
  { id: 2, content: 'If it hurts, do it more often.', votes: 2 },
  { id: 3, content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 1 },
  { id: 4, content: 'The hardest part of coding is getting started.', votes: 5 },
  { id: 5, content: 'Adding manpower to a late software project makes it later!', votes: 0 }
]

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      return state.map(anec =>
        anec.id === id ? { ...anec, votes: anec.votes + 1 } : anec
      )
    },
    createAnecdote(state, action) {
      const content = action.payload
      const newAnecdote = {
        id: state.length + 1,
        content,
        votes: 0
      }
      return state.concat(newAnecdote)
    }
  }
})

export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer

