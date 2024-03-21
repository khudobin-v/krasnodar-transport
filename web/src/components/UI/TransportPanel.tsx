import Link from "next/link";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/languageStore";
import { Language } from "../../../types/types";
import { getTranslation } from "../../../utils/getTranslation";

const TransportPanel = () => {
	const currentLanguage: Language = useRecoilValue(languageState);
	return (
		<div className="w-full grid grid-cols-3 gap-4 h-52 text-white">
			<Link
				href="/tramRoutes"
				className="bg-red-600 rounded-xl text-2xl font-bold relative hover:bg-red-700 transition"
			>
				<h3 className="absolute right-5 top-5 first-letter:uppercase">
					{getTranslation("tram", currentLanguage)}
				</h3>
			</Link>
			<Link
				href="/trolleybusRoutes"
				className="bg-blue-600 rounded-xl text-2xl font-bold relative hover:bg-blue-700 transition"
			>
				<h3 className="absolute right-5 top-5 first-letter:uppercase">
					{getTranslation("trolleybus", currentLanguage)}
				</h3>
			</Link>
			<Link
				href="/busRoutes"
				className="bg-green-600 rounded-xl text-2xl font-bold relative hover:bg-green-700 transition"
			>
				<h3 className="absolute right-5 top-5 first-letter:uppercase">
					{getTranslation("bus", currentLanguage)}
				</h3>
			</Link>
		</div>
	);
};

export default TransportPanel;
