# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 


access to eth-contracts

truffle develop

test


truffle develop
Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0xc13605ea7d81d66bdbc622ef3b80891ecde064e8
(1) 0xa544aec91b4cf2df5ef33775a76edfde9f9ba612
(2) 0x5a9d2bbf224d33e00e7ec4f8631fd3fd6f35a0d4
(3) 0x979871f75e9e634080d695b9a5a89c86e151a2dd
(4) 0x28652d1bab9a2a111b4646654e9e74195853029b
(5) 0x07542f856c9cace4b1608a3e0b8774e7090bb030
(6) 0x09c491469d413ce7eb314830e291d40cb3ddc41b
(7) 0x16601efa94cadd885b912a0c17d696b0d147659d
(8) 0x75ad4f5848e73c948615900f6bbe597c49e19918
(9) 0x1f7df5b6ee6363828bfce64977e02aa1032b2425

Private Keys:
(0) 25a735e8d4254ff5f977a974da45cc81f4af8ac93dd69dbdb057cd15e53403bb
(1) a5ed75a7c75a6b794c5b69eaad5c82b3d68d0dc3d02bd911048f8926b1c79819
(2) 01089b3ce3cf897138067848654e2486c4d67cb7caa66581a7b59debf2af4fa7
(3) 5e8a81cb3f33ab7ccb120ed7e97154450de57d5efb45448795d930f5cf502421
(4) 5ccc380f416697c10b05114fc1a5be62454a0218bca2b8889ac9a0d457941199
(5) 7d2985ac05176351ca973c3d02c9046a261f3cf5c7324b4ef7d06dcb1d2e7188
(6) 691dcbcbf556017b931c7c73fecf15153f2d37df0e0ebd519df5ce571dfe5282
(7) c908aaf55b1b2ce21edd40cd94206b8fbf17e84690eda43ca128894b4e1e1f70
(8) 7dd075783f9e80c0766248841f5cea7260fe60ea355aa281c023005d38ca98e3
(9) 4c9eb1d01626ebac46d2fd715dea5fab5741027529377aef17d6a02a41a57455

Mnemonic: earn chuckle teach naive federal pledge scale proof wheel belt confirm aerobic

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Compiling ./contracts/ERC721Mintable.sol
> Compiling ./contracts/SolnSquareVerifier.sol
> Artifacts written to /var/folders/wq/zrv58_j955l4l8p9g4zy44b40000gn/T/test--2878-UkAnMCOK7vNJ
> Compiled successfully using:
   - solc: 0.8.3+commit.8d00100c.Emscripten.clang



  Contract: CustomERC721TokenRealState
    match erc721 spec
      ✓ should return total supply (255ms)
      ✓ should get token balance (151ms)
      ✓ should return token uri (52ms)
      ✓ should transfer token from one owner to another (261ms)
    have ownership properties
      ✓ should fail when minting when address is not contract owner (452ms)
      ✓ should return contract owner

  Contract: SolnSquareVerifier
    Test Solution Square verifier
      ✓ Should add the solution (146ms)
      ✓ Should new ERC721 token be minted (4982ms)
      ✓ Should revert due to solution exist (106ms)
      ✓ Should revert due to solution not verified (115ms)

  Contract: Verifier
    Test vertification
      ✓ can verify with correct proofs (726ms)
      ✓ will fail if incorrect parameters are given (735ms)


  12 passing (1m)


Deploying to rinkeby test network

LuckyCharm:eth-contracts tailored$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Compiling ./contracts/ERC721Mintable.sol
> Compiling ./contracts/SolnSquareVerifier.sol
> Artifacts written to /Users/tailored/Downloads/Blockchain-Capstone-master/eth-contracts/build/contracts
> Compiled successfully using:
   - solc: 0.8.3+commit.8d00100c.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        10420551
   > block timestamp:     1648698100
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.997446
   > gas used:            255400 (0x3e5a8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.002554 ETH

   -------------------------------------
   > Total cost:            0.002554 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        10420553
   > block timestamp:     1648698102
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.98174351
   > gas used:            1542711 (0x178a37)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01542711 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        10420554
   > block timestamp:     1648698112
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.94618274
   > gas used:            3556077 (0x3642ed)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03556077 ETH

   -------------------------------------
   > Total cost:          0.05098788 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.05354188 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x67f45794c7ea6a1359e061036ee8d2fb17655fec635d384b17681d79fd010d9c
   > Blocks: 0            Seconds: 4
   > contract address:    0x6450f06698aE850a0C8FAa20cc9EfB8dEF93De79
   > block number:        10420551
   > block timestamp:     1648698125
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.997283
   > gas used:            271700 (0x42554)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.002717 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.002717 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x485e72e7d61d05f09c3c1a7092b336c88cb8de0723b934f9c1317604fd509a3d
   > Blocks: 0            Seconds: 12
   > contract address:    0xcC26DdE33845cEdF7fBd95df9991569d11e0aAC0
   > block number:        10420553
   > block timestamp:     1648698155
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.98139651
   > gas used:            1542711 (0x178a37)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01542711 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x627c3e95b86d0fe7aa0b61eaf4a37fd80212932e086d61220887f7364fb2cad2
   > Blocks: 0            Seconds: 12
   > contract address:    0xE8ffd24CaD616Ece5f53aaE865071c1275491EDf
   > block number:        10420554
   > block timestamp:     1648698170
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.94357074
   > gas used:            3782577 (0x39b7b1)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03782577 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05325288 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.05596988 ETH



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
