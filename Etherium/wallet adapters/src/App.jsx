import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  useAccount,
  useChainId,
  useConnect,
  useDisconnect,
  usePublicClient,
  useSendTransaction,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from 'wagmi'
import { formatEther, isAddress, parseEther } from 'viem'
import './App.css'

function App() {
  const hasInjectedWallet = typeof window !== 'undefined' && Boolean(window.ethereum)
  const queryClient = useQueryClient()
  const publicClient = usePublicClient()
  const chainId = useChainId()
  const { address, isConnected, chain } = useAccount()
  const { connectors, connect, isPending: isConnecting } = useConnect()
  const { disconnect } = useDisconnect()
  const { chains, switchChain } = useSwitchChain()
  const { sendTransactionAsync, data: hash, error: sendError, isPending: isSending, reset } =
    useSendTransaction()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('0.01')
  const [localError, setLocalError] = useState('')

  const balanceQuery = useQuery({
    queryKey: ['balance', address, chainId],
    enabled: Boolean(isConnected && address && publicClient),
    queryFn: async () => publicClient.getBalance({ address }),
    staleTime: 15_000,
  })

  useEffect(() => {
    if (!isConfirmed || !address) {
      return
    }

    queryClient.invalidateQueries({ queryKey: ['balance', address, chainId] })
  }, [address, chainId, isConfirmed, queryClient])

  function handleRecipientChange(event) {
    setRecipient(event.target.value)
    setLocalError('')
  }

  function handleAmountChange(event) {
    setAmount(event.target.value)
    setLocalError('')
  }

  async function handleSend(event) {
    event.preventDefault()

    if (!isConnected) {
      setLocalError('Connect a wallet first.')
      return
    }

    if (!isAddress(recipient)) {
      setLocalError('Enter a valid recipient wallet address.')
      return
    }

    if (!amount || Number(amount) <= 0) {
      setLocalError('Enter an amount greater than 0.')
      return
    }

    try {
      setLocalError('')
      reset()
      await sendTransactionAsync({
        to: recipient,
        value: parseEther(amount),
      })
    } catch (error) {
      setLocalError(error.shortMessage ?? error.message ?? 'Transaction failed.')
    }
  }

  const currentBalance = balanceQuery.data ? formatEther(balanceQuery.data) : null
  const readyChains = chains.length > 0 ? chains : [chain].filter(Boolean)

  return (
    <div className="wallet-page">
      <section className="hero-card">
        <p className="eyebrow">Wallet transfer demo</p>
        <h1>Send ETH from your connected wallet</h1>
        <p className="lede">
          wagmi handles wallet connection and transaction submission, viem converts your ETH amount into wei,
          and TanStack Query keeps the live balance cached and refreshable.
        </p>

        <div className="status-grid">
          <div className="status-card">
            <span>Wallet</span>
            <strong>{isConnected ? 'Connected' : 'Not connected'}</strong>
          </div>
          <div className="status-card">
            <span>Address</span>
            <strong>{address ?? 'No wallet selected'}</strong>
          </div>
          <div className="status-card">
            <span>Balance</span>
            <strong>
              {balanceQuery.isLoading
                ? 'Loading...'
                : currentBalance
                  ? `${currentBalance} ETH`
                  : 'Connect wallet'}
            </strong>
          </div>
        </div>
      </section>

      <section className="wallet-panel">
        <div className="panel-header">
          <div>
            <h2>Transfer ETH</h2>
            <p>
              Connect a wallet, choose a recipient, and submit the transaction from the same browser wallet.
            </p>
          </div>

          {isConnected ? (
            <button className="secondary-button" type="button" onClick={() => disconnect()}>
              Disconnect
            </button>
          ) : null}
        </div>

        {!isConnected ? (
          <>
            <div className="connector-list">
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  className="primary-button"
                  type="button"
                  disabled={isConnecting}
                  onClick={() => connect({ connector })}
                >
                  {connector.name}
                </button>
              ))}
            </div>

            {!hasInjectedWallet ? (
              <p className="helper-text">
                No injected wallet was detected. Install MetaMask, Brave Wallet, or another browser wallet
                extension first, then reload this page to make the connect buttons work.
              </p>
            ) : null}
          </>
        ) : (
          <form className="transfer-form" onSubmit={handleSend}>
            <label className="field">
              <span>Recipient address</span>
              <input
                type="text"
                value={recipient}
                onChange={handleRecipientChange}
                placeholder="0x1234...abcd"
                spellCheck="false"
              />
            </label>

            <label className="field">
              <span>Amount in ETH</span>
              <input
                type="number"
                min="0"
                step="0.0001"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.01"
              />
            </label>

            <div className="button-row">
              <button className="primary-button" type="submit" disabled={isSending || isConfirming}>
                {isSending ? 'Submitting...' : isConfirming ? 'Waiting for confirmation...' : 'Send ETH'}
              </button>

              <button
                className="secondary-button"
                type="button"
                onClick={() => queryClient.invalidateQueries({ queryKey: ['balance', address, chainId] })}
              >
                Refresh balance
              </button>
            </div>

            <div className="tx-box">
              <span>Current chain</span>
              <strong>{chain?.name ?? 'Unknown chain'}</strong>
              <span>Transaction hash</span>
              <strong>{hash ?? 'No transaction sent yet'}</strong>
              <span>Status</span>
              <strong>
                {localError || sendError?.shortMessage || sendError?.message
                  ? localError || sendError?.shortMessage || sendError?.message
                  : isSending
                    ? 'Submitting transaction'
                    : isConfirming
                      ? 'Waiting for confirmation'
                      : isConfirmed
                        ? 'Confirmed'
                        : 'Ready'}
              </strong>
            </div>

            {readyChains.length > 1 ? (
              <div className="switcher">
                <p className="helper-text">Switch networks if your wallet is on the wrong chain.</p>
                <div className="connector-list">
                  {readyChains.map((supportedChain) => (
                    <button
                      key={supportedChain.id}
                      className="secondary-button"
                      type="button"
                      onClick={() => switchChain({ chainId: supportedChain.id })}
                    >
                      {supportedChain.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {localError ? <p className="error-text">{localError}</p> : null}
          </form>
        )}
      </section>
    </div>
  )
}

export default App
