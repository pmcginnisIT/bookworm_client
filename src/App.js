import React, { useState, useEffect } from 'react';

import Navbar from './home/Navbar';
import './App.css';

import BooklistHome from './booklist/BooklistHome'
import Auth from './auth/Auth'

const App = () => {
    const [sessionToken, setSessionToken] = useState('');
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
        }
      }, []);
      
      const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(newToken);
      }
      const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
      }
      const protectedViews = () => {
        return (sessionToken === localStorage.getItem("token") ? <BooklistHome token={sessionToken}/> : <Auth updateToken={updateToken}/>)
      }

return(
    <div> 
        <Navbar clickLogout={clearToken}/>
        {protectedViews()}
    </div>
);
}

export default App;