import type { V2ContractName, V2Contracts } from '$models/v2/contracts';
import { readNetwork } from '$constants/networks';
import { provider, getConnectedAccount } from '$stores/web3';
import { ethers } from 'ethers';
import type { NetworkName } from '$models/network-name';
import type { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';

import JBChainlinkV3PriceFeed from '../../deployments/rinkeby/JBChainlinkV3PriceFeed';
import JBETHERC20SplitsPayerDeployer from '../../deployments/rinkeby/JBETHERC20SplitsPayerDeployer';
import JBReconfigurationBufferBallot from '../../deployments/rinkeby/JBReconfigurationBufferBallot';
import JBCurrencies from '../../deployments/rinkeby/JBCurrencies';
import JBProjects from '../../deployments/rinkeby/JBProjects';
import JBController from '../../deployments/rinkeby/JBController';
import JBETHPaymentTerminal from '../../deployments/rinkeby/JBETHPaymentTerminal';
import JBFundingCycleStore from '../../deployments/rinkeby/JBFundingCycleStore';
import JBSingleTokenPaymentTerminalStore from '../../deployments/rinkeby/JBSingleTokenPaymentTerminalStore';
import JBDirectory from '../../deployments/rinkeby/JBDirectory';
import JBOperatorStore from '../../deployments/rinkeby/JBOperatorStore';
import JBSplitsStore from '../../deployments/rinkeby/JBSplitsStore';
import JBETHERC20ProjectPayerDeployer from '../../deployments/rinkeby/JBETHERC20ProjectPayerDeployer';
import JBPrices from '../../deployments/rinkeby/JBPrices';
import JBTokenStore from '../../deployments/rinkeby/JBTokenStore';

export const contracts = {
	JBController,
	JBDirectory,
	JBETHPaymentTerminal,
	JBFundingCycleStore,
	JBOperatorStore,
	JBPrices,
	JBProjects,
	JBSplitsStore,
	JBTokenStore,
	JBSingleTokenPaymentTerminalStore,
	JBETHERC20ProjectPayerDeployer
};

export async function transactContract(
	contractName: V2ContractName,
	functionName: string,
	args: Any[]
): Promise<any> {
	const _provider = provider.get();
	const contract = new ethers.Contract(
		contracts[contractName].address,
		contracts[contractName].abi,
		_provider
	);
	const returnValue = await contract.functions[functionName](...args);

	return returnValue;
}

