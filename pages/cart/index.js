import React from 'react';
import Cartheader from '../../components/Cartheader';
import Toggle from '../../components/Toggle';

/* eslint-disable @next/next/no-img-element */
export default function cart() {
	return (
		<div className="h-screen bg-[#314455] text-[#314455] flex justify-center items-center">
			<div
				style={{
					maxWidth: '980px',
				}}
				className="justify-end flex flex-col items-center w-[100%] h-[100%] pb-[1em] mx-[0.5em]"
			>
				<div className="w-[100%] flex flex-col flex-1 justify-center">
					<Cartheader />
					<Toggle />
				</div>
				<div className="flex flex-col font-sans text-xl mb-[1rem] font-normal text-[#FAFAFA] w-[100%]">
					<div className="">Help & Support informaton:</div>
					<div className="flex-1 flex flex-row text-base w-[100%] justify-between">
						<div
							style={{
								paddingRight: '1em',
								maxWidth: '1100px',
							}}
						>
							<div className="">Checkout problem:</div>
							<div className="">checkout@neretva.com</div>
						</div>
						<div
							style={{
								paddingInline: '1em',
								maxWidth: '1100px',
							}}
						>
							<div className="">Cart problem:</div>
							<div className="">cart@neretva.com</div>
						</div>
						<div
							style={{
								paddingInline: '1em',
								maxWidth: '1100px',
							}}
						>
							<div className="">Payment problem:</div>
							<div className="">payment@neretva.com</div>
						</div>
						<div
							style={{
								paddingLeft: '1em',
								maxWidth: '1100px',
							}}
						>
							<div className="">Overall information:</div>
							<div className="">info@neretva.com</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
