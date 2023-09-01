import { JsonRpcProvider } from "ethers";

const rpc = process.env.RPC_URL || "http://localhost:8545";

async function main() {
  console.log("Using rpc", rpc);
  const provider = new JsonRpcProvider(rpc);

  console.log("\n====================\nTrying to fetch RPC block");
  console.log(
    "RPC BLOCK FETCH RESULT:",
    (await provider.getBlockNumber().catch(console.error)) || "FAILED"
  );

  console.log("\n====================\nTrying to fetch llama block");
  const llama = new JsonRpcProvider("https://eth.llamarpc.com");
  console.log(
    "LLAMA BLOCK FETCH RESULT:",
    (await llama.getBlockNumber().catch(console.error)) || "FAILED"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
