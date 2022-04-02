# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install

Download or clone the repo, then open terminal, and go to the path of the project to execute the following:

`npm install`

## Test
Go to `eth-contracts` path, and execute:

`truffle develop`

```
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
```


Then execute test command as following:

truffle(develop)> `test`

```
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
  ```


## Deploying to rinkeby test network
Before executing the following script, please try to go to the section of
`migrations` folder, then open `2_deploy_contract.js`

```
  for (tokenId = 1; tokenId <= 10; tokenId++) {
    await SolnSquareVerifierContract.mint(
      Proof.proof,
      Proof.inputs,
      tokenId,
      "0xc6f93BEaf84B43D9D97975c9be22C220FB81f438"
    );
  }
  ```

  The part above is minting 10 tokens, so one of the important parts here it is to modify the address which it is going to be used to create the smart contract. 


`truffle migrate --network rinkeby --reset`

```
Compiling your contracts...
===========================
> Compiling ./../../../../Downloads/Blockchain-Capstone-master/eth-contracts/contracts/ERC721Mintable.sol
> Artifacts written to /Users/tailored/blockchainDeveloper-udacity-nanodegree/Project_5/Blockchain-Capstone-master/eth-contracts/build/contracts
> Compiled successfully using:
   - solc: 0.8.3+commit.8d00100c.Emscripten.clang


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        10429379
   > block timestamp:     1648830900
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.42060983
   > gas used:            255400 (0x3e5a8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.002554 ETH

   -------------------------------------
   > Total cost:            0.002554 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > block number:        10429381
   > block timestamp:     1648830904
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.40490734
   > gas used:            1542711 (0x178a37)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01542711 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > block number:        10429382
   > block timestamp:     1648830915
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.36934645
   > gas used:            3556089 (0x3642f9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03556089 ETH

   -------------------------------------
   > Total cost:            0.050988 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.053542 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x47d23635215f8e66b4dad32ee470051be4e1c9deb7cf4e4b332ef02ef15975f1
   > Blocks: 0            Seconds: 4
   > contract address:    0x0F06057Fe9873af05a0fedfE0C1b9aB49F86cdca
   > block number:        10429383
   > block timestamp:     1648830983
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.42044683
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

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x7f3f9ecc3fa73fc2c3d580d00b3814884801c8667052baf8ac068bb8bd3bacc7
   > Blocks: 0            Seconds: 12
   > contract address:    0x35F10F584455fF88AD64B9Ac8cD2f6A0859D3b27
   > block number:        10429385
   > block timestamp:     1648831013
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.40456034
   > gas used:            1542711 (0x178a37)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01542711 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x71d816cf2212e1669559ff03b7aed6515e4440a0898f90052aa85819fb9e994f
   > Blocks: 0            Seconds: 12
   > contract address:    0x2aCe15EEA9659c2b407d7F7E3df1e18C52Bf20fa
   > block number:        10429386
   > block timestamp:     1648831028
   > account:             0xc6f93BEaf84B43D9D97975c9be22C220FB81f438
   > balance:             0.36673445
   > gas used:            3782589 (0x39b7bd)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03782589 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.053253 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.05597 ETH
```

## Contract Addresses
Verifier
```
contract address:    0x35F10F584455fF88AD64B9Ac8cD2f6A0859D3b27
```

SolnSquareVerifier
```
contract address:    0x2aCe15EEA9659c2b407d7F7E3df1e18C52Bf20fa
```

Etherscan rinkeby
https://rinkeby.etherscan.io/address/0x2aCe15EEA9659c2b407d7F7E3df1e18C52Bf20fa

## Contract Abi's
SolnSquareVerifier
```
"abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "verifierAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        
      ],
      "name": "baseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        
      ],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "setPaused",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "setTokenURI",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "setUnpaused",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addSolution",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "X",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Y",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Pairing.G1Point",
              "name": "a",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256[2]",
                  "name": "X",
                  "type": "uint256[2]"
                },
                {
                  "internalType": "uint256[2]",
                  "name": "Y",
                  "type": "uint256[2]"
                }
              ],
              "internalType": "struct Pairing.G2Point",
              "name": "b",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "X",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Y",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Pairing.G1Point",
              "name": "c",
              "type": "tuple"
            }
          ],
          "internalType": "struct Verifier.Proof",
          "name": "_proof",
          "type": "tuple"
        },
        {
          "internalType": "uint256[2]",
          "name": "_input",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  ```

  Verifier
  ```
   "abi": [
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "X",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Y",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Pairing.G1Point",
              "name": "a",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256[2]",
                  "name": "X",
                  "type": "uint256[2]"
                },
                {
                  "internalType": "uint256[2]",
                  "name": "Y",
                  "type": "uint256[2]"
                }
              ],
              "internalType": "struct Pairing.G2Point",
              "name": "b",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "X",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Y",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Pairing.G1Point",
              "name": "c",
              "type": "tuple"
            }
          ],
          "internalType": "struct Verifier.Proof",
          "name": "proof",
          "type": "tuple"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "verifyTx",
      "outputs": [
        {
          "internalType": "bool",
          "name": "r",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
  ```
## OpenSea MarketPlace Storefront link's
https://testnets.opensea.io/collection/realestatetokenfadr

https://testnets.opensea.io/antonioduran


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
