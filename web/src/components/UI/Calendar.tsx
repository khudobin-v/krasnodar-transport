import { useEffect, useState } from "react";
import { addNull } from "../../../utils/addNull";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/languageStore";
import { getTranslation } from "../../../utils/getTranslation";

const Calendar = () => {
	const [time, setTime] = useState(new Date());
	const currentLanguage = useRecoilValue(languageState);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	const months = [
		getTranslation("january", currentLanguage),
		getTranslation("february", currentLanguage),
		getTranslation("march", currentLanguage),
		getTranslation("april", currentLanguage),
		getTranslation("may", currentLanguage),
		getTranslation("june", currentLanguage),
		getTranslation("july", currentLanguage),
		getTranslation("august", currentLanguage),
		getTranslation("september", currentLanguage),
		getTranslation("october", currentLanguage),
		getTranslation("november", currentLanguage),
		getTranslation("december", currentLanguage),
	];
	const daysOfWeek = [
		getTranslation("monday", currentLanguage),
		getTranslation("tuesday", currentLanguage),
		getTranslation("wednesday", currentLanguage),
		getTranslation("thursday", currentLanguage),
		getTranslation("friday", currentLanguage),
		getTranslation("sunday", currentLanguage),
		getTranslation("saturday", currentLanguage),
	];
	return (
		<div className='flex font-semibold text-orange-600 text-xl'>
			{addNull(time.getDate())} {months[time.getMonth()]},{" "}
			{daysOfWeek[time.getDay()]}
		</div>
	);
};

export default Calendar;
