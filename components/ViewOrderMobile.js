/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import React from 'react';

const ViewOrderMobile = () => {
	return (
		<div className="flex-[1_1_100%] w-[100%] z-30">
			<div className="bg-[#E0E7E9] shadow-lg">
				<div>
					<div className="font-sans text-2xl font-normal text-[#314455]">
						<div className="text-center font-sans text-2xl font-bold text-[#314455] border-[0.5px] border-[#314455]">
							<div className="my-[0.2em]">Order preview</div>
						</div>
						<div className="border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-[#314455]">
							<div className="mx-4">
								<div className="flex flex-col items-center border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image38.png"
										alt="Cart" //change name
										className="max-w-[7em] mx-[0.5em] flex-1"
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
								<div className="flex flex-col items-center border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image37.png"
										alt="Cart" //change name
										className="max-w-[7em] mx-[0.5em] flex-1"
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
								<div className="flex flex-col items-center border-b-[0.5px] border-[#314455]">
									<img
										src="/images/image36.png"
										alt="Cart" //change name
										className="max-w-[7em] mx-[0.5em] flex-1"
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
							<div className="mx-4 flex flex-row justify-between border-[#314455] border-b-[0.5px]">
								<div className="flex flex-col py-[0.5em]">
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
							<div className="mx-4 flex flex-row py-[0.5em] justify-between">
								<div className="font-bold font-sans text-base">
									Order total:
								</div>
								<div className="font-sans font-bold text-right text-base">
									79.999,00 HRK
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewOrderMobile;
