import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Navbar = () => {
	return (
		<div className="hidden sm:flex sm:flex-row">
			<Link href="/categories" passHref>
				<div className="order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center">
					Categories
				</div>
			</Link>
			<Link
				href="/discounts"
				className="order-2 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center"
			>
				Discounts
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
