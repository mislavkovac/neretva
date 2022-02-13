/* eslint-disable @next/next/no-img-element */
// import { Link, Typography } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
	return (
		<div className="flex justify-center rounded-full cursor-pointer place-self-end mr-[2em] my-auto items-center">
			<Link className="no-underline" href="/cart" passHref>
				<div className="h-[4.5em] w-[4.5em] bg-[#a3c6c4] flex justify-center rounded-full place-self-end mr-[2em] my-auto cursor-pointer">
					<img
						src="/images/image2.png"
						alt="Cart"
						className="h-[3.125em] w-[3.125em] m-auto"
					/>
				</div>
			</Link>
		</div>
	);
};

export default Cart;
