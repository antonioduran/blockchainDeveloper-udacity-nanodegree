# Udacity Blockchain Developer Nanodegree Program - Project 4: FlightSurety

FlightSurety is a sample application project for Udacity's Blockchain course.

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

To install, download or clone the repo, then:

`npm install`
`truffle compile`

## Develop Client

To run truffle tests:

`truffle develop test`

To use the dapp:

`truffle migrate`
`npm run dapp`

To view dapp:

`http://localhost:8545`

## Develop Server

`npm run server`



## Resources

* [How does Ethereum work anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
* [BIP39 Mnemonic Generator](https://iancoleman.io/bip39/)
* [Truffle Framework](http://truffleframework.com/)
* [Ganache Local Blockchain](http://truffleframework.com/ganache/)
* [Remix Solidity IDE](https://remix.ethereum.org/)
* [Solidity Language Reference](http://solidity.readthedocs.io/en/v0.4.24/)
* [Ethereum Blockchain Explorer](https://etherscan.io/)
* [Web3Js Reference](https://github.com/ethereum/wiki/wiki/JavaScript-API)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Please make sure you've already installed Truffle and enabled the MetaMask extension in your browser.

### Installing

Clone this repository and install all requisite npm packages (as listed in ```package.json```):

```
npm install
```

Launch Truffle development environment:

```
truffle develop
```


Compile contracts

```
compile
```


Migrate smart contracts to the locally running blockchain:

```
migrate
```


Test smart contracts:migrate

```
test
```


In separate terminal windows, launch the server and the DApp:

```
npm run server
```

In other window 
```
npm run dapp
```

## Testing the DApp in the browser

* Go to [http://localhost:8000/](http://localhost:8000/) to open the DApp in the browser:

## Specs

* Solidity >=0.8.0
* Ganache CLI v6.12.2 (ganache-core: 2.13.2)
* Truffle v5.4.29
* Node v14.17.0


## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
