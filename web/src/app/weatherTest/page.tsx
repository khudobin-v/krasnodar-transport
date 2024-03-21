"use client";

import { NextPage } from "next";

import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
	const [weatherData, setWeatherData] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8c1177d1c2765d0d334c875d3b196411"
		)
			.then(res => res.json())
			.then(setWeatherData);
	}, []);
	console.log(weatherData);
	return <div></div>;
};

export default Page;
