import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCharacter } from './redux/characterSlice'
import { fetchData } from './helpers/fetchData'
import CharacterList from './components/CharacterList'
import CharacterSearch from './components/CharacterSearch'
import CharacterFilter from './components/CharacterFilter'

const apiData = fetchData('https://rickandmortyapi.com/api/character')

function App() {
  const dispatch = useDispatch()
  const data = apiData.read()

  useEffect(() => {
    dispatch(setCharacter(data))
  }, [data, dispatch])

  return (
    <div className='container mx-auto mt-20'>
      <h1 className='text-3xl font-extrabold tracking-tight text-center'>
        Rick and Morty
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterSearch />
        <CharacterFilter />
        <CharacterList />
      </Suspense>
    </div>
  )
}

export default App
