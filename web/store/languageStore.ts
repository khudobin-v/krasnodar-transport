import { atom } from "recoil";
import { Language } from "../types/types";

export const languageState = atom<Language>({
	key: "languageState",
	default: (localStorage.getItem("language") as Language) || "ru",
});
