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
  } = props
  const [focus, setFocus] = useState(false)
  const [valueI, setvalueI] = useState(value)
  const [hover, setHover] = useState(false)

  const handlerFocusChange = () => {
    setFocus(!focus)
  }

  const handlerHoverChange = () => {
    setHover(!hover)
  }

  const handleInputChange = (evt) => {
    setvalueI(evt.target.value)
  }

  return (
    <TextfieldView
      fullWidth={fullWidth}
      hover={hover}
      focus={focus}
      error={error}
      size={size}
      handleInputChange={handleInputChange}
      disabled={disabled}
      multiline={multiline}
      handlerHoverChange={handlerHoverChange}
      handlerFocusChange={handlerFocusChange}
      rows={rows}
      type={type}
      placeholder={placeholder}
      valueI={valueI}
      helperText={helperText}
    />
  )
}
