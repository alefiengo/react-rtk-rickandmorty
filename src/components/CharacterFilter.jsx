import { useDispatch } from 'react-redux'
import { filterCharacterByStatus } from '../redux/characterSlice'

function Filter() {
  const dispatch = useDispatch()

  const handleFilter = (value) => {
    dispatch(filterCharacterByStatus(value))
  };

  return (
    <div className='flex justify-center items-center m-3'>
      <ul className='flex space-x-8 p-4'>
        <li className='px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 cursor-pointer' onClick={() => handleFilter('')}>
            All
        </li>
        <li className='px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 cursor-pointer' onClick={() => handleFilter('Alive')}>
          Alive
        </li>
        <li className='px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 cursor-pointer' onClick={() => handleFilter('Dead')}>
          Dead
        </li>
        <li className='px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 cursor-pointer' onClick={() => handleFilter('unknown')}>
          Unknown
        </li>
      </ul>      
    </div>
  )
}

export default Filter
