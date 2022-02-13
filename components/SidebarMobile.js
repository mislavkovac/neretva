import React from 'react';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import VideocamIcon from '@mui/icons-material/Videocam';
import SpeakerIcon from '@mui/icons-material/Speaker';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import IronIcon from '@mui/icons-material/Iron';
import SensorsIcon from '@mui/icons-material/Sensors';
import PowerIcon from '@mui/icons-material/Power';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SidebarMobile = ({ path }) => {
	const [value, setValue] = React.useState(0);
	return (
		<div className="flex flex-col items-center break-all py-[0.5rem] bg-gradient-to-b from-[#314455] to-[#97aabd]">
			<div className="font-sans text-3xl mt-[2rem] font-bold underline decoration-[#C96567]">
				Electronics
			</div>
			<div className="flex flex-col items-center">
				<Link
					className="cursor-pointer"
					href={`/${path}/[id]`}
					as={`/${path}/TVs%20&%20Monitors`}
					passHref
				>
					<Chip
						icon={
							<DesktopWindowsIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="TVs & Monitors"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Mobile`}
					passHref
				>
					<Chip
						icon={
							<PhoneIphoneIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Mobile"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Laptop`}
					passHref
				>
					<Chip
						icon={
							<LaptopMacIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Laptops"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/PC`}
					passHref
				>
					<Chip
						icon={
							<AdUnitsIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="PCs"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Video`}
					passHref
				>
					<Chip
						icon={
							<VideocamIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Video"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Audio`}
					passHref
				>
					<Chip
						icon={
							<SpeakerIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Audio"
					/>
				</Link>
			</div>
			<Divider
				style={{ margin: '1rem 0 1rem 0' }}
				className="w-[60%] bg-[#FFFFFF] h-[1px] rounded-full my-[1rem]"
			/>
			<div className="font-sans text-3xl font-bold underline decoration-[#C96567]">
				Home
			</div>
			<div className="flex flex-col items-center">
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Dishwasher`}
					passHref
				>
					<Chip
						icon={
							<FlatwareIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Dishwashers"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Washing%20machine`}
					passHref
				>
					<Chip
						icon={
							<LocalLaundryServiceIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Washing"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Refrigerator`}
					passHref
				>
					<Chip
						icon={
							<KitchenIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Refrigerator"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Vacuums`}
					passHref
				>
					<Chip
						icon={
							<CleaningServicesIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Vacuums"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<IronIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Irons"
					/>
				</Link>
			</div>
			<Divider
				style={{ margin: '1rem 0 1rem 0' }}
				className="w-[60%] bg-[#FFFFFF] h-[1px] rounded-full my-[1rem]"
			/>
			<div className="font-sans text-3xl font-bold underline decoration-[#C96567]">
				Smart Home
			</div>
			<div className="flex flex-col items-center">
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<SensorsIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Sensors"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<PowerIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Sockets"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<LightbulbIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Light bulbs"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<ToggleOffIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Switches"
					/>
				</Link>
				<Link
					className="cursor-pointer no-underline"
					href={`/${path}/[id]`}
					as={`/${path}/Irons`}
					passHref
				>
					<Chip
						icon={
							<MiscellaneousServicesIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#FAFAFA',
							fontWeight: '900',
							margin: '0.5rem 0 0 0',
							width: '150px',
						}}
						label="Miscellaneous"
					/>
				</Link>
			</div>
			<Divider
				style={{ margin: '1rem 0 1rem 0' }}
				className="w-[60%] bg-[#FFFFFF] h-[1px] rounded-full my-[1rem]"
			/>
			<Chip
				icon={
					<PeopleAltIcon
						style={{
							color: '#C96567',
						}}
					/>
				}
				style={{
					color: '#C96567',
					background: '#FAFAFA',
					fontWeight: '900',
					margin: '0.5rem 0 0 0',
					width: '150px',
				}}
				label="Tebi ko Tebi"
			/>
			<Divider
				style={{ margin: '1rem 0 1rem 0' }}
				className="w-[60%] bg-[#FFFFFF] h-[1px] rounded-full my-[1rem]"
			/>
			<Chip
				icon={
					<LocalShippingIcon
						style={{
							color: '#C96567',
						}}
					/>
				}
				style={{
					color: '#C96567',
					background: '#FAFAFA',
					fontWeight: '900',
					margin: '0.5rem 0 0 0',
					width: '200px',
				}}
				label="Ispalo iz kamiona"
			/>
		</div>
	);
};

export default SidebarMobile;
