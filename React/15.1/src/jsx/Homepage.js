import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/ProductsMain'>Product</Link>
     
    </div>
  )
}

export default Homepage