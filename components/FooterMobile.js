/* eslint-disable @next/next/no-img-element */
import Chip from '@mui/material/Chip';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaymentIcon from '@mui/icons-material/Payment';

const FooterMobile = () => {
	return (
		<div className="bg-[#314455] w-[100%] h-[5%] mt-[1rem] flex flex-col justify-center items-center">
			<div className="mt-[0.5rem] font-sans text-base font-normal text-center text-[#FAFAFA]">
				Need help?
			</div>
			<div className="mb-[0.5rem] font-sans text-base font-normal text-center text-[#FAFAFA]">
				Click on one of categories for help
			</div>
			<div className="flex flex-col items-center justify-center">
				<Chip
					icon={
						<ContactMailIcon
							style={{
								color: '#C96567',
							}}
						/>
					}
					style={{
						color: '#C96567',
						background: '#FAFAFA',
						fontWeight: '900',
						marginBottom: '0.5rem',
					}}
					label="Address"
				/>
				<Chip
					icon={
						<PhoneIcon
							style={{
								color: '#C96567',
							}}
						/>
					}
					style={{
						color: '#C96567',
						background: '#FAFAFA',
						fontWeight: '900',
					}}
					label="Contact"
				/>
				<Chip
					icon={
						<PaymentIcon
							style={{
								color: '#C96567',
							}}
						/>
					}
					style={{
						color: '#C96567',
						background: '#FAFAFA',
						fontWeight: '900',
						margin: '0.5rem 0',
					}}
					label="Payment"
				/>
			</div>
		</div>
	);
};

export default FooterMobile;
