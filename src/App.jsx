

/* Component Imports */
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

import logo from '../public/image/logo1.png'


const App = () => {
  return (
    <div>
      {/* Header with logo */}
      <div className="header-container">
        <div className="header-title">
          <img src={logo} alt="Logo" className="logo" />
          <span>Anecdotes</span>
        </div>
        <AnecdoteFilter />
      </div>

      {/* Notification */}
      <Notification />

      {/* List of anecdotes */}
      <AnecdoteList />

      {/* Form for creating new anecdotes */}
      <div className="anecdote-container">
        <AnecdoteForm />
      </div>
    </div>
  )
}

export default App


