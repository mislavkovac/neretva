import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

const SortMobile = () => {
	const RedSwitch = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
			color: '#C96567',
			'&:hover': {
				backgroundColor: alpha('#C96567', theme.palette.action.hoverOpacity),
			},
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			backgroundColor: '#C96567',
		},
	}));
	return (
		<div className="ml-[1rem]">
			<div className="font-sans text-3xl mt-[2rem] font-bold underline decoration-[#C96567]">
				Sort by:
			</div>
			<div className="form-check ml-[1em] text-[#FFFFFF]">
				<FormGroup>
					<FormControlLabel control={<RedSwitch />} label="Price" />
					<FormControlLabel control={<RedSwitch />} label="Date added" />
					<FormControlLabel control={<RedSwitch />} label="Name" />
				</FormGroup>
			</div>
			<div className="font-sans text-3xl mt-[1rem] font-bold underline decoration-[#C96567]">
				Price:
			</div>
			<div className="font-sans text-xl mt-[0.4em] font-normal ml-[1em]">
				<input
					className="bg-gray-200 appearance-none text-center border-2 h-[1.4em] border-[#FFFFFF] rounded w-[30%] py-[0.3em] text-[#6C7A89] focus:outline-none focus:bg-white focus:border-[#314455]"
					id="inline-full-name"
					type="text"
					placeholder="MIN"
				/>
				<span className="font-sans text-2xl font-normal mx-[0.5em]">-</span>
				<input
					className="bg-gray-200 appearance-none text-center border-2 h-[1.4em] border-[#FFFFFF] rounded w-[30%] py-[0.3em] text-[#6C7A89] focus:outline-none focus:bg-white focus:border-[#314455]"
					id="inline-full-name"
					type="text"
					placeholder="MAX"
				/>
			</div>
			<div className="font-sans text-3xl mt-[1rem] font-bold underline decoration-[#C96567]">
				Availability:
			</div>
			<div className="form-check ml-[1em] text-[#FFFFFF]">
				<FormGroup>
					<FormControlLabel control={<RedSwitch />} label="In stock" />
					<FormControlLabel control={<RedSwitch />} label="Order only" />
				</FormGroup>
			</div>
			<div className="font-sans text-3xl mt-[1rem] font-bold underline decoration-[#C96567]">
				Brand:
			</div>
			<div className=" ml-[1em] text-[#FFFFFF]">
				<FormGroup>
					<FormControlLabel control={<RedSwitch />} label="Apple" />
					<FormControlLabel control={<RedSwitch />} label="Samsung" />
					<FormControlLabel control={<RedSwitch />} label="Lenovo" />
					<FormControlLabel control={<RedSwitch />} label="LG" />
					<FormControlLabel control={<RedSwitch />} label="Bose" />
					<FormControlLabel control={<RedSwitch />} label="Audio-Technica" />
					<FormControlLabel control={<RedSwitch />} label="Bosch" />
					<FormControlLabel control={<RedSwitch />} label="Whirpool" />
					<FormControlLabel control={<RedSwitch />} label="Hisense" />
					<FormControlLabel control={<RedSwitch />} label="DeltaCo" />
					<FormControlLabel control={<RedSwitch />} label="NanoLeaf" />
				</FormGroup>
			</div>
		</div>
	);
};

export default SortMobile;
