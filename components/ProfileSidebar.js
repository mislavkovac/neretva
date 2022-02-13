import { Link } from '@mui/material';
import React, { useState } from 'react';
import OrderHistoryCard from './OrderHistoryCard';

const ProfileSidebar = ({ path }) => {
	const [viewOrders, setViewOrders] = useState(true);
	function orders() {
		setViewOrders(!viewOrders);
	}
	let cards = [];
	cards.push(
		<OrderHistoryCard
			image={'image35.png'}
			name={'Samsung'}
			desc={'43 Q60A QLED 4K Smart TV'}
			rating={'3'}
		/>
	);

	return (
		<div className="flex flex-row">
			<div className="break-all bg-[#FAFAFA] border-r-[3px] border-[#C96567] text-[#314455] shadow-lg py-[0.5rem]">
				<button
					onClick={orders}
					className="pl-[0.5em] font-sans text-xl mt-[0.4em] font-normal"
				>
					View Orders
				</button>
				<div className="pl-[0.5em] font-sans text-xl mt-[0.4em] font-normal">
					Personal details
				</div>
				<div className="pl-[0.5em] font-sans text-xl mt-[0.4em] font-normal">
					Change password
				</div>
				<div className="pl-[0.5em] font-sans text-xl mt-[0.4em] font-normal">
					Payment methods
				</div>
				<div className="pl-[0.5em] font-sans text-xl mt-[0.4em] font-normal">
					Manage addresses
				</div>
			</div>
			{viewOrders === true ? (
				<div className="w-[100%]">
					<div className="mt-[0.5em] text-center font-sans text-5xl font-extrabold text-[#314455] underline decoration-[#C96567]">
						Order history
					</div>
					{cards}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default ProfileSidebar;
