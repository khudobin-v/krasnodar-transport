import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/languageStore";
import { getTranslation } from "../../../utils/getTranslation";

const InfoPanel = () => {
	const currentHour = new Date().getHours();
	const currentLanguage = useRecoilValue(languageState);
	const [hours, setHours] = useState(currentHour);
	useEffect(() => {
		const interval = setInterval(() => {
			setHours(new Date().getHours());
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	const generateGreeting = () => {
		if (hours >= 22 || hours <= 4)
			return getTranslation("goodNight", currentLanguage);
		else if (hours >= 5 && hours <= 11)
			return getTranslation("goodMorning", currentLanguage);
		else if (hours >= 12 && hours <= 17)
			return getTranslation("goodAfternoon", currentLanguage);
		else if (hours >= 18 && hours <= 21)
			return getTranslation("goodEvening", currentLanguage);
	};
	const greetingPhrase = generateGreeting();

	return (
		<div className="flex h-full w-full bg-white dark:bg-zinc-900 rounded-lg p-4">
			<h2 className="text-3xl font-bold text-orange-600 first-letter:uppercase">
				{greetingPhrase}, {getTranslation("guest", currentLanguage)}{" "}
			</h2>
		</div>
	);
};

export default InfoPanel;
