import React from 'react';

function User({ user }) {
    return (
        <div>
            <div>
                <b>ID</b> : {user.id}
            </div>
            <div>
                <b>username</b> : {user.username}
            </div>
        </div>
    );
}

export default User;
