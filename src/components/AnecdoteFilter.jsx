import { useDispatch } from 'react-redux'
import { setFilter } from '../filterSlice'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div className="header-filter">
      <label htmlFor="filter">filter:</label>
      <input id="filter" type="text" onChange={handleChange} />
    </div>
  )
}

export default AnecdoteFilter
