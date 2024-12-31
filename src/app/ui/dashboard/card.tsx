import { ChangeEvent } from 'react'
import {
  BanknotesIcon,
  WalletIcon,
  ArrowTrendingDownIcon,
  InboxIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline'

const typeMap = {
  income: {
    icon: BanknotesIcon,
    color: 'text-green-500',
  },
  expenses: {
    icon: ArrowTrendingDownIcon,
    color: 'text-red-500',
  },
  credit: {
    icon: WalletIcon,
    color: 'text-blue-500',
  },
  investments: {
    icon: InboxIcon,
    color: 'text-yellow-500',
  },
}

export function Card({
  title,
  value,
  convertedValue,
  type,
  onEdit,
  onChange,
}: {
  title: string
  value: number | string
  convertedValue: number | string
  type: 'income' | 'expenses' | 'credit' | 'investments'
  onEdit: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const { icon: Icon, color: Color } = typeMap[type]

  return (
    <div className="container sm:border-2 border-2 border-lime-700 sm:rounded-xl sm:bg-gray-100 sm:p-2 sm:shadow-sm">
      <div className="flex sm:p-2">
        {Icon ? <Icon className={`h-0 w-0 sm:h-5 sm:w-5 ${Color}`} /> : null}
        <p
          className={`sm:ml-2 text-xs font-bold md:font-normal md:text-sm ${Color}`}
        >
          {title}
        </p>
      </div>
      {onEdit ? (
        <div
          className="
         sm:truncate rounded-xl bg-white sm:px-4 sm:py-6 sm:text-center text-xs lg:text-2xl"
        >
          <input
            className="max-w-36 outline-none"
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <p
          className={`
         sm:truncate rounded-xl bg-white sm:px-4 sm:py-6 sm:text-center text-xs lg:text-2xl`}
        >
          ¥{value}
        </p>
      )}
      <div className="hidden sm:flex flex-row gap-2 text-xs lg:text-base text-gray-400 items-center place-content-end pt-3">
        <ArrowsRightLeftIcon className="h-0 w-0 sm:h-5 sm:w-5 text-gray-400" />
        {convertedValue}
      </div>
    </div>
  )
}
