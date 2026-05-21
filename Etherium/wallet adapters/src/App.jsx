import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi'
import './App.css'

const supportedChains = [
  { id: 1, label: 'Ethereum Mainnet' },
  { id: 11155111, label: 'Sepolia Testnet' },
]

function shortenAddress(address) {
  if (!address) {
    return ''
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function App() {
  const { address, chainId, isConnected, status } = useAccount()
  const { connectors, connect, error, isPending, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()
  const { chains, switchChain } = useSwitchChain()

  const activeChain = chains.find((chain) => chain.id === chainId)
  const chainLabel =
    supportedChains.find((chain) => chain.id === chainId)?.label ??
    activeChain?.name ??
    'Unknown chain'

  return (
    <main className="wallet-page">
      <section className="hero-card">
        <p className="eyebrow">Wagmi + TanStack Query + Viem</p>
        <h1>Connect an Ethereum wallet with reactive state.</h1>
        <p className="lede">
          Wagmi handles wallet connection logic, TanStack Query manages async
          caching and syncing, and Viem provides the typed Ethereum primitives
          under the hood.
        </p>

        <div className="status-grid">
          <div className="status-card">
            <span>Status</span>
            <strong>{status}</strong>
          </div>
          <div className="status-card">
            <span>Address</span>
            <strong>{isConnected ? shortenAddress(address) : 'Not connected'}</strong>
          </div>
          <div className="status-card">
            <span>Network</span>
            <strong>{isConnected ? chainLabel : 'Choose a wallet first'}</strong>
          </div>
        </div>
      </section>

      <section className="wallet-panel">
        <div className="panel-header">
          <div>
            <h2>Wallet actions</h2>
            <p>These buttons come from wagmi hooks rather than local React state.</p>
          </div>
          {isConnected ? (
            <button type="button" className="secondary-button" onClick={() => disconnect()}>
              Disconnect
            </button>
          ) : null}
        </div>

        <div className="connector-list">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              type="button"
              className="primary-button"
              onClick={() => connect({ connector })}
              disabled={!connector.ready || isPending}
            >
              {isPending && pendingConnector?.uid === connector.uid
                ? 'Connecting...'
                : `Connect ${connector.name}`}
            </button>
          ))}
        </div>

        <div className="switcher">
          <h3>Switch network</h3>
          <div className="connector-list">
            {supportedChains.map((chain) => (
              <button
                key={chain.id}
                type="button"
                className="secondary-button"
                onClick={() => switchChain?.({ chainId: chain.id })}
                disabled={chain.id === chainId}
              >
                {chain.id === chainId ? `${chain.label} active` : `Use ${chain.label}`}
              </button>
            ))}
          </div>
        </div>

        <div className="explain-card">
          <h3>What is happening here?</h3>
          <p>
            Wagmi exposes wallet state as hooks like <code>useAccount</code>,{' '}
            <code>useConnect</code>, and <code>useDisconnect</code>. Those hooks
            subscribe to the underlying connector, so the UI updates when the
            wallet changes instead of you manually storing every field in React
            component state.
          </p>
          <p>
            TanStack Query gives wagmi a cache for async blockchain data, which
            keeps repeated reads and refetching predictable. Viem provides the
            chain definitions, transport layer, and low-level Ethereum client
            pieces that wagmi builds on.
          </p>
          {error ? <p className="error-text">{error.message}</p> : null}
        </div>
      </section>
    </main>
  )
}

export default App
