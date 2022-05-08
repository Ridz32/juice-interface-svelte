import { readProvider } from "$constants/readProvider";

export async function getEthBalance(address: string) {
    return await readProvider.getBalance(address);
}