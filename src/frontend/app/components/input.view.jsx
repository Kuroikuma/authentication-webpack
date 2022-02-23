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
    label,
    onChange,
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
      className={`containerInput 
        ${fullWidth && 'fullWidthi'} 
        ${hover && 'hover'} 
        ${focus && 'focus'} 
        ${error && 'error'} 
        ${size}i`}
    >
      {label && <p>{label}</p>}
      {multiline ? (
        <textarea
          onChange={onChange}
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
          className="input"
          onChange={onChange}
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
