'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/app/utils/format-bytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="size-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex w-full flex-col items-start gap-1">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-700">
                    {file.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {formatBytes(file.size)}
                  </span>
                </div>
                <div className="flex w-full items-center gap-3">
                  <div className="h-2 flex-1 items-center gap-3 rounded-full bg-zinc-100">
                    <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
                  </div>
                  <span className="text-sm font-medium text-zinc-700">80%</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50"
            >
              <Trash2 className="size-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
