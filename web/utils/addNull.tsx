export const addNull = (time: number): string => {
	if (time < 10) return "0" + time;
	return time.toLocaleString();
};
