import React from 'react';
import Link from 'next/link';

const Sidebar = ({ path }) => {
	const [value, setValue] = React.useState(0);
	return (
		<div>
			<div>
				<div className="break-all bg-[#FAFAFA] border-r-[3px] border-[#C96567] text-[#314455] shadow-lg py-[0.5rem]">
					<div className="pl-[0.5em] font-sans text-3xl mt-[0.4em] font-normal">
						Electronics
					</div>
					<ul className="flex flex-col">
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/TVs%20&%20Monitors`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								TVs & Monitors
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Mobile`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Mobile
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Laptop`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Laptops
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/PC`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								PCs
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Video`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Video
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Audio`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Audio
							</li>
						</Link>
					</ul>
					<div className="pl-[0.5em] font-sans text-3xl mt-[0.4em] font-normal">
						Home
					</div>
					<ul className="flex flex-col">
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Dishwasher`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Dishwashers
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Washing%20machine`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Washing machine
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Refrigerator`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Refrigerator
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Vacuums`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Vacuums
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Irons
							</li>
						</Link>
					</ul>
					<div className="font-sans pl-[0.5em] text-3xl mt-[0.4em] font-normal">
						Smart Home
					</div>
					<ul className="flex flex-col">
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Sensors
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Sockets
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Light bulbs
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Switches
							</li>
						</Link>
						<Link
							className="cursor-pointer"
							href={`/${path}/[id]`}
							as={`/${path}/Irons`}
							passHref
						>
							<li className="pl-[2em] cursor-pointer transition duration-300 hover:bg-[#C96567] hover:text-[#314455] font-sans text-xs md:text-lg font-normal">
								Miscellaneous
							</li>
						</Link>
					</ul>
					<div className="font-sans pl-[0.5em] text-3xl mt-[0.4em] font-normal">
						"Tebi ko Tebi"
					</div>
					<div className="font-sans text-3xl pl-[0.5em] mt-[0.4em] font-normal">
						Ispalo iz kamiona
					</div>
				</div>
				<div className="mt-[1.5em] break-all bg-[#314455] pl-[1em] text-[#FFFFFF] shadow-lg border-r-[3px] border-[#C96567] py-[0.5rem]">
					<div className="font-sans text-3xl mt-[0.4em] font-normal">
						Sort by:
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Price
						</label>
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Date added
						</label>
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Name
						</label>
					</div>
					<div className="font-sans text-3xl mt-[0.4em] font-normal">
						Price:
					</div>
					<div className="font-sans text-xl mt-[0.4em] font-normal ml-[1em]">
						<input
							className="bg-gray-200 appearance-none text-center border-2 h-[1.4em] border-[#FFFFFF] rounded w-[30%] py-[0.3em] text-[#6C7A89] focus:outline-none focus:bg-white focus:border-[#6C7A89]"
							id="inline-full-name"
							type="text"
							placeholder="MIN"
						/>
						<span className="font-sans text-2xl font-normal mx-[0.5em]">-</span>
						<input
							className="bg-gray-200 appearance-none text-center border-2 h-[1.4em] border-[#FFFFFF] rounded w-[30%] py-[0.3em] text-[#6C7A89] focus:outline-none focus:bg-white focus:border-[#6C7A89]"
							id="inline-full-name"
							type="text"
							placeholder="MAX"
						/>
					</div>
					<div className="font-sans text-3xl mt-[0.4em] font-normal">
						Availability:
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							In stock
						</label>
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Order only
						</label>
					</div>
					<div className="font-sans text-3xl mt-[0.4em] font-normal">
						Brand:
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#FFFFFF] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Apple
						</label>
					</div>
					<div className="form-check ml-[1em] text-[#FFFFFF]">
						<input
							className="form-check-input appearance-none h-[1.2em] w-[1.2em] border border-gray-300 rounded-sm bg-[#FFFFFF] checked:bg-[#C96567] checked:border-[#E0E7E9] transition duration-200 mt-1 align-center float-left mr-2 cursor-pointer"
							type="checkbox"
						/>
						<label className="form-check-label inline-block font-sans text-xs md:text-lg font-normal">
							Samsung
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
