/* eslint-disable @next/next/no-img-element */
import React from 'react';
import data from '../public/data.json';
import NewProduct from './NewProduct';
import Offer from './Offer';
import Slide from '@mui/material/Slide';

const Home = ({ offerTag }) => {
	let specOffer = [];
	let newProduct = [];
	for (const item of data) {
		if (item.offer === '1') {
			specOffer.push(
				<Offer
					id={item.id}
					image={item.image}
					price={item.price}
					prevPrice={item.prevPrice}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
				/>
			);
		}
		if (item.new === '1') {
			newProduct.push(
				<NewProduct
					id={item.id}
					image={item.image}
					price={item.price}
					prevPrice={item.prevPrice}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
				/>
			);
		}
	}

	return (
		<div className="hidden sm:flex sm:flex-row sm:justify-center sm:flex-1">
			<Slide
				direction="right"
				timeout={500}
				in="true"
				mountOnEnter
				unmountOnExit
			>
				<div className="flex">{specOffer}</div>
			</Slide>
			<Slide
				direction="left"
				timeout={500}
				in="true"
				mountOnEnter
				unmountOnExit
			>
				<div className="grid grid-row-2 justify-between gap-[1rem]">
					{newProduct}
				</div>
			</Slide>
		</div>
	);
};

export default Home;
