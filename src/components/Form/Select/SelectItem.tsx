'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export default function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className="flex w-[--radix-select-trigger-width] items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="size-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
