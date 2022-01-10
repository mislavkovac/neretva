import stylesLayout from '../styles/Layout.module.css';
import { Link } from '@mui/material';
import Cart from './Cart';
import Search from './Search';
import Navbar from './Navbar';
import Home from './Home';
import Homepage from './Homepage';
import Other from './Other';
import Footer from './Footer';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import HomeMobile from './HomeMobile';
import FooterMobile from './FooterMobile';

const Layout = ({ categories }) => {
	return (
		<div>
			<div className="hidden sm:block">
				<Header />
			</div>
			<div className="block sm:hidden">
				<HeaderMobile />
			</div>
			<div className="hidden sm:block">
				<Home />
			</div>
			<div className="block sm:hidden">
				<HomeMobile />
			</div>
			<div className="hidden sm:block">
				<Footer />
			</div>
			<div className="block sm:hidden">
				<FooterMobile />
			</div>
		</div>
	);
};

export default Layout;
