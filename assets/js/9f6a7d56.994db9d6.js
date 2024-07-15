"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[1993],{2395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(4848),i=n(8453);const r={},s="Smart Contract Pitfalls and Attacks",o={id:"courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2a-sc-pitfalls-and-attacks/index",title:"Smart Contract Pitfalls and Attacks",description:"Now that we've gone through some of the attack vectors in the language and syntax of Solidity, let's move on to more general smart contract pitfalls and attacks. These are more general attack patterns which involve zooming out from a codeline level to a broader contract workflow view (Call Known Attacks). There are also concerns that come from a protocol level, which will require marrying the information we learned in the first few sections of the course with the smart contract knowledge you gained (Network Known Attacks).",source:"@site/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2a-sc-pitfalls-and-attacks/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2a-sc-pitfalls-and-attacks",slug:"/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2a-sc-pitfalls-and-attacks/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2a-sc-pitfalls-and-attacks/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"Solidity Pitfalls and Attacks",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2-solidity-pitfalls-and-attacks/"},next:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2b-tx-origin-attack/"}},c={},l=[{value:"Frontrunning",id:"frontrunning",level:2},{value:"Timestamp Dependence",id:"timestamp-dependence",level:2},{value:"Network Stuffing DoS",id:"network-stuffing-dos",level:2},{value:"Forcibly Sending Ether",id:"forcibly-sending-ether",level:2},{value:"Block Gas Limit DoS",id:"block-gas-limit-dos",level:2},{value:"Reentrancy",id:"reentrancy",level:2},{value:"Integer Under / Overflow",id:"integer-under--overflow",level:2},{value:"Unexpected Revert DoS",id:"unexpected-revert-dos",level:2},{value:"<code>tx.origin</code> Authentication",id:"txorigin-authentication",level:2},{value:"Additional Material",id:"additional-material",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"smart-contract-pitfalls-and-attacks",children:"Smart Contract Pitfalls and Attacks"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we've gone through some of the attack vectors in the language and syntax of Solidity, let's move on to more general smart contract pitfalls and attacks. These are more general attack patterns which involve zooming out from a codeline level to a broader contract workflow view (",(0,a.jsx)(t.em,{children:"Call Known Attacks"}),"). There are also concerns that come from a protocol level, which will require marrying the information we learned in the first few sections of the course with the smart contract knowledge you gained (Network Known Attacks)."]}),"\n",(0,a.jsxs)(t.p,{children:["All these attack vectors (and more) are compiled in the Smart Contract Weakness Classification and Test Cases or ",(0,a.jsx)(t.a,{href:"https://swcregistry.io/",children:"SWC Registry"}),", we'll reference attack vectors by their SWC index number:"]}),"\n",(0,a.jsx)(t.p,{children:"Network Known Attacks:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Front-Running (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-114",children:"SWC-114"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Timestamp Dependence (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-116",children:"SWC-116"}),")"]}),"\n",(0,a.jsx)(t.li,{children:"Network Stuffing DoS"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Call Known Attacks:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Forcibly Sending Ether (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-132",children:"SWC-132"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Block Gas Limit DoS (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-128",children:"SWC-128"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Reentrancy (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-107",children:"SWC-107"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Integer Overflow/Underflow (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-101",children:"SWC-101"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Unexpected Revert DoS (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-113",children:"SWC-113"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Tx.Origin Authentication (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-115",children:"SWC-115"}),")"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"frontrunning",children:"Frontrunning"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"front-running diagram",src:n(7113).A+"",width:"512",height:"234"})}),"\n",(0,a.jsx)(t.p,{children:"Frontrunning has become a big issue in the Ethereum community as related to Miner-Extracted Value (MEV), which we discussed earlier. Frontrunning exploits how transactions are included in the blockchain and considerations around the process. Transactions that are broadcast to the network but have not yet been included in a block are in the mempool."}),"\n",(0,a.jsx)(t.p,{children:"Miners choose the order in which to include transactions from the mempool into a block that they are mining. Also, since transactions are in the mempool before they make it into a block, anyone can know what transactions are about to occur on the network."}),"\n",(0,a.jsx)(t.p,{children:"This can be problematic for things like decentralized markets."}),"\n",(0,a.jsx)(t.p,{children:"Protecting against this is difficult and you will likely need to devise contract specific solutions."}),"\n",(0,a.jsx)(t.p,{children:"Decentralized markets can mitigate concerns by implementing batch auctions or using a pre-commit scheme, where the details are submitted after the transaction is committed."}),"\n",(0,a.jsxs)(t.p,{children:["More information about Transaction Order Dependence and concrete samples are available in ",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-114",children:"the corresponding SWC Registry entry."})," Due to the increased focus on MEV, we can expect to see a lot more security tips and research around frontrunning."]}),"\n",(0,a.jsx)(t.h2,{id:"timestamp-dependence",children:"Timestamp Dependence"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"timestampe dependence",src:n(8930).A+"",width:"512",height:"234"})}),"\n",(0,a.jsx)(t.p,{children:"Contracts often need access to time values to perform certain types of functionality. Values such as block.timestamp, and block.number can give you a sense of the current time or a time delta, however, they are not safe to use for most purposes."}),"\n",(0,a.jsxs)(t.p,{children:["In the case of block.timestamp, developers often attempt to use it to trigger time-dependent events. As Ethereum is decentralized, nodes can synchronize time only to some degree. Moreover, malicious miners can alter the timestamp of their blocks, especially if they can gain advantages by doing so. (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-116",children:"source"}),")"]}),"\n",(0,a.jsx)(t.h2,{id:"network-stuffing-dos",children:"Network Stuffing DoS"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"network stuffing image",src:n(475).A+"",width:"512",height:"234"})}),"\n",(0,a.jsx)(t.p,{children:"This is an attack vector based around time-sensitive operations, such as an auction or a time-locked wallet, or operations requiring user input before committing an irreversible action. Essentially, we need to guard against the fact that, particularly now, there can be moments of high-traffic (not even malicious) where it can be near-impossible to get one's transactions to a smart contract. We hope with EIP-1559 these moments are short, but they may exist. As such, we need to make sure time-sensitive operations have some fallback or failsafe mechanism to guard against network stuffing, malicious or otherwise."}),"\n",(0,a.jsx)(t.h2,{id:"forcibly-sending-ether",children:"Forcibly Sending Ether"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"forcibly sending ether diagram",src:n(5668).A+"",width:"512",height:"234"})}),"\n",(0,a.jsx)(t.p,{children:"Another danger is using logic that depends on the contract balance."}),"\n",(0,a.jsx)(t.p,{children:"Be aware that it is possible to send ether to a contract without triggering its fallback function."}),"\n",(0,a.jsx)(t.p,{children:"Using the selfdestruct function on another contract and using the target contract as the recipient will force the destroyed contract\u2019s funds to be sent to the target."}),"\n",(0,a.jsxs)(t.p,{children:["It is also possible to pre-compute a contracts address and send ether to the address before the contract is deployed see (",(0,a.jsx)(t.a,{href:"https://docs.openzeppelin.com/cli/2.8/deploying-with-create2",children:"CREATE2"}),")."]}),"\n",(0,a.jsx)(t.p,{children:"The contract\u2019s balance will be greater than 0 when it is finally deployed."}),"\n",(0,a.jsx)(t.h2,{id:"block-gas-limit-dos",children:"Block Gas Limit DoS"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"block gas limit dos diagram",src:n(8909).A+"",width:"512",height:"234"})}),"\n",(0,a.jsxs)(t.p,{children:["There is a limit to how much computation can be included in a single Ethereum block, currently 10,000,000 gas worth. This means that if your smart contract reaches a state where a transaction requires more than 10,000,000 gas to execute, that transaction will never successfully execute (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-128",children:"SWC-128"}),"). It will always reach the block gas limit before finishing."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly, if the require gas for the transaction is sub 8,000,000, but close to it, you may have a harder time getting your transaction included in a block by a miner. It is more likely that if you send a transaction to the network with a startGas close to 8,000,000, a miner will not pick the transaction to include in a block. You can find more info about the default mining transaction ordering options in the most popular clients ",(0,a.jsx)(t.a,{href:"https://ethereum.stackexchange.com/questions/6107/what-is-the-default-ordering-of-transactions-during-mining-in-e-g-geth/6111#6111",children:"here."})]}),"\n",(0,a.jsxs)(t.p,{children:["This situation becomes possible if your contract loops over an array of undetermined size. If the array becomes too large it may never execute. A concrete sample of a dynamic array potentially resulting in a denial of service is available at the ",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-128",children:"SWC Registry entry here."})]}),"\n",(0,a.jsx)(t.h2,{id:"reentrancy",children:"Reentrancy"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"reentrancy attack diagram",src:n(7142).A+"",width:"512",height:"234"})}),"\n",(0,a.jsxs)(t.p,{children:["Reentrancy attacks (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-107",children:"SWC-107"}),") are very well-known thanks to the infamous DAO hack that happened on the Ethereum network. In a reentrancy attack, a vulnerable contract sends ether to an unknown address that contains a fallback function. Then, a malicious code calls back repeatedly a function in the vulnerable contract before the first call be finished."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'// Vulnerable contract\nfunction withdraw(uint _amount) public {    \n  require(balances[msg.sender] >= _amount, "Not enough balance!");    \n  msg.sender.call.value(_amount)("");    \n  balances[msg.sender] -= _amount;\n}\n\n// Malicious contract\nfunction () payable external {    \n  if(address(vulnerableContract).balance > 1 ether) {        \n    vulnerableContract.withdraw(1 ether);    \n  }\n}      \n'})}),"\n",(0,a.jsx)(t.p,{children:"If you can\u2019t remove the external call, the next simplest way to prevent this attack is to do the internal work before making the external function call."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"mapping (address => uint) private userBalances; // Better!\n\nfunction withdrawBalance() public {    \n  uint amountToWithdraw = userBalances[msg.sender];    \n  userBalances[msg.sender] = 0;    \n  \n  // The user's balance is already 0, so future invocations won't withdraw anything\n  require(msg.sender.call.value(amountToWithdraw)()); \n}  \n"})}),"\n",(0,a.jsx)(t.p,{children:"Or to use the withdrawal design pattern and separate the contract accounting logic and the transfer logic."}),"\n",(0,a.jsx)(t.p,{children:"Another thing to be aware of is potential cross function re-entrancy. This can be problematic if your contract has multiple functions that modify the same state."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"// INSECURE    \nmapping (address => uint) private userBalances;        \n\nfunction transfer(address to, uint amount) {        \n  if (userBalances[msg.sender] >= amount) {           \n    userBalances[to] += amount;           \n    userBalances[msg.sender] -= amount;        \n  }    \n}        \n\nfunction withdrawBalance() public {        \n  uint amountToWithdraw = userBalances[msg.sender];   \n  // At this point, the caller's code is executed, and can call transfer()\n  require(msg.sender.call.value(amountToWithdraw)());         \n  userBalances[msg.sender] = 0;    \n}  \n"})}),"\n",(0,a.jsx)(t.p,{children:"In this case, the attacker can call transfer() when their code is executed on the external call in withdrawBalance. Since their balance has not yet been set to 0, they are able to transfer the tokens even though they already received the withdrawal. This vulnerability was also used in the DAO attack."}),"\n",(0,a.jsx)(t.p,{children:"There are several ways to mitigate these problems."}),"\n",(0,a.jsx)(t.p,{children:"The first is the Check-Effect-Interaction design pattern we described earlier. It is generally a good idea to handle the flow of a function like so:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Check"})," Test condition. eg ",(0,a.jsx)(t.code,{children:"require"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Effect"})," Update state variable (eg update balance)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Interaction"})," Interact with external contract (eg send ether using ",(0,a.jsx)(t.code,{children:"call.value"}),")"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In short, you handle your internal contract state changes before calling external contracts."}),"\n",(0,a.jsxs)(t.p,{children:["A more complex solution could implement mutual exclusion, or a ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Lock_(computer_science)",children:"mutex."})," This allows you to lock a state and only allow changes by the owner of the lock. You can see an example of a mutex in Solidity ",(0,a.jsx)(t.a,{href:"https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21",children:"here."})]}),"\n",(0,a.jsxs)(t.p,{children:["You can dig deeper into known attacks such as these ",(0,a.jsx)(t.a,{href:"https://ethereum-contract-security-techniques-and-tips.readthedocs.io/en/latest/known_attacks/#race-conditions42",children:"here."})]}),"\n",(0,a.jsx)(t.h2,{id:"integer-under--overflow",children:"Integer Under / Overflow"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"integer under and overflow diagram",src:n(943).A+"",width:"512",height:"234"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Note: With the inclusion of SafeMath natively with Solidity 0.8.x, the likelihood of writing an integer under / overflow is unlikely. However, this is still an issue that exists in the wild and there are edge cases in which it could be achieved."})}),"\n",(0,a.jsxs)(t.p,{children:["Integers can underflow or overflow in the EVM (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-101",children:"SWC-101"}),"). This happens when an arithmetic value oversteps the minimum or maximum size of a type."]}),"\n",(0,a.jsx)(t.p,{children:"The max value for an unsigned integer is 2 ^ 256 - 1, which is roughly 1.15 times 10 ^ 77. If an integer overflows, the value will go back to 0. For example, a variable called score of type uint8 storing a value of 255 that is incremented by 1 will now be storing the value 0."}),"\n",(0,a.jsx)(t.p,{children:"You may or may not have to worry about integer overflow depending on your smart contract."}),"\n",(0,a.jsx)(t.p,{children:"A variable that can be set by user input may need to check against overflow, whereas it is infeasible that a variable that is incremented will ever approach this max value."}),"\n",(0,a.jsx)(t.p,{children:"Underflow is a similar situation, but when a uint goes below its minimum value it will be set to its maximum value."}),"\n",(0,a.jsx)(t.p,{children:"Be careful with smaller data types like uint8, uint16, etc\u2026 they can more easily reach their maximum value"}),"\n",(0,a.jsxs)(t.p,{children:["More information and concrete examples can be found at ",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-101",children:"the corresponding SWC Registry entry"})]}),"\n",(0,a.jsx)(t.h2,{id:"unexpected-revert-dos",children:"Unexpected Revert DoS"}),"\n",(0,a.jsxs)(t.p,{children:["This attack basically consists of make a vulnerable contract inoperable by forcing a failure or an awaiting situation, locking temporarily or permanently the contract execution (",(0,a.jsx)(t.a,{href:"https://swcregistry.io/docs/SWC-113",children:"SWC-113"}),")."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"// INSECURE  \ncontract Auction {      \n  address currentLeader;      \n  uint highestBid;        \n  \n  function bid() payable {          \n    require(msg.value > highestBid);            \n  \n    // Refund the old leader, if it fails then revert\n    require(currentLeader.send(highestBid));             \n    currentLeader = msg.sender;          \n    highestBid = msg.value;      \n  }  \n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the provided example, the ",(0,a.jsx)(t.code,{children:"highestBidder"})," could be another contract and transferring funds to the contract triggers the contract\u2019s fallback function. If the contract\u2019s fallback always reverts, the ",(0,a.jsx)(t.code,{children:"Auction"})," contract\u2019s bid function becomes unusable - it will always revert. The bid function requires the transfer operation to succeed to fully execute."]}),"\n",(0,a.jsx)(t.p,{children:"The contract at the provided address throws an exception, execution halts and the exception is passed into the calling contract and prevents further execution."}),"\n",(0,a.jsx)(t.p,{children:"This problem is avoidable using the withdrawal pattern and push-pull. You could also use a multisig contract, expire time or another technique as an emergency plan for possible lock situations."}),"\n",(0,a.jsxs)(t.h2,{id:"txorigin-authentication",children:[(0,a.jsx)(t.code,{children:"tx.origin"})," Authentication"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"tx.origin authentication diagram",src:n(5921).A+"",width:"512",height:"234"})}),"\n",(0,a.jsxs)(t.p,{children:["This kind of attack happens when a vulnerable contract uses ",(0,a.jsx)(t.code,{children:"tx.origin"})," for authentication. An attacker can induce the owner of the vulnerable contract make a call to a malicious contract. Then, a malicious code calls the vulnerable contract, taking advantage of the owner authorizations."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"// Vulnerable contract  \nfunction withdraw(address payable _recipient) public {      \n  require(tx.origin == owner);      \n  _recipient.transfer(address(this).balance);  \n}    \n\n// Malicious contract  \nfunction() external payable {      \n  vulnerableContract.withdraw(attackerAddress);  \n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["An example of this was the ",(0,a.jsx)(t.a,{href:"https://twitter.com/kelvinfichter/status/1425217046636371969",children:"Poly Network hack,"})," although not on the Ethereum network."]}),"\n",(0,a.jsxs)(t.p,{children:["There are always more attack vectors, be sure to look through the SWC registry,  ",(0,a.jsx)(t.a,{href:"https://twitter.com/ConsenSysAudits",children:"follow Diligence on Twitter"}),", or whatever source you need to make sure you stay up to date with security on Ethereum."]}),"\n",(0,a.jsx)(t.h2,{id:"additional-material",children:"Additional Material"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://consensys.github.io/smart-contract-best-practices/",children:"Wiki: Smart Contract Best Practices"})," and ",(0,a.jsx)(t.a,{href:"https://ethereum-contract-security-techniques-and-tips.readthedocs.io/en/latest/recommendations/",children:"Recommendations"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://medium.com/@danrobinson/ethereum-is-a-dark-forest-ecc5f0505dff",children:"Article: Ethereum is a Dark Forest"})," A long, comprehensive article discussing frontrunning from a first-person perspective. Got a lot of people's attention in the community around the topic."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/flashbots/pm",children:"Wiki: Flashbots"})," A collection of research and news about Miner Extracted Value and Frontrunning."]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://sunnya97.gitbooks.io/a-beginner-s-guide-to-ethereum-and-dapp-developme/smart-contract-best-practices.html",children:"Article: Smart Contract Bugs and Security Best Practices"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"http://hackingdistributed.com/2017/08/28/submarine-sends/",children:"Article: To Sink Frontrunners, Send in the Submarines"})," An article discussing a frontrunning defense mechanism"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21",children:"Article: Protect Your Solidity Smart Contracts from Reentrancy"})," Discusses mutex locks in Solidity."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7113:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-1-cfbd8469e848e7727a4a256f2d339310.png"},8930:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-2-f5cd7cd330a454c46eb04ab656b86ad8.png"},475:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-3-46745706b573b0b1c8972e76fe232f6a.png"},5668:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-4-4cbab54fd55efb1aee26a5a1d89dcb02.png"},8909:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-5-59201e8fb72db22e04248e7e9c0278c6.png"},7142:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-6-32a4f18ccc2b54b71e1168f3cc8ed321.png"},943:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-7-3a6a8e5ee313b8a1fc002be34b908d3b.png"},5921:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/swc-9-621d0c00c0b7cdccd580d9c9df3bf9b3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);