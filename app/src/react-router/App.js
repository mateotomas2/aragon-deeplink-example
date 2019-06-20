import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Users from './Users'
import Contact from './Contact'
import Blog from './Blog'
import Home from './Home'

function App() {
  const [route, setRoute] = useState('')

  useEffect(() => {
    setRoute(window.location.hash)

    window.addEventListener('hashchange', onHashChanged)
    return () => window.removeEventListener('hashchange', onHashChanged)
  }, [])

  const onHashChanged = () => {
    window.parent.postMessage(
      { name: 'hashChange', value: window.location.hash.replace('#/', '') },
      '*'
    )
    setRoute(window.location.hash)
  }
  return (
    <div>
      <p>Menu:</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/blog/1">Blog 1</Link>
        </li>
        <li>
          <Link to="/blog/2/param1/param2">Blog 2</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="#/link1">Link1 (Custom route handler)</a>
        </li>
        <li>
          <a href="#/link2">Link2 (Custom route handler)</a>
        </li>
      </ul>
      <hr />
      <div>
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/blog/:id" component={Blog} />
        <Route exact path="/blog/:id/:param1/:param2" component={Blog} />
        <Route exact path="/" component={Home} />
        {/* Custom routes */}
        {route === '#/link1' && 'Clicked on link1'}
        {route === '#/link2' && 'Clicked on link2'}
      </div>
      <br />
      <hr /> Hash selected: {route}
    </div>
  )
}

export default App
