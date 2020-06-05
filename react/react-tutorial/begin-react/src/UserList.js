import React from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    return (
        <div>
            <div>
                <b onClick={() => onToggle(id)} style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}>
                    {username}
                </b>
                <span>({email})</span>
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    // key의 역할?
    // 각 배열의 원소가 어떤 객체를 가리키는지 알 수 있음
    // 즉, 키 값이 있어야 엘리먼트가 어떤 데이터를 가리키는 지 알 수 있으므로 효율적인 렌더링이 가능하다
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;
