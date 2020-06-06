import React, { useReducer, useCallback, useRef, useMemo, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import produce from 'immer';

window.produce = produce;

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });

        case 'TOGGLE_USER':
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        // return {
        //     ...state,
        //     users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
        // };
        case 'REMOVE_USER':
            return produce(state, (draft) => {
                const index = draft.users.findIndex((user) => user.id === action.id);
                draft.users.splice(index, 1);
            });
        // return {
        //     ...state,
        //     users: state.users.filter((user) => user.id !== action.id),
        // };
        default:
            return state;
    }
}

// Context에는 Provider가 있음
export const UserDispatch = createContext(null);

function App() {
    // const nextId = useRef(5);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    // const [form, onChange, reset] = useInputs({ username: '', email: '' });
    // const { username, email } = form;

    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type: 'CREATE_USER',
    //         user: {
    //             id: nextId.current,
    //             username,
    //             email,
    //         },
    //     });
    //     nextId.current += 1;
    //     reset();
    // }, [username, email, reset]);

    // const onToggle = useCallback((id) => {
    //     dispatch({
    //         type: 'TOGGLE_USER',
    //         id,
    //     });
    // }, []);

    // const onRemove = useCallback((id) => {
    //     dispatch({
    //         type: 'REMOVE_USER',
    //         id,
    //     });
    // }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            {/* <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} /> */}
            <UserList users={users} />
            <div>{count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
