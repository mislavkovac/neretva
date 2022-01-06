import { Link } from '@mui/material';

/* eslint-disable @next/next/no-img-element */
const Other = () => {
	return (
		<div className="flex flex-row justify-center mt-[3em]">
			<div className="border border-[#354649] place-items-stretch divide-[#354649] shadow-lg h-1/3 w-[25%] bg-[#E0E7E9] ml-[3%] mt-7 pt-8 pb-8 justify-between">
				<Link
					href="/low_price"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center text-[#354649] font-sans text-3xl font-normal">
						Ispalo iz kamiona
					</div>
					<div className="justify-center self-center">
						<img
							src="/images/image39.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
				</Link>
			</div>
			<div className="border border-[#354649] place-items-stretch divide-[#354649] shadow-lg h-1/3 w-[50%] bg-[#E0E7E9] mx-2 mt-7 pt-8 pb-8 justify-between">
				<Link
					href="/low_price"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center text-[#354649] font-sans text-3xl font-normal">
						Tebi ko tebi
					</div>
					<div className="justify-center self-center">
						<img
							src="/images/image40.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
				</Link>
			</div>
			<div className="border border-[#354649] place-items-stretch divide-[#354649] shadow-lg h-1/3 w-[25%] bg-[#E0E7E9] mr-[3%] mt-7 pt-8 pb-8 justify-between">
				<Link
					href="/low_price"
					className="flex flex-col content-between no-underline text-[#354649] transition duration-700 ease-in-out hover:scale-110"
				>
					<div className="text-center text-[#354649] font-sans text-3xl font-normal">
						Free Shipping
					</div>
					<div className="justify-center self-center">
						<img
							src="/images/image41.png"
							alt="Cart" //change name
							className="max-h-[25em] p-[0.5em]"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Other;
