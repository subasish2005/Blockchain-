# Blockchain-
LEDGER:a ledger is simply a book where all transactions are writte down 
       In traditional finance :banks keep a ledger of deposits withdraw and transfers 
       in accounting :accountants keep a ledger of transactions between different accounts

LEDGER IN BLOCKCHAIN 
instead of a paper book ledger kept by one bank or company blockchain has a digital ledger 
the ledger is 
        1.immutable
        2.distributed
        3.transparent
        4.secure-secured with cryptographic algorithms

How does distributed ledger system work?

Ans.in a distributed ledger system there are different kind of nodes and each node play a different part 
        1.full nodes:store the entire copy of ledger
          validate transactions and blocks according to the rules
          act as moderators because they enforce the rules and reject invalid data.

        2.lightweight nodes/simplified payment verification nodes:
          do not store the full ledger only a part of it 
          rely on full nodes to verify trnasaction 

        3.mining nodes:
          special nodes that propose and vlaidate new transactions using consensus mechanism
           .in proof of work:miners compete to solve puzzles
           .in proof of stake:miners compete to stake tokens and validators are chose based on their stake
          they are like active moderators because they enforce the rules and reject invalid data

        4.client/user nodes:user interacting with the ledger sending and receiving transactions through wallets or dapps
                            they dont necessarily store or validate the whole ledger



how does it work 

lets say alice sends 2  btc to bob on a blockchain 

1.transaction creation:
    alice creates a transaction to send 2 btc to bob and then brodcasts it to the network

2.transaction propagation:
    the transaction is propagated to other nodes in the network

3.transaction validation:
    full nodes validate the transaction and check if the sender has enough balance to send the amount
    nodes check if alice really has 2 btc the signature is valid and no double spending is happening 
    if valid transaction is forwarded to others

4.consensus process:
    miners/validators nodes group valid transactions into a block 
    they compete or are chose depending on pow or pos and add this block to the ledger 
    this process is called consensus process

5.block added to the ledger:
    once consesus is reached the block is added to the ledger
    all full nodes update their copy of the ledger 
    this process is called block propagation

6.transaction confirmation:
    bob now has 2 btc in his account
    the network confirms that and it becomes immutable 
    

**the two fundamental ecash issues are accountability and privacy accountablility is required to ensure that cash is spendable only once and double spend problem is avoided and that it can be only spend by its rightful owner double spending problem arises when same money can be spent twice as itis quite easy to make copies of digital data this becomes a big issue in digital currencies as you can make many copies of same digital cash anonymity is required to protect users privacy as with physical cash it is almost impossible to trace back spending to the individual who actually paid the money**

in 2009 the first practical implementation of an electronic cash system named bitcoin appeared the term cryptocurrency emerged later .for the very first time it solved the problemm of distributed consensus in a trustless network it used public key cryptography with a proof of work mechanism to provide a secure controlled and decentralised method of minting digital currency 

BLOCKCHAIN:a peer to peer electronic cash system was writtten on the topic of peer to peer electronic cash under the pseudonym satoshi nakamoto it introduced the term chain of blocks 
Layman's definition: Blockchain is an ever-growing, secure, shared record keeping system in which each user of the data holds a copy of the
                     records, which can only be updated if all parties involved in a transaction agree to update.
Technical definition: Blockchain is a peer-to-peer, distributed ledger that is cryptographically-secure, append-only, immutable (extremely hard to
                      change), and updateable only via consensus or agreement among peers.

peer to peer:
    the first keyword in the techinical definition is peer to peer this means that there is no central controller in the network and all participants talk to each other directly .Tthis property allows for cash transactions to be exchanged directly among teh peers without a third party involvement such as by a bank 

Distributed ledger:dissecting the definition further reveals that block chain is a distributed ledger which simply means that a ledger is spread across the netwrok among all peers in the network and each peer hold a copy of the completed ledger 

cryptographically-secure:next we see that this ledger is cryptographically secure which means that cryptography has been used to provide security services which make this ledger secure against tampering and misuse .these services include non repudiation data integrity and data origin authentication 

Append only:another property that we encounter is that blockchain is append only which means that data can only be added to the blockchain in time order sequential order 
this property implies that once data is added to the blockchain in time ordered sequential order it cannot be removed or changed,so this property implies that once data is added to the blockchain it is almost impossible to change that data and can be considered immutable but it can be changed in rare scenarios wherein collusion against the blockchain network succeeds in gaining more than 51 percent of the power.ATahere maybe some legitimate reasons sot change data in the blockchain once it has been added such as the right tobe forgotten ro right to erasure 

