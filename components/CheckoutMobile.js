import { Fade } from '@mui/material';
import React from 'react';
import CartheaderMobile from './CartheaderMobile';
import { useState } from 'react';
import ToggleMobile from './ToggleMobile';
import ViewOrderMobile from './ViewOrderMobile';
import CloseIcon from '@mui/icons-material/Close';

const CheckoutMobile = () => {
	const [showOrder, setShowOrder] = useState(false);
	function order() {
		setShowOrder(!showOrder);
	}
	return (
		<div className="bg-[#314455] text-[#314455] flex justify-center items-center">
			<div className="justify-end flex flex-[1_1_100%] flex-col items-center w-[100%] min-h-[100vh] mx-[0.5em] mt-[0.5em]">
				<div
					style={{
						display: showOrder ? 'none' : 'flex',
					}}
					className="w-[100%] flex flex-col flex-1"
				>
					<CartheaderMobile />
					<ToggleMobile />
				</div>
				<Fade in={!showOrder} timeout={700}>
					<button
						onClick={order}
						className="z-10  bottom-0 fixed w-[100%] mx-[1rem] bg-[#C96567] shadow-lg rounded-md flex-1 mt-[0.6em] py-[0.2em] hover:text-[#C96567] hover:bg-[#314455] border-[0.5px] text-lg border-[#314455] text-center text-[#ffffff]"
					>
						View order
					</button>
				</Fade>
				<div
					style={{
						display: showOrder ? 'flex' : 'none',
						width: '100%',
					}}
				>
					<Fade in={showOrder} timeout={700}>
						<div className="py-[0.2em] w-[100%] text-xl text-[#ffffff] z-30 shadow-lg top-0 bg-gradient-to-b from-[#314455] to-[#97aabd]">
							<ViewOrderMobile />
						</div>
					</Fade>
					<Fade in={showOrder} timeout={700}>
						<button className="bg-[#C96567] rounded-full fixed top-2 right-2 flex z-30 w-[2.5rem] h-[2.5rem] justify-center items-center">
							<CloseIcon
								onClick={order}
								style={{ color: 'white', width: '2rem', height: '2rem' }}
							/>
						</button>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default CheckoutMobile;
