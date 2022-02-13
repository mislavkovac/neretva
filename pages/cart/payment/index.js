import React from 'react';
import Payment from '../../../components/Payment';
import PaymentMobile from '../../../components/PaymentMobile';

const payment = () => {
	return (
		<div className="">
			<div className="hidden sm:block">
				<Payment />
			</div>
			<div className="block sm:hidden">
				<PaymentMobile />
			</div>
		</div>
	);
};

export default payment;
