import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Card = ({ id, image, price, prevPrice, name, desc, tag, path }) => {
	return (
		<Link href={`/${path}/[tag]/[id]`} as={`/${path}/${tag}/${id}`} passHref>
			<div className="cursor-pointer m-2 max-w-sm flex flex-col content-between items-center justify-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-700 ease-in-out hover:scale-105">
				<div>
					<div className="text-center font-sans text-2xl sm:text-4xl font-bold text-[#314455]">
						{name}
					</div>
					<div className="text-center font-sans text-xl sm:text-2xl font-bold mx-[0.5rem] text-[#C96567]">
						{desc}
					</div>
				</div>
				<div className="max-w-[300px] justify-center items-center flex">
					<img
						className="max-h-[300px]"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="px-6 py-4 text-center">
					<div className="flex-1 text-center font-sans text-2xl font-normal line-through text-[#000000] mb-2">
						{prevPrice}
					</div>
					<div className="text-center font-sans text-3xl font-bold mb-2 text-[#C96567]">
						{price}
					</div>
					<p className="flex-1 text-[#314455] text-base font-sans font-normal">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla!
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
