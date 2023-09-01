#/bin/sh

npm run node:start

echo "Fetching localhost RPC through CURL"
curl --silent --retry 12 --retry-all-errors \
    -H "Content-type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' \
    http://localhost:8545


echo "Now running the hardhat task"
npx hardhat bug
npm run node:stop