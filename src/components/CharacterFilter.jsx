import { useDispatch, useSelector } from 'react-redux'
import { setStatusFilter } from '../redux/characterSlice'

function CharacterFilter() {
  const dispatch = useDispatch()
  const statusFilter = useSelector(state => state.character.statusFilter)

  const handleFilter = value => {
    dispatch(setStatusFilter(value))
  }

  const baseItemClasses =
    'px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 cursor-pointer'
  const activeItemClasses = 'bg-gray-300'

  return (
    <div className='flex justify-center items-center m-3'>
      <ul className='flex space-x-8 p-4'>
        <li
          className={`${baseItemClasses} ${
            statusFilter === '' ? activeItemClasses : ''
          }`}
          onClick={() => handleFilter('')}
        >
          All
        </li>
        <li
          className={`${baseItemClasses} ${
            statusFilter === 'alive' ? activeItemClasses : ''
          }`}
          onClick={() => handleFilter('alive')}
        >
          Alive
        </li>
        <li
          className={`${baseItemClasses} ${
            statusFilter === 'dead' ? activeItemClasses : ''
          }`}
          onClick={() => handleFilter('dead')}
        >
          Dead
        </li>
        <li
          className={`${baseItemClasses} ${
            statusFilter === 'unknown' ? activeItemClasses : ''
          }`}
          onClick={() => handleFilter('unknown')}
        >
          Unknown
        </li>
      </ul>      
    </div>
  )
}

export default CharacterFilter
