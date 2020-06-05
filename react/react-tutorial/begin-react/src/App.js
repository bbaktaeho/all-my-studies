import React, { useRef, useState } from 'react';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';

function App() {
    const [inputs, setInputs] = useState({ username: '', email: '' });
    const { username, email } = inputs;
    const [users, setUsers] = useState([
        { id: 1, username: 'bbak', email: 'test@test', active: true },
        { id: 2, username: 'qwe', email: 'test2@test2', active: false },
        { id: 3, username: 'asdf', email: 'test3@test3', active: false },
        { id: 4, username: 'vczvzcv', email: 'test4@test4', active: false },
    ]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    // 다음 아이디 값을 기억하고 있음
    // 특정 돔에다가 선택할 때 쓸 수도 있지만, 어떠한 변수를 기억하고 싶을 때, 리랜더링해도 기억하고 싶을 때 사용
    const nextId = useRef(5);
    const onCreate = () => {
        const NewUser = {
            id: nextId.current,
            username,
            email,
        };

        // ! 배열에 항목을 추가하는 법
        // setUsers([...users, NewUser]);
        setUsers(users.concat(NewUser));

        setInputs({ username: '', email: '' });
        console.log(nextId.current);
        nextId.current += 1;
    };

    const onRemove = (id) => {
        // ! immutable!!!!
        // ? 제거할 때 필터를 사용하는 이유
        // todo: 선택된 컴포넌트를 제외하고 나머지 컴포넌트들을 재랜더링 해야 하므로 특정 테스트를 통과한 컴포넌트만 추출해야하기 때문!
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    };
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
        </>
    );
}

export default App;
