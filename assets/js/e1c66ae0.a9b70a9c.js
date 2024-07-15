"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[9702],{8750:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=s(4848),n=s(8453);const a={},r=void 0,i={id:"courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L2-gas-and-fees/index",title:"index",description:"We want to stress the distinction between Gas Cost,\xa0gas limit vs. gas price vs. gas cost vs. gas fee.",source:"@site/docs/courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L2-gas-and-fees/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L2-gas-and-fees",slug:"/courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L2-gas-and-fees/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L2-gas-and-fees/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L1-txns/"},next:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S02-ethereum/M3-state/L3-eth-structure/"}},c={},h=[];function d(e){const t={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["We want to stress the distinction between Gas Cost,\xa0",(0,o.jsx)(t.strong,{children:"gas limit vs. gas price vs. gas cost vs. gas fee."})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Gas"}),'\xa0Special unit denoting how much computation work each EVM op-code uses. \xa0"Every operation that can be performed by a transaction or contract on the Ethereum platform costs a certain number of gas" Gas does not have a financial value associated with it because "ether, like bitcoins, have a market price that can change rapidly! But the cost of computation doesn\'t go up or down just because the price of ether changes. So it\'s helpful to separate out the price of computation from the price of the ether token, so that the cost of an operation doesn\'t have to be changed every time the market moves." (',(0,o.jsx)(t.a,{href:"https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas",children:"source"}),")"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Gas Cost"}),"\xa0amount of gas for each EVM opcode operation implied by your transaction. The gas cost of an operation is predetermined by the Ethereum Yellow Paper, you have developer tools or a wallet to add up the cost of your transactions."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Gas Price"}),"\xa0The amount of ether required by network multiplied by Gas Cost"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Gas Limit"}),"\xa0The maximum amount of gas that could be used by the transaction."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Transaction Fee"}),"\xa0The total amount of ether you spend on a transaction. After 1559, this means the base fee + the miner tip."]}),"\n",(0,o.jsx)(t.p,{children:'Please note, unfortunately these terms are not standardized. For example, the Ethereum Yellow Paper groups what we\'re calling "Gas Cost" under a section titled "Appendix H: Fee Schedule." We\'re proposing the above terminology to help you separate between the computation cost and limits and the price of including your transaction in a block.'}),"\n",(0,o.jsx)(t.p,{children:"(Thank you to Nichanan Kesonpat for suggesting the above explainer. Any resulting confusion is strictly on our part, however!)"}),"\n",(0,o.jsx)(t.p,{children:"Additional Resources:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas",children:"What is Meant By the Term Gas? -- Stackexchange"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://ethereum.github.io/yellowpaper/paper.pdf",children:"Ethereum Yellow Paper"}),'\xa0(Gas costs appear in "Appendix G: Fee Schedule")']}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0",children:"Gas Costs as Outlined in Yellow Paper (Spreadsheet)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://media.consensys.net/ethereum-gas-fuel-and-fees-3333e17fe1dc",children:"Ethereum, Gas, Fuel and Fees -- Consensys Media"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://ethgasstation.info/",children:"EthGasStation"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/crytic/evm-opcodes",children:"EVM Opcodes and Instruction -- Trail of Bits"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://www.gasnow.org/",children:"GasNow.org"}),"\xa0Up-to-date gas estimates"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var o=s(6540);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);