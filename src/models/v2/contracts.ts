import { Contract } from '@ethersproject/contracts'

export enum V2ContractName {
  JBController = 'JBController',
  JBDirectory = 'JBDirectory',
  JBETHPaymentTerminal = 'JBETHPaymentTerminal',
  JBFundingCycleStore = 'JBFundingCycleStore',
  JBOperatorStore = 'JBOperatorStore',
  JBPrices = 'JBPrices',
  JBProjects = 'JBProjects',
  JBSplitsStore = 'JBSplitsStore',
  JBTokenStore = 'JBTokenStore',
  JBSingleTokenPaymentTerminalStore = 'JBSingleTokenPaymentTerminalStore',
}

export type V2Contracts = Record<V2ContractName, Contract>