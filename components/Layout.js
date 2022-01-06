import stylesLayout from '../styles/Layout.module.css';
import { Link } from '@mui/material';
import Cart from './Cart';
import Search from './Search';
import Navbar from './Navbar';
import Home from './Home';
import Trending from './Trending';
import Other from './Other';
import Footer from './Footer';

const Layout = ({ categories }) => {
	return (
		<div>
			<div className="grid grid-cols-3 justify-between place-items-stretch items-center w-[100%] h-[5em] bg-[#6c7a89]">
				<Link href="/" className="flex no-underline text-center">
					<p className={stylesLayout.headerText}>Neretva.com</p>
				</Link>
				<Search className="w-[100%]" />
				<Cart />
			</div>
			<Navbar />
			<Home />
			<Trending />
			<Other />
			<Footer />
		</div>
	);
};

export default Layout;
