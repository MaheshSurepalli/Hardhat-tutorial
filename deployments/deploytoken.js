const { ethers } = require("hardhat");

const main = async() =>{
    const inititalSupply = ethers.utils.parseEther("10000");
    const [deployer] = await ethers.getSigners();
    console.log(deployer.address);

    const tokenFactory = await ethers.getContractFactory("Token");
    const contract = await tokenFactory.deploy(inititalSupply);

    console.log(`Token contract address--> ${contract.address}`);
}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });