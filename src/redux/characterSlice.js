import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {},
  results: [],
  filteredResults: [],
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      const { info, results } = action.payload
      state.info = info
      state.results = results
      state.filteredResults = results
    },
    filterCharacterByName: (state, action) => {
      const formatName = action.payload.toLowerCase()
      const filteredResults = state.results.filter(character => {
        const characterName = character.name.toLowerCase()

        return characterName.includes(formatName)
      })

      state.filteredResults = filteredResults
    },
    filterCharacterByStatus: (state, action) => {
      const filteredResults = state.results.filter(character => {
        return character.status.includes(action.payload)
      })

      state.filteredResults = filteredResults
    }
  },
})

export const { setCharacter, filterCharacterByName, filterCharacterByStatus } = characterSlice.actions
export default characterSlice.reducer
