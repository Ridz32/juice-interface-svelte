import * as constants from '@ethersproject/constants';
import { getContext } from 'svelte';
// import { get } from 'svelte/store';
// const i18n = getContext('i18n');
// const t = get(i18n)

class t {
	static _(arg0: string) {
		console.warn('Not translated v1/ballotStrategies');
		return arg0;
	}
}

export function ballotStrategies() {
	return [
		{
			name: t._('No strategy'),
			description: t._(
				'Any reconfiguration to an upcoming funding cycle will take effect once the current cycle ends. A project with no strategy may be vulnerable to being rug-pulled by its owner.'
			),
			address: constants.AddressZero
		},
		{
			name: t._('7-day delay'),
			description: t._(
				'A reconfiguration to an upcoming funding cycle must be submitted at least 7 days before it starts.'
			),
			address: '0xEf7480b6E7CEd228fFB0854fe49A428F562a8982'
		},
		{
			name: t._('3-day delay'),
			description: t._(
				'A reconfiguration to an upcoming funding cycle must be submitted at least 3 days before it starts.'
			),
			address: '0x6d6da471703647Fd8b84FFB1A29e037686dBd8b2'
		}
	];
}

export const DEFAULT_BALLOT_STRATEGY = ballotStrategies()[2];
