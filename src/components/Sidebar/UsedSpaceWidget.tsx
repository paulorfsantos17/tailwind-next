import React from 'react'

export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 bg-violet-50 px-4 py-4">
      <div className="space-y-1">
        <p className="text-sm/5 font-medium text-violet-700">Used space</p>
        <p className="text-sm/5 text-violet-700">
          Your team has used 80% of your available space. Need more?
        </p>
        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-500"></div>
        </div>
        <div className="space-x-3">
          <button
            type="button"
            className="text-sm font-medium text-violet-500 hover:text-violet-700"
          >
            Dismiss
          </button>
          <button
            type="button"
            className="text-sm font-medium text-violet-700 hover:text-violet-900"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  )
}
