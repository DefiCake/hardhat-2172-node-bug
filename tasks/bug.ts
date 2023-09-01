import { JsonRpcProvider } from "ethers";
import { task, types } from "hardhat/config";
// import { BonsaiTestRelay__factory } from '../typechain-types'

task("bug", "deploys bonsai test relay")
  .addOptionalParam(
    "rpc",
    "url of the RPC",
    "http://localhost:8545",
    types.string
  )
  .setAction(async ({ rpc }, hre) => {
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
  });
