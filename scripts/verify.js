async function main() {
    const contractAddress = "0x84FE617fD1aF0bBbc573414c8fCf2715789F8728";
    await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: ["Hello, Base!"],
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });