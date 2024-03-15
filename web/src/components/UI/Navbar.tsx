import Link from "next/link";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/languageStore";
import { Language } from "../../../types/types";
import { getTranslation } from "../../../utils/getTranslation";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
	const currentLanguage: Language = useRecoilValue(languageState);
	return (
		<>
			<div className="flex justify-between m-2 bg-white dark:bg-zinc-900 text-black dark:text-white py-3 px-5 rounded-xl">
				<Link href={"/"}>
					<h1 className="text-orange-600 font-bold text-xl">
						{getTranslation("krasnodarTransport", currentLanguage)}
					</h1>
				</Link>
				<LanguageSelector />
			</div>
		</>
	);
};

export default Navbar;
