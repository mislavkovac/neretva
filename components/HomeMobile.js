/* eslint-disable @next/next/no-img-element */
import React from 'react';
import data from '../public/data.json';
import NewProduct from './NewProduct';
import Offer from './Offer';
import Slide from '@mui/material/Slide';
import NewProductMobile from './NewProductMobile';
import OfferMobile from './OfferMobile';

const HomeMobile = ({ offerTag }) => {
	let specOffer = [];
	let newProduct = [];
	for (const item of data) {
		if (item.offer === '1') {
			specOffer.push(
				<OfferMobile
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
				<NewProductMobile
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
		<div className="justify-center flex-1">
			<Slide
				direction="right"
				timeout={500}
				in="true"
				mountOnEnter
				unmountOnExit
			>
				<div className="flex my-[1rem]">{specOffer}</div>
			</Slide>
			<Slide
				direction="left"
				timeout={500}
				in="true"
				mountOnEnter
				unmountOnExit
			>
				<div className="justify-between flex flex-col gap-[1rem]">
					{newProduct}
				</div>
			</Slide>
		</div>
	);
};

export default HomeMobile;
