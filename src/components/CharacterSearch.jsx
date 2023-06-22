import { useDispatch } from 'react-redux'
import { filterCharacterByName } from '../redux/characterSlice'

function Search() {
  const dispatch = useDispatch()

  const handleSearch = e => {
    dispatch(filterCharacterByName(e.target.value))
  }

  return (
    <div className='flex justify-center items-center m-3'>
      <input
        type='text'
        placeholder='Search by Name'
        onChange={handleSearch}
        className='form-input px-4 py-3 rounded-full'
      />
    </div>
  )
}

export default Search
