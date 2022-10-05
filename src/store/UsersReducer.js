import {getService} from "../services";


const usersActions = {
    SET_USERS: 'SET_USERS',
    SET_USER: 'SET_USER'
}

const init = {
    users: [],
    user: null
}

const usersReducer = (state = init, actions) => {
    switch (actions.type) {
        case usersActions.SET_USERS:
            return {...state, users: actions.payload}
        case usersActions.SET_USER:
            const user = actions.payload
            return {...state, user}
        default:
            return state
    }
}

export {usersReducer, usersActions}