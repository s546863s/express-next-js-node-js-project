import UserList from '@/Components/userList/UserList';
import React, { Suspense } from 'react';

const getUsers = async () =>{
    const res = await fetch('http://localhost:8000/users');
    return res.json();
}

const UsersPage = async () => {
    const usersPromise =  getUsers()
     


    return (
        <div>
            <h1>Users2: with suspense {} .</h1>
            <Suspense fallback={<div>Loading.......</div>} >
            <UserList usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default UsersPage;