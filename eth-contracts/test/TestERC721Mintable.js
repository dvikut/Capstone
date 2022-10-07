var ShantyToken = artifacts.require('ShantyToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ShantyToken.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1, { from: account_one });
            await this.contract.mint(account_two, 2, { from: account_one });
            await this.contract.mint(account_two, 3, { from: account_one });
            await this.contract.mint(account_three, 4, { from: account_one });
            await this.contract.mint(account_three, 5, { from: account_one });
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(parseInt(totalSupply), 5, "Total supply mismatch");
        })

        it('should get token balance', async function () { 
            let tokenBalance = await this.contract.balanceOf(account_two);
            assert.equal(parseInt(tokenBalance), 3, "Token balance mismatch");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenUri = await this.contract.baseTokenURI();
            assert.equal(tokenUri,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/","Token URI mismatch");
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 1;
            let originalOwner = await this.contract.ownerOf(tokenId);
            assert.equal(originalOwner, account_two, "Token 1 original owner mismatch");
            await this.contract.transferFrom(account_two,account_three,1,{from:account_two});
            let newOwner = await this.contract.ownerOf(tokenId);
            assert.equal(newOwner, account_three, "Token 1 new owner mismatch");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ShantyToken.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;
            try {
                await this.contract.mint(account_three, 6, {from: account_two});
            } catch (err) {
                failed = true;
            }
            assert.equal(failed, true, "Not only the contract owner can mint");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner();
            assert.equal(owner, account_one, "Contract owner mismatch");
        })

    });
})