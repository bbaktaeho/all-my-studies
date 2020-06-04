export interface User {
    id: string;
    username: string;
    password: string;
}

const users: Array<User> = [
    { id: '1', username: 'bbak', password: 'bbak' },
    { id: '2', username: 'test', password: 'test' },
];

export default users;
