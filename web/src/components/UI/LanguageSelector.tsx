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
			<div className="flex relative p-1 rounded-lg hover:cursor-pointer hover:bg-zinc-50 ">
				<h3 onClick={() => setLanguageMenuIsOpen(!languageMenuIsOpen)}>
					{currentLanguage}
				</h3>
				{languageMenuIsOpen && (
					<div className="absolute top-10 right-0">
						<ul className="p-2 bg-white rounded-xl shadow-xl">
							<li
								className="hover:cursor-pointer hover:bg-zinc-50 p-1 rounded-lg"
								onClick={() => changeLanguage("ru")}
							>
								Русский
							</li>
							<li
								className="hover:cursor-pointer hover:bg-zinc-50 p-1 rounded-lg"
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
