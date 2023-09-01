# Minimal reproduction

- Install the dependencies (npm, yarn, pnpm...)
- Run `run-bug.sh` with the shell of your preference

What it does:

- Bootstraps a hardhat node via pm2 on port 8545
- Runs a curl against the localhost node and awaits success
- Runs the hardhat task which does essentially the same as the curl, once against the RPC (it should fail and output the logs below) and against llama.

Logs that indicate the failure:

```
Trying to fetch RPC block
JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)
Error: connect ECONNREFUSED ::1:8545
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16) {
  errno: -61,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '::1',
  port: 8545
}
RPC BLOCK FETCH RESULT: FAILED
```

Note: you might want to clean pm2 by running `npm run node:delete`
