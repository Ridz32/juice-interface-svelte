import { readProvider } from '$constants/readProvider';
import { BigNumber } from '@ethersproject/bignumber';
import { V1ContractName } from '$models/v1/contracts';
import { fromWad } from '$utils/formatNumber';

// import useContractReader from './contractReader/ContractReader'

export function getEtherPrice() {
	console.warn('getEtherPrice is not implemented, default value 3000 returned');
    return 3000;
	// return parseFloat(fromWad(BigNumber.from('3000000000')));
	//   const [price, setPrice] = useState<number>()

	//   useContractReader({
	//     contract: V1ContractName.Prices,
	//     functionName: 'getETHPriceFor',
	//     args: ['1'], // USD
	//     callback: (val?: BigNumber) => parseFloat(fromWad(val))
	//   })

	//   return price
}

export async function getEthBalance(address: string) {
	return await readProvider.getBalance(address);
}
