export const state = () => ({
 fullInfo: null,
 content: null,
 summary: null,
 rawImages: null,
 mainImage: null,
})

export const mutations = {
 setFullInfo (state, text) {
   state.fullInfo = text
 },
 setContent (state, text) {
   state.content = text
 },
 setSummary (state, text) {
   state.summary = text
 },
 setRawImages (state, text) {
   state.rawImages = text
 },
 setMainImage (state, text) {
   state.mainImage = text
 },
} 