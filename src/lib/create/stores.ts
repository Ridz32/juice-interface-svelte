import { writable, derived } from "svelte/store";

export const projectDetails = writable({
  name: null,
  description: null,
  website: null,
  twitter: null,
  discord: null,
  payButtonText: "Pay",
  payDisclosure: null,
  logo: null,
});

export const visitedFundingDrawers = writable({
  funding: false,
  token: false,
  rules: false,
});

export const modal = writable({});

export enum DistributionLimit {
  NOT_SET = "NOT_SET",
  ZERO = "ZERO", // no funds can be distributed, TODO set when funding drawer been open (i.e. default)
  NO_LIMIT = "NO_LIMIT", // "Infinite" funds can be distributed as much as they want
  TARGET = "TARGET", // "Specific limit" funds can be distributed to a target amount
}

// TODO when funding cycle duration is not set,
// an info message appears in the details dropdown in Preview

export const splits = writable([]);

export const fundingDetails = writable({
  distributionLimit: DistributionLimit.NOT_SET,
  duration: null,
})

export const isReviewPanel = writable(false);

export const twitterHandle = derived(
  projectDetails["twitter"],
  // TODO: Check if it starts with @, if not prefix it
  ($twitter) => `@${$twitter}!`
);
