import { useEffect, useState } from "react";
import { addNull } from "../../../utils/addNull";

const Clock = () => {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex font-semibold text-orange-600 text-xl'>
			{addNull(time.getHours())}
			<span className='animate-pulse'>:</span>
			{addNull(time.getMinutes())}
		</div>
	);
};

export default Clock;
