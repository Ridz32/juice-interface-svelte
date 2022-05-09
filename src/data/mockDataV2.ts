import { BigNumber } from 'ethers';

export const project = {
	projectId: BigNumber.from('0x55'),
	projectMetadata: {
		name: 'Baguette',
		infoUri: 'slapbag.xyz',
		logoUri: 'https://gateway.pinata.cloud/ipfs/QmdA1nzv7Mrxs5HeQSzbNsUeZjsTQwY53PWwHHWaeAwaUb',
		description: 'We slap people with baguettes.',
		twitter: 'whoslapbaguette',
		discord: '',
		tokens: [],
		version: 4,
		payButton: 'HonHonHon 🥖',
		payDisclosure: 'Bread is nice, give.'
	},
	fundingCycle: {
		ballot: '0xcA65D0348E6d53BD29d52e298140375cbC6d3C0D',
		basedOn: BigNumber.from('0x00'),
		configuration: BigNumber.from('0x6278e703'),
		discountRate: BigNumber.from('0x05f5e100'),
		duration: BigNumber.from('0x1baf80'),
		metadata: BigNumber.from('0x1b5809c401'),
		number: BigNumber.from('0x01'),
		start: BigNumber.from('0x6278e703'),
		weight: BigNumber.from('0xd3c21bcecceda1000000')
	},
	fundingCycleMetadata: {
		version: 1,
		reservedRate: BigNumber.from('0x09c4'),
		redemptionRate: BigNumber.from('0x0bb8'),
		ballotRedemptionRate: BigNumber.from('0x2710'),
		pausePay: false,
		pauseDistributions: false,
		pauseRedeem: false,
		pauseBurn: false,
		allowMinting: false,
		allowChangeToken: false,
		allowTerminalMigration: false,
		allowControllerMigration: false,
		allowSetTerminals: false,
		allowSetController: false,
		holdFees: false,
		useTotalOverflowForRedemptions: false,
		useDataSourceForPay: false,
		useDataSourceForRedeem: false,
		dataSource: '0x0000000000000000000000000000000000000000'
	},
	distributionLimit: BigNumber.from('0x1b1ae4d6e2ef500000'),
	usedDistributionLimit: BigNumber.from('0x00'),
	payoutSplits: [
		{
			percent: 100000000,
			lockedUntil: 1654596092,
			projectId: '0x00',
			beneficiary: '0x78E4A5778c2ea75d1720c80EAC3043d84838718f',
			allocator: '0x0000000000000000000000000000000000000000',
			preferClaimed: false
		}
	],
	reservedTokensSplits: [
		{
			percent: 500000000,
			lockedUntil: 1653991318,
			projectId: '0x00',
			beneficiary: '0x78E4A5778c2ea75d1720c80EAC3043d84838718f',
			allocator: '0x0000000000000000000000000000000000000000',
			preferClaimed: false
		}
	],
	tokenAddress: '0x0A5F79dCa132Ce9dFf0477A67008D02f80Db8b65',
	terminals: ['0x0E5a62BA8f946AB98c1E801Fc0a7264408f6B838'],
	primaryTerminal: '0x0E5a62BA8f946AB98c1E801Fc0a7264408f6B838',
	ETHBalance: BigNumber.from('0x00'),
	distributionLimitCurrency: BigNumber.from('0x02'),
	balanceInDistributionLimitCurrency: BigNumber.from('0x00'),
	tokenSymbol: 'BREAD',
	projectOwnerAddress: '0x78E4A5778c2ea75d1720c80EAC3043d84838718f',
	primaryTerminalCurrentOverflow: BigNumber.from('0x00'),
	totalTokenSupply: BigNumber.from('0x00'),
	ballotState: 1,
	loading: {
		ETHBalanceLoading: false,
		balanceInDistributionLimitCurrencyLoading: false,
		distributionLimitLoading: false,
		fundingCycleLoading: false,
		usedDistributionLimitLoading: false
	}
};
