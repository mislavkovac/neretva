import { Disclosure } from '@headlessui/react';
import CommentIcon from '@mui/icons-material/Comment';
import CardRelated from './CardRelated';
import data from '../public/data.json';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import ReviewCard from './ReviewCard';
import { Avatar, Box, Rating } from '@mui/material';
import ProductReview from './ProductReview';

export default function Description({
	image,
	price,
	prevPrice,
	name,
	desc,
	tag,
	id,
	review,
	rating,
}) {
	let relatedProducts = [];
	for (const item of data) {
		if (item.tag === tag && item.id !== id) {
			relatedProducts.push(
				<CardRelated
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
	let cards = [];
	for (const item of data) {
		for (const review of item.review) {
			if (item.tag === tag && item.id === id) {
				cards.push(
					<ReviewCard
						id={item.id}
						image={item.image}
						price={item.price}
						prevPrice={item.prevPrice}
						name={item.name}
						desc={item.desc}
						tag={item.tag}
						path={'categories'}
						rating={item.rating}
						review={review}
					/>
				);
			}
		}
	}
	let productReview = [];
	for (const item of data) {
		for (const review of item.review) {
			if (item.tag === tag && item.id === id) {
				productReview.push(
					<ProductReview
						name={item.name}
						desc={item.desc}
						rating={item.rating}
						review={review}
					/>
				);
			}
		}
	}
	return (
		<div className="flex flex-1">
			<div className="w-[100%] p-2 bg-white rounded-2xl">
				<Disclosure className="w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Product Description</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-[#354649]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2 w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Product details</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-[#354649]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2 w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Related Products</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-[#354649]">
								<div className="flex flex-col justify-center">
									{relatedProducts}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2 w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Product reviews</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col items-center text-base text-[#354649]">
								{productReview}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
