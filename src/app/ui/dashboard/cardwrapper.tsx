import { Card } from "./card";

export default async function CardWrapper() {
	return (
		<>
			<Card title="Income" value="¥252,000" type="income" />
			<Card title="Expenses" value="-¥123,000" type="expenses" />
			<Card title="Credit Card Balance" value="-¥49,402" type="credit" />
			<Card
				title="Investments"
				value="¥1,002,330"
				type="investments"
			/>
			<Card
				title="Pension"
				value="¥5,002,330"
				type="investments"
			/>
		</>
	);
}