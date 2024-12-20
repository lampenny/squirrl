import { Card } from './card'

export default function CardWrapper() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-7 h-fit">
      <Card
        title="Income"
        value="¥282,000"
        convertedValue="£1,441.58"
        type="income"
      />
      <Card
        title="Expenses"
        value="-¥123,000"
        convertedValue="£628.78"
        type="expenses"
      />
      <Card
        title="Credit Cards"
        value="¥49,402"
        convertedValue="£252.54"
        type="expenses"
      />
      <Card
        title="Investments"
        value="¥1,002,330"
        convertedValue="£5123.91"
        type="investments"
      />
      <Card
        title="Pension"
        value="£512.00"
        convertedValue="¥100,168.19"
        type="investments"
      />
    </div>
  )
}
