import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { Card } from './card'
import { CurrentUserContext } from '@/app/providers'
import { CardWrapperSkeleton } from '../skeletons'
import { Button } from '../button'

export interface FinancialData {
  id: number
  income: string
  expenses: string
  credit_card_balance: string
  investments: string
  pension: string
  updated_at: string
}

export const fetchFinances = async (userId: number): Promise<FinancialData> => {
  const response = await axios.get(`http://localhost:4000/finances/${userId}`)

  if (response.status !== 200) {
    console.error('failed to get data')
  }

  const finances = response.data

  return finances || {}
}

export default function CardWrapper() {
  const { currentUser } = useContext(CurrentUserContext)

  if (!currentUser) {
    return <CardWrapperSkeleton />
  }

  const userId = currentUser.user_id

  const {
    isLoading,
    data: finances,
    isError,
    error,
  } = useQuery({
    queryKey: ['finances', userId],
    queryFn: () => fetchFinances(userId),
    enabled: !!userId,
  })

  const [edit, setEdit] = useState(false)
  const [income, setIncome] = useState(finances?.income)
  const [expenses, setExpenses] = useState(finances?.expenses)
  const [credit, setCredit] = useState(finances?.credit_card_balance)
  const [investments, setInvestments] = useState(finances?.investments)
  const [pension, setPension] = useState(finances?.pension)

  useEffect(() => {
    if (finances) {
      setIncome(finances.income)
      setExpenses(finances.expenses)
      setCredit(finances.credit_card_balance)
      setInvestments(finances.investments)
      setPension(finances.pension)
    }
  }, [finances])

  const updateFinances = () => {
    axios
      .post(`http://localhost:4000/finances/edit`, {
        income: income,
        expenses: expenses,
        investments: investments,
        credit_card_balance: credit,
        pension: pension,
        id: finances?.id,
      })
      .catch((error) => console.log('error', error))
  }

  if (isLoading) {
    return <CardWrapperSkeleton />
  }

  return (
    <div>
      <div className="w-full flex flex-row gap-7 h-fit">
        {isError && (
          <p className="text-red-500">
            Something went wrong. Please try again later.
          </p>
        )}
        <Card
          title="Income"
          value={income}
          type="income"
          onEdit={edit}
          onChange={(e) => setIncome(e.target.value)}
        />
        <Card
          title="Expenses"
          value={expenses}
          type="expenses"
          onEdit={edit}
          onChange={(e) => setExpenses(e.target.value)}
        />
        <Card
          title="Credit Cards"
          value={credit}
          type="expenses"
          onEdit={edit}
          onChange={(e) => setCredit(e.target.value)}
        />
        <Card
          title="Investments"
          value={investments}
          type="investments"
          onEdit={edit}
          onChange={(e) => setInvestments(e.target.value)}
        />
        <Card
          title="Pension"
          value={pension}
          type="investments"
          onEdit={edit}
          onChange={(e) => setPension(e.target.value)}
        />
      </div>
      <div className="flex justify-end pt-5">
        {!edit && (
          <Button
            onClick={() => {
              setEdit(true)
            }}
          >
            Edit all
          </Button>
        )}

        {edit && (
          <div className="flex flex-row gap-x-2">
            <Button
              onClick={() => {
                setEdit(false)
                updateFinances()
              }}
              className="text-lime-700"
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setEdit(false)
              }}
              className="text-lime-700"
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
