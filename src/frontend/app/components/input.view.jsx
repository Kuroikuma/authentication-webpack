import '../css/input.css'
import React from 'react'

export const TextfieldView = (props) => {
  const {
    fullWidth,
    hover,
    focus,
    error,
    placeholder,
    type,
    size,
    handleChange,
    disabled,
    multiline,
    handlerHoverChange,
    handlerFocusChange,
    rows,
    value,
    helperText,
    name,
  } = props

  return (
    <div
      className={`containerInput ${fullWidth ? 'fullWidthi' : ''} ${
        hover ? 'hover' : ''
      } ${focus ? 'focus' : ''} ${error ? 'error' : ''} ${size}i`}
    >
      {multiline ? (
        <textarea
          onChange={handleChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder={placeholder}
          rows={rows}
        >
          {value}
        </textarea>
      ) : (
        <input
          id="input"
          onChange={handleChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
        />
      )}

      {helperText === '' ? null : <p>{helperText}</p>}
    </div>
  )
}
