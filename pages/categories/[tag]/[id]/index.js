/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Cart from '../../../../components/Cart';
import Search from '../../../../components/Search';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import stylesLayout from '../../../../styles/Layout.module.css';
import data from '../../../../public/data.json';
import Description from '../../../../components/Description';
import Product from '../../../../components/Product';
import Card from '../../../../components/Card';
import CustomizedBreadcrumbs from '../../../../components/Breadcrumbs';

const Index = () => {
	const router = useRouter();
	const { tag, id } = router.query;

	let product = [];
	let itemProps = [];
	let relatedProducts = [];
	for (const item of data) {
		if (item.tag === tag && item.id !== id) {
			relatedProducts.push(
				<Card
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

	for (const item of data) {
		if (item.tag === tag && item.id == id) {
			itemProps.push(
				((itemProps.id = item.id),
				(itemProps.image = item.image),
				(itemProps.price = item.price),
				(itemProps.prevPrice = item.prevPrice),
				(itemProps.name = item.name),
				(itemProps.desc = item.desc),
				(itemProps.tag = item.tag),
				(itemProps.about = item.about))
			);
			product.push(
				<Product
					id={item.id}
					image={item.image}
					price={item.price}
					prevPrice={item.prevPrice}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
					color={item.color}
				/>
			);
		}
	}
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
			{/* <CustomizedBreadcrumbs /> */}
			<div className="flex flex-col w-[100%] items-center justify-center mt-[2em]">
				<div>{product}</div>
				<div className="flex items-center w-[50%] font-sans text-2xl text-[#354649] font-normal">
					<Description
						id={itemProps.id}
						image={itemProps.image}
						price={itemProps.price}
						prevPrice={itemProps.prevPrice}
						name={itemProps.name}
						desc={itemProps.about}
						tag={itemProps.tag}
					/>
				</div>
				<div className="font-sans text-4xl text-[#354649] font-normal mt-[2em]">
					Related Products
				</div>
				<div className="flex flex-row mt-[1.5em]">{relatedProducts}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Index;
