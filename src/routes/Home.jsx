import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../users";

export default function Home() {

    return (
        <main>
            <h2>Home page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolore deleniti magnam. Voluptas illo veniam impedit quidem culpa dolores aliquid corrupti officia ratione odit porro laudantium ipsum a, id nesciunt!</p>
            <Link to="/error">Click me for the error page</Link>
        </main>
    )
}