import React from 'react'
import './style.scss'

export const Button = props => (
  <div className="Button">
    <button onClick={props.onclick}>{props.children}</button>
  </div>
)