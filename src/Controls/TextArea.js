import React, { useState } from 'react'

function TextArea({
  title = 'Title',
  cols = 30,
  rows = 10,
  placeholder,
  value = undefined,
  onChange = () => {},
  required = false,
  readOnly = false,
  autoFocus = false,
  color = '#4fc3f7',
  error = false,
  errorColor = 'red',
  errorMsg = 'Something went wrong',
  style = null
}) {
  const [focused, setFocused] = useState(false)

  const label_style = {
    position: 'relative'
  }

  const title_style = {
    margin: '0.5rem 0'
  }

  const textarea_style = {
    padding: '0.3rem',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.25)',
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    borderBottom: error
      ? `2px solid ${errorColor}`
      : '1px solid rgba(255,255,255,0.4)',
    boxSizing: 'border-box',
    outline: 'none',
    position: 'relative',
    ...style
  }

  const focused_marker = {
    //width: focused ? '400%' : 0,
    width: focused ? 0 : 0,
    height: focused ? 0 : 0,
    //height: focused ? 3 : 0,
    backgroundColor: error ? errorColor : color,
    borderRadius: '1rem',
    position: 'absolute',
    bottom: 3,
    left: '-11rem',
    transition: '300ms'
  }

  const error_msg = {
    fontSize: '0.8rem',
    color: errorColor,
    transform: 'translateY(-10px)'
  }

  return (
    <label style={label_style}>
      <h4 style={title_style}>{title}</h4>
      <textarea
        style={textarea_style}
        name=''
        id=''
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={autoFocus}
        readOnly={readOnly}
      ></textarea>
      <div style={focused_marker} />
      {error && <p style={error_msg}>{errorMsg}</p>}
    </label>
  )
}

export default TextArea
