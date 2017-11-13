let _startIdx = 0
export default {
  createNew ({resolve, commit, dispatch}, title) {
    let newItem = {}
    newItem.title = title
    newItem.id = ++_startIdx
    newItem.isCompleted = false
    commit.createNew(newItem)
    return dispatch.onCreateNew(newItem)
  },
  removeItemById({resolve, commit, dispatch}, id) {
    commit.removeItemById(id)
    return dispatch.onRemoveItemById(id)
  }
}