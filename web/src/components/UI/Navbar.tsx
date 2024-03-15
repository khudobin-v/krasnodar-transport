import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
	return (
		<>
			<div className='flex justify-between m-2 bg-white py-3 px-5 rounded-xl'>
				<Link href={"/"}>
					<h1 className='text-orange-600 font-bold text-xl'>
						Краснодарский транспорт
					</h1>
				</Link>
				<LanguageSelector />
			</div>
		</>
	);
};

export default Navbar;
