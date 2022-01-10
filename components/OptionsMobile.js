import { Link, Typography } from '@mui/material';
import styles from '../styles/Layout.module.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Options = () => {
	return (
		<div className="flex flex-col items-center pt-[5rem]">
			<button className="p-[0.2rem] m-[0.2rem] rounded-full flex items-center justify-center">
				<PersonIcon className="h-[50px] w-[50px]" style={{ color: 'white' }} />
			</button>
			<button className="p-[0.2rem] m-[0.2rem] rounded-full flex items-center justify-center">
				<ShoppingBagIcon
					className="h-[50px] w-[50px]"
					style={{ color: 'white' }}
				/>
			</button>
		</div>
	);
};

export default Options;
