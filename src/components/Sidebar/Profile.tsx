import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/paulorfsantos17.png"
        alt=""
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Paulo Santos
        </span>
        <span className="truncate text-sm text-zinc-500">
          paulfsdafasdfasdfdo@example.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
