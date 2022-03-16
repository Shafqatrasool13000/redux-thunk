import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customerCalled } from '../redux/actions/CustomerAction';
import { UserFetching } from '../redux/actions/UserAction';

const UsersContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(customerCalled())
        dispatch(UserFetching())
    }, [])
    const userData = useSelector(state => state);
    console.log(userData)
    return <>
        {userData.loading ? <div>Loading</div> : userData.error ? (
            <div>{userData.error}</div>
        ) : (<div>
            <h2>Users</h2>
            <div>
                {userData && userData.users && userData.users.map((user, i) => <p key={i}>{user.name}</p>)}
            </div>
        </div>)}
    </>
}

export default UsersContainer
