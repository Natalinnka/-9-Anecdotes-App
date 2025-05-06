import { useDispatch } from 'react-redux'
import { createAnecdote } from '../anecdoteSlice'
import { setNotification, clearNotification } from '../notificationSlice'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`you created anecdote ${content}`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit" className="create-btn">create</button>
    </form>
  )
}

export default AnecdoteForm
