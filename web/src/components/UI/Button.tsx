const Button = ({ children }: any) => {
	return (
		<button className='bg-zinc-100 hover:bg-zinc-200 transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700 px-2 py-1 rounded-lg flex items-center justify-center'>
			{children}
		</button>
	);
};
export default Button;
