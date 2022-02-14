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
    handleInputChange,
    disabled,
    multiline,
    handlerHoverChange,
    handlerFocusChange,
    rows,
    valueI,
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
          onChange={handleInputChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder={placeholder}
          rows={rows}
        >
          {valueI}
        </textarea>
      ) : (
        <input
          id="input"
          onChange={handleInputChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder={placeholder}
          name={name}
          type={type}
          value={valueI}
        />
      )}

      {helperText === '' ? null : <p>{helperText}</p>}
    </div>
  )
}
