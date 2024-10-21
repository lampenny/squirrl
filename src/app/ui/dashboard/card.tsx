import {
	BanknotesIcon,
	WalletIcon,
	ArrowTrendingDownIcon,
	InboxIcon,
} from '@heroicons/react/24/outline';

const typeMap = {
	income: {
		icon: BanknotesIcon,
		color: 'border-green-200',
	},
	expenses: {
		icon: ArrowTrendingDownIcon,
		color: 'border-red-200',
	},
	credit: {
		icon: WalletIcon,
		color: 'border-blue-200',
	},
	investments: {
		icon: InboxIcon,
		color: 'border-yellow-200',
	},
};

export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: 'income' | 'expenses' | 'credit' | 'investments';
}) {
	const { icon: Icon, color: Color } = typeMap[type];

	return (
		<div className={`sm:border-2 ${Color} sm:rounded-xl sm:bg-gray-100 sm:p-2 sm:shadow-sm`}>
			<div className="flex sm:p-2">
				{Icon ? <Icon className="h-0 w-0 sm:h-5 sm:w-5 text-gray-700" /> : null}
				<p className="sm:ml-2 text-xs md:text-sm">{title}</p>
			</div>
			<p
				className={`
         sm:truncate rounded-xl bg-white sm:px-4 sm:py-6 sm:text-center text-xs lg:text-2xl`}
			>
				{value}
			</p>
		</div>
	);
}