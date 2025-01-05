import { useContext, useState } from 'react'
import axios from 'axios'
import { Card } from './card'
import { CurrentUserContext, FinancesContext } from '@/app/providers'
import { CardWrapperSkeleton } from '../skeletons'

export interface FinancialData {
  id: number
  income: string
  expenses: string
  credit_card_balance: string
  investments: string
  pension: string
  updated_at: string
}

export default function CardWrapper({ isLoading }: { isLoading: boolean }) {
  const { finances } = useContext(FinancesContext)

  const [edit, setEdit] = useState(false)
  const [income, setIncome] = useState(finances?.income)
  const [expenses, setExpenses] = useState(finances?.expenses)
  const [credit, setCredit] = useState(finances?.credit_card_balance)
  const [investments, setInvestments] = useState(finances?.investments)
  const [pension, setPension] = useState(finances?.pension)

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
      .then((response) => {
        sessionStorage.setItem('finances', JSON.stringify(response.data))
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <div>
      <div className="absolute right-32 top-24 justify-end">
        {!edit && (
          <button
            onClick={() => {
              setEdit(true)
            }}
          >
            edit all
          </button>
        )}

        {edit && (
          <button
            onClick={() => {
              setEdit(false)
              updateFinances()
            }}
          >
            save
          </button>
        )}
      </div>

      {isLoading ? (
        <CardWrapperSkeleton />
      ) : (
        <div className="w-full flex flex-col lg:flex-row gap-7 h-fit">
          <Card
            title="Income"
            value={income}
            convertedValue="£1,441.58"
            type="income"
            onEdit={edit}
            onChange={(e) => setIncome(e.target.value)}
          />
          <Card
            title="Expenses"
            value={expenses}
            convertedValue="£628.78"
            type="expenses"
            onEdit={edit}
            onChange={(e) => setExpenses(e.target.value)}
          />
          <Card
            title="Credit Cards"
            value={credit}
            convertedValue="£252.54"
            type="expenses"
            onEdit={edit}
            onChange={(e) => setCredit(e.target.value)}
          />
          <Card
            title="Investments"
            value={investments}
            convertedValue="£5123.91"
            type="investments"
            onEdit={edit}
            onChange={(e) => setInvestments(e.target.value)}
          />
          <Card
            title="Pension"
            value={pension}
            convertedValue="¥100,168.19"
            type="investments"
            onEdit={edit}
            onChange={(e) => setPension(e.target.value)}
          />
        </div>
      )}
    </div>
  )
}
