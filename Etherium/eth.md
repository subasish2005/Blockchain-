in eth the amount of eth you stake represents how oftern i  become the block proposer and the money goes to the eth reward pool
BLOCKS ,WORLD STATE AND EHT AS A STATE MACHINE 
world state :in eth the world state refers to a mapping of all account addresses(both externally owned acc and also contract account) to their current state
when the genesis block was mined then world state was empty and the eth reward pool was empty 

eth is a state machine whose state changes as more block are added to the blockchain and it is decentralised and verifiable 
eth introduced the concept of smart contract
there are two types of account :
                    externally owned account :in eth a externally owned account is an account controlled by a user (ie a person through the use of a private key)
                     Key Characteristics of Externally Owned Accounts (EOAs):

                       Controlled by Private Keys:
                       EOAs are controlled by private keys that are held by individuals or entities. If you possess the private key to an EOA, you can initiate transactions from that account, such as sending Ether (ETH) or interacting with smart contracts.

                       No Code or Smart Contracts:
                       EOAs do not have any associated code or logic, unlike contract accounts which contain smart contract code. They are simply used to store Ether or send transactions to other accounts (including contract accounts).

                       Transaction Initiation:
                       EOAs are the only type of accounts that can initiate transactions.
                       A Contract Account can only respond to transactions, but it cannot start one on its own.

                       Ether Balance:
                       EOAs can hold a balance of Ether (ETH).
                       Contract accounts can also hold ETH, but they need EOAs to initiate transactions to move or use this balance.

                       Gas Costs:
                       EOAs must pay gas (in ETH) for any transactions they send. Gas is required to incentivise miners or validators to process and validate the transaction.

                    ***the world state we saw until now only shows eoas*** 

                    contract account :in eth a contract account is an account that is controlled by a smart contract code rather than a private key as is the case with externally owned accounts (eoas)

                    the solidity code is converted to deployed byte code which is deployed on the eth bolckchain 
                    Key Characteristics of Contract Accounts:

                    Controlled by Code (Smart Contracts):
                    Contract accounts are not controlled by users directly. Instead, they are controlled by the code that was deployed when the smart contract was created.
                    
                    Cannot Initiate Transactions:
                    A contract account cannot initiate or send transactions by itself. Instead, it can only respond to incoming transactions that originate from an Externally Owned Account (EOA) or another contract.
                    Once a contract account is invoked, it can perform various actions like executing functions, modifying its internal state, or even calling other contracts.
                    
                    Contains Smart Contract Code:
                    A contract account holds code that can execute arbitrary logic, including complex business rules, financial applications, and more.
                    The code is written in a smart contract language such as Solidity and deployed to the Ethereum blockchain.
                    
                    Ether Balance:
                    Like EOAs, contract accounts can hold Ether (ETH).
                    The Ether balance of a contract can be used to pay for operations or transferred when certain contract conditions are met.
                    
                    Gas Costs:
                    Contract accounts require gas (paid in Ether) to execute their functions.
                    The gas fee is paid by the EOA that initiates the transaction.
                    If the contract calls another contract during execution, it may use up more gas, but the original sender is responsible for the cost.
                    
                    Permanent Deployment:
                    Once a smart contract is deployed to the Ethereum blockchain, it is immutable.

THE WORLD STATE 

                     ETHEREUM WORLD STATE
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Address (EOA)  ─────►  Account Object                    │
│                           ┌───────────────┐                │
│                           │ nonce         │                │
│                           │ balance       │                │
│                           └───────────────┘                │
│                                                            │
│                                                            │
│  Address (Contract) ─►  Contract Account Object            │
│                           ┌───────────────┐                │
│                           │ nonce         │                │
│                           │ balance       │                │
│                           │ storageRoot   │ ─────► Storage │
│                           │ codeHash      │ ─────► Code    │
│                           └───────────────┘                │
│                                                            │
└────────────────────────────────────────────────────────────┘

ethereum world state -
the image showing how eth stores all account and smart contracts globally inside something called the world state
the world state can be called a global database of eth 
it stores :
          every acc
          every smart contract 
          every eth balance
          every contract storage value 
          every contract code reference 
          
What is Ethereum World State?

Ethereum maintains a single global state.
This state contains:
address -> account data
very Ethereum address maps to an account object.

What is Stored in the World State?

Ethereum stores two kinds of accounts:
| Type             | Meaning                  |
| ---------------- | ------------------------ |
| EOA              | Externally Owned Account |
| Contract Account | Smart contract           |

every eoa has an address and this is used as a key for the world state
nonce : a number that is used to track the number of transactions sent by an account\
| Transaction | Nonce |
| ----------- | ----- |
| First TX    | 0     |
| Second TX   | 1     |
| Third TX    | 2     |
it exits because it prevents relay attacks and duplicate transactions and transaction ordering issues
suppose i send a tx  and eth expects a nonce of 1 and i send another tx with nonce 0 then eth will reject the tx with nonce 0
Under the Hood

When miners/validators execute a transaction:

if tx.nonce != account.nonce:
    reject transaction

After successful execution:

account.nonce += 1
balance : the amount of eth held by an account and this is stored in wei in case of eth contract account  (1eth = 10^18 wei)
and under the hood when eth transfer happens
sender.balance -= value
receiver.balance += value

for smart contract account
nonce is no of contracts created by the account
and determines the address of the newly created contract 

storage root :this is where the eth becomes powerful 
contracts need persistent memory 
eth does not store storage directly in account object 
instead :storageRoot -> points to another Merkle Patricia Trie(trie is a special cryptiographic data structure)

Why?

Because Ethereum needs:

                      Fast lookup
                      Cryptographic verification
                      Efficient synchronization
                      Tamper-proof state

Storage Layout

Ethereum stores variables in slots:
| Slot | Value            |
| ---- | ---------------- |
| 0    | 5                |
| 1    | another variable |
| 2    | another variable |
the storage root points to this storage trie
storageRoot
      │
      ▼
Merkle Patricia Trie
      │
      ├── slot 0 -> 5
      ├── slot 1 -> ...
      └── slot 2 -> ...
Code Hash:

Smart contracts in Ethereum are written in high-level languages (like Solidity), but they are compiled into EVM bytecode for execution on the Ethereum Virtual Machine (EVM).
The code hash is a cryptographic hash (usually SHA3) of the contract’s bytecode. It uniquely identifies the code of the contract.
Once a smart contract is deployed on Ethereum, its code hash is permanently fixed unless the contract is destroyed.

* virtual machine :a virtual machine is an emulation of a physical machine it allows you to run multiple operating system on a single physical machine by abstracting the underlying hardware resources 
this abstraction is done using a hypervision or virtualization layer which allocates resources to each virtual machine 