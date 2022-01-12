/* eslint-disable @next/next/no-img-element */
const Footer = () => {
	return (
		<div className="bg-[#314455] flex flex-row place-content-center h-[25%] py-[2em] mt-[2em]">
			<div className="mr-[4em] ">
				<div className="font-sans text-2xl font-normal text-[#FAFAFA]">
					Address:
				</div>
				<div className="font-sans text-base font-normal text-[#FAFAFA]">
					<div>Neretva d.d.</div>
					<div>Neretvanska ulica 107x</div>
					<div>Neretvinodol 99000</div>
					<div>Tuzemska</div>
				</div>
			</div>
			<div className="ml-[4em] mr-[4em]">
				<div className="font-sans text-2xl font-normal text-[#FAFAFA]">
					Contact:
				</div>
				<div className="font-sans text-base font-normal text-[#FAFAFA]">
					<div>info@neretva.com</div>
					<div>+999 1111 1111</div>
					<div className="flex flex-row items-center">
						<img
							src="/images/image42.png"
							alt="Cart" //change name
							className="max-h-[3em] p-[0.3em] flex-1"
						/>
						<img
							src="/images/image43.png"
							alt="Cart" //change name
							className="max-h-[2.7em] p-[0.3em] flex-1"
						/>
						<img
							src="/images/image44.png"
							alt="Cart" //change name
							className="max-h-[2.6em] p-[0.3em] flex-1 pt-[0.4em] pb-[0.2em]"
						/>
					</div>
				</div>
			</div>
			<div className="ml-[4em]">
				<div className="font-sans text-2xl font-normal text-[#FAFAFA]">
					Accepted payment:
				</div>
				<div className="font-sans text-base font-normal text-[#FAFAFA]">
					<div>Credit/Debit card</div>
					<div>PayPal</div>
					<div className="flex flex-row">
						<img
							src="/images/image45.png"
							alt="Cart" //change name
							className="max-h-[3em] max-w-[3em] p-[0.3em] flex-1"
						/>
						<img
							src="/images/image46.png"
							alt="Cart" //change name
							className="max-h-[3em] max-w-[3em] p-[0.3em] flex-1"
						/>
						<img
							src="/images/image47.png"
							alt="Cart" //change name
							className="max-h-[3em] max-w-[3em] p-[0.3em] flex-1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
