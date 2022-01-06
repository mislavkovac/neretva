import { Link, Typography } from '@mui/material';
import styles from '../styles/Layout.module.css';

const Navbar = () => {
	return (
		<div className="bg-[#E0E7E9] flex flex-row ">
			<Link
				href="/categories"
				className="order-1 no-underline py-0.5 h-[100%] px-[2rem] text-gray-500 font-semibold transition duration-300 hover:bg-[#6C7A89] hover:text-[#E0E7E9]"
			>
				Categories
			</Link>
			<Link
				href="/specialoffers"
				className="order-2 no-underline py-0.5 h-[100%] px-[2rem] text-gray-500 font-semibold transition duration-300 hover:bg-[#6C7A89] hover:text-[#E0E7E9]"
			>
				Special Offers
			</Link>
			<Link
				href="/reviews"
				className="order-3 no-underline py-0.5 h-[100%] px-[2rem] text-gray-500 font-semibold transition duration-300 hover:bg-[#6C7A89] hover:text-[#E0E7E9]"
			>
				Reviews
			</Link>
			<Link
				href="/faq"
				className="order-4 no-underline py-0.5 h-[100%] px-[2rem] text-gray-500 font-semibold transition duration-300 hover:bg-[#6C7A89] hover:text-[#E0E7E9]"
			>
				FAQ
			</Link>
		</div>
	);
};

export default Navbar;
