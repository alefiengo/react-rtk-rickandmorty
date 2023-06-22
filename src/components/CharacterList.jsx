import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const results = useSelector(state => state.character.filteredResults)

  return (
    <div className='mt-5'>
      {results?.map(item => (
        <CharacterCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CharacterList
