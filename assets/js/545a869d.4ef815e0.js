"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[4899],{4598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(4848),a=n(8453);const s={},o="Types of Scaling Solutions",r={id:"courses/blockchain-developer-bootcamp/S08-scalability/M2-types/L1/index",title:"Types of Scaling Solutions",description:"Several options have been proposed and worked on for scaling Ethereum on a shorter time frame. Some of these efforts are coming to fruition now and are worth considering. The main tradeoffs for choosing a scaling solution involve considerations of throughput vs. security vs. usability. The following are some solutions currently in the works at various stages:",source:"@site/docs/courses/blockchain-developer-bootcamp/S08-scalability/M2-types/L1/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S08-scalability/M2-types/L1",slug:"/courses/blockchain-developer-bootcamp/S08-scalability/M2-types/L1/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S08-scalability/M2-types/L1/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"Intro to Scalability",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S08-scalability/M1-intro/L1-overview/"},next:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S08-scalability/M3-rubric/L1/"}},l={},c=[{value:"Rollups",id:"rollups",level:2},{value:"Optimistic Rollups",id:"optimistic-rollups",level:3},{value:"Zero-Knowledge / ZK-Rollups",id:"zero-knowledge--zk-rollups",level:3},{value:"Non-EVM ZK-Rollups",id:"non-evm-zk-rollups",level:4},{value:"EVM Compatible ZK-Rollups: The Elusive zkEVM",id:"evm-compatible-zk-rollups-the-elusive-zkevm",level:4},{value:"Channels",id:"channels",level:2},{value:"Sidechains",id:"sidechains",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Material",id:"additional-material",level:2},{value:"Rollups",id:"rollups-1",level:3},{value:"State Channels",id:"state-channels",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"types-of-scaling-solutions",children:"Types of Scaling Solutions"}),"\n",(0,i.jsxs)(t.p,{children:["Several options have been proposed and worked on for scaling Ethereum on a shorter time frame. Some of these efforts are coming to fruition now and are worth considering. The main tradeoffs for choosing a scaling solution involve considerations of ",(0,i.jsx)("b",{children:"throughput"})," vs. ",(0,i.jsx)("b",{children:"security"})," vs. ",(0,i.jsx)("b",{children:"usability"}),". The following are some solutions currently in the works at various stages:"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Note: This section draws heavily on the work on Faina Shalts, engineer at Truffle (and Bootcamp alumni!) as well as from ",(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/scaling/",children:"Ethereum.org"})]})}),"\n",(0,i.jsx)(t.h2,{id:"rollups",children:"Rollups"}),"\n",(0,i.jsx)(t.p,{children:"In general, on Rollup Layer 2 solutions, transactions are submitted to L2 nodes instead of L1, and batched. Eventually they are put on L1 and no longer mutable. L2 nodes are Ethereum compatible, independent blockchains. All state and execution is handled in L2: Signature verification, Contract execution, etc. The L1 only stores transaction data."}),"\n",(0,i.jsxs)(t.p,{children:["Note: the terminology here can be challenging but Pranay Mohan of Celo Network ",(0,i.jsx)(t.a,{href:"https://mobile.twitter.com/pranaymohan/status/1409195144360992773",children:"proposes"})," we think of rollups as shard clients and the rollup contracts as on-chain light clients."]}),"\n",(0,i.jsx)(t.p,{children:"There are two major kinds of Rollups: Optimistic Rollups and ZK-Rollups."}),"\n",(0,i.jsx)(t.h3,{id:"optimistic-rollups",children:"Optimistic Rollups"}),"\n",(0,i.jsxs)(t.p,{children:["Optimistic Rollups use a sidechain that sits in parallel to the mainnet Ethereum chain. They don\u2019t do any computation by default: after a transaction, the Optimistic Rollup L2s proposes a new state to the L1 mainnet, or \u201cnotarizes\u201d the transaction. L2 Transactions written to L1 mainnet as ",(0,i.jsx)("b",{children:"calldata"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The main mechanism that makes this work are ",(0,i.jsx)("b",{children:"fraud proofs:"})," If a verifier notices a fraudulent transaction the Optimistic Rollup network will execute a fraud-proof and run the transaction\u2019s computation using the available state data; the gas you need to run a fraud proof is reimbursed."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"diagram showing rollup workflow",src:n(2954).A+"",width:"512",height:"362"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Pros"})," Anything you can do on L1 you can do with Optimistic Rollups because it is EVM and Solidity compatible. All transaction data is stored on the L1 chain, meaning it remains secure and decentralized."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Cons"})," Long wait times for on-chain transactions due to potential fraud challenges. Potentially vulnerable to attacks if the value in an optimistic rollup exceeds the amount in an operator\u2019s bond."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Optimistic Roll-ups are currently being built by ",(0,i.jsx)(t.a,{href:"https://optimism.io/",children:"Optimistic PBC,"})," ",(0,i.jsx)(t.a,{href:"https://offchainlabs.com/",children:"Arbitrum,"})," ",(0,i.jsx)(t.a,{href:"https://fuel.sh/",children:"Fuel Network,"})," ",(0,i.jsx)(t.a,{href:"https://www.immutable.com/",children:"ImmutableX,"})," ",(0,i.jsx)(t.a,{href:"https://www.deversifi.com/",children:"Deversifi"})," and ",(0,i.jsx)(t.a,{href:"https://cartesi.io/",children:"Cartesi"})]}),"\n",(0,i.jsx)(t.h3,{id:"zero-knowledge--zk-rollups",children:"Zero-Knowledge / ZK-Rollups"}),"\n",(0,i.jsx)(t.p,{children:"As we mentioned earlier in the section on Zero-Knowledge proofs, ZKPs can compress a larger amount of computation or verification into a single operation. ZK-Rollups bundle hundreds of transfers that occur on the ZKP Rollup L2 into a single L1, mainnet transaction via a smart contract located on L1. From the data submitted the smart contract can verify all the transfers that are included."}),"\n",(0,i.jsx)(t.p,{children:"The main benefit over an Optimistic rollup is that you get finality much faster, usually within a couple of hours though it could be made faster still at an increased gas price."}),"\n",(0,i.jsx)(t.p,{children:"Critically, you don\u2019t need all the data to verify the transactions, just the zero-knowledge proof. Transactions are written to Ethereum as calldata, to reduce gas."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pros"})," Minimal delay, less vulnerable to economic attacks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cons"})," Currently available ZK-Rollup chains are not compatible with the EVM as validity proofs are intense to compute and have to build their own language to process. However, there is some work on building Solidity to ZKP language transpilers, like ",(0,i.jsx)(t.a,{href:"https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0",children:"this one for Cairo,"})," Starknet's ZKP language. There is also ongoing work to create EVM-compatible Zk-Rollups."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We're seeing the emergence of two major types of ZK Rollups: Those that run their own VM (virtual machine) and those that are EVM compatible."}),"\n",(0,i.jsx)(t.h4,{id:"non-evm-zk-rollups",children:"Non-EVM ZK-Rollups"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://starknet.io/",children:"StarkNet"})," is the best example of a ZK Rollup that uses its own virtual machine, called the StarkNet OS. StarkNet uses the Cairo programming language both for its infrastructure and for writing StarkNet contracts."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pros"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Cairo language logic is converted to STARK proofs, enabling a significant increase of throughput."}),"\n",(0,i.jsxs)(t.li,{children:['Cairo also allows for a new paradigm, "provable computation" , allowing programs to prove they have been executed without having to be re-run. ',(0,i.jsx)(t.em,{children:"This is a key technological advancement in the blockchain space and allows for really interesting applications like private transactions or complicated logic that doesn't need to be re-run in full to update the Ethereum state)."})]}),"\n",(0,i.jsx)(t.li,{children:"StarkNet is efficient, fast, and very scalable."}),"\n",(0,i.jsxs)(t.li,{children:["StarkNet is already live on mainnet and the ecosystem is growing quickly. ",(0,i.jsx)(t.a,{href:"https://blog.infura.io/post/starknet-now-available-to-all-infura-users",children:" Infura recently released initial StarkNet support "})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cons"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Learning a new smart contract language can be challenging."}),"\n",(0,i.jsx)(t.li,{children:"Ecosystem tools are still maturing to help developers get started."}),"\n",(0,i.jsx)(t.li,{children:"Existing tooling either does not work or needs significant finessing to get to a point where it is compatible"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Luckily, it is also possible to use StarkNet with Solidity, by employing a ",(0,i.jsx)(t.a,{href:"https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0",children:"transpiler"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"evm-compatible-zk-rollups-the-elusive-zkevm",children:"EVM Compatible ZK-Rollups: The Elusive zkEVM"}),"\n",(0,i.jsx)(t.p,{children:"ZK Rollups that are EVM compatible are a complicated effort, largely because the Ethereum Virtual Machine was built to optimize bytecode manipulation, while ZK proofs require mathematical manipulation to perform their function."}),"\n",(0,i.jsxs)(t.p,{children:["Over the past several months multiple zkEVM solutions have made headway but we are still waiting to see one on mainnet. The most notable zkEVM projects at this time are ",(0,i.jsx)(t.a,{href:"https://scroll.io/",children:" Scroll "}),", ",(0,i.jsx)(t.a,{href:"https://zksync.io/",children:"zkSync "})," (going live Oct 2022), and ",(0,i.jsx)(t.a,{href:"https://polygon.technology/solutions/polygon-hermez/",children:" Polygon Hermez"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pros"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Once live, zkEVM solutions will allow the best of all worlds: Zero-Knowledge proofs and Ethereum/Solidity compatibility."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cons"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"There are currently no live solutions on mainnet. zkSync seems as though it will be first to mainnet but it is unlikely that it will be a fully EVM-compatible solution initially. Be wary of marketing gimmicks around EVM compatibility!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a detailed discussion of the different types of zkEVMs we are likely to see soon, take a look at ",(0,i.jsx)(t.a,{href:"https://vitalik.ca/general/2022/08/04/zkevm.html",children:" Vitalik's article about this topic. "})]}),"\n",(0,i.jsxs)(t.p,{children:["ZK-Rollups are attractive for simple, high-volume exchanges. As the ecosystem grows, we are likely to see a lot of innovation around the types of blockchain applications that can be served via ZK-Rollups. Currently using this sort of rollup: ",(0,i.jsx)(t.a,{href:"https://loopring.io/#/",children:"Loopring"}),", ",(0,i.jsx)(t.a,{href:"https://starkware.co/",children:"Starkware,"})," ",(0,i.jsx)(t.a,{href:"https://matter-labs.io/",children:"Matter Labs' zkSync,"})," ",(0,i.jsx)(t.a,{href:"https://aztec.network/",children:"Aztec's ZK.Money network"})]}),"\n",(0,i.jsx)(t.h2,{id:"channels",children:"Channels"}),"\n",(0,i.jsx)(t.p,{children:"Channels, also called Side Channels or State Channels, allow participants to transact a certain number of times off-chain (on the channel) while only submitting 2 transactions to the network on chain (basically, the start and stop of the channel)."}),"\n",(0,i.jsx)(t.p,{children:"Fundamentally for a channel to exist, participants must lock a portion of Ethereum\u2019s state, like an ETH deposit, in a multisig contract. Locking state in this way opens up the channel, allowing for the off-chain transactions to occur. When the interaction is finished, one final L1 transaction is submitted, updating the network state based on the activity that occurred on the channel (mainly the rebalancing of funds between the participants)."}),"\n",(0,i.jsx)(t.p,{children:"Sidenote: State channels on Ethereum can be enforced through a concept known as counterfactual instantiation. Here's a technical, but concise, overview of counterfactual instantiation:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Counterfactual instantiation is achieved by making users sign and share commitments to the multisig wallet. These commitments say that if the counterfactually instantiated contract were to be instantiated on-chain, the multisig wallet (which holds the state deposit) will look at the instantiated contract and transfer the appropriate state deposits based on the state of that contract."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["On Ethereum, you can use the ",(0,i.jsx)(t.a,{href:"https://solidity-by-example.org/app/create2/",children:"CREATE2"})," opcode to predetermine the address of a contract. This means you can make these commitments in a channel and, if you need to dispute something, either party can deploy that contract with the chain of valid commitments."]}),"\n",(0,i.jsxs)(t.p,{children:["State Channel pros and cons (from ",(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/scaling/state-channels/",children:"Ethereum.org"}),"):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"Pros"})," Instant withdrawal/settling on mainnet, high throughput, lower cost per transaction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"Cons"})," Time and cost to set up and settle a channel. Funds must be locked up, participants need to periodically watch the network. Channels don\u2019t support open participation."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Examples of state channels are ",(0,i.jsx)(t.a,{href:"https://connext.network/",children:"Connext,"})," ",(0,i.jsx)(t.a,{href:"https://raiden.network/",children:"Raiden Network,"})," and Bitcoin's ",(0,i.jsx)(t.a,{href:"https://lightning.network/",children:"Lightning Network."})]}),"\n",(0,i.jsx)(t.h2,{id:"sidechains",children:"Sidechains"}),"\n",(0,i.jsxs)(t.p,{children:["The terminology here can get a little tricky, so bear with us. Sidechains are essentially blockchain networks separate from your Layer 1 (for us, Ethereum). They are connected through a ",(0,i.jsx)(t.a,{href:"https://medium.com/@blockchain_simplified/bridging-the-gap-using-blockchain-bridges-26a75a874de3",children:"bridge,"})," which allows state to be conveyed from one chain to the other."]}),"\n",(0,i.jsx)(t.p,{children:"We'll discuss this more in the crosschain and interoperability section, but essentially you'd use a chain that either has a consensus mechanism with a higher trust assumption (such as Proof of Authority) or some increased transaction throughput relative to your Layer 1. You would then be able to conduct transactions on that sidechain and, when you need to update the state (perhaps a user wishes to exit your network but wants to take their tokens), you can release it on your Layer 1."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram Showing Sidechains",src:n(9028).A+"",width:"512",height:"362"})}),"\n",(0,i.jsxs)(t.p,{children:["Examples of sidechains are ",(0,i.jsx)(t.a,{href:"https://skale.network/",children:"SKALE"})," and ",(0,i.jsx)(t.a,{href:"https://www.xdaichain.com/",children:"xDai."})]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"This concludes our overview of the kinds of scaling solutions available to us. It is by no means comprehensive, since the field is rapidly evolving. In the next section, we'll provide a basic rubric by which you can judge any Layer 2 or general scaling solution."}),"\n",(0,i.jsx)(t.h2,{id:"additional-material",children:"Additional Material"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/scaling/",children:"Wiki: Scaling (Ethereum.org)"}),' Great overview of the topic, including the "pros and cons" of different solutions']}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/BgCgauWVTs0",children:"Video: Layer 2 Scaling Explained (Finematics)"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://l2beat.com/",children:"Dashboard: L2beat"})," A research and network dashboard showing the current level of activity on different networks."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://blog.infura.io/offchain-protocols-sidechains-and-rollups/",children:"Article: Off-chain protocols: Sidechains and Rollups (Infura)"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1BdVQVX5cEJ2IDbCnfTAsyjlpU7IWUeB1/view",children:"Slide Deck: Scaling Ethereum using Rollups and Sidechains"})," From the ",(0,i.jsx)(t.a,{href:"https://www.meetup.com/ethereum-engineering/events/277601273/",children:"Engineering Ethereum meetup"})," and presented by Peter Robinson."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://forum.makerdao.com/t/a-multichain-strategy-and-roadmap-for-maker/8380",children:"Article: Maker's roadmap for L2s"})," Discusses one major application's understanding and strategy for Layer 2 solutions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://stonecoldpat.medium.com/a-note-on-bridges-layer-2-protocols-b01f8fc22324",children:"Article: A Note on Bridges & Layer 2 Protocols (Patrick McCorry)"})," A discussion around different sorts of bridge technologies and considerations we should have when using them."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=8bbBpa8usfk&t=272s",children:"Video: How Layer 2 Addresses Barriers for Enterprise Building on Mainnet"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"rollups-1",children:"Rollups"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://vitalik.ca/general/2021/01/05/rollup.html",children:"Article: An Incomplete Guide to Rollups (Vitalik Buterin)"})," A follow-up article to Buterin's ",(0,i.jsx)(t.a,{href:"https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698",children:"post on eth.research"}),' entitled, "What would a rollup-centric ethereum roadmap look like?" and ',(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=wcCHlqgGSH4",children:"here's a video version"})," of the article."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://ethresear.ch/t/rollup-diff-compression-application-level-compression-strategies-to-reduce-the-l2-data-footprint-on-l1/9975",children:"Research: Compressing Data Using Rollups"})," A technical discussions around optimizing data compression for Rollups\n",(0,i.jsx)(t.a,{href:"https://mobile.twitter.com/bkiepuszewski/status/1411725611958247429",children:"Thread: Rollup verification"})," A great walkthrough about how rollups conduct verification and how that verification can make it to Layer 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://research.paradigm.xyz/rollups",children:"Article: (Almost) Everything You Need to Know About Optimistic Rollup (Paradigm)"})," Really good technical overview of optimistic rollup tech"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://tracer.finance/radar/arbitrum-in-under-10/",children:"Artilce: Arbitrum in under 10 minutes"})," An explainer of Arbitrum, an optimistic rollup."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=l4jccXoqLGM",children:"Video: Scaling Ethereum with Rollups"})," John Adler from Fuel Labs discusses the concepts behind optimistic rollups"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0",children:"Article: Warp Your Way to Starknet"})," Early example of a Solidity to Cairo compiler"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://medium.com/yagi-fi/provable-vs-composable-computation-or-why-cairo-will-supersede-solidity-6b00e69bfc9e",children:" Article: Provable computation and the Cairo Language "})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://starkware.co/tech-stack/",children:" StarkWare Website With Details on StarkNet and Cairo "})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://l2beat.com/scaling/tvl/",children:" Website Providing Details On Currently Available Rollup Solutions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://vitalik.ca/general/2022/08/04/zkevm.html",children:" Article: Vitalik on zkEVMs "})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"state-channels",children:"State Channels"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://education.district0x.io/general-topics/understanding-ethereum/basics-state-channels/",children:"Article: State Channel Basics"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://medium.com/statechannels/counterfactual-generalized-state-channels-on-ethereum-d38a36d25fc6",children:"Article: Generalized State Channels on Ethereum"})," Goes into more detail about counterfactual instantiation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.jeffcoleman.ca/state-channels/",children:"Article: State Channels"})," Basic overview of the technology from 2015. Good evergreen concepts here."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://medium.com/spankchain/a-state-channels-adventure-with-counterfactual-rick-part-1-ce68e16252ea",children:"Article Series: A State Channels Adventure"})," A potentially NSFW walkthrough of the physics behind counterfactual instantiation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://solidity-by-example.org/app/create2/",children:"Tutorial: Precompute Contract Addresses with CREATE2"})," A great code tutorial from Solidity by Example showing how to find a predetermined address for a contract, the backbone of counterfactual instantiation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://blog.statechannels.org/introducing-web3torrent/",children:"Code Demo: Web3 Torrent"})," A Proof of Concept from StateChannels.org, a torrenting network built using state channels (or a subset of state channels they call ",(0,i.jsx)(t.a,{href:"https://blog.statechannels.org/virtual-channels/",children:"virtual channels"}),")."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2954:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/rollup-simple-1-c376ee4addc7c7eb8b92062eec9b3bff.png"},9028:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/sidechain-simple-1-309c136743520f821fea14951b603a74.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);