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
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <header className='text-center space-y-3'>
          <p className='text-sm font-semibold tracking-widest text-slate-500'>
            CHARACTERS
          </p>
          <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900'>
            Rick and Morty
          </h1>
          <p className='text-slate-600'>
            Busca personajes y filtra por estado en tiempo real.
          </p>
        </header>

        <div className='mt-10'>
          {status === 'loading' && (
            <div className='text-center text-slate-500'>Cargando...</div>
          )}
          {status === 'failed' && (
            <div className='text-center text-red-500'>{error}</div>
          )}
          {status === 'succeeded' && (
            <>
              <CharacterSearch />
              <CharacterFilter />
              <CharacterList />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
