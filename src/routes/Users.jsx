import React from "react";
import { getUsers } from "../users";
import { Link, Outlet } from "react-router-dom";

export default function Users() {
    const users = getUsers();

    return (
        <div>
            <h2>Users list</h2>
            <ul>
                {users.map(user => (
                    <li key={user.username}><Link to={`/users/${user.id}`}>{user.username} | Details</Link></li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}