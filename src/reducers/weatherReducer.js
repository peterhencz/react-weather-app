export default (state = {
  defaultCity: 'Budapest',
}, action) => {
  switch (action.type) {
    case 'ADD_WEATHER':
    return {
      result: action.payload
    }
    default:
    return state
  }
}