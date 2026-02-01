function CharacterCard({ item }) {
  const originName = item.origin?.name || 'Desconocido'
  const locationName = item.location?.name || 'Desconocido'

  const statusClass =
    item.status === 'Alive'
      ? 'bg-emerald-100 text-emerald-700'
      : item.status === 'Dead'
      ? 'bg-rose-100 text-rose-700'
      : 'bg-slate-200 text-slate-700'

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-56">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
          >
            {item.status}
          </span>
        </div>
        <dl className="mt-3 space-y-1 text-sm text-slate-700">
          <div className="flex justify-between">
            <dt className="text-slate-500">Gender</dt>
            <dd className="font-medium">{item.gender}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Species</dt>
            <dd className="font-medium">{item.species}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Origin</dt>
            <dd className="font-medium">{originName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Location</dt>
            <dd className="font-medium">{locationName}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default CharacterCard
