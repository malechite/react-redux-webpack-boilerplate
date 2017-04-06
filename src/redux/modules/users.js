import { CALL_API } from 'redux/middleware/api';

//User Actions
const ADD = 'application/users/ADD';
const DELETE = 'application/users/application/users/DELETE';
const EDIT = 'application/users/EDIT';
const SEARCH_REQUEST = 'application/users/SEARCH_REQUEST';
const SEARCH_RESPONSE = 'application/users/SEARCH_RESPONSE';
const SEARCH_FAILURE = 'application/users/SEARCH_FAILURE';

//Initial State
const initialState = {
    loading: false,
    users: []
};

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESPONSE:
            return Object.assign({}, state, {
                loading:false,
                users: action.response.text
            });

        default:
            return state;
    }
}

//Action Creators
export function addUser(user) {
    return {
        type: ADD,
        user
    };
}

export function deleteUser(user) {
    return {
        type: DELETE,
        user
    };
}

export function editUser(user) {
    return {
        type: EDIT,
        user
    };
}


export function searchUsers() {
    return {
        type: SEARCH_REQUEST
    };
}

export function receiveUsers(item) {
    return {
        type: SEARCH_RESPONSE,
        item
    };
}

//Async actions
export function fetchQuote() {
    return {
        [CALL_API]: {
            type: 'GET',
            endpoint: 'protected/random-quote',
            options: {},
            actions: {
                request: SEARCH_REQUEST,
                success: SEARCH_RESPONSE,
                failure: SEARCH_FAILURE
            }
        }
    };
}
