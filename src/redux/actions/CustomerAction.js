import axios from 'axios';

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';


export const customerAction = (data) => {
    return {
        type: FETCH_CUSTOMER,
        payload: data
    }
}


export const customerCalled = () => {
    return function (dispatch) {
        dispatch(customerAction())
        axios.get('http://34.211.49.50:8080/v1/front/customer/list').then(response => {
            const users = response.data;
            dispatch(customerAction(users))

        }).catch(error => {
            const failure = error.message
            dispatch(customerAction(failure))

        })
    }
}