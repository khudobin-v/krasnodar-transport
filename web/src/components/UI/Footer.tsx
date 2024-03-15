"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);
	useEffect(() => {
		const interval = setInterval(() => {
			setYear(new Date().getFullYear);
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<div className='flex flex-col gap-3 justify-between m-2 bg-white py-3 px-5 rounded-xl'>
				<Link href={"/"}>
					<h1 className='text-orange-600 font-bold'>Краснодарский транспорт</h1>
				</Link>
				<div className='flex justify-between text-xs'>
					<p className='text-xs'>
						Данный веб-сервис разрабатывается{" "}
						<a
							href='https://github.com/khudobin-v/'
							target='_blank'
							className='underline text-orange-600'
						>
							сторонним разработчиком
						</a>
						. Открытый исходный код проекта доступен на{" "}
						<a
							href='https://github.com/khudobin-v/krasnodar-transport/'
							target='_blank'
							className='underline text-orange-600'
						>
							GitHub
						</a>
						.
					</p>
					<p>{year} год</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
