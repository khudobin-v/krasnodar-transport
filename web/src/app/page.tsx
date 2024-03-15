"use client";

import { useRecoilValue } from "recoil";
import { languageState } from "../../store/languageStore";
import { getTranslation } from "../../utils/getTranslation";

const Home = () => {
	const currentLanguage = useRecoilValue(languageState);
	return (
		<>
			<title>{getTranslation("krasnodarTransport", currentLanguage)}</title>
		</>
	);
};

export default Home;
