// React
import React, { useEffect, useState } from 'react';

// Auth
import auth from './api/auth/auth';

// Styles
import './sass/app.scss'

// Components 
import Loader from './components/Loader'

function App() {

const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(async () => {
  await auth.check()
  if (auth.authenticated) {
    setIsAuthenticated(true)
  } else {
    auth.login()
  }
})

  if (isAuthenticated) {
    return (
      <div className="app">
        <h1>Dashboard</h1>
        <button onClick={() => {auth.logout()}}>Logout</button>
      </div>
    )
  } else {
    return (
      <Loader />
    )
  }
}

export default App