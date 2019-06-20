import React from 'react'
import ReactDOM from 'react-dom'
import { AragonApi } from '@aragon/api-react'
import Wrapper from './react-router/Wrapper'

const reducer = state => {
  if (state === null) {
    return {}
  }
  return state
}

ReactDOM.render(
  <AragonApi reducer={reducer}>
    <Wrapper />
  </AragonApi>,
  document.getElementById('root')
)
