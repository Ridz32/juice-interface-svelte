import { BigNumber } from 'ethers';
import type { V1FundingCycle } from '$models/v1/fundingCycle';

export const currentFundingCycle = {
	ballot: '0x0000000000000000000000000000000000000000',
	basedOn: BigNumber.from('0x11'),
	configured: BigNumber.from('0x6162a36d'),
	currency: BigNumber.from('0x01'),
	cycleLimit: BigNumber.from('0x00'),
	discountRate: BigNumber.from('0x00'),
	duration: BigNumber.from('0x00'),
	fee: BigNumber.from('0x0a'),
	id: BigNumber.from('0x17'),
	metadata: BigNumber.from('0xc8c86400'),
	number: BigNumber.from('0x04'),
	projectId: BigNumber.from('0x04'),
	start: BigNumber.from('0x6162a36d'),
	tapped: BigNumber.from('0x018b74d5f405ecfe480000'),
	target: BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
	weight: BigNumber.from('0xd3c21bcecceda1000000'),
} as V1FundingCycle;

export const mockBalanceInCurrency = BigNumber.from('0x1f399b1438a1000000');
export const mockBalance = BigNumber.from('0x031eedbc8b2a7612');
export const mockOwner = '0x3b76f99D0408e379b0c7D52718F8f8fa1bc4596F';
export const mockOverflow = BigNumber.from('0x00');
export const mockTokenSymbol = "BOOT";
export const mockTokenAddress = "0x2E67902728E2A2002445629E240EEC56EFE935b0";