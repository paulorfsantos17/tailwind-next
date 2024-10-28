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
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FiLeInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
