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

Nonce (Number Used Once)

Definition: A nonce is a random or sequential number that is generated and used only once.

Purpose in cryptography:

Prevents replay attacks (someone reusing the same message to trick the system).

Helps in authentication and encryption to keep data fresh and secure.

In blockchain (Proof of Work):

Miners keep changing the nonce in the block header until the block’s hash meets the difficulty target.

Example: In Bitcoin, miners try billions of different nonces per second to find a valid hash.

Once found → block is accepted, and the miner is rewarded.

👉 Think of a nonce as a "random ticket number" miners keep guessing until they hit the jackpot.