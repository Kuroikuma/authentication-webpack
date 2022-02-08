import React, { useContext } from 'react'
import { ChangeModeView } from '../components/Change-mode.view'
import Context from '../context/theme.context'

export const ChangeMode = () => {
  const { handleMode, theme } = useContext(Context)

  return <ChangeModeView theme={theme} handleMode={handleMode} />
}
