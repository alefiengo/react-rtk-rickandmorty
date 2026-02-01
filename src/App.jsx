import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './redux/characterSlice'
import CharacterList from './components/CharacterList'
import CharacterSearch from './components/CharacterSearch'
import CharacterFilter from './components/CharacterFilter'

function App() {
  const dispatch = useDispatch()
  const status = useSelector(state => state.character.status)
  const error = useSelector(state => state.character.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters())
    }
  }, [dispatch, status])

  return (
    <div className='container mx-auto mt-20'>
      <h1 className='text-3xl font-extrabold tracking-tight text-center'>
        Rick and Morty
      </h1>
      {status === 'loading' && (
        <div className='text-center mt-6'>Cargando...</div>
      )}
      {status === 'failed' && (
        <div className='text-center mt-6 text-red-500'>{error}</div>
      )}
      {status === 'succeeded' && (
        <>
          <CharacterSearch />
          <CharacterFilter />
          <CharacterList />
        </>
      )}
    </div>
  )
}

export default App
