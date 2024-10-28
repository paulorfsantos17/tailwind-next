import { InputControl, InputPrefix, InputRoot } from '@/components/Form/Input'
import SettingsTabs from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as InputFile from '@/components/Form/FileInput/index'
import Select from '@/components/Form/Select'
import SelectItem from '@/components/Form/Select/SelectItem'
import Textarea from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              form="settings"
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl
                  id="firstName"
                  name="firstName"
                  defaultValue="Paulo"
                />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last Name
                </label>
                <InputRoot>
                  <InputControl defaultValue="Santos" name="lastName" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="size-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                name="email"
                type="email"
                defaultValue="paulo@example.com"
              />
            </InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="your-photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <InputFile.Root className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <InputRoot>
              <InputControl
                id="role"
                name="role"
                type="text"
                defaultValue="CTO"
              />
            </InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="usa" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a Timezone...">
              <SelectItem
                text="Pacific Standard Time (PST) UTC−08:00"
                value="pacific"
              />
              <SelectItem text="America São Paulo  UTC−03:00" value="br" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                  <SelectItem text="MarkDown" value="md" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      strokeWidth={3}
                      className="size-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.Control multiple />
              <InputFile.FileList />
            </InputFile.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              form="settings"
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
