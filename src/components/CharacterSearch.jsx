import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/characterSlice'

function CharacterSearch() {
  const dispatch = useDispatch()
  const query = useSelector(state => state.character.query)

  const handleSearch = e => {
    dispatch(setQuery(e.target.value))
  }

  return (
    <div className='flex justify-center items-center m-3'>
      <input
        type='text'
        placeholder='Search by Name'
        onChange={handleSearch}
        value={query}
        className='form-input px-4 py-3 rounded-full'
      />
    </div>
  )
}

export default CharacterSearch
