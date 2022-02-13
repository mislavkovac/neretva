import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Navbar = () => {
	return (
		<div className="hidden sm:flex sm:flex-row">
			<Link className="" href="/categories" passHref>
				<div className="cursor-pointer order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center">
					Categories
				</div>
			</Link>
			<Link className="" href="/discounts" passHref>
				<div className="cursor-pointer order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center">
					Discounts
				</div>
			</Link>
			<Link className="" href="/reviews" passHref>
				<div className="cursor-pointer order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center">
					Reviews
				</div>
			</Link>
			<Link className="" href="/faq" passHref>
				<div className="cursor-pointer order-1 no-underline text-[#ffffff] px-[1.5rem] font-semibold transition duration-300 hover:text-[#314455] rounded-full hover:bg-[#C96567] h-[50px] flex text-center justify-center items-center">
					FAQ
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
