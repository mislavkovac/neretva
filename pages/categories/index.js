import { Link } from '@mui/material';
import Cart from '../../components/Cart';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
import stylesLayout from '../../styles/Layout.module.css';
import data from '../../public/data.json';

export default function categories(categories) {
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
			<div>
				<Categories categories={categories} />
			</div>
			<Footer />
		</div>
	);
}

export const getStaticProps = async () => {
	let mobile = [];
	let tv = [];
	let laptop = [];
	let pc = [];
	let audio = [];
	let dishwasher = [];
	let washing_mach = [];
	let refrigerator = [];
	let socket = [];
	let light_bulbs = [];
	for (const item of data) {
		if (item.tag === 'Mobile') {
			mobile.push(item);
		}
		if (item.tag === 'TVs & Monitors') {
			tv.push(item);
		}
		if (item.tag === 'Laptop') {
			laptop.push(item);
		}
		if (item.tag === 'PC') {
			pc.push(item);
		}
		if (item.tag === 'Audio') {
			audio.push(item);
		}
		if (item.tag === 'Dishwasher') {
			dishwasher.push(item);
		}
		if (item.tag === 'Washing_machine') {
			washing_mach.push(item);
		}
		if (item.tag === 'Refrigerator') {
			refrigerator.push(item);
		}
		if (item.tag === 'Socket') {
			socket.push(item);
		}
		if (item.tag === 'Light_bulbs') {
			light_bulbs.push(item);
		}
	}

	return {
		props: {
			mobile: mobile,
			tv: tv,
			laptop: laptop,
			pc: pc,
			audio: audio,
			dishwasher: dishwasher,
			washing_mach: washing_mach,
			refrigerator: refrigerator,
			socket: socket,
			light_bulbs: light_bulbs,
		},
	};
};
