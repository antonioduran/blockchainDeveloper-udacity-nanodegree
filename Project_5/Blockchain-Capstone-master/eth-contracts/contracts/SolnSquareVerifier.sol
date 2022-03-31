// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "./ERC721Mintable.sol";
import "./verifier.sol";

//DONE 2- TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
     Verifier private verifierContract;

    constructor(address verifierAddress, string memory name, string memory symbol)  
        CustomERC721Token(name, symbol) {
        verifierContract = Verifier(verifierAddress);
    }

    //DONE 3- TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 _index;
        address _address;
    }

    //DONE 4- TODO define an array of the above struct
    Solution[] private solution_array;

    //DONE 5- TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;

    //DONE 6- TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 _index, address _address);

    //DONE 7- TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 _index, address _address) external {
        bytes32 key = keccak256(abi.encodePacked(_index, _address));
        solutions[key]._index = _index;
        solutions[key]._address = _address;
        solution_array.push(solutions[key]);
        emit SolutionAdded(_index, _address);
    }

    //DONE 8- TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mint(Verifier.Proof memory _proof, uint[2] memory _input, uint256 _index, address _address) external {
        bytes32 key = keccak256(abi.encodePacked(_index, _address)); 
        require(solutions[key]._address == address(0), "Solution exist");
        
        bool verified = verifierContract.verifyTx(_proof, _input);
        require(verified, "Solution is not verified");

        bool _success = super.mint(_address, _index);
        require(_success, "Unable to mint new token");
    }
}