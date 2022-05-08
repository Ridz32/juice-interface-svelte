
import { getEtherPrice } from '$data/eth';
import { CurrencyUtils } from '$utils/formatCurrency'

export function getCurrencyConverter() {
  const usdPerEth = getEtherPrice()
  return new CurrencyUtils(usdPerEth)
}
