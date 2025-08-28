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
    

the two fundamental ecash issues are accountability and privacy 
accountablility is required to ensure that cash is spendable only once and double spend problem is avoided and that it can be only spend by its rightful owner 
