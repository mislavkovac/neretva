import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

export default function Example({ image, price, prevPrice, name, desc, tag }) {
	return (
		<div className="flex flex-1 ml-[2em]">
			<div className="w-[100%] p-2 bg-white rounded-2xl">
				<Disclosure className="w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Product Description</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#354649]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2 w-[100%]">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between rounded-md w-[100%] px-4 py-2 text-sm font-medium text-left text-[#354649] bg-[#f0f0f0] hover:text-white hover:bg-[#6C7A89] focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
								<span>Product details</span>
								<ChevronDownIcon
									className={`${
										open ? 'transform rotate-180' : ''
									} w-5 h-5 text-[#354649]`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#354649]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
