/* eslint-disable @next/next/no-img-element */
import { Fade } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Incart from './Incart';
import ViewOrderMobile from './ViewOrderMobile';
import Link from 'next/link';

export default function Toggle() {
	const [showMe, setShowMe] = useState(true);
	function genInfo() {
		setShowMe(!showMe);
	}
	const [showMe1, setShowMe1] = useState(false);
	function shippInfo() {
		setShowMe(!showMe);
		setShowMe1(!showMe1);
	}
	const [showMe2, setShowMe2] = useState(false);
	function shippMtd() {
		setShowMe(showMe);
		setShowMe1(!showMe1);
		setShowMe2(!showMe2);
	}
	const [showMe3, setShowMe3] = useState(false);
	function payment() {
		setShowMe2(!showMe2);
		setShowMe3(!showMe3);
	}
	const [showOrder, setShowOrder] = useState(false);
	function order() {
		setShowOrder(!showOrder);
	}
	return (
		<div className="flex flex-col justify-center break-all content-center">
			<div
				style={{
					display: showOrder ? 'none' : 'block',
				}}
				className="flex-[1_1_100%]"
			>
				{showMe === true ? (
					<div className="bg-[#E0E7E9] shadow-lg w-[100%]">
						<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
							<div className="my-[0.2em]">General information</div>
						</div>
						<div
							style={{
								display: showMe ? 'block' : 'none',
								borderLeft: '0.5px solid #314455',
								borderBottom: '0.5px solid #314455',
								borderRight: '0.5px solid #314455',
							}}
						>
							<div className="px-[1rem]">
								<div className="font-sans text-md text-[#314455] pt-3 font-normal">
									First name:
								</div>
								<div>
									<label className="relative block">
										<span className="absolute inset-y-0 left-0 flex items-center pl-2">
											<svg
												className="h-5 w-5 fill-gray-300"
												viewBox="0 0 20 20"
											></svg>
										</span>
										<input
											className="placeholder:text-[#6C7A89] placeholder:text-sm rounded-md text-sm block bg-white w-full border border-gray-300 py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
											placeholder="First name"
											type="text"
											name="search"
										/>
									</label>
								</div>
							</div>
							<div className="px-[1rem]">
								<div className="font-sans text-md pt-3 text-[#314455] font-normal">
									Last name:
								</div>
								<div>
									<label className="relative block">
										<span className="absolute inset-y-0 left-0 flex items-center pl-2">
											<svg
												className="h-5 w-5 fill-gray-300"
												viewBox="0 0 20 20"
											></svg>
										</span>
										<input
											className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
											placeholder="Last name"
											type="text"
											name="search"
										/>
									</label>
								</div>
							</div>
							<div className="px-[1rem]">
								<div className="font-sans text-md pt-3 text-[#314455] font-normal">
									Phone number:
								</div>
								<div>
									<label className="relative block">
										<span className="absolute inset-y-0 left-0 flex items-center pl-2">
											<svg
												className="h-5 w-5 fill-gray-300"
												viewBox="0 0 20 20"
											></svg>
										</span>
										<input
											className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
											placeholder="e.g. +385123456789"
											type="text"
											name="search"
										/>
									</label>
								</div>
							</div>
							<div className="flex text-center justify-around w-[100%]">
								<button
									onClick={shippInfo}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				{showMe1 === true ? (
					<div className="bg-[#E0E7E9] shadow-lg  ">
						<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
							<div className="my-[0.2em]">Shipping information</div>
							{/*The bottom code should toggle on and off when the button is pressed*/}
						</div>
						<div
							style={{
								display: showMe1 ? 'block' : 'none',
								borderLeft: '0.5px solid #314455',
								borderBottom: '0.5px solid #314455',
								borderRight: '0.5px solid #314455',
							}}
						>
							<div className="px-[1rem]">
								<div className="flex-1 font-sans text-md text-[#314455] pt-3 font-normal left-0">
									Postal code:
								</div>
								<label className="flex-1 relative block">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Postal code"
										type="text"
										name="search"
									/>
								</label>
								<div className="flex-1 font-sans text-md text-[#314455] pt-3 font-normal left-0">
									Country:
								</div>
								<label className="flex-1">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Country"
										type="text"
										name="search"
									/>
								</label>
							</div>
							<div className="px-[1rem]">
								<div className="flex-1 font-sans text-md text-[#314455] pt-3 font-normal left-0">
									City:
								</div>
								<label className="flex-1">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Province"
										type="text"
										name="search"
									/>
								</label>
								<div className="flex-1 font-sans text-md text-[#314455] pt-3 font-normal left-0">
									Province:
								</div>
								<label className="flex-1 relative block">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="City"
										type="text"
										name="search"
									/>
								</label>
							</div>
							<div className="px-[1rem]">
								<div className="font-sans text-md pt-3 text-[#314455] font-normal">
									Home address (line 1):
								</div>
								<div>
									<label className="relative block">
										<span className="absolute inset-y-0 left-0 flex items-center pl-2">
											<svg
												className="h-5 w-5 fill-gray-300"
												viewBox="0 0 20 20"
											></svg>
										</span>
										<input
											className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
											placeholder="Address"
											type="text"
											name="search"
										/>
									</label>
								</div>
							</div>
							<div className="px-[1rem]">
								<div className="font-sans text-md pt-3 text-[#314455] font-normal">
									Home address (line 2):
								</div>
								<div>
									<label className="relative block">
										<span className="absolute inset-y-0 left-0 flex items-center pl-2">
											<svg
												className="h-5 w-5 fill-gray-300"
												viewBox="0 0 20 20"
											></svg>
										</span>
										<input
											className="placeholder:text-[#6C7A89] placeholder:text-sm text-sm block bg-white w-full border border-gray-300 rounded-md py-[0.2rem] pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
											placeholder="Apt/Suite/..."
											type="text"
											name="search"
										/>
									</label>
								</div>
							</div>
							<div className="flex text-center justify-around w-[100%]">
								<button
									onClick={shippInfo}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Previous
								</button>

								<button
									onClick={shippMtd}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				{showMe2 === true ? (
					<div className="bg-[#E0E7E9] shadow-lg flex-1 ">
						<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
							<div className="my-[0.2em]">Shipping method</div>
							{/*The bottom code should toggle on and off when the button is pressed*/}
						</div>
						<div
							style={{
								display: showMe2 ? 'block' : 'none',
								borderLeft: '0.5px solid #314455',
								borderBottom: '0.5px solid #314455',
								borderRight: '0.5px solid #314455',
							}}
						>
							<div>
								<div className="mx-4 flex flex-row items-center justify-between border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image66.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div className="flex items-center">
										<div className="flex flex-col">
											<label className="form-check-label text-[#314455] text-sm font-bold">
												DPD Deliveries
											</label>
											<div className="text-sm">2-3 work days</div>
											<div className="form-check-label text-sm text-[#314455] font-bold">
												20 HRK
											</div>
										</div>
									</div>

									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="mx-4 flex flex-row items-center justify-between border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image67.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div className="flex flex-col">
										<div className="form-check-label text-sm text-[#314455] font-bold">
											UPS Deliveries
										</div>
										<div className="text-sm">2-3 work days</div>
										<label className="form-check-label text-sm text-[#314455] font-bold">
											30 HRK
										</label>
									</div>

									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="mx-4 my-2 flex flex-row items-center justify-between">
									<img
										src="/images/image68.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div className="flex flex-col">
										<div className="form-check-label text-sm text-[#314455] font-bold">
											FedEx Delivery
										</div>

										<div className="text-sm">1-2 work days</div>
										<div className="form-check-label text-sm text-[#314455] font-bold">
											50 HRK
										</div>
									</div>

									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="flex text-center justify-around w-[100%]">
									<button
										onClick={shippMtd}
										className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
									>
										Previous
									</button>

									<button
										onClick={payment}
										className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
									>
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					''
				)}
				{showMe3 === true ? (
					<div className="bg-[#E0E7E9] shadow-lg flex-1 ">
						<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
							<div className="my-[0.2em]">Payment</div>
							{/*The bottom code should toggle on and off when the button is pressed*/}
						</div>
						<div
							style={{
								display: showMe3 ? 'block' : 'none',
								borderLeft: '0.5px solid #314455',
								borderBottom: '0.5px solid #314455',
								borderRight: '0.5px solid #314455',
							}}
						>
							<div>
								<div className="mx-4 flex flex-row items-center justify-between border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image3.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div>
										<div className="form-check-label text-md text-[#314455] font-bold">
											Paypal
										</div>
										<div className="form-check-label text-sm text-[#314455] font-bold">
											VAT: 3%
										</div>
									</div>

									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="mx-4 flex flex-row items-center justify-between border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image4.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div className="ml-[1rem]">
										<div className="form-check-label text-[#314455] font-bold">
											VISA
										</div>
										<div className="form-check-label text-sm text-[#314455] font-bold">
											VAT: 0.5%
										</div>
									</div>

									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="mx-4 my-2 flex flex-row items-center justify-between">
									<img
										src="/images/image5.png"
										alt="Cart" //change name
										className="max-w-[5em] p-[0.5em] flex-1"
									/>
									<div className="ml-[1rem]">
										<div className="form-check-label text-[#314455] font-bold">
											Maestro
										</div>
										<div className="form-check-label text-sm text-[#314455] font-bold">
											VAT: 0.5%
										</div>
									</div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
								</div>
								<div className="flex text-center justify-around w-[100%]">
									<button
										onClick={payment}
										className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
									>
										Previous
									</button>
									<button
										// onClick={payment}
										className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-md text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
									>
										Checkout
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					''
				)}
			</div>
			<div className="flex-1 w-full">
				<Link href="/" className="no-underline text-[#354649]" passHref>
					<div className="bg-[#C96567] shadow-lg rounded-md flex-1 mt-[0.6em] py-[0.2em] hover:text-[#C96567] hover:bg-[#314455] border-[0.5px] text-base border-[#314455] text-center text-[#ffffff]">
						Return to home
					</div>
				</Link>
			</div>
			<div className="flex-1 w-full">
				<Link
					href="/cart/payment"
					className="no-underline text-[#314455]"
					passHref
				>
					<div className="mb-[3rem] bg-[#C96567] shadow-lg rounded-md flex-1 mt-[0.6em] py-[0.2em] hover:text-[#C96567] hover:bg-[#314455] border-[0.5px] text-base border-[#314455] text-center text-[#ffffff]">
						Safe payment information & Help
					</div>
				</Link>
			</div>
			{/* LINEEE */}
		</div>
	);
}
