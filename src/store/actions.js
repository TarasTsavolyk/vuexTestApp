
export default {
  addPet: ({ commit }, payLoad) => {
    commit('appendPet', payLoad)
  }
}
