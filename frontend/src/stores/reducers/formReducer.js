const initialState = {
    formDatas: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'SAVE_FORM_DATA':
    let currentDatas = state.formDatas
    currentDatas.push(payload)
    return { ...state, formDatas: currentDatas }

  default:
    return state
  }
}
