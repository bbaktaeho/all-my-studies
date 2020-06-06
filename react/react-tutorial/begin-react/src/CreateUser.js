import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';
// 컨텍스트 사용해서 dispatch 불러오고
// nextid 관리하고
//
function CreateUser() {
    const nextId = useRef(5);
    const dispatch = useContext(UserDispatch);
    const [form, onChange, reset] = useInputs({ username: '', email: '' });
    const { username, email } = form;

    const onCreate = () => {
        dispatch({ type: 'CREATE_USER', user: { id: nextId.current, username, email } });
        reset();
        nextId.current += 1;
    };

    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username}></input>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}></input>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
