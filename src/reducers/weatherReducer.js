export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
    return {
      result: action.payload
    }
    default:
    return state
  }
}