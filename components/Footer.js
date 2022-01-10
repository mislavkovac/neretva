/* eslint-disable @next/next/no-img-element */
const Footer = () => {
	return (
		<div className="hidden sm:bg-[#6C7A89] sm:flex sm:flex-row sm:place-content-center sm:w-[100%] sm:h-[25%] sm:py-[2em] sm:mt-[2em]">
			<div className="ml-[4em] mr-[4em]">
				<div className="flex-1 mx-[8rem] font-sans text-2xl font-normal text-[#FAFAFA]">
					Address:
				</div>
				<div className="flex-1 mx-[8rem] font-sans text-base font-normal text-[#FAFAFA]">
					<div>Neretva d.d.</div>
					<div>Neretvanska ulica 107x</div>
					<div>Neretvinodol 99000</div>
					<div>Tuzemska</div>
				</div>
			</div>
			<div className="ml-[4em] mr-[4em]">
				<div className="flex-1 mx-[8rem] font-sans text-2xl font-normal text-[#FAFAFA]">
					Contact:
				</div>
				<div className="flex-1 mx-[8rem] font-sans text-base font-normal text-[#FAFAFA]">
					<div>info@neretva.com</div>
					<div>+999 1111 1111</div>
					<div className="flex flex-row">
						<img
							src="/images/image42.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
						<img
							src="/images/image43.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
						<img
							src="/images/image44.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
					</div>
				</div>
			</div>
			<div className="ml-[4em] mr-[4em]">
				<div className="flex-1 mx-[8rem] font-sans text-2xl font-normal text-[#FAFAFA]">
					Accepted payment:
				</div>
				<div className="flex-1 mx-[8rem] font-sans text-base font-normal text-[#FAFAFA]">
					<div>Credit/Debit card</div>
					<div>PayPal</div>
					<div className="flex flex-row">
						<img
							src="/images/image45.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
						<img
							src="/images/image46.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
						<img
							src="/images/image47.png"
							alt="Cart" //change name
							className="max-h-[3.5em] p-[0.3em]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
