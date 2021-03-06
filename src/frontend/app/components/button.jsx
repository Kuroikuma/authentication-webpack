import '../css/button.css'
import React, { useState, useEffect } from 'react'
import send from '../../../assets/send-message.png'
import deleteI from '../../../assets/bin.png'
import donate from '../../../assets/diskette (1).png'
import save from '../../../assets/diskette.png'
import photo from '../../../assets/photo.png'
import shoppiengcart from '../../../assets/shoppingcart.png'

export const Button = ({
  variant = '',
  startIcon = '',
  endIcon = '',
  color = '',
  size = '',
  id = '',
  title = '',
  name = '',
  children,
  disableShadow = '',
  disabled,
  onClick = null,
}) => {
  const [position, setPosition] = useState('')
  const [img, setImg] = useState()

  if (disableShadow !== '') {
    disableShadow = 'disableShadow'
  }

  if (startIcon !== '' || endIcon !== '') {
  }
  useEffect(() => {
    if (startIcon !== '') {
      setPosition('startIcon')
    }
    if (endIcon !== '') {
      setPosition('endIcon')
    }
  }, [startIcon, endIcon])

  useEffect(() => {
    switch (startIcon || endIcon) {
      case 'send':
        setImg(send)
        break
      case 'photo':
        setImg(photo)
        break
      case 'delete':
        setImg(deleteI)
        break
      case 'donate':
        setImg(donate)
        break
      case 'save':
        setImg(save)
        break
      case 'buy':
        setImg(shoppiengcart)
        break

      default:
        break
    }
  }, [startIcon, endIcon])

  return (
    <button
      name={name}
      title={title}
      disabled={disabled}
      onClick={onClick}
      id={id}
      className={`buttonDefault ${variant} ${disableShadow} ${position} ${size} ${color}`}
    >
      <p> {children} </p>
      {img && <img src={img} alt={img} />}
    </button>
  )
}
