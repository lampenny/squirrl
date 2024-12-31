import { useState } from 'react'
import axios from 'axios'
import { Card } from './card'

export interface FinancialData {
  id: number
  income: string
  expenses: string
  credit_card_balance: string
  investments: string
  pension: string
}

export default function CardWrapper({ finances }: { finances: any }) {
  const [edit, setEdit] = useState(false)
  const [income, setIncome] = useState(finances?.income ?? 0)
  const [expenses, setExpenses] = useState(finances?.expenses ?? 0)
  const [credit, setCredit] = useState(finances?.credit ?? 0)
  const [investments, setInvestments] = useState(finances?.investments ?? 0)
  const [pension, setPension] = useState(finances?.pension ?? 0)

  const updateFinances = () => {
    axios
      .post(`http://localhost:4000/finances/edit`, {
        income: 500000,
        expenses: 10,
        investments: 20,
        credit_card_balance: 10,
        pension: 100,
        id: 1,
      })
      .then((response) => {
        console.log('response', response)
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
            }}
          >
            save
          </button>
        )}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-7 h-fit">
        <Card
          title="Income"
          value={income}
          convertedValue="£1,441.58"
          type="income"
          onEdit={edit}
          onChange={(e) => setIncome(e.target.value || 0)}
        />
        <Card
          title="Expenses"
          value={expenses}
          convertedValue="£628.78"
          type="expenses"
          onEdit={edit}
          onChange={(e) => setExpenses(e.target.value || 0)}
        />
        <Card
          title="Credit Cards"
          value={credit}
          convertedValue="£252.54"
          type="expenses"
          onEdit={edit}
          onChange={(e) => setCredit(e.target.value || 0)}
        />
        <Card
          title="Investments"
          value={investments}
          convertedValue="£5123.91"
          type="investments"
          onEdit={edit}
          onChange={(e) => setInvestments(e.target.value || 0)}
        />
        <Card
          title="Pension"
          value={pension}
          convertedValue="¥100,168.19"
          type="investments"
          onEdit={edit}
          onChange={(e) => setPension(e.target.value || 0)}
        />
      </div>
    </div>
  )
}
