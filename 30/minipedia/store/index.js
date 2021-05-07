export const state = () => ({
 fullInfo: null,
 content: null,
 summary: null,
 rawImages: null,
 mainImage: null,
 originalUrl: null,
 langlinks: [],
})

export const mutations = {
 setFullInfo (state, fullInfo) {
   state.fullInfo = fullInfo
 },
 setContent (state, content) {
   state.content = content
 },
 setSummary (state, summary) {
   state.summary = summary
 },
 setRawImages (state, rawImages) {
   state.rawImages = rawImages
 },
 setMainImage (state, mainImage) {
   state.mainImage = mainImage
 },
 setLangLinks (state, langLinks) {
  state.langlinks = langLinks
 },
 setOriginalUrl(state, url) {
  state.originalUrl = url;
 }
} 