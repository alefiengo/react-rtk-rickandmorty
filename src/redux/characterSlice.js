import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
  results: [],
  query: '',
  statusFilter: '',
  status: 'idle',
  error: null,
}

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    if (!response.ok) {
      throw new Error('Error al cargar personajes')
    }
    return response.json()
  }
)

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload
    },
    clearFilters: state => {
      state.query = ''
      state.statusFilter = ''
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.info = action.payload.info
        state.results = action.payload.results
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Error inesperado'
      })
  },
})

export const selectFilteredCharacters = createSelector(
  state => state.character.results,
  state => state.character.query,
  state => state.character.statusFilter,
  (results, query, statusFilter) => {
    const normalizedQuery = query.toLowerCase().trim()

    return results.filter(character => {
      const matchesName = character.name
        .toLowerCase()
        .includes(normalizedQuery)
      const matchesStatus = statusFilter
        ? character.status.toLowerCase() === statusFilter
        : true

      return matchesName && matchesStatus
    })
  }
)

export const { setQuery, setStatusFilter, clearFilters } = characterSlice.actions
export default characterSlice.reducer
