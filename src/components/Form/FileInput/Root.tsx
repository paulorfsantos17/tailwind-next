'use client'

import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentProps,
} from 'react'

interface RootProps extends ComponentProps<'div'> {}

interface FiLeInputContextType {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FiLeInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
