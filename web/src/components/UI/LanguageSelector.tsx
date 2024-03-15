"use client";
import { useState } from "react";

const LanguageSelector = () => {
	const [languageSelectorIsOpen, setLanguageSelectorIsOpen] =
		useState<boolean>(false);
	return (
		<>
			<div className='flex'>
				<h3>русский</h3>
			</div>
		</>
	);
};

export default LanguageSelector;
