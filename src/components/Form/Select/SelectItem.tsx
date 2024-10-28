'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export default function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className={twMerge(
        'flex w-[--radix-select-trigger-width] items-center justify-between gap-2 rounded-md px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50',
        'dark:data-[highlighted]:bg-zinc-700',
      )}
    >
      <Select.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="size-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
