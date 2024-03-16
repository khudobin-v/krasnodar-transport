"use client";

import InfoPanel from "@/components/UI/InfoPanel";
import { useRecoilValue } from "recoil";
import { languageState } from "../../store/languageStore";
import { getTranslation } from "../../utils/getTranslation";
import TransportPanel from "@/components/UI/TransportPanel";

const Home = () => {
	const currentLanguage = useRecoilValue(languageState);
	return (
		<div className='p-2 flex flex-col gap-4'>
			<title>{getTranslation("krasnodarTransport", currentLanguage)}</title>
			<div className='flex '>
				<div className='grid grid-cols-4 w-full gap-4 justify-end'>
					<div className='col-span-1'>
						<InfoPanel />
					</div>
					{/* <div className='col-span-3'>Что-то другое</div> */}
				</div>
			</div>
			<TransportPanel />
		</div>
	);
};

export default Home;
