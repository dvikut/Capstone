pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier {

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ShantyToken {

    SquareVerifier public verifier;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address addr;
    }

    // TODO define an array of the above struct
    Solution[] private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutionGuard;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint index,address addr);

    constructor(address _verifier) ShantyToken() public {
        verifier = SquareVerifier(_verifier);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(address _addr, uint _index, bytes32 key) internal {
        Solution memory solution = Solution({index: _index, addr: _addr});
        solutions.push(solution);
        solutionGuard[key] = solution;
        emit SolutionAdded(_index, _addr);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint(address _addr, uint256 _index, 
                  uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[1] memory input) public {
                      
            bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
            require(solutionGuard[key].addr == address(0), "Already verified");
            require(verifier.verifyTx(a, b, c, input), "Bad solution");
            addSolution(_addr, _index, key);
            super.mint(_addr, _index);
    }
}
  


























