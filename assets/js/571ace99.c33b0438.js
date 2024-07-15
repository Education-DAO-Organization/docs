"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[1895],{5008:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=i(4848),o=i(8453);const a={},s="Bitcoin: History and Development",r={id:"courses/blockchain-developer-bootcamp/S01-fundamentals/M4-bitcoin/L1-history-and-development/index",title:"Bitcoin: History and Development",description:"Please note: People have written books about Bitcoin's history and development and this is just a section of our course. We'll be the first to admit that an overview of Bitcoin requires discretion on our part. Opinionated or controversial comments are flagged as best we can but, as always, we're hoping mainly to give a overview of the major points. Inevitably, we'll miss something.",source:"@site/docs/courses/blockchain-developer-bootcamp/S01-fundamentals/M4-bitcoin/L1-history-and-development/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S01-fundamentals/M4-bitcoin/L1-history-and-development",slug:"/courses/blockchain-developer-bootcamp/S01-fundamentals/M4-bitcoin/L1-history-and-development/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S01-fundamentals/M4-bitcoin/L1-history-and-development/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S01-fundamentals/M3-ag-blockchain/L4-when-to-use/"},next:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S01-fundamentals/M5-wallets/L1-what-is-a-wallet/"}},c={},l=[{value:"&quot;Bitcoin is Old Technology&quot;",id:"bitcoin-is-old-technology",level:2},{value:"Basic Technical Features",id:"basic-technical-features",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Material",id:"additional-material",level:2},{value:"History and Nakamoto",id:"history-and-nakamoto",level:3},{value:"Technical Features and Development",id:"technical-features-and-development",level:3},{value:"General Resources",id:"general-resources",level:3}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bitcoin-history-and-development",children:"Bitcoin: History and Development"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Please note: People have written books about Bitcoin's history and development and this is just a section of our course. We'll be the first to admit that an overview of Bitcoin requires discretion on our part. Opinionated or controversial comments are flagged as best we can but, as always, we're hoping mainly to give a overview of the major points. Inevitably, we'll miss something."})}),"\n",(0,n.jsx)(t.h2,{id:"bitcoin-is-old-technology",children:'"Bitcoin is Old Technology"'}),"\n",(0,n.jsx)(t.p,{children:'As we\'ve mentioned frequently, Bitcoin relies on decades of technological development. This has led to a meme "Bitcoin is Old Technology":'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"diagram showing technical developments over the past 40 years leading to Bitcoin launch",src:i(6750).A+"",width:"1600",height:"1112"})}),"\n",(0,n.jsxs)(t.p,{children:["Satoshi Nakamoto was aware of all these developments, and references them throughout ",(0,n.jsx)(t.a,{href:"https://bitcoin.org/bitcoin.pdf",children:"their whitepaper."}),' But Bitcoin actually started on a listserve and with Nakamoto sharing a piece of software they were building. It was initially simply called "Bitcoin" and was built using C++. Nakamoto also encouraged others to run the software and began gathering the early developers who ran the first distributed network.']}),"\n",(0,n.jsx)(t.p,{children:"Once the software was stable, Nakamoto released a whitepaper describing the concepts underpinning the software and referencing some of the older technologies it drew upon. By the release of the whitepaper, there was a growing community of developers interested in Bitcoin and discussing its future."}),"\n",(0,n.jsxs)(t.p,{children:["Famously, Nakamoto stepped back from the project in early 2011. In April of that year, Nakamoto posted their last update to ",(0,n.jsx)(t.a,{href:"https://en.bitcoin.it/wiki/Bitcoin_Core",children:"Bitcoin Core,"})," as the software was now known and gave developer credentials to the now-lead technical developer, ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Gavin_Andresen",children:"Gavin Andresen."})," (",(0,n.jsx)(t.a,{href:"https://bitcoinmagazine.com/technical/what-happened-when-bitcoin-creator-satoshi-nakamoto-disappeared",children:"source"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"Many have speculated about Satoshi Nakamoto's identity but their identity has never been definitively proven. There is a significant amount of bitcoin (some estimates say around one million bitcoin) Nakamoto mined during their time running the Bitcoin Core software. It's considered to be the best identity test for anyone claiming to be Nakamoto: Sign a cryptographic digital message with the private key associated with this bitcoin. It has never been done!"}),"\n",(0,n.jsx)(t.h2,{id:"basic-technical-features",children:"Basic Technical Features"}),"\n",(0,n.jsx)(t.p,{children:"We'll briefly touch on two main technical parts of the Bitcoin network: The UTXO transaction model and the Script smart-contract language."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The Unspent Transaction Output or ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Unspent_transaction_output",children:"UTXO"})}),' model is the fundamental building block of transactions in the Bitcoin network. Per Wikipedia: "Each UTXO is analogous to a coin, and holds a certain amount of value in its respective currency. Each UTXO represents a chain of ownership implemented as a chain of digital signatures where the owner signs a message (transaction) transferring ownership of their UTXO to the receiver\'s public key." The UTXO model is in contrast to the ',(0,n.jsx)(t.a,{href:"https://ethereum.stackexchange.com/questions/326/what-are-the-pros-and-cons-of-ethereum-balances-vs-utxos",children:"account model"})," that Ethereum tracks value in the network"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Many don't realize this, but Bitcoin does actually technically have a programming language it uses, called ",(0,n.jsx)(t.a,{href:"https://en.bitcoin.it/wiki/Script",children:"Script,"})," which is based off the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Forth_(programming_language)",children:"Forth"})," programming language. It's very limited in its capacity, but you can read about some of its capacity in ",(0,n.jsx)(t.a,{href:"https://github.com/bitcoinbook/bitcoinbook",children:"Mastering Bitcoin"})," in the ",(0,n.jsx)(t.a,{href:"https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch07.asciidoc",children:'"Advanced Transactions and Scripting"'})," chapter."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"It's sometimes easy for others to find fault with Bitcoin and the Bitcoin community. However, it's important to note Bitcoin's contribution to the world, both specifically to blockchains but also to distributed networks generally. We can't go as deep as we'd like to (we can't, but we'd like to talk about the Segregated Witness development and the more recent Taproot fork), but we'd encourage you to at least checkout the whitepaper. At this point, you should be able to understand all the concepts in it!"}),"\n",(0,n.jsx)(t.p,{children:"Here are some great resources for reading the whitepaper, which can be intimidating on its own:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://fermatslibrary.com/s/bitcoin",children:"Fermat's Library: Bitcoin Whitepaper Annotated"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://genius.com/Satoshi-nakamoto-bitcoin-a-peer-to-peer-electronic-cash-system-annotated",children:"Genius.com's Annotation of Bitcoin White Paper"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"additional-material",children:"Additional Material"}),"\n",(0,n.jsx)(t.h3,{id:"history-and-nakamoto",children:"History and Nakamoto"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Bitcoin",children:"Wikipedia: Bitcoin"})," A general overview of Bitcoin from our favorite hive mind encyclopedia."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/coinmonks/exploring-bitcoins-history-ecbf1c59952c",children:"Article: Exploring Bitcoin's History"})," A very long, but thorough, article discussing all the technology building up to Bitcoin, including TCP/IP, Elliptic Curve Cryptography, time-stamp servers, smart contracts and more."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.newyorker.com/magazine/2011/10/10/the-crypto-currency",children:"Article: The Crypto-Currency"})," An article discussing Bitcoin and it's mysterious creator Satoshi Nakamoto, from October 2011"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.technologyreview.com/2011/05/25/194486/what-bitcoin-is-and-why-it-matters/",children:"Article: What Bitcoin Is and Why It Matters (MIT)"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://bitcoinmagazine.com/technical/what-happened-when-bitcoin-creator-satoshi-nakamoto-disappeared",children:"Article: What Happened When Bitcoin Creator Satoshi Nakamoto Disappeared (Bitcoin Magazine)"})," An article charting the rise of Nakamoto, the community of developers who grew around the project, and the eventual disappearance of Nakamoto from the project in 2011."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"technical-features-and-development",children:"Technical Features and Development"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/bitcoinbook/bitcoinbook",children:"Book: Mastering Bitcoin"})," Considered to be the best-in-class introduction to Bitcoin development."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch07.asciidoc",children:"Tutorial: Advanced Transactions"}),' Section from "Mastering Bitcoin" about Script\'s more advanced features.']}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"general-resources",children:"General Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://berkeley-haas.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c29702dd-1b12-4436-87d4-a87100137a6e",children:"Online Course: What is Money? (UC Berkeley)"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/@mariabustillos/you-dont-understand-bitcoin-because-you-think-money-is-real-5aef45b8e952",children:"Article: You Don't Understand Bitcoin Because You Think Money is Real"})," A favorite article of ours!"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.lrb.co.uk/v38/n08/john-lanchester/when-bitcoin-grows-up",children:"Article: What is Money? (London Review of Books)"})," Sort-of paywalled, but a think piece about the implications of Bitcoin from April 2016."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819",children:"Article: What the Heck is UTXO?"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6750:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/bitcoin-old-tech-4fa1d8078dbe94b33c4c380f58e058fd.jpeg"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);