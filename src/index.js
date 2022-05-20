import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Users from './routes/Users';
import UserDetails from './routes/UserDetails';
import Error from './routes/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

// SIMPLE EXAMPLE (1)
// root.render(
//   <React.StrictMode>
//     {/* To allow routing between different pages in our application, we must wrap
//         our routes in a <BrowserRouter>
//     */}
//     <BrowserRouter>
//       {/* We then open a <Routes> element to hold all of the different routes in our application */}
//       <Routes>
//         {/* Each route has a path and an element that it renders */}
//         <Route index element={<App />} />
//         <Route path='/about' element={<About />} />
//         {/* Handles unmatched routes */}
//         <Route path='*' element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// )

// FULL EXAMPLE WITH SUBROUTES (2)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* wrapping routes as subroutes
            - this means the nested Route elements will be rendered
              in the App component, but we must specify an Outlet
              component in App
        */}
        <Route path='/' element={<App />}>
          {/* Renders App component and the selected route, Outlet is required in the App.js file */}
          {/* index indicates the default route for a surrounding path */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="users" element={<Users />}>
            {/* users is a subroute that also has its own subroute 
                - we can also pass path variables by prefixing the path
                  attributes value with a colon
            */}
            {/* localhost:3000/users/:userId */}
            <Route path=":userId" element={<UserDetails />} />
          </Route>

        </Route>
        {/* Handles unmatched routes */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
