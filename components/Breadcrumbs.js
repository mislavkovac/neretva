import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor =
		theme.palette.mode === 'light'
			? theme.palette.grey[100]
			: theme.palette.grey[800];
	return {
		backgroundColor,
		height: theme.spacing(3),
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover, &:focus': {
			backgroundColor: emphasize(backgroundColor, 0.06),
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
});

export default function CustomizedBreadcrumbs() {
	const [routeMe, setRouteMe] = useState(false);
	const router = useRouter();
	function routeHome() {
		router.push('/');
	}
	function routeCategories() {
		router.push('/categories');
	}
	return (
		<div className="m-[0.5em]">
			<Breadcrumbs aria-label="breadcrumb">
				<StyledBreadcrumb
					className="cursor-pointer"
					label="Home"
					icon={<HomeIcon fontSize="small" />}
					onClick={routeHome}
				/>
				<StyledBreadcrumb
					className="cursor-pointer"
					label="Categories"
					onClick={routeCategories}
				/>
			</Breadcrumbs>
		</div>
	);
}
