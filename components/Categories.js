import Card from './Card';
import data from '../public/data.json';
import categories from '../pages/categories';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Categories = ({ categories }) => {
	let cards = [];
	for (const item of data) {
		cards.push(
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
	return (
		<div>
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-[100%] items-center">
					<div className="mt-[0.5em] w-[100%] font-sans text-center text-sm md:text-5xl font-normal text-[#354649]">
						All products
					</div>
					<div className="mt-[2em] justify-center align-middle flex flex-row flex-wrap">
						{cards}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
