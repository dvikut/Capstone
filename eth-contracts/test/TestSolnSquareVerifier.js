let Verifier = artifacts.require('Verifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

let data = require('../../zokrates/code/square/proof.json');
let proof = data.proof;
let inputs = data.inputs;


contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    beforeEach(async function () {
        const verifier = await Verifier.new({ from: account_one });
        this.contract = await SolnSquareVerifier.new(verifier.address, { from: account_one });
    })

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('new solution can be added', async function () {
        let result = await this.contract.mint(account_two, 10, proof.a, proof.b, proof.c, inputs, {from: account_one});
        let event = result.logs[0].event;
        assert.equal(event, 'SolutionAdded', "Add solution failed");
    })


    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('token can be minted', async function () {
        let minted = true;
        try {
            await this.contract.mint(account_two, 10, proof.a, proof.b, proof.c, inputs, {from: account_one});
        } catch (err) {
            minted = false;
        }
        assert.equal(minted, true, "Failed to mint");
    })

})

