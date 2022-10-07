# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Test code

    Run 'npm install'.
    Change dir to eth-contracts.
    Setup truffle-config.js.
    Compile the code with 'truffle compile'. 
    Launch Ganache and deploy to test network 'truffle migrate'.
    To test, run 'truffle test'.
    
# Contract ABI's

    Contained in each contract's json in eth-contracts/build/contracts/

# Contract address

    SolnSquareVerifier
        https://goerli.etherscan.io/address/0x3ddba19f14f4eb3ef63c4958d285292f2e558895
    
    Verifier
        https://goerli.etherscan.io/address/0xa7C17199b02c823f9cFe55fc053430c835f3D6FE
        

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x98100d799791f83a1e0046b9c5400dd1873b49662da577cdcdd913048873a741
   > Blocks: 0            Seconds: 13
   > contract address:    0xa7C17199b02c823f9cFe55fc053430c835f3D6FE
   > account:             0x3Be7db518bBc51f25f49b8962b8ED38aE711DAC3
   > balance:             0.08784275
   > gas used:            943425
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00943425 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x900b185d7dfd05cf94889b1d69608fc34e1823af597f95e70fed8e40a475e78f
   > Blocks: 2            Seconds: 24
   > contract address:    0x3dDbA19f14f4eB3eF63C4958d285292f2e558895
   > account:             0x3Be7db518bBc51f25f49b8962b8ED38aE711DAC3
   > balance:             0.05433475
   > gas used:            3350800
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.033508 ETH

# Mint

    To mint token, setup mint-goerli.js and run.

    Token mint transaction hashes on goerli:
    
        0xd327d9f26a92240513d71d6c19e0e7052f24c90383164588d52171e2bbee61f5
        0x56ea1792cd0d3f64764703a8b98578d4564b7f0e3a5ed39e0f39189e1165c14c
        0x30f080498fe6439d1950539edfea9ab6a73cc1ac7c4e4172f486708dd83a0dde
        0x9a7257a90495a073e39b78b59ff2f0f5b8c6d4a5dc7604a258ceb9168754433c
        0xbd282363c23882c2a65dcb417bcad68e6d077825cc25b117c903aaf5bd55c48d
        0x0b2db4f81be22f5ba142c31a80f435b1b15d6e94b2ca466b3c2a10787db2f7fb
        0x9e704531f557e8af4e9d694b8190a5b3a932e964c2cf300d49b6a3cc143d2cdf
        0xb84a2c2d4c5aee5ff40f8549e92db6f5bb95f2e794b0b66e29577d34123ed58c
        0x80a61de231d16eca2898a5072c09be24f7b43a548282fdf3ce7bd6112b440178
        0x7595faea448de9aa7938785a091c1f69fffc5dea69256cd07e9bd2d890cdbbe4
        0xf8c08cc1473fdfad1935c3111b5384ebf778c24b936373f0ac3bfde7e223bf73


# Storefront

    https://testnets.opensea.io/collection/shanty-token



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
