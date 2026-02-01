import { useDispatch, useSelector } from 'react-redux'
import { setStatusFilter } from '../redux/characterSlice'

function CharacterFilter() {
  const dispatch = useDispatch()
  const statusFilter = useSelector(state => state.character.statusFilter)

  const handleFilter = value => {
    dispatch(setStatusFilter(value))
  }

  const baseItemClasses =
    'px-4 py-2 text-sm font-semibold rounded-full border border-slate-200 bg-white text-slate-700 transition'
  const activeItemClasses =
    '!bg-slate-900 !text-white !border-slate-900 hover:bg-slate-900'
  const inactiveHoverClasses = 'hover:bg-slate-200'

  return (
    <div className='flex justify-center items-center mt-6'>
      <div className='flex flex-wrap justify-center gap-3'>
        <button
          type='button'
          className={`${baseItemClasses} ${
            statusFilter === '' ? activeItemClasses : inactiveHoverClasses
          }`}
          onClick={() => handleFilter('')}
        >
          All
        </button>
        <button
          type='button'
          className={`${baseItemClasses} ${
            statusFilter === 'alive' ? activeItemClasses : inactiveHoverClasses
          }`}
          onClick={() => handleFilter('alive')}
        >
          Alive
        </button>
        <button
          type='button'
          className={`${baseItemClasses} ${
            statusFilter === 'dead' ? activeItemClasses : inactiveHoverClasses
          }`}
          onClick={() => handleFilter('dead')}
        >
          Dead
        </button>
        <button
          type='button'
          className={`${baseItemClasses} ${
            statusFilter === 'unknown'
              ? activeItemClasses
              : inactiveHoverClasses
          }`}
          onClick={() => handleFilter('unknown')}
        >
          Unknown
        </button>
      </div>
    </div>
  )
}

export default CharacterFilter
