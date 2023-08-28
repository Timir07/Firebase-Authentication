import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div style={{fontSize:'50px', textAlign:'center'}}>
        <h1 style={{fontSize:'50px', marginBottom:'80px'}}>React Authentication with Firebase</h1>
        <Link to='/login'>Login</Link>
    </div>
  )
}
