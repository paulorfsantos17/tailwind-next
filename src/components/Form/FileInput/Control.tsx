'use client'

import React, { type ChangeEvent, type ComponentProps } from 'react'
import { useFileInput } from './Root'

interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return null
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
