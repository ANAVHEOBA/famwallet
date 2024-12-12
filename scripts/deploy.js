async function main() {
    const FamilyWallet = await ethers.getContractFactory("FamilyWallet");
    const familyWallet = await FamilyWallet.deploy();
    await familyWallet.deployed();
    console.log("FamilyWallet deployed to:", familyWallet.address);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });