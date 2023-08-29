# 0 to BuidlGuidl

[**LIVE VERSION HERE**](https://0-to-buidlguidl.vercel.app/)

Onboarding dApp with:

- QR share for live events
- Roadmap to join [BuidlGuidl](https://buidlguidl.com/) and get started building with [Scaffold-ETH 2](https://scaffoldeth.io/)
- Soulbound? Dynamic SVG NFT

Built using [Scaffold-ETH 2](https://scaffoldeth.io/) | NextJS, RainbowKit, Hardhat, Wagmi, Typescript, and daisyUI

🧪 [Scaffold-ETH 2](https://scaffoldeth.io/) is an open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

## Run this repo on your computer!

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get this repo started on your local machine, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/luloxi/0-to-BuidlGuidl.git
cd 0-to-BuidlGuidl
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Play with this repo!

<!-- Run smart contract test with `yarn hardhat:test` -->
<!-- - Edit your smart contract `NFTContract.sol` in `packages/hardhat/contracts` -->
<!-- - Edit your deployment scripts in `packages/hardhat/deploy` -->

- Edit your frontend in `packages/nextjs/pages`
- Read [SE2-DOCUMENTATION](./SE2-DOCUMENTATION.md) to learn how this repo works!
