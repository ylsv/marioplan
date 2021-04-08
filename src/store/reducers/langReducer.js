const initState = {
  currentLanguage: 'ru',
}

const landReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SWITCH_LANGUAGE':
      return {
        ...state,
        currentLanguage: state.currentLanguage === 'ru' ? 'en' : 'ru',
      }
    default:
      return state
  }
}

export default landReducer
