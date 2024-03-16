"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { languageState } from "../../../store/languageStore";
import { Language } from "../../../types/types";

const LanguageSelector = () => {
	const [language, setLanguage] = useRecoilState(languageState);
	const currentLanguage = language === "ru" ? "Русский" : "English";
	const [languageMenuIsOpen, setLanguageMenuIsOpen] = useState<boolean>(false);

	const changeLanguage = (language: Language) => {
		localStorage.setItem("language", language);
		setLanguage(language);
		setLanguageMenuIsOpen(false);
	};
	return (
		<>
			<div className="flex relative p-1 rounded-lg hover:cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 ">
				<h3 onClick={() => setLanguageMenuIsOpen(!languageMenuIsOpen)}>
					{currentLanguage}
				</h3>
				{languageMenuIsOpen && (
					<div className="absolute top-12 right-0">
						<ul className="px-2 p-1 bg-white dark:bg-zinc-900 rounded-xl shadow-xl text-black dark:text-white">
							<li
								className="hover:cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 p-1 rounded-lg"
								onClick={() => changeLanguage("ru")}
							>
								Русский
							</li>
							<li
								className="hover:cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 p-1 rounded-lg"
								onClick={() => changeLanguage("en")}
							>
								English
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default LanguageSelector;
