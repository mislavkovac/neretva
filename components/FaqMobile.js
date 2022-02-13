/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DescriptionIcon from '@mui/icons-material/Description';
import Navbar from '../components/Navbar';
import { Fade, Link, Slide } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import OptionsMobile from './OptionsMobile';
import NavbarMobile from './NavbarMobile';
import FooterMobile from './FooterMobile';

const faq = () => {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	const [account, setAccount] = useState(true);
	function accountFaq() {
		setAccount(!account);
		if (delivery === false) setDelivery(!delivery);
		if (product === false) setProduct(!product);
		if (refund === false) setRefund(!refund);
		if (assurance === false) setAssurance(!assurance);
		if (payment === false) setPayment(!payment);
	}

	const [payment, setPayment] = useState(true);
	function paymentFaq() {
		setPayment(!payment);
		if (account === false) setAccount(!account);
		if (refund === false) setRefund(!refund);
		if (product === false) setProduct(!product);
		if (assurance === false) setAssurance(!assurance);
		if (delivery === false) setDelivery(!delivery);
	}

	const [delivery, setDelivery] = useState(true);
	function deliveryFaq() {
		setDelivery(!delivery);
		if (refund === false) setRefund(!refund);
		if (account === false) setAccount(!account);
		if (product === false) setProduct(!product);
		if (assurance === false) setAssurance(!assurance);
		if (payment === false) setPayment(!payment);
	}

	const [product, setProduct] = useState(true);
	function productFaq() {
		setProduct(!product);
		if (account === false) setAccount(!account);
		if (refund === false) setRefund(!refund);
		if (delivery === false) setDelivery(!delivery);
		if (assurance === false) setAssurance(!assurance);
		if (payment === false) setPayment(!payment);
	}

	const [refund, setRefund] = useState(true);
	function refundFaq() {
		setRefund(!refund);
		if (product === false) setProduct(!product);
		if (account === false) setAccount(!account);
		if (delivery === false) setDelivery(!delivery);
		if (assurance === false) setAssurance(!assurance);
		if (payment === false) setPayment(!payment);
	}

	const [assurance, setAssurance] = useState(true);
	function assuranceFaq() {
		setAssurance(!assurance);
		if (refund === false) setRefund(!refund);
		if (product === false) setProduct(!product);
		if (account === false) setAccount(!account);
		if (delivery === false) setDelivery(!delivery);
		if (payment === false) setPayment(!payment);
	}
	const [showNavbar, setShowNavbar] = useState(false);
	function navbar() {
		setShowNavbar(!showNavbar);
	}
	const [showOptions, setShowOptions] = useState(false);
	function options() {
		setShowOptions(!showOptions);
	}

	return (
		<div>
			<div className="flex flex-col h-[3.5rem] pb-[1rem] mb-[0.5rem] bg-gradient-to-b from-[#314455] to-[#97aabd]">
				<Slide direction="top" timeout={700} in={showNavbar}>
					<div
						style={{
							display: showNavbar ? 'block' : 'none',
						}}
						className="z-10 absolute bg-gradient-to-b from-[#314455] to-[#97aabd] h-[100%] w-[100%]"
					>
						<NavbarMobile />
					</div>
				</Slide>
				<Slide direction="top" timeout={700} in={showOptions}>
					<div
						style={{
							display: showOptions ? 'block' : 'none',
						}}
						className="z-10 w-[5rem] place-self-end absolute bg-gradient-to-b from-[#314455] to-[#97aabd] h-[100%]"
					>
						<OptionsMobile />
					</div>
				</Slide>
				<div className="p-[0.5rem] pl-[0.5rem] flex flex-row items-center justify-between">
					<Fade in={!showNavbar} timeout={700}>
						<button
							onClick={navbar}
							style={{
								zIndex: showOptions ? '0' : '20',
							}}
							className="bg-[#C96567] rounded-full z-10 flex w-[2.5rem] h-[2.5rem] justify-center items-center"
						>
							<MenuIcon
								style={{ color: 'white', width: '2rem', height: '2rem' }}
							/>
						</button>
					</Fade>
					<Fade in={showNavbar} timeout={700}>
						<button
							onClick={navbar}
							className="bg-[#C96567] rounded-full z-30 absolute flex flex-1 w-[2.5rem] h-[2.5rem] justify-center items-center"
						>
							<CloseIcon
								style={{
									color: 'white',
									width: '2rem',
									height: '2rem',
									display: 'flex',
									flex: '1',
								}}
							/>
						</button>
					</Fade>
					<Link
						href="/"
						className="text-3xl break-all text-center font-bold no-underline text-[#fafafa]"
					>
						Neretva.com
					</Link>
					<Link
						href="/cart"
						className="bg-[#C96567] rounded-full z-10 flex w-[2.5rem] h-[2.5rem] justify-center items-center"
					>
						<ShoppingBagIcon
							style={{ color: 'white', width: '2rem', height: '2rem' }}
						/>
					</Link>
					<Fade in={showOptions} timeout={700}>
						<button className="bg-[#C96567] rounded-full absolute right-2 flex z-30 w-[2.5rem] h-[2.5rem] justify-center items-center">
							<CloseIcon
								onClick={options}
								style={{ color: 'white', width: '2rem', height: '2rem' }}
							/>
						</button>
					</Fade>
				</div>
				<div
					style={{
						display: showNavbar || showOptions ? 'block' : 'none',
						position: 'fixed',
						top: '0',
						left: '0',
						width: '100vw',
						height: '100vh',
						background: 'rgba(0, 0, 0, 0.5)',
						backdropFilter: 'blur(2px)',
					}}
				></div>
			</div>
			<div
				style={{
					minHeight: '76vh',
				}}
			>
				<div className="text-center font-sans text-4xl font-bold text-[#314455] my-[2rem] underline decoration-[#C96567]">
					How can we help you?
				</div>
				<div className="flex flex-wrap flex-1 justify-center">
					<div
						style={{
							background: account ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={accountFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<ManageAccountsIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: account ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Managing Your Account
						</div>
					</div>
					<div
						style={{
							display: account ? 'none' : 'flex',
							width: '100%',
						}}
						className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
					>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>How can I change password?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>Who can see my personal data?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-base text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>How can I change my e-mail?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-base text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div
						style={{
							background: payment ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={paymentFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<PaymentsIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: payment ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Payment
						</div>
					</div>
					<div
						style={{
							display: payment ? 'none' : 'flex',
							width: '100%',
						}}
						className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
					>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What forms of payment can I use?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What are the costs for paying online?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											Do I need to notify my bank or change bank accounts?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What are the costs for paying online?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											How will I know that my payment has been accepted?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div
						style={{
							background: delivery ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={deliveryFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<LocalShippingIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: delivery ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Delivery
						</div>
					</div>
					<div
						style={{
							display: delivery ? 'none' : 'flex',
							width: '100%',
						}}
						className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
					>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What is the return policy?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What are the shipping options?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What do I do if I never received my order?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>When will I receive my order?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											Can I make changes to an order I already placed?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div
						style={{
							background: product ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={productFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<ProductionQuantityLimitsIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: product ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Problem with the product
						</div>
					</div>
					<div
						style={{
							display: product ? 'none' : 'flex',
							width: '100%',
						}}
						className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
					>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What if I received different product?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What if received product is broken?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											What if received product is not working properly?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What if product arrived in damaged box?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div
						style={{
							background: refund ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={refundFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<AutorenewIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: refund ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Returns & Refunds
						</div>
					</div>
					<div
						style={{
							display: refund ? 'none' : 'flex',
							width: '100%',
						}}
						className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
					>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											How long after accepting a payment do I have to issue a
											refund?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>How long does it take for refunds to process?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>
											Can I refund part of the original payment amount?
										</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>Do I have to pay a fee for issuing refunds?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What are conditions for returning order items?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>How to request return?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure className="">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
										<span>What should I do for returning item/order?</span>
										<ChevronDownIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-[#354649]`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div
						style={{
							background: assurance ? '#ffffff' : '#314455',
							width: '100%',
						}}
						onClick={assuranceFaq}
						className="cursor-pointer m-2 w-[80%] items-center justify-between flex flex-row content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<DescriptionIcon
							style={{ color: '#C96567' }}
							className="w-[6rem] h-[6rem]"
						/>
						<div
							style={{
								color: assurance ? '#314455' : '#ffffff',
							}}
							className="text-center w-[80%] font-sans text-xl font-bold text-[#314455] my-[1rem]"
						>
							Guarantees & Assurances
						</div>
					</div>
				</div>
				<div
					style={{
						display: assurance ? 'none' : 'flex',
						width: '100%',
					}}
					className="flex flex-col justify-center items-center mt-[0.5rem] mb-[1rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How long the warranty lasts?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Do I need to pay extra for assurance?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What products have assurance included in price?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>
										How do I refund/return product that is under assurance?
									</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[80%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What assurance includes?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[80%] pt-4 pb-2 text-sm text-[#354649]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
			<FooterMobile />
		</div>
	);
};

export default faq;
