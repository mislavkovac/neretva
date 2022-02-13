/* eslint-disable @next/next/no-img-element */
import { React, useState } from 'react';
import data from '../../public/data.json';
import Card from '../../components/Card';
import Discount from '../../components/Discount';
import DiscountMobile from '../../components/DiscountMobile';

const Discounts = () => {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	let cards = [];
	for (const item of data) {
		if (item.prevPrice !== '')
			cards.push(
				<Card
					id={item.id}
					image={item.image}
					prevPrice={item.prevPrice}
					price={item.price}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
					path={'discounts'}
				/>
			);
	}

	return (
		<div>
			<div className="hidden sm:block">
				<Discount />
			</div>
			<div className="block sm:hidden">
				<DiscountMobile />
			</div>
		</div>
	);
};

export default Discounts;

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
		if (item.tag === 'Mobile' && item.discount !== '0') {
			mobile.push(item);
		}
		if (item.tag === 'TVs & Monitors' && item.discount !== '0') {
			tv.push(item);
		}
		if (item.tag === 'Laptop' && item.discount !== '0') {
			laptop.push(item);
		}
		if (item.tag === 'PC' && item.discount !== '0') {
			pc.push(item);
		}
		if (item.tag === 'Audio' && item.discount !== '0') {
			audio.push(item);
		}
		if (item.tag === 'Dishwasher' && item.discount !== '0') {
			dishwasher.push(item);
		}
		if (item.tag === 'Washing_machine' && item.discount !== '0') {
			washing_mach.push(item);
		}
		if (item.tag === 'Refrigerator' && item.discount !== '0') {
			refrigerator.push(item);
		}
		if (item.tag === 'Socket' && item.discount !== '0') {
			socket.push(item);
		}
		if (item.tag === 'Light_bulbs' && item.discount !== '0') {
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
