import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../users";

export default function UserDetails() {
    
    // the useParams() function returns an object containing
    // all specified path variables
    const params = useParams(); // get url params

    // the path variable will be stored as a field on params with the same name
    // as that specified in the Route (in index.js)
    const user = getUser(parseInt(params.userId, 10))

    return (
        <div>
            {/* param is same as declared in the route in index.js */}
            <h2>User: {user.id}</h2>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}