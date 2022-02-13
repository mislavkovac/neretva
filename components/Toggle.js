/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import Incart from './Incart';

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
	return (
		<div className="flex flex-row justify-center break-all content-center">
			<div className="mr-[0.5em] max-w-[500px] flex-[1_1_100%]">
				<div className="bg-[#E0E7E9] shadow-lg my-[0.6em] w-[100%]">
					<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
						<div className="my-[0.2em]">General information</div>
						{/*The bottom code should toggle on and off when the button is pressed*/}
					</div>
					<div
						style={{
							display: showMe ? 'block' : 'none',
							borderLeft: '0.5px solid #314455',
							borderBottom: '0.5px solid #314455',
							borderRight: '0.5px solid #314455',
						}}
					>
						<div className="px-[3em]">
							<div className="font-sans text-xl text-[#314455] pt-3 font-normal">
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
										className="placeholder:text-[#6C7A89] placeholder:text-lg rounded-md text-xl block bg-white w-full border border-gray-300 py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="First name"
										type="text"
										name="search"
									/>
								</label>
							</div>
						</div>
						<div className="px-[3em]">
							<div className="font-sans text-xl pt-3 text-[#314455] font-normal">
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
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Last name"
										type="text"
										name="search"
									/>
								</label>
							</div>
						</div>
						<div className="px-[3em]">
							<div className="font-sans text-xl pt-3 text-[#314455] font-normal">
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
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
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
								className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#E0E7E9] shadow-lg my-[0.6em]  ">
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
						<div className="px-[3em]">
							<div className="flex flex-row">
								<div className="flex-1 font-sans text-xl text-[#314455] pt-3 font-normal left-0">
									Postal code:
								</div>
								<div className="flex-1 font-sans text-xl ml-[4rem] text-[#314455] pt-3 font-normal left-0">
									Country:
								</div>
							</div>
							<div className="flex flex-row">
								<label className="flex-1 relative block">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Postal code"
										type="text"
										name="search"
									/>
								</label>
								<label className="flex-1 ml-[4rem]">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Country"
										type="text"
										name="search"
									/>
								</label>
							</div>
						</div>
						<div className="px-[3em]">
							<div className="flex flex-row">
								<div className="flex-1 font-sans text-xl text-[#314455] pt-3 font-normal left-0">
									City:
								</div>
								<div className="flex-1 font-sans text-xl ml-[4rem] text-[#314455] pt-3 font-normal left-0">
									Province:
								</div>
							</div>
							<div className="flex flex-row">
								<label className="flex-1 relative block">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="City"
										type="text"
										name="search"
									/>
								</label>
								<label className="flex-1 ml-[4rem]">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Province"
										type="text"
										name="search"
									/>
								</label>
							</div>
						</div>
						<div className="px-[3em]">
							<div className="font-sans text-xl pt-3 text-[#314455] font-normal">
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
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
										placeholder="Address"
										type="text"
										name="search"
									/>
								</label>
							</div>
						</div>
						<div className="px-[3em]">
							<div className="font-sans text-xl pt-3 text-[#314455] font-normal">
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
										className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
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
								className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
							>
								Previous
							</button>

							<button
								onClick={shippMtd}
								className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#E0E7E9] shadow-lg flex-1 my-[0.6em] ">
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
							<div className="mx-4 flex flex-row items-center justify-around border-b-[0.5px] border-[#314455]">
								<img
									src="/images/image66.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<div className="flex flex-col">
										<div>
											<label className="form-check-label text-[#314455] font-bold">
												DPD Deliveries
											</label>
											<label className="form-check-label ml-10 text-[#314455] font-bold">
												20 HRK
											</label>
										</div>
										<div>Expected delivery:</div>
										<div>2-3 work days</div>
									</div>
								</div>
							</div>
							<div className="mx-4 flex flex-row items-center justify-around border-b-[0.5px] border-[#314455]">
								<img
									src="/images/image67.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<div className="flex flex-col">
										<div>
											<label className="form-check-label text-[#314455] font-bold">
												UPS Deliveries
											</label>
											<label className="form-check-label ml-10 text-[#314455] font-bold">
												30 HRK
											</label>
										</div>
										<div>Expected delivery:</div>
										<div>2-3 work days</div>
									</div>
								</div>
							</div>
							<div className="mx-4 my-2 flex flex-row items-center justify-around">
								<img
									src="/images/image68.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<div className="flex flex-col">
										<div>
											<label className="form-check-label text-[#314455] font-bold">
												FedEx Delivery
											</label>
											<label className="form-check-label ml-10 text-[#314455] font-bold">
												50 HRK
											</label>
										</div>
										<div>Expected delivery:</div>
										<div>1-2 work days</div>
									</div>
								</div>
							</div>
							<div className="flex text-center justify-around w-[100%]">
								<button
									onClick={shippMtd}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Previous
								</button>

								<button
									onClick={payment}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#E0E7E9] shadow-lg flex-1 my-[0.6em] ">
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
							<div className="mx-4 flex flex-row items-center justify-around border-b-[0.5px] border-[#314455]">
								<img
									src="/images/image3.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>

									<label className="form-check-label text-[#314455] font-bold">
										Paypal
									</label>
									<label className="form-check-label ml-10 text-[#314455] font-bold">
										VAT: 3%
									</label>
								</div>
							</div>
							<div className="mx-4 flex flex-row items-center justify-around border-b-[0.5px] border-[#314455]">
								<img
									src="/images/image4.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div>
									<input
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>

									<label className="form-check-label text-[#314455] font-bold">
										VISA
									</label>
									<label className="form-check-label ml-10 text-[#314455] font-bold">
										VAT: 0.5%
									</label>
								</div>
							</div>
							<div className="mx-4 my-2 flex flex-row items-center justify-around">
								<img
									src="/images/image5.png"
									alt="Cart" //change name
									className="max-w-[7.5em] p-[1em] flex-1"
								/>
								<div className="flex flex-row justify-around">
									<div>
										<input
											className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#314455] bg-white checked:bg-[#314455] checked:border-[#E0E7E9] focus:outline-none transition duration-400 mt-1 bg-no-repeat bg-center float-left mr-2 cursor-pointer"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault1"
										/>
									</div>
									<div>
										<label className="form-check-label text-[#314455] font-bold">
											Maestro
										</label>
									</div>
									<div>
										<label className="form-check-label ml-4 text-[#314455] font-bold">
											VAT: 0.5%
										</label>
									</div>
								</div>
							</div>
							<div className="flex text-center justify-around w-[100%]">
								<button
									onClick={payment}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Previous
								</button>
								<button
									// onClick={payment}
									className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]"
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* LINEEE */}
			<div className="ml-[0.5em] max-w-[450px] flex-[1_1_100%]">
				<div className="bg-[#E0E7E9] shadow-lg my-[0.6em]">
					<div>
						<div className="font-sans text-3xl font-normal text-[#314455]">
							<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
								<div className="my-[0.2em]">Order preview</div>
								{/*The bottom code should toggle on and off when the button is pressed*/}
							</div>
							<div className="border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-[#314455]">
								<div className="mx-4">
									<div className="flex flex-row border-b-[0.5px] border-[#314455]">
										<img
											src="/images/image38.png"
											alt="Cart" //change name
											className="max-w-[4em] my-[0.5em] mx-[0.5em] flex-1"
										/>
										<div className="flex flex-col mt-[0.7em] justify-between place-items-start w-full">
											<div className="flex flex-row w-full justify-between">
												<div className="flex flex-col place-items-start">
													<div className="font-sans text-xl font-normal">
														Apple
													</div>
													<div className="font-sans text-sm font-normal">
														12,9-inčni iPad Pro
													</div>
													<div className="font-sans text-sm font-normal">
														2021 - 2TB
													</div>
												</div>
												<img
													src="/images/image69.png"
													alt="Cart" //change name
													className="max-w-[0.8em] max-h-[0.8em] mb-[0.5em] mx-[0.5em] flex-1 right-0 top-0"
												/>
											</div>
											<div className="flex flex-row w-full">
												<div className="font-sans font-normal mb-[1.5em] text-base">
													Price: 20.000,00 HRK
												</div>
												<div className="flex-1 font-sans font-normal mb-[1.5em] text-base text-right">
													QTY:1
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mx-4">
									<div className="flex flex-row border-b-[0.5px] border-[#314455]">
										<img
											src="/images/image37.png"
											alt="Cart" //change name
											className="max-w-[4em] my-[0.5em] mx-[0.5em] flex-1"
										/>
										<div className="flex flex-col mt-[0.7em] justify-between place-items-start w-full">
											<div className="flex flex-row w-full justify-between">
												<div className="flex flex-col place-items-start">
													<div className="font-sans text-xl font-normal">
														Apple
													</div>
													<div className="font-sans text-sm font-normal">
														14-inčni MacBook Pro: M1
													</div>
													<div className="font-sans text-sm font-normal">
														Pro 1TB - svemirski siva
													</div>
												</div>
												<img
													src="/images/image69.png"
													alt="Cart" //change name
													className="max-w-[0.8em] max-h-[0.8em] mb-[0.5em] mx-[0.5em] flex-1 right-0 top-0"
												/>
											</div>
											<div className="flex flex-row w-full">
												<div className="font-sans font-normal mb-[1.5em] text-base">
													Price: 50.999,00 HRK
												</div>
												<div className="flex-1 font-sans font-normal mb-[1.5em] text-base text-right">
													QTY:1
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mx-4">
									<div className="flex flex-row border-b-[0.5px] border-[#314455]">
										<img
											src="/images/image36.png"
											alt="Cart" //change name
											className="max-w-[4em] my-[0.5em] mx-[0.5em] flex-1"
										/>
										<div className="flex flex-col mt-[0.7em] justify-between place-items-start w-full">
											<div className="flex flex-row w-full justify-between">
												<div className="flex flex-col place-items-start">
													<div className="font-sans text-xl font-normal">
														Samsung
													</div>
													<div className="font-sans text-sm font-normal">
														Galaxy S21 Ultra 5G Dual
													</div>
													<div className="font-sans text-sm font-normal">
														SIM Silver
													</div>
												</div>
												<img
													src="/images/image69.png"
													alt="Cart" //change name
													className="max-w-[0.8em] max-h-[0.8em] mb-[0.5em] mx-[0.5em] flex-1 right-0 top-0"
												/>
											</div>
											<div className="flex flex-row w-full">
												<div className="font-sans font-normal mb-[1.5em] text-base">
													Price: 6.000,00 HRK
												</div>
												<div className="flex-1 font-sans font-normal mb-[1.5em] text-base text-right">
													QTY:1
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mx-4 flex flex-row border-[#314455] justify-between border-b-[0.5px]">
									<div className="flex flex-col pl-[5em] py-[0.5em]">
										<div className="flex-1 font-sans font-normal text-base">
											Subtotal:
										</div>
										<div className="flex-1 font-sans font-normal text-base">
											Discount:
										</div>
										<div className="flex-1 font-sans font-normal text-base">
											Shipping:
										</div>
										<div className="flex-1 font-sans font-normal text-base">
											Tax:
										</div>
									</div>
									<div className="flex flex-col py-[0.5em]">
										<div className="flex-1 font-sans font-normal text-base text-right">
											79.999,00 HRK
										</div>
										<div className="flex-1 font-sans font-normal text-base text-right">
											- 0,00 HRK
										</div>
										<div className="flex-1 font-sans font-normal text-base text-right">
											0,00 HRK
										</div>
										<div className="flex-1 font-sans font-normal text-base text-right">
											0,00 HRK
										</div>
									</div>
								</div>
								<div className="mx-4 flex flex-row pl-[5em] py-[0.5em] justify-between">
									<div className="flex-1 font-bold font-sans text-lg">
										Order total:
									</div>
									<div className="flex-1 font-sans font-bold text-right text-lg">
										79.999,00 HRK
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1 w-full">
					<Link
						href="/cart/payment"
						className="no-underline text-[#314455]"
						passHref
					>
						<div className="bg-[#C96567] shadow-lg rounded-md flex-1 my-[0.6em] py-[0.2em] hover:text-[#C96567] hover:bg-[#314455] border-[0.5px] border-[#314455] text-center text-2xl text-[#ffffff]">
							Safe payment information
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
