export default (state = {
  temperature: [],
  city: [],
  country: [],
  icon: null,
  description: null,
  error: null,
  hasError: true
}, action) => {
  switch (action.type) {
    case 'ADD_WEATHER_SUCCEEDED':
      return {
        ...state,
        temperature: [...state.temperature, action.payload.temperature],
        city: [...state.city, action.payload.city],
        country: [...state.country, action.payload.country],
        description: action.payload.description,
        icon: action.payload.icon,
        error: "",
        hasError: false
      }
    case 'ADD_WEATHER_ERROR': {
        console.log('hiba');
        return {
          ...state,
          error: action.payload.error,
          hasError: action.payload.hasError,
        }
      }

    default:
    return state
   }
}
