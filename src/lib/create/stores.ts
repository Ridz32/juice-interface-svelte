import { writable, derived } from "svelte/store";
import { BigNumber } from '@ethersproject/bignumber';
import * as constants from '@ethersproject/constants'
import Store from "$utils/Store";
import { connectedAccount } from "$stores/web3";
import { redemptionRateFrom } from '$utils/v2/math'
import { V2_CURRENCY_ETH } from "$utils/v2/currency";
import type { V2BallotState } from '$models/ballot';
import type { ProjectMetadataV4 } from '$models/project-metadata';
import type { V2FundingCycle, V2FundingCycleData, V2FundingCycleMetadata } from '$models/v2/fundingCycle';
import type { Split } from '$models/v2/splits';

export const visitedFundingDrawers = writable({
  funding: false,
  token: false,
  rules: false,
});

export const modal = writable({});

export const isReviewPanel = writable(false);

type V2ProjectLoadingStates = {
  ETHBalanceLoading: boolean
  balanceInDistributionLimitCurrencyLoading: boolean
  distributionLimitLoading: boolean
  fundingCycleLoading: boolean
  usedDistributionLimitLoading: boolean
}

export type V2ProjectContextType = {
  isPreviewMode?: boolean

  projectId: BigNumber | undefined
  projectMetadata: ProjectMetadataV4 | undefined
  tokenAddress: string | undefined
  tokenSymbol: string | undefined
  terminals: string[] | undefined // array of terminal addresses, 0xABC...
  primaryTerminal: string | undefined
  ETHBalance: BigNumber | undefined
  projectOwnerAddress: string | undefined
  balanceInDistributionLimitCurrency: BigNumber | undefined
  usedDistributionLimit: BigNumber | undefined // how much has been distributed

  fundingCycleMetadata: V2FundingCycleMetadata | undefined
  fundingCycle: V2FundingCycle | undefined
  ballotState: V2BallotState | undefined

  distributionLimit: BigNumber | undefined
  distributionLimitCurrency: BigNumber | undefined

  payoutSplits: Split[] | undefined
  reservedTokensSplits: Split[] | undefined

  primaryTerminalCurrentOverflow: BigNumber | undefined
  totalTokenSupply: BigNumber | undefined

  loading: V2ProjectLoadingStates
}

const fundingCycleData: V2FundingCycleData = {
  duration: BigNumber.from(0),
  weight: BigNumber.from(100),
  discountRate: BigNumber.from(0),
  // TODO ballot, look at hooks/v2/V2ContractLoader.ts for more info
  // ballot: contracts?.JBETHPaymentTerminal.address ?? '', // hex, contract address
  ballot: ""
}

const fundingCycle: V2FundingCycle = {
  ...fundingCycleData,
  number: BigNumber.from(1),
  configuration: BigNumber.from(0),
  basedOn: BigNumber.from(0),
  start: BigNumber.from(Date.now()).div(1000),
  metadata: BigNumber.from(0),
}

export const projectMetadata = new Store<ProjectMetadataV4>({
  version: 4,
  name: "",
  description: "",
  infoUri: "",
  logoUri: "",
  twitter: "",
  discord: "",
  tokens: [],
  payButton: "Pay",
  payDisclosure: "",
})

const fundingCycleMetadata: V2FundingCycleMetadata = {
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
  dataSource: constants.AddressZero,
  // isPreviewMode: true,
}

export const payoutSplits = new Store<[Split] | []>([]);
export const reservedTokensSplits = new Store<[Split] | []>([]);

const project: V2ProjectContextType = {
  isPreviewMode: true,

  projectId: BigNumber.from(0),
  projectMetadata: projectMetadata.get(),

  fundingCycle,
  fundingCycleMetadata,

  distributionLimit: undefined,
  distributionLimitCurrency: BigNumber.from(V2_CURRENCY_ETH),

  payoutSplits: payoutSplits.get(),
  reservedTokensSplits: reservedTokensSplits.get(),

  usedDistributionLimit: BigNumber.from(0),
  ETHBalance: BigNumber.from(0),
  balanceInDistributionLimitCurrency: BigNumber.from(0),

  tokenAddress: undefined,
  terminals: [],
  primaryTerminal: undefined,
  tokenSymbol: undefined,
  projectOwnerAddress: connectedAccount.get(),
  ballotState: undefined,
  primaryTerminalCurrentOverflow: undefined,
  totalTokenSupply: undefined,

  loading: {
    ETHBalanceLoading: false,
    balanceInDistributionLimitCurrencyLoading: false,
    distributionLimitLoading: false,
    fundingCycleLoading: false,
    usedDistributionLimitLoading: false,
  },
}

// export const V2ProjectContext = writable<V2ProjectContextType>({
//   isPreviewMode: false,

//   projectId: undefined,
//   projectMetadata: undefined,
//   tokenAddress: undefined,
//   tokenSymbol: undefined,
//   terminals: undefined,
//   primaryTerminal: undefined,
//   ETHBalance: undefined,
//   projectOwnerAddress: undefined,
//   balanceInDistributionLimitCurrency: undefined,
//   usedDistributionLimit: undefined,

//   fundingCycleMetadata: undefined,
//   fundingCycle: undefined,
//   ballotState: undefined,

//   distributionLimit: undefined,
//   distributionLimitCurrency: undefined,

//   payoutSplits: undefined,
//   reservedTokensSplits: undefined,

//   primaryTerminalCurrentOverflow: undefined,
//   totalTokenSupply: undefined,

//   loading: {
//     ETHBalanceLoading: false,
//     balanceInDistributionLimitCurrencyLoading: false,
//     distributionLimitLoading: false,
//     fundingCycleLoading: false,
//     usedDistributionLimitLoading: false,
//   },
// })
