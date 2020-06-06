import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
    console.log('create user');

    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username}></input>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}></input>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
