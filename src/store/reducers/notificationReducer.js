const initState = {
  notifications: [],
}

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      return {...state, notifications: [...state.notifications, action.data]}
    case 'CREATE_NOTIFICATION_ERROR':
      console.log('create notification error', action.err)
      return state
    default:
      return state
  }
}

export default notificationReducer
