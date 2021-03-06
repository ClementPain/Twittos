const initialState = {
  loading: false,
  currentUser: '',
  currentUserID: '',
  error: ''
}

const fetchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_REQUEST' :
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USER_SUCCESS' :
      return {
        ...state,
        loading: false,
        currentUser: action.currentUser
      }
    case 'FETCH_USER_FAILURE' :
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: 
      return state;
  }
}

export default fetchReducer;
