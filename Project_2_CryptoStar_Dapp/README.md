# Decentralized Star Notary

# Introduction / Overview
Task 1

>Your Project is to Modify the StarNotary version 2 contract code to achieve the following:
>
>    Add a name and a symbol for your starNotary tokens. Resource
>
>    Add a function lookUptokenIdToStarInfo, that looks up the stars using the Token ID, and then returns the name of the star.
>
>    Add a function called exchangeStars, so 2 users can exchange their star tokens...Do not worry about the price, just write code to exchange stars between users.
>
>    Write a function to Transfer a Star. The function should transfer a star from the address of the caller. The function should accept 2 arguments, the address to transfer the star to, and the token ID of the star.

Task 2

>Add supporting unit tests, to test the following:
>
>   The token name and token symbol are added properly.
>
>    2 users can exchange their stars.
>
>    Stars Tokens can be transferred from one address to another.

Task 3

>Deploy your Contract to Rinkeby
>
>    Edit the truffle.config file to add settings to deploy your contract to the Rinkeby Public Network.

Helper Points:

>    Command used to deploy to Rinkeby truffle migrate --reset --network rinkeby
>
>    You will need to have your Metamask’s seed and Infura setup.
>
>    This was shown to you in detail in the lesson on Solidity, while creating ERC-20 tokens on Rinkeby.

Task 4

>Modify the front end of the DAPP to achieve the following:
>
>    Lookup a star by ID using tokenIdToStarInfo() (you will have to add code for this in your index.html and index.js files)

Project Submission Instructions:

>    Inside your project folder, create a Readme.md file. The readme.md file should include the following:
>        Specify the Truffle version and OpenZeppelin version used in the project.
>        Your ERC-721 Token Name
>        Your ERC-721 Token Symbol
>        Your “Token Address” on the Rinkeby Network

## Submission Information
1) Your ERC-721 Token Name: `AntonioDuran`
2) Your ERC-721 Token Symbol: `FADR`
3) Version of the Truffle and OpenZeppelin used: `Truffle v5.4.29` | `OpenZeppelin version ^4.4.2`
4) The deployed smart contract address on ropsten test network: `0x3871c6054f85935f67A47807Ee653970C5852941`

Note: I had to use Ropsten network for the deployment, since it was not possible to get free ethereums with Rinkeby, you must to have enough ether to do it, and social networks.