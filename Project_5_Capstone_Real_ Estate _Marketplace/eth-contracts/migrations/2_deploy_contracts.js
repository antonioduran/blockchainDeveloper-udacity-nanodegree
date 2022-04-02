// migrating the appropriate contracts
var Verifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const Proof = require('../../zokrates/code/square/proof.json');

module.exports = async function (deployer) {
  await deployer.deploy(Verifier);
  //await deployer.deploy(SolnSquareVerifier, Verifier.address, "RealEstateTokenFADR", "RETFADR");
  SolnSquareVerifierContract = await deployer.deploy(SolnSquareVerifier, Verifier.address, "RealEstateTokenFADR", "RETFADR");
  
  for (tokenId = 1; tokenId <= 10; tokenId++) {

    await SolnSquareVerifierContract.mint(
      Proof.proof,
      Proof.inputs,
      tokenId,
      "0xc6f93BEaf84B43D9D97975c9be22C220FB81f438"
    );
  }

};
