import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'
import { selectFilteredCharacters } from '../redux/characterSlice'

function CharacterList() {
  const results = useSelector(selectFilteredCharacters)

  return (
    <div className='mt-8'>
      {results.length === 0 && (
        <div className='text-center text-slate-500'>Sin resultados</div>
      )}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {results?.map(item => (
          <CharacterCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default CharacterList
