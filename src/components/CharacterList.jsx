import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'
import { selectFilteredCharacters } from '../redux/characterSlice'

function CharacterList() {
  const results = useSelector(selectFilteredCharacters)

  return (
    <div className='mt-5'>
      {results.length === 0 && (
        <div className='text-center text-gray-500'>Sin resultados</div>
      )}
      {results?.map(item => (
        <CharacterCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CharacterList
