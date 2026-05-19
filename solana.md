context _
why i solana and etherium better than bitcoin 
so a bit coin only solve one use case that is decentralized currency and people started making their own blockchain for other purposes so no single blockchain was as big and due to less no of miners it was not much secure and this is called cold start so etherium intruduced this concept of smart contract and it says we are like bitcoin use me as all other will be redundent with time so it says that build on top of me and the decentralized uber will just become a smart contract on the etherium blockchain and as they have more no of miners so there wont be the issue of the cold start 
a smart contract is called a program on solana 
eth was one of the first blockchains to introduce the concept of the decentralized state or programs and these are called smart contracts and it is nothing but a piece of code running on top of the eth nodes and works as a separate decentralized chain 

the way solana work is significantly different from other blockchains and it is that solana has a very weird data model and it is not as easy as just declaring state variables as in a etherium blockchain 

# ACCOUNTS ON SOLANA 
on the solana blockchain an account is a fundamental data structure used to store various types of information 
so until now we use to think that an account can store only balance but not we find out that the account store some data as well and we learned before that a account is a public private key pair 
1>data storage:accounts on solana are used to store data required by programs 

the term executable on the account details means that whether it is a program or not
2>lamports :accounts hold a balance of solana native cryptocurrency lamports and lamports are the smallest unit of solana currency and they are required to pay for the transaction fees and to rent the space that the account occupies on the blockchain
and one sol =1000000000 lamports

3>programs :on solana programs are special account that contain executable code these accounts are distinct from regular data accounts in that they are designed to be executed by the blockchain when triggered by a transaction

in solana the data is stored in a separate account and the programs are stored in a separate account and this is different from the etherium blockchain 
 
so an account with data and lamports-it is an account and it has lamports and data but it is not a program and does not have executable code
and then there can be accounts which have lamports and data and is a executable program 

so there are 4 main thing to look in an account 
lamports 
data 
executable 
owner /assigned program id 

what is rent on the solana blockchain and how to calculate it 
rent is a mechanism on the solana blockchain that ensures efficient usage of the blockchain resources it requires account to maintain a minimum balance proportional to the amount of data they store on the network .accounts that fail to maintain the minimum balance will be removed from the ledger to free up storage 

what is the difference between rent and rent exemption account 
this means either we can pay the rent or we have an rent exemption account which contains teh minimum balance required to maintain the account
we use the command 
solana rent 16  
in the solana cli which tells if we want to store 16 bytes of data then it will give us the amount of lamports required to maintain the account

so the solana config get command gives us a bunch of file back and 
solana address gives us the address back of the key pair 

what is the difference between mainnet ,devnet and test net 
so we first send the request to an rpc url and so rpc url are concerned with how we querry the blockchain and how we interact with the blockchain
and so devnet is a separte blockchain for development and it has its separate dev rpc url away from the mainnet and its own set of minner nodes so we can airdrop devnet solana and then we can continue testing our app on the devnet 

now in the web 3 world how do we deploy a smart contract and then interract with the smart contract
(specifically in the solana world )
so in solana the state is stored in a different account along with some lamports and each user has a different account for item storing and it is specific to the person only 


what exactly is a token ?
token are actually one of the biggest use cases of smart contract 
so in solana the token are just an account created from the solana token program where as in etherium there are separate smart contracts deployed individually for each token 
so in eth  they use the erc 20 program which is a template for the smartcontract which is used to create the tokens 
if i create a token on my account from the solana token account then it is called a mint account and has some data and lamports and it is derived from the solana token program
so this minting accont can be able to mint the token 
Creating Tokens: Ethereum vs. Solana
Ethereum: 
To create a token, you must deploy your own smart contract.
Ethereum provides a standard template (ERC-20), but each token requires its own contract to be deployed on the blockchain.
Solana: 
Solana simplifies this process with a single, pre-deployed Token Program. 
Instead of deploying a new contract, you only need to create a token account under this program. 
This significantly reduces complexity and deployment costs.

so basically the token can be further divided in 9 times and then send like 0.000000001 and we can send this as well and when the decimal is 0 then it is called a non fundgible token and we need to send a natural no of the token and we can not send a decimal value of the token 

so we use the wallet addapters to connect the dapp application to the wallet on the browser now we are using the most oldest in the book which is the solana wallet addapter and then we will create a react applciation which will use the wallet addapter 

THINGS WHICH WE CAN DO
once a user connects to your dapp you usually risk the user to do a few things with their wallet balance 

