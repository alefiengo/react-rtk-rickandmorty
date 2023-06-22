function CharacterCard({ item }) {
  
  return(
    <div className="flex m-2">
      <div className="flex-none w-48 relative">
        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-auto m-3">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {item.name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            <span className={
              item.status === 'Alive' ? 'text-green-500' : 
              item.status === 'Dead' ? 'text-red-500' :
              'text-indigo-500'
            }>
              {item.status}
            </span>
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Gender: {item.gender}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Species: {item.species}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Origin: {item.origin.name}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Location: {item.location.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
