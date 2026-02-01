import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/characterSlice'

function CharacterSearch() {
  const dispatch = useDispatch()
  const query = useSelector(state => state.character.query)

  const handleSearch = e => {
    dispatch(setQuery(e.target.value))
  }

  return (
    <div className='flex justify-center items-center'>
      <input
        type='text'
        placeholder='Search by Name'
        onChange={handleSearch}
        value={query}
        aria-label='Search by name'
        className='w-full max-w-xl rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200'
      />
    </div>
  )
}

export default CharacterSearch
