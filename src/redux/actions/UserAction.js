import axios from 'axios';
export const FETCH_USERS_DATA='FETCH_USERS_DATA';
export const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE';
export const FailureAction = (data) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: data
    }
}

export const FetchAction = () => {
    return {
        type: FETCH_USERS_DATA
    }
}

export const SuccessAction = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}





export const UserFetching = () => {
    return function (dispatch) {
        dispatch(FetchAction)
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data;
            dispatch(SuccessAction(users))

        }).catch(error => {
            const failure = error.message
            dispatch(FailureAction(failure))

        })
    }
}