Updatable via consensus:finallyt the most critical attirbute of a blockchain is thatit is updateable only via consensus  that is what gives it the power of decentralization.
in this scenario no central authorigty is in control of updating the ledger instead any update made to the blockchain is validated against strict criteria and only accepted if consensus is reached among all peers in the network.to achieve consensus there are various consensus facilitation algorithms which enseure that all parties are in aggreement about the final state of the data on the blockchain network and resolutely agree upon it to be true 
what it means ?
  
Ans.a blockchain is an append only ledger :you can add new blocks you cant edit old ones
    
    no single party can decide what gets added 
     
    an update is accepted only if the network reaches consensus agreement according to the chain rule 


Blockchain can be thought of as a layer of a distributed peer to peer network running on top of the internet as can be seen in teh following diagram .It is analogolous to 
SMTP ,HTTP or FTP running on top of TCP/IP and this is because it plays a similar role to the other internet protocols 

A block is merely a selection of transactions bundled together and organised logically

A transaction is a record of an event for example the event of transferring cash from a sender account to a beneficiary account 

A reference of a previous block is also included in the block unless it is a genesis block ,it is the first block in the block chain that is hardcoded in the time the block chain was first started 

Few attributes that are essential to the functionality of a block:the block header which is composed of pointer to previous block ,the timestamp ,nonce ,merkle root and the bnlock body that contains transactions ,there are other parts to a block but they are not so important for us right now

*****Nonce (Number Used Once)

Definition: A nonce is a random or sequential number that is generated and used only once.

Purpose in cryptography:

Prevents replay attacks (someone reusing the same message to trick the system).

Helps in authentication and encryption to keep data fresh and secure.

In blockchain (Proof of Work):

Miners keep changing the nonce in the block header until the block’s hash meets the difficulty target.

Example: In Bitcoin, miners try billions of different nonces per second to find a valid hash.

Once found → block is accepted, and the miner is rewarded.

👉 Think of a nonce as a "random ticket number" miners keep guessing until they hit the jackpot.


*****Merkle Root & Merkle Tree

Merkle Tree: A binary tree of hashes used to represent all transactions in a block.

Every transaction is hashed.

Pairs of transaction hashes are hashed again → building up a tree.

Continues until only one hash remains at the top = the Merkle Root.

Merkle Root:

A single hash that represents all transactions in the block.

Stored in the block header.

Instead of checking every transaction, you can just check the Merkle Root to verify integrity.

👉 Example:

Suppose 8 transactions are in a block.

Instead of verifying all 8, you hash them pairwise → then hash those results → continue until one root hash is left.

If just one transaction changes, the Merkle Root changes, showing tampering.


scripting or programming language :scripts or programs perform various operations on a transaction in order to facilitate vraious functions such as signing a transaction or checking the validity of a transaction ,etherium solidity is a turing complete programming language used for writing smart contracts on the ethereum blockchain network 

virtual machine :this is anextension of the transaction script introduced earlier .A virtual machine allows turing complete code to be run on blockchain as smart contract ;whereas a transcription script is limited inits operations and capabilities.Various blockchains use
virtual machines to run programs such as Ethereum Virtual Machine (EVM) and Chain Virtual
Machine (CVM). EVM is used in Ethereum blockchain, while CVM is a virtual machine developed for
and used in an enterprise-grade blockchain called Chain Core

State Machine:a blockchain can be viewed as a state transtition mechanism where by a state is modified fromits inital form to the next one and eventually the final form by nodes on the blockchain network as a result of a transaction execution,validation and finalization process

Node:a node is a blockchain network performs various functions depending on the role that it takes on.A node can propose and validate transactions and perform mining to facilitate consensus and secure the blockchain network.the goal is achieved by following a consensus protocol nodes can also perform othe rfunctions such as a simple payment verification ,validation and many other functions depending onthe type of the blockchain used and the role assigned to the node
                                                                                e. Nodes also perform a transaction signing function. Transactions are first created by nodes and then also digitally
                                                                                signed by nodes using private keys as proof that they are the legitimate owner of the asset that they wish to
                                                                                transfer to someone else on the blockchain network. This asset is usually a token or virtual currency, such
                                                                                as Bitcoin, but it can also be any real-world asset represented on the blockchain by using tokens.

smart contract:these programs run on top of the blockchain and encapsulate the business logic to be executed when certian conidtions are met.these programs are enforceable and automatically executable when certains conditions are met.the smart contract is not available onall blockchain platforms but it is now becoming a very desirable feature due to the flexibility and powe that it provides to the blokchian applications
****HOW DOES THE BLOCKCHAIN WORK?****

ANS. Nodes in a blockchain network 
a blockchain is made up of nodes computers connected to the blockchain network. these nodes play different roles:
  
.Miners
(in proof of work systems like bitcoin):
                                              .compete to create a new blocks.
                                              .they solve a computational puzzle finding a valid nonce so that the block has neets the difficulty target.
                                              .the winner gets to mint the cryptocurrency (block reward and transaction fees)

