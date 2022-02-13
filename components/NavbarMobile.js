import { Divider, Link, Typography } from '@mui/material';
import styles from '../styles/Layout.module.css';
import Chip from '@mui/material/Chip';
import CategoryIcon from '@mui/icons-material/Category';
import StarsIcon from '@mui/icons-material/Stars';
import ReviewsIcon from '@mui/icons-material/Reviews';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonIcon from '@mui/icons-material/Person';

const NavbarMobile = () => {
	return (
		<div className="flex flex-col pt-[5rem] justify-center items-center">
			<input
				className="placeholder:text-[#FFFFFF] text-[#FFFFFF] w-[90%] mx-[0.3rem] mt-[1.3rem] placeholder:text-base text-base h-[3.5rem] block bg-[#314455] border-[#C96567] border-[1.5px] rounded-lg shadow-sm focus:border-[#C96567] focus:ring-[#C96567]"
				placeholder="Search for products"
				type="text"
				name="search"
			/>
			<div className="grid grid-rows-2 divide-y gap-[2rem]">
				<div>
					<Link
						href="/categories"
						className="order-1 no-underline text-[#ffffff] px-[1.5rem] flex text-center justify-center items-center h-[3rem]"
					>
						<Chip
							icon={
								<CategoryIcon
									style={{
										color: '#C96567',
									}}
								/>
							}
							style={{
								color: '#C96567',
								background: '#FAFAFA',
								fontWeight: '900',
								margin: '2rem 0 0 0',
								width: '150px',
								textDecorationLine: 'none',
							}}
							label="Categories"
						/>
					</Link>
					<Link
						href="/discounts"
						className="order-2 no-underline text-[#ffffff] px-[1.5rem] flex text-center justify-center items-center h-[3rem]"
					>
						<Chip
							icon={
								<ReviewsIcon
									style={{
										color: '#C96567',
									}}
								/>
							}
							style={{
								color: '#C96567',
								background: '#FAFAFA',
								fontWeight: '900',
								margin: '2rem 0 0 0',
								width: '150px',
							}}
							label="Discounts"
						/>
					</Link>
					<Link
						href="/reviews"
						className="order-3 no-underline text-[#ffffff] px-[1.5rem] flex text-center justify-center items-center h-[3rem]"
					>
						<Chip
							icon={
								<StarsIcon
									style={{
										color: '#C96567',
									}}
								/>
							}
							style={{
								color: '#C96567',
								background: '#FAFAFA',
								fontWeight: '900',
								margin: '2rem 0 0 0',
								width: '150px',
							}}
							label="Reviews"
						/>
					</Link>
					<Link
						href="/faq"
						className="order-4 no-underline text-[#ffffff] px-[1.5rem] flex text-center justify-center items-center h-[3rem]"
					>
						<Chip
							icon={
								<QuestionAnswerIcon
									style={{
										color: '#C96567',
									}}
								/>
							}
							style={{
								color: '#C96567',
								background: '#FAFAFA',
								fontWeight: '900',
								margin: '2rem 0 0 0',
								width: '150px',
							}}
							label="FAQ"
						/>
					</Link>
				</div>
				<div>
					<button className="order-4 no-underline text-[#ffffff] px-[1.5rem] flex text-center justify-center items-center h-[3rem]">
						<Chip
							icon={
								<PersonIcon
									style={{
										color: '#C96567',
									}}
								/>
							}
							style={{
								color: '#C96567',
								background: '#FAFAFA',
								fontWeight: '900',
								margin: '2rem 0 0 0',
								width: '150px',
							}}
							label="Profile"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavbarMobile;
