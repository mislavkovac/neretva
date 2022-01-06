/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';

const Trending = () => {
	return (
		<div className="justify-between text-center">
			<div className="mt-[1.5em] font-sans text-5xl font-normal">
				New & Trending Products
			</div>
			<div className="border border-[#354649] grid grid-cols-4 divide-x place-items-stretch divide-[#354649] shadow-lg h-1/3 bg-[#E0E7E9] mx-[3%] mt-[1em] py-8 justify-between">
				<Link
					href="/product"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center font-sans text-3xl font-normal">
						Samsung
					</div>
					<div className="flex-1 text-center font-sans text-base font-normal">
						43" Q60A QLED 4K Smart TV
					</div>
					<div className="flex-1 justify-center self-center">
						<img
							src="/images/image35.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
					<div className="text-center font-sans text-2xl font-normal line-through text-[#A3C6C4]">
						5.600,00 HRK
					</div>
					<div className="text-center font-sans text-3xl font-normal">
						3.000,00 HRK
					</div>
				</Link>
				<Link
					href="/product"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center font-sans text-3xl font-normal">
						Samsung
					</div>
					<div className="flex-1 text-center font-sans text-base font-normal">
						Galaxy S21 Ultra 5G Dual SIM Silver
					</div>
					<div className="flex-1 justify-center self-center">
						<img
							src="/images/image36.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
					<div className="text-center font-sans text-2xl font-normal line-through text-[#A3C6C4]">
						10.299,00 HRK
					</div>
					<div className="text-center font-sans text-3xl font-normal">
						6.000,00 HRK
					</div>
				</Link>
				<Link
					href="/product"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center font-sans text-3xl font-normal">
						Apple
					</div>
					<div className="flex-1 text-center font-sans text-base font-normal">
						14-inčni MacBook Pro: M1 Pro 1TB - svemirski siva
					</div>
					<div className="flex-1 justify-center self-center">
						<img
							src="/images/image37.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
					<div className="text-center font-sans bottom-0 text-2xl font-normal line-through text-[#A3C6C4]">
						56.129,00 HRK
					</div>
					<div className="text-center font-sans text-3xl font-normal">
						50.999,00 HRK
					</div>
				</Link>
				<Link
					href="/product"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center font-sans text-3xl font-normal">
						Apple
					</div>
					<div className="flex-1 text-center font-sans text-base font-normal">
						12,9-inčni iPad Pro 2021 - 2TB
					</div>
					<div className="flex-1 justify-center self-center">
						<img
							src="/images/image38.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
					<div className="text-center font-sans text-2xl font-normal line-through text-[#A3C6C4]">
						21.609,00 HRK
					</div>
					<div className="text-center font-sans text-3xl font-normal">
						20.000,00 HRK
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Trending;
