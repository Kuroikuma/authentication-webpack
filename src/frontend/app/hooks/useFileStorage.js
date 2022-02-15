import { useState } from 'react'
import { app } from '../../fb'

export const useFileStorage = () => {
  const [file, setFile] = useState('')
  const fileHandler = async (fileProps) => {
    const file = fileProps
    const storegeRef = app.storage().ref()
    const filePath = storegeRef.child(file.name)
    await filePath.put(file)
    const linkUrl = await filePath.getDownloadURL()
    setFile(linkUrl)
  }
  return [file, fileHandler]
}
