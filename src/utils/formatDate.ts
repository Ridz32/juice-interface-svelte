import { BigNumber } from '@ethersproject/bignumber';
import type { BigNumberish } from 'ethers';
import { i18n } from '@lingui/core';
// TODO can't get macro to work outside of svelte components
// import { t } from '@lingui/macro'

import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (dateMillis: BigNumberish, formatStr = 'yyyy-MM-dd h:mma') =>
	format(BigNumber.from(dateMillis).toNumber(), formatStr);

export function formatHistoricalDate(dateMillis: BigNumberish) {
	const props = {
		time: formatDistanceToNow(BigNumber.from(dateMillis).toNumber())
	};
	// TODO the toolip
	return (
		// <Tooltip title={`${formatDate(dateMillis)} UTC`}>
		i18n._(`{time} ago`, props)
		// t`${formatDistanceToNow(BigNumber.from(dateMillis).toNumber())} ago`
		// </Tooltip>
	);
}

/**
 * Convert a date to Epoch time in seconds.
 * @param date
 * @returns Epoch time in seconds
 */
export const toDateSeconds = (date: Date) => {
	return Math.floor(date.valueOf() / 1000);
};
