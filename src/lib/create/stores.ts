import { writable, derived } from 'svelte/store';
import { BigNumber } from '@ethersproject/bignumber';
import * as constants from '@ethersproject/constants';
import Store from '$utils/Store';
import { redemptionRateFrom } from '$utils/v2/math';
import type { ProjectMetadataV4 } from '$models/project-metadata';
import type {
	V2FundingCycle,
	V2FundingCycleData,
	V2FundingCycleMetadata
} from '$models/v2/fundingCycle';
import type { Split } from '$models/v2/splits';
import { Currency, DistributionLimitType } from '$constants';
import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';
import { DEFAULT_BALLOT_STRATEGY } from '$constants/v2/ballotStrategies';


export const visitedFundingDrawers = writable({
	funding: false,
	token: false,
	rules: false
});

export const modal = writable({});

const fundingCycleData: V2FundingCycleData = {
	duration: BigNumber.from(0),
	weight: BigNumber.from(100),
	discountRate: BigNumber.from(0),
	// TODO ballot, look at hooks/v2/V2ContractLoader.ts for more info
	// ballot: contracts?.JBETHPaymentTerminal.address ?? '', // hex, contract address
	ballot: DEFAULT_BALLOT_STRATEGY.address,
};

export const fundingCycle = new Store<V2FundingCycle>({
	...fundingCycleData,
	number: BigNumber.from(1),
	configuration: BigNumber.from(0),
	basedOn: BigNumber.from(0),
	start: BigNumber.from(Date.now()).div(1000),
	metadata: BigNumber.from(0)
});

export const projectMetadata = new Store<ProjectMetadataV4>({
	version: 4,
	name: '',
	description: '',
	infoUri: '',
	logoUri: '',
	twitter: '',
	discord: '',
	tokens: [],
	payButton: 'Pay',
	payDisclosure: ''
});

export const fundingCycleMetadata = new Store<V2FundingCycleMetadata>({
	reservedRate: BigNumber.from(0), // A number from 0-10,000
	redemptionRate: redemptionRateFrom('100'), // A number from 0-10,000
	ballotRedemptionRate: redemptionRateFrom('100'), // A number from 0-10,000
	pausePay: false,
	pauseDistributions: false,
	pauseRedeem: false,
	allowMinting: false,
	pauseBurn: false,
	allowChangeToken: false,
	allowTerminalMigration: false,
	allowControllerMigration: false,
	allowSetTerminals: false,
	allowSetController: false,
	holdFees: false,
	useTotalOverflowForRedemptions: false,
	useDataSourceForPay: false,
	useDataSourceForRedeem: false,
	dataSource: constants.AddressZero
	// isPreviewMode: true,
});

export const payoutSplits = new Store<Split[]>([]);
export const reservedTokensSplits = new Store<Split[]>([]);

/**
 * Distribution limit
 * none: BigNumber.from(0)
 * infinte: BigNumber.from(MAX_DISTRIBUTION_LIMIT)
 * specific: BigNumber.from(specificValue)
 * 
 * Distribution limit currency
 * ETH: BigNumber.from(1)
 * USD: BigNumber.from(2)
 */
export const distributionLimitData = new Store({
	distributionLimit: BigNumber.from(0),
	distributionLimitCurrency: BigNumber.from(1), // ETH
});

export const currentDistributionLimitType = derived(
	distributionLimitData,
	$distributionLimitData => {
		if ($distributionLimitData.distributionLimit.eq(0)) {
			return DistributionLimitType.None;
		}
		if ($distributionLimitData.distributionLimit.eq(MAX_DISTRIBUTION_LIMIT)) {
			return DistributionLimitType.Infinite;
		}
		return DistributionLimitType.Specific;
	}
)

export const currentDistributionLimitCurrencyType = derived(
	distributionLimitData,
	$distributionLimitData => {
		if ($distributionLimitData.distributionLimitCurrency?.eq(2)) {
			return Currency.USD;
		}
		return Currency.ETH;
	}
)
