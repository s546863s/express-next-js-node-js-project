import React from 'react';

const getUsers = async () =>{
    const res = await fetch('');
    return res.json();
}

const UsersPage = async () => {
    const usersPromise = await getUsers()


    return (
        <div>
            <h1>Users inside  Users List {} .</h1>
        </div>
    );
};

export default UsersPage;