import { BigNumber } from '@ethersproject/bignumber';
import {
	parseParticipantJson,
	type Participant,
	type ParticipantJson
} from '$models/subgraph-entities/participant';

import {
	parseDeployedERC20EventJson,
	type DeployedERC20Event,
	type DeployedERC20EventJson
} from './deployed-erc20-event';

import {
	parseDistributeToPayoutModEvent,
	type DistributeToPayoutModEvent,
	type DistributeToPayoutModEventJson
} from './distribute-to-payout-mod-event';
import {
	parseDistributeToTicketModEvent,
	type DistributeToTicketModEvent,
	type DistributeToTicketModEventJson
} from './distribute-to-ticket-mod-event';
import { parsePayEventJson, type PayEvent, type PayEventJson } from './pay-event';
import {
	parsePrintPremineEventJson,
	type PrintPremineEvent,
	type PrintPremineEventJson
} from './print-premine-event';
import { parseTapEventJson, type TapEvent, type TapEventJson } from './tap-event';
import { parseRedeemEventJson, type RedeemEvent, type RedeemEventJson } from './redeem-event';
import {
	parsePrintReservesEventJson,
	type PrintReservesEvent,
	type PrintReservesEventJson
} from './print-reserves-event';

export type TrendingProject = Pick<
	Project,
	'id' | 'createdAt' | 'uri' | 'terminal' | 'totalPaid' | 'handle'
> & {
	trendingVolume: BigNumber;
	trendingScore: BigNumber;
	trendingPaymentsCount: number;
};

export type TrendingProjectJson = Pick<
	TrendingProject,
	'createdAt' | 'trendingPaymentsCount' | 'handle' | 'uri' | 'terminal'
> & {
	id: string;
	trendingVolume: string;
	trendingScore: string;
	totalPaid: string;
};

export type ProjectJson = Partial<
	Record<
		Exclude<
			keyof Project,
			| 'participants'
			| 'printPremineEvents'
			| 'payEvents'
			| 'tapEvents'
			| 'redeemEvents'
			| 'printReservesEvents'
			| 'deployedERC20Events'
			| 'distributeToPayoutModEvents'
			| 'distributeToTicketModEvents'
		>,
		string
	> & {
		participants: ParticipantJson[];
		printPremineEvents: PrintPremineEventJson[];
		payEvents: PayEventJson[];
		tapEvents: TapEventJson[];
		redeemEvents: RedeemEventJson[];
		printReservesEvents: PrintReservesEventJson[];
		deployedERC20Events: DeployedERC20EventJson[];
		distributeToPayoutModEvents: DistributeToPayoutModEventJson[];
		distributeToTicketModEvents: DistributeToTicketModEventJson[];
	}
>;

export interface Project {
	id: BigNumber;
	handle: string;
	creator: string;
	createdAt: number;
	uri: string;
	totalPaid: BigNumber;
	totalRedeemed: BigNumber;
	currentBalance: BigNumber;
	participants: Partial<Participant>[];
	terminal: string;
	payEvents: Partial<PayEvent>[];
	printPremineEvents: Partial<PrintPremineEvent>[];
	tapEvents: Partial<TapEvent>[];
	redeemEvents: Partial<RedeemEvent>[];
	printReservesEvents: Partial<PrintReservesEvent>[];
	distributeToPayoutModEvents: Partial<DistributeToPayoutModEvent>[];
	distributeToTicketModEvents: Partial<DistributeToTicketModEvent>[];
	deployedERC20Events: Partial<DeployedERC20Event>[];
}

export const parseProjectJson = (project: ProjectJson): Partial<Project> => ({
	...project,
	id: project.id ? BigNumber.from(project.id) : undefined,
	createdAt: project.createdAt ? parseInt(project.createdAt) : undefined,
	currentBalance: project.currentBalance ? BigNumber.from(project.currentBalance) : undefined,
	totalPaid: project.totalPaid ? BigNumber.from(project.totalPaid) : undefined,
	totalRedeemed: project.totalRedeemed ? BigNumber.from(project.totalRedeemed) : undefined,
	participants: project.participants?.map(parseParticipantJson) ?? undefined,
	printPremineEvents: project.printPremineEvents?.map(parsePrintPremineEventJson) ?? undefined,
	payEvents: project.payEvents?.map(parsePayEventJson) ?? undefined,
	tapEvents: project.tapEvents?.map(parseTapEventJson) ?? undefined,
	redeemEvents: project.redeemEvents?.map(parseRedeemEventJson) ?? undefined,
	printReservesEvents: project.printReservesEvents?.map(parsePrintReservesEventJson) ?? undefined,
	deployedERC20Events: project.deployedERC20Events?.map(parseDeployedERC20EventJson) ?? undefined,
	distributeToPayoutModEvents:
		project.distributeToPayoutModEvents?.map(parseDistributeToPayoutModEvent) ?? undefined,
	distributeToTicketModEvents:
		project.distributeToTicketModEvents?.map(parseDistributeToTicketModEvent) ?? undefined
});

export const parseTrendingProjectJson = (project: TrendingProjectJson): TrendingProject => ({
	...project,
	id: BigNumber.from(project.id),
	totalPaid: BigNumber.from(project.totalPaid),
	trendingScore: BigNumber.from(project.trendingScore),
	trendingVolume: BigNumber.from(project.trendingVolume)
});
