import React, { useState, useEffect } from 'react'
import { TextfieldView } from '../components/input.view'

export const Textfield = (props) => {
  const {
    error = false,
    disabled = false,
    fullWidth = false,
    helperText = '',
    value = '',
    size = '',
    type = '',
    placeholder = '',
    multiline = false,
    rows = 0,
    name = '',
    onChange,
  } = props
  const [focus, setFocus] = useState(false)

  const [hover, setHover] = useState(false)

  const handlerFocusChange = () => {
    setFocus(!focus)
  }

  const handlerHoverChange = () => {
    setHover(!hover)
  }

  return (
    <TextfieldView
      fullWidth={fullWidth}
      hover={hover}
      focus={focus}
      error={error}
      size={size}
      onChange={onChange}
      disabled={disabled}
      multiline={multiline}
      handlerHoverChange={handlerHoverChange}
      handlerFocusChange={handlerFocusChange}
      rows={rows}
      type={type}
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      name={name}
    />
  )
}
