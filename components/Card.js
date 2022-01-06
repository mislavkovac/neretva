import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Card = ({ id, image, price, prevPrice, name, desc, tag }) => {
	return (
		<Link
			href="/categories/[tag]/[id]"
			as={`/categories/${tag}/${id}`}
			passHref
		>
			<div className="cursor-pointer m-2 max-w-sm flex flex-col content-between justify-between rounded overflow-hidden shadow-lg transition duration-700 ease-in-out hover:scale-105">
				<div>
					<div className="text-center font-sans text-3xl font-normal text-[#354649]">
						{name}
					</div>
					<div className="text-center font-sans text-2xl font-normal text-[#354649]">
						{desc}
					</div>
				</div>
				<div className="max-w-[400px] justify-center flex">
					<img
						className="max-h-[400px]"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="px-6 py-4 text-center">
					<div className="text-center font-sans text-3xl font-normal mb-2 text-[#354649]">
						{price}
					</div>
					<div className="flex-1 text-center font-sans text-2xl font-normal line-through text-[#A3C6C4] mb-2">
						{prevPrice}
					</div>
					<p className="flex-1 text-[#354649] text-base font-sans font-normal">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla!
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
