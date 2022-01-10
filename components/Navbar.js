import { Link, Typography } from '@mui/material';
import styles from '../styles/Layout.module.css';

const Navbar = () => {
	return (
		<div className="hidden sm:flex sm:flex-row">
			<Link
				href="/categories"
				className="order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center"
			>
				Categories
			</Link>
			<Link
				href="/specialoffers"
				className="order-2 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center"
			>
				Special Offers
			</Link>
			<Link
				href="/reviews"
				className="order-3 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center"
			>
				Reviews
			</Link>
			<Link
				href="/faq"
				className="order-4 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center"
			>
				FAQ
			</Link>
		</div>
	);
};

export default Navbar;
