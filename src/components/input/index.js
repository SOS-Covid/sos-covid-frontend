import React from 'react'
import './style.scss'

export const Input = props => {
  const { label, ...defaultProps } = props

  return (
    <div className="Input">
      <span className="label">{label}</span>
      <input {...defaultProps} />
    </div>
  )
}
