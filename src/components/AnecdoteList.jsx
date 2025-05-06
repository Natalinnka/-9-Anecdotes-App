import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../anecdoteSlice'
import { setNotification, clearNotification } from '../notificationSlice'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)

  const filteredAnecdotes = anecdotes
    .filter((a) => a.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)

  const handleVote = (anec) => {
    dispatch(voteAnecdote(anec.id))
    dispatch(setNotification(`you voted for anecdote ${anec.content}`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <div className="anecdote-container">
      <ul className="anecdote-list">
        {filteredAnecdotes.map((anec) => (
          <li key={anec.id} className="anecdote-item">
            <span className="anecdote-text">{anec.content}</span>
            <div className="anecdote-actions">
              <span className="anecdote-votes">
                <strong>({anec.votes} votes)</strong>
              </span>
              <img
                src="/public/image/icons8-facebook-like-100.png"
                alt="vote"
                className="vote-icon"
                onClick={() => handleVote(anec)}
              />

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList



