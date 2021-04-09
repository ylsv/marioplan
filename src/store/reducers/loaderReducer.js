const initState = {
  isLoading: false,
}

const loaderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return {
        ...state,
        isLoading: true,
      }
    case 'HIDE_LOADER':
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default loaderReducer
