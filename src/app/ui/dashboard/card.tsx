import { ChangeEvent } from 'react'
import {
  BanknotesIcon,
  WalletIcon,
  ArrowTrendingDownIcon,
  InboxIcon,
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
  type,
  onEdit,
  onChange,
}: {
  title: string
  value: number | string | undefined
  type: 'income' | 'expenses' | 'credit' | 'investments'
  onEdit: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const { icon: Icon, color: Color } = typeMap[type]

  return (
    <div className="container sm:border-2 md:border-2 md:border-lime-700 sm:rounded-xl sm:bg-gray-100 sm:p-2 sm:shadow-xs">
      <div className="flex sm:p-2">
        {Icon ? <Icon className={`h-0 w-0 sm:h-5 sm:w-5 ${Color}`} /> : null}
        <p
          className={`sm:ml-2 text-xs font-bold md:font-normal md:text-sm ${Color}`}
        >
          {title}
        </p>
      </div>
      {onEdit ? (
        <form className="sm:truncate rounded-xl bg-white sm:px-4 sm:py-6 sm:text-center text-xs lg:text-2xl">
          <input
            className="max-w-28 outline-hidden"
            value={value}
            onChange={onChange}
            required
          />
        </form>
      ) : (
        <p
          className={`
         sm:truncate rounded-xl bg-white sm:px-4 sm:py-6 sm:text-center text-xs lg:text-2xl`}
        >
          {Number(value)
            ? `£${Number(value).toLocaleString('en-US')}`
            : 'No data'}
        </p>
      )}
    </div>
  )
}
