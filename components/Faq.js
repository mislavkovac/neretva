/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DescriptionIcon from '@mui/icons-material/Description';
import Navbar from '../components/Navbar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Footer from '../components/Footer';
import Link from 'next/link';

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

	return (
		<div>
			<div className="flex flex-row justify-center bg-[#314455] mb-[0.5rem] h-[5rem]">
				<Link href="/" passHref>
					<img
						className="max-h-[50px] my-[1rem] px-[0.4rem] self-center cursor-pointer"
						src="/images/logo.png"
						alt="logo"
					/>
				</Link>
				<input
					style={{
						display: showSearch ? 'none' : 'block',
					}}
					className="placeholder:text-[#FFFFFF] text-[#FFFFFF] w-[30rem] mx-[1rem] placeholder:text-base text-base mt-[1.6rem] h-[30px] block bg-[#314455] border-[#C96567] border-[1.5px] rounded-lg shadow-sm focus:border-[#C96567] focus:ring-[#C96567]"
					placeholder="Search for products"
					type="text"
					name="search"
				/>
				<div
					style={{
						display: showSearch ? 'flex' : 'none',
						justifyContent: 'center',
					}}
					className="w-[30rem] mt-[1rem] mx-[1rem]"
				>
					<Navbar />
				</div>
				<div className="flex flex-row justify-center mt-[1.5rem]">
					<button
						onClick={searchShow}
						className="bg-[#C96567] ml-[1rem] h-[30px] p-[0.2rem] m-[0.2rem] rounded-full flex justify-center items-center"
					>
						<SearchIcon style={{ color: 'white' }} />
					</button>
					<button className="p-[0.2rem] my-[0.2rem] rounded-full flex">
						<PersonIcon style={{ color: 'white' }} />
					</button>
					<Link className="rounded-full flex" href="/cart" passHref>
						<button className="p-[0.2rem] my-[0.2rem] rounded-full flex">
							<ShoppingBagIcon style={{ color: 'white' }} />
						</button>
					</Link>
				</div>
			</div>
			<div
				style={{
					minHeight: '76vh',
				}}
			>
				<div className="text-center font-sans text-5xl font-bold text-[#314455] my-[3rem] underline decoration-[#C96567]">
					How can we help you?
				</div>
				<div className="flex flex-wrap flex-1 justify-center">
					<div
						style={{
							background: account ? '#ffffff' : '#314455',
						}}
						onClick={accountFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<ManageAccountsIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: account ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Managing Your Account
						</div>
					</div>
					<div
						style={{
							background: payment ? '#ffffff' : '#314455',
						}}
						onClick={paymentFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<PaymentsIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: payment ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Payment
						</div>
					</div>
					<div
						style={{
							background: delivery ? '#ffffff' : '#314455',
						}}
						onClick={deliveryFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<LocalShippingIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: delivery ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Delivery
						</div>
					</div>
					<div
						style={{
							background: product ? '#ffffff' : '#314455',
						}}
						onClick={productFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<ProductionQuantityLimitsIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: product ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Problem with the product
						</div>
					</div>
					<div
						style={{
							background: refund ? '#ffffff' : '#314455',
						}}
						onClick={refundFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<AutorenewIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: refund ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Returns & Refunds
						</div>
					</div>
					<div
						style={{
							background: assurance ? '#ffffff' : '#314455',
						}}
						onClick={assuranceFaq}
						className="cursor-pointer m-2 w-[13rem] items-center justify-center flex flex-col content-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-500 ease-in-out hover:scale-105"
					>
						<DescriptionIcon
							style={{ color: '#C96567' }}
							className="w-[8rem] h-[8rem]"
						/>
						<div
							style={{
								color: assurance ? '#314455' : '#ffffff',
							}}
							className="text-center font-sans text-2xl font-bold text-[#314455] my-[1rem]"
						>
							Guarantees & Assurances
						</div>
					</div>
				</div>
				<div
					style={{
						display: account ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How can I change password?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Who can see my personal data?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How can I change my e-mail?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
				<div
					style={{
						display: payment ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What forms of payment can I use?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What are the costs for paying online?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>
										Do I need to notify my bank or change bank accounts?
									</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What are the costs for paying online?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>
										How will I know that my payment has been accepted?
									</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
				<div
					style={{
						display: delivery ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What is the return policy?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What are the shipping options?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What do I do if I never received my order?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>When will I receive my order?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Can I make changes to an order I already placed?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
				<div
					style={{
						display: product ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What if I received different product?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What if received product is broken?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What if received product is not working properly?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What if product arrived in damaged box?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
				<div
					style={{
						display: refund ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
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
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How long does it take for refunds to process?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Can I refund part of the original payment amount?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Do I have to pay a fee for issuing refunds?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What are conditions for returning order items?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How to request return?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What should I do for returning item/order?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
				<div
					style={{
						display: assurance ? 'none' : 'flex',
					}}
					className="flex flex-col justify-center items-center mt-[2rem]"
				>
					<Disclosure className="">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>How long the warranty lasts?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>Do I need to pay extra for assurance?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What products have assurance included in price?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>
										How do I refund/return product that is under assurance?
									</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
								<Disclosure.Button className="flex flex-1 w-[68%] my-[0.3rem] justify-between rounded-md px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
									<span>What assurance includes?</span>
									<ChevronDownIcon
										className={`${
											open ? 'transform rotate-180' : ''
										} w-5 h-5 text-[#354649]`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="flex px-4 w-[68%] pt-4 pb-2 text-base text-[#354649]">
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
			<Footer />
		</div>
	);
};

export default faq;
