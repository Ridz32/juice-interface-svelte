const DEFAULT_PINATA_GATEWAY = 'gateway.pinata.cloud'

// TODO get env variables from .env file, rollup plugin
export const IPFS_GATEWAY_HOSTNAME =
  process.env.REACT_APP_PINATA_GATEWAY_HOSTNAME || DEFAULT_PINATA_GATEWAY
