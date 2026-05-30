# Wallet Transfer Demo

This is a React + Vite wallet app that connects to a browser wallet and sends ETH to another address.

## Libraries

- `wagmi` handles wallet connection, account state, chain switching, transaction submission, and transaction confirmation.
- `viem` handles Ethereum-specific utilities. In this app it validates recipient addresses with `isAddress`, converts ETH into wei with `parseEther`, and formats wei back to ETH with `formatEther`.
- `@tanstack/react-query` is the query and cache layer. The package name still contains `react-query`, but the library is TanStack Query. In this app it stores the balance query, keeps it cached, and lets us invalidate it after a transfer is confirmed.

## File Map

- [src/main.jsx](src/main.jsx) creates the shared `QueryClient`, wraps the app in `QueryClientProvider`, and also wraps it in `WagmiProvider`.
- [src/wagmi.js](src/wagmi.js) defines supported chains, connectors, and RPC transports.
- [src/App.jsx](src/App.jsx) renders the send form, reads wallet state, fetches balance, and submits transactions.

## Complete Flow

1. The app starts in [src/main.jsx](src/main.jsx).
2. `WagmiProvider` makes wallet state available to every component.
3. `QueryClientProvider` makes the shared TanStack Query cache available to every component.
4. `App.jsx` uses wagmi hooks like `useAccount`, `useConnect`, `useSendTransaction`, and `useWaitForTransactionReceipt`.
5. `App.jsx` uses `usePublicClient` plus `useQuery` to read the connected wallet balance from the blockchain.
6. When the user submits a transfer, `viem.parseEther` converts the ETH amount into wei.
7. wagmi submits the transaction through the connected wallet.
8. After the transaction is confirmed, the query client invalidates the balance query so the balance is fetched again.

## Why Providers Live In Main

The providers belong in [src/main.jsx](src/main.jsx) because they must wrap the whole React tree. That gives every child component access to the same wallet setup and the same query cache.

## State Split

- React state holds local form values like the recipient address and ETH amount.
- wagmi hooks hold external wallet state like the connected account, chain, and transaction status.
- TanStack Query holds cached blockchain data like the live balance.

## User Flow

1. Connect a wallet.
2. Enter the recipient address.
3. Enter the ETH amount.
4. Submit the transaction.
5. Wait for confirmation.
6. The balance query refreshes automatically after the transfer is confirmed.

## Run It

```bash
npm install
npm run dev
```

## Important Note

This example expects an injected browser wallet like MetaMask. If no wallet extension is installed, the connect buttons will not work. If the wallet is on the wrong network, switch chains in the UI before sending.