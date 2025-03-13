import React from 'react'
import Header from './components/Header'

export default function App() {
  const appName = "My Awesome App";
  return (
    <div className='appContainer'>
      {/* <h1>
        Welcome to {appName}
      </h1> */}
      <Header myAppName={appName} />
    </div>
  )
}
