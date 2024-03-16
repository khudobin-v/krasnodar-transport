import { Language, Translations } from "../types/types";
import { translations } from "./translations";

export const getTranslation = (
	key: keyof Translations,
	language: Language
): string => {
	return translations[key][language];
};
