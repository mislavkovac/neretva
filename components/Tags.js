import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';

export default function IconChips() {
	return (
		<Stack direction="row" spacing={1}>
			<Chip
				icon={<LocalOfferIcon style={{ color: '#C96567' }} />}
				label="Best Offer"
				style={{ color: '#C96567', background: '#314455', fontWeight: '900' }}
			/>
			<Chip
				icon={
					<AccessTimeIcon
						style={{
							color: '#C96567',
						}}
					/>
				}
				style={{ color: '#C96567', background: '#314455', fontWeight: '900' }}
				label="HurryUp!!"
			/>
			<Chip
				icon={
					<PercentIcon
						style={{
							color: '#C96567',
						}}
					/>
				}
				style={{
					color: '#C96567',
					background: '#314455',
					fontWeight: '900',
				}}
				label="20"
			/>
		</Stack>
	);
}
