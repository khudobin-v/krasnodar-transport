"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/languageStore";
import { Language } from "../../../types/types";
import { getTranslation } from "../../../utils/getTranslation";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const currentLanguage: Language = useRecoilValue(languageState);
	const [year, setYear] = useState(currentYear);
	useEffect(() => {
		const interval = setInterval(() => {
			setYear(new Date().getFullYear());
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<div className="flex flex-col gap-3 justify-between m-2 bg-white dark:bg-zinc-900 text-black dark:text-white py-3 px-5 rounded-xl">
				<Link href={"/"}>
					<h1 className="text-orange-600 font-bold">
						{getTranslation("krasnodarTransport", currentLanguage)}
					</h1>
				</Link>
				<div className="flex justify-between text-xs">
					<p className="text-xs">
						{getTranslation("aboutProjectFooter__developing", currentLanguage)}{" "}
						<a
							href="https://github.com/khudobin-v/"
							target="_blank"
							className="underline text-orange-600"
						>
							{getTranslation("aboutProjectFooter__developer", currentLanguage)}
						</a>
						.{" "}
						{getTranslation("aboutProjectFooter__openProject", currentLanguage)}{" "}
						<a
							href="https://github.com/khudobin-v/krasnodar-transport/"
							target="_blank"
							className="underline text-orange-600"
						>
							GitHub
						</a>
						.
					</p>
					<p>
						{year} {getTranslation("year", currentLanguage)}
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
