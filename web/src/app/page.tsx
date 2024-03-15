"use client";

import InfoPanel from "@/components/UI/InfoPanel";
import { useRecoilValue } from "recoil";
import { languageState } from "../../store/languageStore";
import { getTranslation } from "../../utils/getTranslation";

const Home = () => {
	const currentLanguage = useRecoilValue(languageState);
	return (
		<>
			<title>{getTranslation("krasnodarTransport", currentLanguage)}</title>
			<div className="p-2 flex">
				<div className="grid grid-cols-4 w-full gap-4">
					<div className="col-span-1">
						<InfoPanel />
					</div>
					<div className="col-span-3">Что-то другое</div>
				</div>
			</div>
		</>
	);
};

export default Home;
