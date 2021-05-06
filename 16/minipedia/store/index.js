export const state = () => ({
 exampleState: 'initial state'
})

export const mutations = {
 rename (state, text) {
   state.exampleState = text
 },
} 