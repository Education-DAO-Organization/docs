"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[8208],{7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(4848),s=n(8453);const i={},o=void 0,r={id:"courses/blockchain-developer-bootcamp/S10-eth2/M2-key-terms/index",title:"index",description:"Key Terms for Ethereum 2.0",source:"@site/docs/courses/blockchain-developer-bootcamp/S10-eth2/M2-key-terms/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S10-eth2/M2-key-terms",slug:"/courses/blockchain-developer-bootcamp/S10-eth2/M2-key-terms/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S10-eth2/M2-key-terms/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S10-eth2/M1-background/"},next:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S10-eth2/M3-future-considerations/"}},h={},c=[{value:"Key Terms for Ethereum 2.0",id:"key-terms-for-ethereum-20",level:2},{value:"Proof of Stake and Validators",id:"proof-of-stake-and-validators",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Staking Pools and Staking-as-a-Service",id:"staking-pools-and-staking-as-a-service",level:3},{value:"Deposit Contract",id:"deposit-contract",level:3},{value:"Finality",id:"finality",level:3},{value:"Secret Shared Validators (SSV)",id:"secret-shared-validators-ssv",level:3},{value:"Database Sharding",id:"database-sharding",level:3},{value:"BLS Encryption",id:"bls-encryption",level:3},{value:"Execution Environments (Computation)",id:"execution-environments-computation",level:3},{value:"Additional Material",id:"additional-material",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"key-terms-for-ethereum-20",children:"Key Terms for Ethereum 2.0"}),"\n",(0,a.jsx)(t.p,{children:"There are some new terms that might be confusing with Ethereum 2.0, we wanted to list a few here to help you understand them better."}),"\n",(0,a.jsxs)(t.p,{children:['First, we should mention there\'s a discussion around even the term "Ethereum 2.0." Some folks would like there to just be the "Application Layer" and the "Consensus Layer". Here\'s the distinction, from Ethereum Foundation\'s ',(0,a.jsx)(t.a,{href:"https://blog.ethereum.org/2021/03/11/finalized-no-23/",children:"Danny Ryan:"})]}),"\n",(0,a.jsx)(t.p,{children:"What we call \u201ceth2\u201d is a series of major upgrades to Ethereum\u2019s consensus-layer \u2013 to ensure the protocol is secure, sustainable, and scalable \u2013 while \u201ceth2 clients\u201d are implementations of this proof-of-stake consensus."}),"\n",(0,a.jsx)(t.p,{children:"And, what we call \u201ceth1\u201d in this context is Ethereum\u2019s rich application-layer, and similarly, \u201ceth1 clients\u201d (after the upgrade to proof-of-stake) are the software that does the heavy lifting in this layer. Ethereum\u2019s application-layer is currently driven by a proof-of-work consensus algorithm but will soon be driven by the beacon chain \u2013 the proof-of-stake consensus mechanism that is currently in production and secured by ~7.7M ETH."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://hackmd.io/@benjaminion/eth2_news/https%3A%2F%2Fhackmd.io%2F%40benjaminion%2Fwnie2_210702",children:"People"}),' are still using the term Ethereum 2.0 or Eth2 (like we are in this course), but eventually both chains will just be "Ethereum"!']}),"\n",(0,a.jsx)(t.p,{children:"Okay, here are some more Ethereum 2.0 terms and their explanations:"}),"\n",(0,a.jsx)(t.h3,{id:"proof-of-stake-and-validators",children:"Proof of Stake and Validators"}),"\n",(0,a.jsx)(t.p,{children:"Proof of Stake is the new consensus mechanism for Ethereum. It currently is the consensus mechanism for the Beacon chain. Eventually, the Ethereum 1.0 chain will migrate to the Ethereum 2.0, replacing mainnet's consensus mechanism from Proof of Work to Proof of Stake."}),"\n",(0,a.jsx)(t.p,{children:"Actors that are validating the network state in the Beacon chain are called validators."}),"\n",(0,a.jsx)(t.h3,{id:"slashing",children:"Slashing"}),"\n",(0,a.jsx)(t.p,{children:"Ethereum 2.0\u2019s consensus mechanism has a couple of rules that are designed to prevent attacks on the network. Any validator found to have broken these rules will be slashed and ejected from the network. Slashing means that a significant part of the validator\u2019s stake is removed: up to the whole stake of 32 ETH in the worst case."}),"\n",(0,a.jsx)(t.p,{children:"Slashing is interesting because it is a financial disincentive for behavior on public blockchains. As we read earlier about Proof of Work, there are only incentives for people to act in accordance with the network consensus layer."}),"\n",(0,a.jsx)(t.h3,{id:"staking-pools-and-staking-as-a-service",children:"Staking Pools and Staking-as-a-Service"}),"\n",(0,a.jsx)(t.p,{children:"Staking as a Service is where you give your (32*n) ETH to a service which handles all of the validating process for you for a fee. Much easier mental load, great for institutional interest."}),"\n",(0,a.jsx)(t.p,{children:"For people with less than 32ETH (which has become very expensive now!), there are some interesting options of decentralized pools where you can contribute either validator power or less than 32ETH. The staking pools combine that and distribute the staking rewards accordingly."}),"\n",(0,a.jsxs)(t.p,{children:["A full list of these services can be found ",(0,a.jsx)(t.a,{href:"https://stake.fish/en/ethereum/services/",children:"here."})," The ",(0,a.jsx)(t.a,{href:"https://ethddc.org/",children:"Ethereum Due Diligence Committee"})," is doing their best to provide an unbiased assessment of these services."]}),"\n",(0,a.jsx)(t.h3,{id:"deposit-contract",children:"Deposit Contract"}),"\n",(0,a.jsx)(t.p,{children:"The Deposit contract is the pivot point from Ethereum mainnet to the Beacon Chain for actors wishing to become validators on the Beacon Chain. In order to register as a validator on the network, a user must generate Ethereum 2.0 keys by making a one-way deposit of ETH into the official deposit contract."}),"\n",(0,a.jsx)(t.p,{children:"(You should not send ETH to this contract directly! You will lose those funds forever!)"}),"\n",(0,a.jsx)(t.h3,{id:"finality",children:"Finality"}),"\n",(0,a.jsx)(t.p,{children:"Proof of Stake consensus mechanisms offer finality: After a small period of time, a block is declared final, which means that it can never be changed. All the transactions in that block and all previous transactions are permanent, immutable, and guaranteed forever."}),"\n",(0,a.jsxs)(t.p,{children:["However, Finality presents some issues around ",(0,a.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/Concepts/Weak-Subjectivity/",children:"Weak Subjectivity:"})," If \u2153 of validators withdraw their stake and continue signing blocks and attestations, they can form a chain which conflicts with the finalized state. If your node is far enough behind the chain head to not be aware that they\u2019ve withdrawn their funds, the exited validators can trick you into following the wrong chain. (",(0,a.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/Concepts/Weak-Subjectivity/",children:"source"}),")"]}),"\n",(0,a.jsx)(t.p,{children:"Well-behaved validators who have successfully and properly exited the chain can sell their private keys on the black market to a malicious actor. (There is no financial disincentive for them to do this as their funds have safely exited the protocol)."}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about Weak Subjectivity and how to address it ",(0,a.jsx)(t.a,{href:"https://consensys.net/blog/teku/teku-and-infura-team-up-to-make-the-fastest-ethereum-2-0-client-sync/",children:"here."})]}),"\n",(0,a.jsx)(t.h3,{id:"secret-shared-validators-ssv",children:"Secret Shared Validators (SSV)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://docs.ssv.network/network-overview/ssv-infrastructure",children:"From the SSV.network page:"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Secret Shared Validators (SSV) is the first secure and robust way to split a validator key for ETH staking between non-trusting nodes, or operators.\nThe protocol enables the distributed control and operation of an Ethereum validator. The key is split in such a way that no operator must trust the other to operate, a certain amount can go offline without affecting network performance, and no operator can take unilateral control of the network. The result is decentralization, fault tolerance, and optimal security for staking on Ethereum."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"database-sharding",children:"Database Sharding"}),"\n",(0,a.jsxs)(t.p,{children:["Database sharding is used in conventional computer programming to increases scalability of large systems. From ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)",children:"this article:"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"A database shard is a horizontal partition of data in a database or search engine. Each individual partition is referred to as a shard or database shard. Each shard is held on a separate database server instance, to spread load."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Some data within a database remains present in all shards, but some appears only in a single shard. Each shard (or server) acts as the single source for this subset of data."})}),"\n",(0,a.jsx)(t.p,{children:"Ethereum 2.0 leverages traditional database sharding to decrease the amount of memory needed to maintain the full state of the network. Originally meant to be 1024 shards, the current spec will produce 64 database shards. Each of these shards will have their own validators. They will periodically check into the beacon chain using crosslinks, which is a summary of the state of that shard and the only representation of the shard on the Beacon Chain."}),"\n",(0,a.jsx)(t.p,{children:"Phase 1 is meant to reduce the resources needed to use Ethereum in a decentralized way. Currently, to interact with Ethereum network on your own node, it requires 500GB of memory and significant RAM, not to mention syncing time. With sharding and light clients, the idea is to decrease the amount of information needed to submit your own, valid transactions."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://vitalik.ca/general/2021/04/07/sharding.html",children:"Read more about sharding on Ethereum 2.0 here."})}),"\n",(0,a.jsx)(t.h3,{id:"bls-encryption",children:"BLS Encryption"}),"\n",(0,a.jsxs)(t.p,{children:["The key signature system Ethereum 2.0 will be using is ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"BLS."})," BLS allows multiple digital signatures to be collapsed into a single verifiable one. This is helpful with collecting attestations of the beacon (",(0,a.jsx)(t.a,{href:"https://medium.com/alethio/ethereum-2-0-terms-demystified-8398357429d7",children:"\u201cvotes in regards to the validity of a shard block or beacon\u201d"}),"). Most pertinent for us, the BLS scheme is different from the scheme used for Ethereum 1.0."]}),"\n",(0,a.jsx)(t.p,{children:"To swap out the encryption curve, Ethereum core developers have come up with a clever solution, which is a classic handshake:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Handshake Diagram",src:n(2027).A+"",width:"720",height:"540"})}),"\n",(0,a.jsx)(t.p,{children:"In the diagram above, the blue key and boxes represent Ethereum 1.0 and its cryptographic scheme and the red key and boxes represent Ethereum 2.0 and its cryptographic scheme. The deposit contract, which exists on Ethereum 1.0 Mainnet, allows the user to prove they have private keys for Ethereum 1.0 and Ethereum 2.0. Here\u2019s how that works:"}),"\n",(0,a.jsx)(t.p,{children:"The transaction submitted to the deposit contract on Ethereum 1.0 has to be signed by an Ethereum 1.0 private key (like any transaction submitted on Mainnet). However, that transaction is wrapped around another private key signature, the Ethereum 2.0 private key. The beacon chain is watching the deposit contract on Ethereum 1.0, if a valid transaction is submitted to the contract with the correct balance, the beacon chain then unwraps the first layer of encryption and accesses the second layer, the Ethereum 2.0 digital signature. That is used to confirm the Ethereum 2.0 validator address and connect it to an Ethereum 1.0 address."}),"\n",(0,a.jsx)(t.p,{children:"Here's how that handshake looks in the Beacon Chain contract deployed to Ethereum mainnet:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Solidity Code from Beacon Chain",src:n(7882).A+"",width:"1358",height:"434"})}),"\n",(0,a.jsx)(t.h3,{id:"execution-environments-computation",children:"Execution Environments (Computation)"}),"\n",(0,a.jsxs)(t.p,{children:["The final phase of Ethereum 2.0 deals with the execution environments present on each shard. in Ethereum 1.x, the execution environment is the ",(0,a.jsx)(t.a,{href:"https://medium.com/mycrypto/the-ethereum-virtual-machine-how-does-it-work-9abac2b7c9e",children:"Ethereum Virtual Machine,"})," a Turing-complete programming language that provides a universal computation environment for all in the network to use."]}),"\n",(0,a.jsxs)(t.p,{children:["However, this universality comes at an efficiency cost. The EVM is slow compared to modern processing languages. Phase 2 addresses this processing cost by using a version of ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/WebAssembly",children:"WebAssembly"}),", a new type of code developed by Mozilla. It allows code written in C, C++ or Rust \xa0but executed in the browser to run at near-native speeds. (For more information about the implications of WebAssembly for the broader web, please see this video: ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=CMB6AlE1QuI&t=1854s",children:'"Rust, WebAssembly and the Future of Serverless"'}),")"]}),"\n",(0,a.jsx)(t.p,{children:"In Phase 2, each shard will be allowed a unique execution environment. While at least one will be running the EVM (for sake of continuity), it's possible others will be running execution environments (EEs) for Libra, Bitcoin, or any other blockchain network."}),"\n",(0,a.jsxs)(t.p,{children:["Note: This may change as the Eth1-Eth2 merge gets closer. It ",(0,a.jsx)(t.a,{href:"https://drive.google.com/file/d/1bC25o8Pt_6pzm0pS7rLfTeebqXeWEhGx/view",children:"seems"})," as though the emphasis may be on getting the Beacon Chain executable on EVM, rather than various execution environments."]}),"\n",(0,a.jsx)(t.h2,{id:"additional-material",children:"Additional Material"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://consensys.net/knowledge-base/ethereum-2/glossary/",children:"Ethereum 2.0 Glossay (ConsenSys)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://kb.beaconcha.in/",children:"Beaconcha.in Knowledge Base"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-phases/",children:"Ethereum 2.0 (Ethhub.io)"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://hackmd.io/@benjaminion/eth2_news/https%3A%2F%2Fhackmd.io%2F%40benjaminion%2Fwnie2_210813",children:"What's New in Eth2 (Ben Edgington)"})," Great newsletter round-up"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://blog.ethereum.org/category/research-and-development/",children:"Finalized article series by Danny Ryan"})}),"\n",(0,a.jsxs)(t.li,{children:["For more information about BLS, please see ",(0,a.jsx)(t.a,{href:"https://twitter.com/technocrypto/status/1330150395419766785",children:"this thread"})," from Jeff Coleman or ",(0,a.jsx)(t.a,{href:"https://www.reddit.com/r/ethfinance/comments/jghide/daily_general_discussion_october_23_2020/g9sz7jm/?context=8&depth=9",children:"this Reddit post"})," about the history of BLS development for Ethereum 2.0."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7882:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bls-solidity-ad470e8f53f84b18b98bcc7fedbe50b1.png"},2027:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/eth2-bls-handshake-4f221880eaedd47d39b7d9aa1d9a3f36.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);