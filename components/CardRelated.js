import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const CardRelated = ({ id, image, price, prevPrice, name, desc, tag }) => {
	return (
		<Link
			href="/categories/[tag]/[id]"
			as={`/categories/${tag}/${id}`}
			passHref
		>
			<div className="cursor-pointer m-2 max-w-sm flex flex-col content-between justify-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-700 ease-in-out hover:scale-105">
				<div>
					<div className="text-center font-sans text-2xl font-normal text-[#314455] px-[1rem]">
						{name}
					</div>
					<div className="text-center font-sans text-lg font-normal text-[#314455] px-[1rem]">
						{desc}
					</div>
				</div>
				<div className="max-w-[400px] justify-center flex">
					<img
						className="max-h-[200px]"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="px-6 py-4 text-center">
					<div className="flex-1 text-center font-sans text-lg font-normal line-through text-[#000000] mb-2">
						{prevPrice}
					</div>
					<div className="text-center font-sans text-xl font-bold mb-2 text-[#C96567]">
						{price}
					</div>
					{/* <p className="flex-1 text-[#314455] text-base font-sans font-normal">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla!
					</p> */}
				</div>
			</div>
		</Link>
	);
};

export default CardRelated;
