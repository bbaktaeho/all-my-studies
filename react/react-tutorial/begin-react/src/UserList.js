import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function ({ user }) {
    const { id, active, username, email } = user;
    const dispatch = useContext(UserDispatch);
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: active ? 'green' : 'black',
                }}
                onClick={() => dispatch({ type: 'TOGGLE_USER', id })}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => dispatch({ type: 'REMOVE_USER', id })}>삭제</button>
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