1. request airdrop 
2. show sol balance (get data from the blockchain)
3. send a transaction to the blockchain 
4. sign a message (verify the ownership of the wallet)

*** study the part about context api and prop drilling and all ***


in the code of the wallet addapters there are very important few context api which are 
connection provider :this creates a connection to the solana blockchain it takes an end point the rpc url without this 

while creating the token lauchpad we will be sending multiple instructions in single transaction as a single entity instead of sending multiple transaction with one instrauction and  this is a architecture different for solana and etherium blockchain

the solana blockchain is nothing but a bunch of accounts an don solana all data is stored in what are referred to as accoutns the way data is organized on solana resembles a key value store where each entry in the database is called an account 
so what is stored on the solana miner is a key value pair ie the addess and teh account info 

key points 
accounts can store upto 10 mb of data which consist of either executable program code or program state 

. programs (smart contracts) are stateless accounts that store executable code
. data accounts are created by programs to store and manage program state 

and also there are accounts which just contain lamports and no data and are not executable programs ie they are used to transactions 

accounts require a rent deposit in sol proportional to the amount of data stored which is fully refundable when the account is closed 

we use the solana cli command solana rent 16 to calculate the amount of lamports required to store 16 bytes of data or the rent exemption amount 

every account has a program owner and only the program that owns an account can modify its data or deduct its lamport balance however *** anyone can increase the balance ***

if we create a normal account then the owner is the system program:the system program is a native program on the solana blockchain and is a part of the solana run time and the owner of the system program is native program 

# native programs are built in programs which are built on the solana run time 

each account is represented by a unique address represented as a 32 bytes in the format of an ed25519 public key 
so basically it is 32 bytes long or this is 256 bits of data when displayed as a string ,it typically looks like a long string of characters base58encoded for example 7EqQdEULxWcraVx3mXKFjc84LhCkMGZCkRuDpvcMwJeK
format of an ed 25519 public key 

so when we talked about the account info then the fields in the accountinfo are 
data 
executable 
lamports 
owner

* even if you dont store data you have to store fileds like executable and lamports which is why you still have to have a min amount of sol as rent 

now the accounts which have a bunch of lamports or are normal accounts for trasactions have the parent account as the system program and thus most of the accounts are owned by the system program

token program is used to create a token mint account 

* the parent account of all the non native program account is the bpf loaders 

# system program :solana contains a handful of native programs that are part of the validator implementation and provide various core functionalities such as the ability to create accounts, transfer lamports, and transfer ownership of accounts w hen developing custom programs on solana you will commmonly interact with two native programs the system program and the bpf loader program

# bpf loader :this is a native program that is used to deploy and manage other programs on the solana blockchain and can be defined as the owner of all other programs on the network excluding the native programs .it is responsible for deploying ,upgrading and executing custom programs and it is used for deploying a program on the solana blockchain 

there is a difference between owners and authority 
in solana programs authorities are entities or accounts that have teh right to perform certain actions or make changes within the program 

in solana an authority is simply a public key (wallet or program) that has permission to perform specific actions on a blockchain account 
think of authority as admin rights 
just like 
gmail-->account owner

why does solana even need authrities 
because solana is 
permission less 
program driven 
account based 

without authroities
anyone could mint tokens 
anyoune could drain funds 
anyone could modify programs 

authorities enforce :
security 
ownership
decentralization 
upgrade control


the token program does the minting while the mint authority is store in the mint account and when mint authority mints a token then the minted tokens can be sent to the associated token account which is a pda or program derived account and the mind authority can mint new tokens and sent it to ata but ata balance can only be increased when we send in the tokes to it or some other ata sends in the tokens to it 

the program derived address does not have a public or a private key 
the noraml account or mint account have a public and a private key 

difinition of a pda:
a program derived address provide developers on solana with two main cases
 1.deterministic account addresses :pda provide a mechanism to deterministically derive an addressing using a combination of optional seeds (prefered input) and a specific program id
 2.enable program signing :the solana runtime enables programs to sign for pda which are derived from its program i d


 so the first one basically means if my friend gives me the publc key and then gives me the token account address and the mint account of usdc then we can add in all these three to find a deterministic address where the mint account data is stored and this pda 
 and the pda is made from seeds 

 seeds :a bunch of words used to derive an address 
 bump:a number between 1-255
 off the curve:the pda that we are generating does not have a private key that is why it is called off the curve 
 