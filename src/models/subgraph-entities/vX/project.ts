import { BigNumber } from '@ethersproject/bignumber'
import {
  parseParticipantJson,
  type ParticipantJson,
} from'$models/subgraph-entities/vX/participant'

import type { CV } from '$models/cv'
import {
  type DeployedERC20Event,
  type DeployedERC20EventJson,
  parseDeployedERC20EventJson,
} from './deployed-erc20-event'
import {
  type DistributeToPayoutModEvent,
  type DistributeToPayoutModEventJson,
  parseDistributeToPayoutModEvent,
} from '../v1/distribute-to-payout-mod-event'
import {
  type DistributeToTicketModEvent,
  type DistributeToTicketModEventJson,
  parseDistributeToTicketModEvent,
} from '../v1/distribute-to-ticket-mod-event'
import type { Participant } from './participant'
import { parsePayEventJson, type PayEvent, type PayEventJson} from './pay-event'
import {
  parseMintTokensEventJson,
  type MintTokensEvent,
  type MintTokensEventJson,
} from './mint-tokens-event'
import {
  parsePrintReservesEventJson,
  type PrintReservesEvent,
  type PrintReservesEventJson,
} from '../v1/print-reserves-event'
import {
  parseRedeemEventJson,
  type RedeemEvent,
  type RedeemEventJson,
} from './redeem-event'
import { parseTapEventJson, type TapEvent, type TapEventJson} from '../v1/tap-event'

type BaseProject = {
  id: string
  projectId: number
  owner: string
  createdAt: number
  totalPaid: BigNumber
  totalRedeemed: BigNumber
  currentBalance: BigNumber
  participants: Partial<Participant>[]
  payEvents: Partial<PayEvent>[]
  printPremineEvents: Partial<MintTokensEvent>[]
  tapEvents: Partial<TapEvent>[]
  redeemEvents: Partial<RedeemEvent>[]
  printReservesEvents: Partial<PrintReservesEvent>[]
  distributeToPayoutModEvents: Partial<DistributeToPayoutModEvent>[]
  distributeToTicketModEvents: Partial<DistributeToTicketModEvent>[]
  deployedERC20Events: Partial<DeployedERC20Event>[]
}

export type ProjectV1 = {
  cv: CV
  terminal: string
  metadataUri: string
  metadataDomain: null
  handle: string
} & BaseProject

export type ProjectV2 = {
  cv: CV
  terminal: null
  metadataUri: string
  metadataDomain: BigNumber
  handle: null
} & BaseProject

export type Project = ProjectV1 | ProjectV2 // Separate entity used for testing

export type ProjectJson = Partial<
  Record<
    Exclude<
      keyof Project,
      | 'cv'
      | 'projectId'
      | 'metadataDomain'
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
    participants: ParticipantJson[]
    printPremineEvents: MintTokensEventJson[]
    payEvents: PayEventJson[]
    tapEvents: TapEventJson[]
    redeemEvents: RedeemEventJson[]
    printReservesEvents: PrintReservesEventJson[]
    deployedERC20Events: DeployedERC20EventJson[]
    distributeToPayoutModEvents: DistributeToPayoutModEventJson[]
    distributeToTicketModEvents: DistributeToTicketModEventJson[]
  }
>

export const parseProjectJson = (project: ProjectJson): Partial<Project> => ({
  ...project,
  createdAt: project.createdAt ? parseInt(project.createdAt) : undefined,
  currentBalance: project.currentBalance
    ? BigNumber.from(project.currentBalance)
    : undefined,
  totalPaid: project.totalPaid ? BigNumber.from(project.totalPaid) : undefined,
  totalRedeemed: project.totalRedeemed
    ? BigNumber.from(project.totalRedeemed)
    : undefined,
  participants: project.participants?.map(parseParticipantJson) ?? undefined,
  printPremineEvents:
    project.printPremineEvents?.map(parseMintTokensEventJson) ?? undefined,
  payEvents: project.payEvents?.map(parsePayEventJson) ?? undefined,
  tapEvents: project.tapEvents?.map(parseTapEventJson) ?? undefined,
  redeemEvents: project.redeemEvents?.map(parseRedeemEventJson) ?? undefined,
  printReservesEvents:
    project.printReservesEvents?.map(parsePrintReservesEventJson) ?? undefined,
  deployedERC20Events:
    project.deployedERC20Events?.map(parseDeployedERC20EventJson) ?? undefined,
  distributeToPayoutModEvents:
    project.distributeToPayoutModEvents?.map(parseDistributeToPayoutModEvent) ??
    undefined,
  distributeToTicketModEvents:
    project.distributeToTicketModEvents?.map(parseDistributeToTicketModEvent) ??
    undefined,
})

export type TrendingProject = Pick<
  Project,
  | 'id'
  | 'projectId'
  | 'createdAt'
  | 'terminal'
  | 'totalPaid'
  | 'handle'
  | 'metadataUri'
  | 'cv'
> & {
  trendingVolume: BigNumber
  trendingScore: BigNumber
  trendingPaymentsCount: number
}

export type TrendingProjectJson = Pick<
  TrendingProject,
  | 'id'
  | 'projectId'
  | 'createdAt'
  | 'terminal'
  | 'handle'
  | 'metadataUri'
  | 'trendingPaymentsCount'
  | 'cv'
> & {
  trendingVolume: string
  trendingScore: string
  totalPaid: string
}

export const parseTrendingProjectJson = (
  project: TrendingProjectJson,
): TrendingProject => ({
  ...project,
  totalPaid: BigNumber.from(project.totalPaid),
  trendingScore: BigNumber.from(project.trendingScore),
  trendingVolume: BigNumber.from(project.trendingVolume),
})
