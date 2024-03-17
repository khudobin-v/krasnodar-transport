import Link from "next/link";

const TransportPanel = () => {
	return (
		<div className='w-full grid grid-cols-3 gap-4 h-32 text-white'>
			<Link
				href='/tramRoutes'
				className='bg-red-600 rounded-xl text-2xl font-bold relative hover:bg-red-700 transition'
			>
				<h3 className='absolute right-5 top-5'>Трамвай</h3>
			</Link>
			<Link
				href='/trolleybusRoutes'
				className='bg-blue-600 rounded-xl text-2xl font-bold relative hover:bg-blue-700 transition'
			>
				<h3 className='absolute right-5 top-5'>Троллейбус</h3>
			</Link>
			<Link
				href='/busRoutes'
				className='bg-green-600 rounded-xl text-2xl font-bold relative hover:bg-green-700 transition'
			>
				<h3 className='absolute right-5 top-5'>Автобус</h3>
			</Link>
		</div>
	);
};

export default TransportPanel;
