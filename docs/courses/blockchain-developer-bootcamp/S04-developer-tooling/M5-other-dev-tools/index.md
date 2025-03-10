# Other Development Tools
  

:::note
Before we dive into these other development frameworks, we wanted to provide an "offramp" to folks who may not be comfortable with JavaScript Frameworks. We'd encourage you to check out the sections on Node and JavaScript Frameworks in the Basic Training course. People uncomfortable with terminal-based development might be interested in [JSUI,](https://github.com/kitze/JSUI) a GUI-based JavaScript framework development environment. You can also checkout some frontend boilerplate projects [here.](https://www.smashingmagazine.com/2021/06/useful-frontend-boilerplates-starter-kits/)
:::


## Hardhat

Another popular development framework is [Hardhat,](https://hardhat.org/) which actually started as a fork of Truffle. It has since grown to create its own suite of tools and a devoted community.

Hardhat divides itself into "tasks" and "plugins". Running `npx hardhat compile` is a task, for example. [Plugins](https://hardhat.org/plugins/) are extended functionality ported into Hardhat. [Gas Reporter](https://hardhat.org/plugins/hardhat-gas-reporter.html) and 
[Contract Sizer](https://hardhat.org/plugins/hardhat-contract-sizer.html) are two popular plugins for Hardhat. 

Why choose Hardhat? Some feel as though the command-line experience of Hardhat is faster than Truffle. Others like the extensive plugin features. One feature popular with Hardhat developers is their use of `console.log()` in smart contracts. When developing locally with Hardhat, you can import the `console.sol` contract, like so:


```
pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract Token {
  //...
}```


You can then add it to your contract when developing it locally:


```SOLIDITY
function transfer(address to, uint256 amount) external {
    console.log("Sender balance is %s tokens", balances[msg.sender]);
    console.log("Trying to send %s tokens to %s", amount, to);

    require(balances[msg.sender] >= amount, "Not enough tokens");

    balances[msg.sender] -= amount;
    balances[to] += amount;
}
```


Which gives you this output when running locally on the Hardhat Network:


```
$ npx hardhat test

  Token contract
    Deployment
      ✓ Should set the right owner
      ✓ Should assign the total supply of tokens to the owner
    Transactions
Sender balance is 1000 tokens
Trying to send 50 tokens to 0xead9c93b79ae7c1591b1fb5323bd777e86e150d4
Sender balance is 50 tokens
Trying to send 50 tokens to 0xe5904695748fe4a84b40b3fc79de2277660bd1d3
      ✓ Should transfer tokens between accounts (373ms)
      ✓ Should fail if sender doesn’t have enough tokens
Sender balance is 1000 tokens
Trying to send 100 tokens to 0xead9c93b79ae7c1591b1fb5323bd777e86e150d4
Sender balance is 900 tokens
Trying to send 100 tokens to 0xe5904695748fe4a84b40b3fc79de2277660bd1d3
      ✓ Should update balances after transfers (187ms)


  5 passing (2s)
  ```


You can learn more about this feature in their documentation [here.](https://hardhat.org/hardhat-network/#console-log)

Here are some easy ways to get started using Hardhat to see how you like it:
- [Hardhat's Beginner Tutorial and Project Setup](https://hardhat.org/tutorial/)
- [Hardhat Development Network](https://hardhat.org/hardhat-network/)
- [Index of Reusable Plugins](https://hardhat.org/plugins/)

The Hardhat teams recommends "paying attention to see whether any plugins already solve problems [you] may have."

## Scaffold-ETH

[Scaffold-ETH](https://github.com/austintgriffith/scaffold-eth) ([docs](https://docs.scaffoldeth.io/scaffold-eth/)) is a project from prolific builder Austin Griffith meant to minimize the time between thinking of a decentralized app idea and deploying it to the world.

However, Scaffold-ETH requires an advanced comfortability with tools like Yarn, Solidity, Hardhat, React, etc. It's best for folks who already have a very solid Web 2 or Web 3 workflow. For those folks, Scaffold-ETH is jet fuel! <b>Please note, however, that projects and tutorials in Scaffold-ETH have not been audited in any way and may contain bugs or vulnerabilities!</b>

In the repo, Austin has provided a number of forks that correspond to different template projects or tutorials. Read more about the tutorials and examples [here.](https://docs.scaffoldeth.io/scaffold-eth/examples-and-tutorials/overview)

As we mentioned, Scaffold-ETH by default serves up a [React App,](https://docs.scaffoldeth.io/scaffold-eth/react-app-1/untitled) with pre-built components, and hooks. It's also incorporated a third-party UI library called [Ant Design](https://ant.design/components/overview/) to help with the designing of components. It also incorporates [Surge,](https://surge.sh/) a static-site generator to publish your app.

Scaffold-ETH also has significant [infrastructure support](https://docs.scaffoldeth.io/scaffold-eth/infraestructure/overview) for the later parts of the development cycle, such as The Graph, Tenderly, Etherscan, and L2/Sidechain Services (deploying to Optimism and Arbitrum).

Also, there are [examples](https://docs.scaffoldeth.io/scaffold-eth/examples-and-tutorials/overview) from some great projects in the space, like Aave, The Graph, Chainlink, Optimism and Uniswap. You can also [learn](https://github.com/austintgriffith/scaffold-eth#-buidl) about common design patterns such as commit-reveal, ecrecover, multisigs, DEXes, and more!

Last, Austin is an incredibly proflific creator of content, including support videos and walkthroughs of Scaffold-ETH. Below are some recent walkthroughs he's done:

- [Tutorial: Austin walks through Scaffold-Eth during Polygon Hackathon](https://www.youtube.com/watch?v=zxL9cPysEmQ)
- [Start Building Today with Scaffold-ETH](https://youtu.be/ShJZf5lsXiM)
- [Ethereum Dev Onboarding (ETHGlobal)](https://youtu.be/ipFJeK0M5ks?t=89) Austin walksthrough Scaffold-ETH after RicMoo and Paul Berg walkthrough their awesome tools
- [Web 2 dev to Web 3 dev](https://youtu.be/mctO5EUx_wI)
- [Blockchain at Berkeley: Austin Griffith Developer Walkthrough](https://www.youtube.com/watch?v=TGlklzDmTyc)

If you [follow Austin on twitter](https://twitter.com/austingriffith) or join [the Scaffold-ETH Telegram,](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) you'll get updates and assistance there as well.

## Brownie

As we mentioned earlier, [Brownie](https://github.com/eth-brownie/brownie) is a Python-based development and testing framework for smart contracts running on the EVM. It uses [Web3.py](https://web3py.readthedocs.io/en/stable/) as well as Solidity. It is most well-known for being the development framework the [Yearn.Finance](https://yearn.finance) team uses to build their powerful DeFi platform and [CRV.](https://help.coinbase.com/en/coinbase/getting-started/crypto-education/curve-dao-token--crv-)

Brownie definitely takes some notes from Truffle (they are both "sweet"), including having a `brownie init` command and their equivalent of Truffle boxes, ["Brownie Mixes."](https://github.com/brownie-mix) This makes it an easy tool for a lot of Truffle developers familiar with Truffle.

Here are some tutorials to introduce you to Brownie:

* [Tutorial: Develop a DeFi Project using Python (Chainlink)](https://blog.chain.link/develop-python-defi-project/)
* [Tutorial: Vyper and Brownie Contract Development on EVM Chains](https://medium.com/ethereum-classic/vyper-and-brownie-contract-development-on-evm-chains-85ba7fa2feef) An interesting tutorial walking through developing a contract using Vyper and Brownie.

## Tenderly

[Tenderly](https://tenderly.co/pricing) provides a way to both be alerted to contract events as well as troubleshoot a contract, including a "Forking Mainnet" feature similar to that of Truffle and Hardhat.

## Frontend Tools

For your project, we've also discussed frontend interfaces. There are two services you can use for free to create a frontend instance easily:
- [Heroku](https://devcenter.heroku.com/start) is a Platform-as-a-Service, providing a quick way to deploy apps in a number of popular languages, such as Node.js (JavaScript), Python, Ruby and Go.  You can connect your GitHub repo to your project for easy deployment. Heroku's basic plan is free and provides basic resources for getting started. [Read more here.](https://www.heroku.com/free)
- [Netlify](https://www.netlify.com/) also has a Git-based workflow allowing you to deploy your project easily from GitHub. It is also free and has a getting started manual [here.](https://docs.netlify.com/configure-builds/get-started/)

There are so many more amazing tools that we can't get into now, but if you check out the links in this section, you'll be able to dive deeper and learn more on your own!

## Additional Material
- [Article: The Complete Guide to Full Stack Ethereum Development](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13) An incredibly comprehensive article from Nader Dabit of The Graph.
- [Article: Ethereum Dev Speed Run (Austin Griffith)](https://medium.com/@austin_48503/%EF%B8%8Fethereum-dev-speed-run-bd72bcba6a4c?_branch_match_id=947827671682448762) Quick start for developers starting on Ethereum.
- [Ethereum Dev Onboarding (ETHGlobal)](https://youtu.be/ipFJeK0M5ks?t=89) Walkthrough of the developer stack from RicMoo, Paul Berg (`create-eth-app`) and Austin Griffith. Great walkthrough of dev environments!
- [Wiki: DeFi Developer Roadmap: Other Frameworks](https://github.com/OffcierCia/DeFi-Developer-Road-Map#frameworks) A series of other frameworks within a larger, excellent repo about Development tools and tips 
- [Article: Build a Web3 Dapp in React Login with MetaMask](https://dev.to/jacobedawson/build-a-web3-dapp-in-react-login-with-metamask-4chp)
- [Tutorial: React Project Setup Using Hardhat & Truffle Part 1](https://medium.com/@shihyuhwang/react-project-setup-using-hardhat-truffle-part-1-20a596865e) and [Part 2](https://medium.com/@shihyuhwang/react-project-setup-using-hardhat-truffle-part-2-2872f20bf7ca) From Bootcamp alum and fellow Shih-Yu Hwang
- [Google Doc: Overview of Tools](https://docs.google.com/presentation/d/1RKXn601FwD9ISPzf9YcGE2tp_B8bKXnInUqzkufJDwM/edit#slide=id.p1) From Vu, a bootcamp alum, these are the notes he made after going through the developer section as a helpful mindmap for others!
- Other tools: [Ankr,](https://www.ankr.com/) [Quiknode,](https://www.quiknode.io/) [Alchemy](https://www.alchemyapi.io/)



    