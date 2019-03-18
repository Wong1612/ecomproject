const INITIAL_STATE = {
    id: 0,
    username: "",
    error: "",
    loading: false,
    role: "",
    cart: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...INITIAL_STATE, loading: true}
        case 'LOADING_REGISTER':
            return {...INITIAL_STATE, loading: true}
        case 'LOGIN_SUCCESS':
            return {...INITIAL_STATE, username: action.payload.username, role: action.payload.role}
        case 'USER_NOT_FOUND':
            return {...INITIAL_STATE, error : 'Username or Password is Incorrect!'}
        case 'SERVER_ERROR':
            return {...INITIAL_STATE, error : 'Server error, please try again later!'}
        case 'RESET_USER':
            return INITIAL_STATE
        case 'USERNAME_NOT_AVAILABLE':
            return {...INITIAL_STATE, error : 'Username not available!', loading : false}
        case 'ADDED_TO_CART':
            return {...INITIAL_STATE, cart : cart + 1}
        default: 
            return state
    }
}