block signers
(in proof of stake and similar systems like ethereum):
                                                     .instead of mining,validators sign and validate transactions.
                                                     .they prove ownership of staked coins are randomly or deterministically chosen to append a block to the chain.

How a blockchain accumulates blocks 

AND. now we will look a at a general scheme for creating blocks.hit sscheme is presented her eto give you a general idea of how are block are generated and the realtionship is between transactions and blocks:
1. a node strats a trnasaction and first creating and then digitally signing it with its private key. a transaction can represent various actions in a blockchain.Most commonly this is a data structure that represents transfer of value betwen users on the blockchain network .thransactions data structure usually consists of some logic of transfering value from one user to another ,relevent rules ,source and destination addresses and other validation information.

2. A trnasaction is propogated (flooded) by using flooding protocol called gossip protocol to peers that validate the transaction based on preset criteria.usually m ore than one noder are required to verify the transaction before it can be added to the blockchain.

3. Once a transaction is validated by a sufficient number of nodes ,the transaction is added to the blockchain and is included in a new block which is then propagated onto the network at this point the transaction is considered as part of the blockchain and is immutable.

4. The block is then added to the blockchain and it becomes a part of the ledger,and the next block links itself cryptographically back to this block and this link is a has pointer at this stage the transaction gets its second confirmation and th eblock gets its first confirmation 

5. The block is then propagated to other nodes in the network and they validate the block and add it to their local copy of the blockchain.

Types of blockchain 
Based on the way that blokcchain has evolved over teh last few years it can be divided into multiple categories with distinct thought sometimes partially overlapping attributes 
so they are 

.Distributes ledgers

.Distributed ledgers technology

.Blockchains 

.Ledgers


SIDECHAINS :more precisely known as pegged sidechain this is a comcept whereby coins can be moved from one blockchain to another and moved back again.typical uses include the creation of new altcoins (alternative crypto) where by coins are burnt as a proof of an adequate stake .Burnt or burning the coins in this context means that the coins are sent to an address which is unspendable and this process makes the burnt coins irrecoverable.This mechanism is used to bootstrap a new currency or introduce scarcity which results in increase value of the coin 

this mechanism is called proof of burn and is used as an alternative method for distributed consensus to pow and proof of stake the aforementioned example for burning coins applies to a one way pegged sidechain 


What are Sidechains?

A sidechain is an independent blockchain that is interoperable with a parent blockchain (the “main chain”).
The key idea: assets (coins/tokens) can move between the main chain and the sidechain in a secure, verifiable way.

Think of it like this:

The main chain = Bitcoin or Ethereum (secure, decentralized, but often slow/expensive).

The sidechain = a smaller, specialized blockchain (faster, cheaper, or with extra features like smart contracts).

By “pegging” coins between the two, you can use the security of the main chain while benefiting from the speed/flexibility of the sidechain.

🪙 Pegged Sidechains
1. One-way Peg (Proof of Burn)

You can move coins from the main chain → sidechain.

But you cannot move them back.

How? By burning coins:

You send coins to a special unspendable address on the main chain.

This proves you had those coins (since they’re now gone forever).

The sidechain then issues you an equivalent amount of its own tokens.

This is also called Proof of Burn (PoB).

Burning acts as a stake: since you sacrifice your coins, you’re incentivized to behave honestly.

PoB is seen as an alternative consensus mechanism to Proof of Work (PoW) and Proof of Stake (PoS).

✅ Use case: Bootstrapping new altcoins.
If many people burn Bitcoin to receive a new altcoin, it proves demand and gives that new coin scarcity/value.

2. Two-way Peg

You can move coins both ways:

From main chain → sidechain, and

From sidechain → main chain.

Mechanism:

When coins move from the main chain, they’re locked in a special smart contract (not destroyed).

Equivalent tokens are then released on the sidechain.

To move back, you lock/burn them on the sidechain, and the main chain unlocks your original coins.

✅ Use case: Flexibility to “try out” sidechains without permanently losing your main-chain assets.

⚡ Why Sidechains Matter

Scalability: Move heavy computation off the main chain (like complex smart contracts).

Innovation: Developers can test new features/rules on sidechains without risking the main chain.

Interoperability: Different blockchains can connect through sidechains.

Specialization: Sidechains can be optimized for speed, privacy, or specific applications.

                                                        Sidechain	Peg Type	Parent Chain	Purpose
                                                        Polygon PoS	Two-way	Ethereum	Scalability, cheap txns
                                                        Rootstock	Two-way	Bitcoin	Smart contracts on BTC
                                                        Liquid	Two-way	Bitcoin	Fast, private transactions
                                                        Skale	Two-way	Ethereum	App-specific sidechains
                                                        Ardor/ Ignis	Two-way	Ardor main	Modular, business-focused