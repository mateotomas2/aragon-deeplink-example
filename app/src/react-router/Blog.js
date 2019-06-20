import React from 'react'

function Blog({ match }) {
  return (
    <div>
      <h3>Blog</h3>
      <h3>ID: {match.params.id}</h3>
      <h3>Param1: {match.params.param1}</h3>
      <h3>Param2: {match.params.param2}</h3>
    </div>
  )
}

export default Blog
