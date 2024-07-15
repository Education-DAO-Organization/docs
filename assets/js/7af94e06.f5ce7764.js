"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[8127],{2696:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(4848),n=t(8453);const r={},s="Blockchain Agnostic Developer Workflow",a={id:"courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L4-ag-dev-workflow/index",title:"Blockchain Agnostic Developer Workflow",description:"It's no surprise by now that, in this course, we want to give you frameworks to help you approach the complicated business of blockchain development. In this section, we're hoping to give you a sense of the general workflow you'll be doing as a developer while developing a distributed application (\"dapp\" or smart contract + interface) on any blockchain.",source:"@site/docs/courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L4-ag-dev-workflow/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L4-ag-dev-workflow",slug:"/courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L4-ag-dev-workflow/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L4-ag-dev-workflow/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"index",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S04-developer-tooling/M1-intro/L3-trad-vs-dapp-dev/"},next:{title:"Web 3 JavaScript Libraries",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S04-developer-tooling/M2-web3-libraries/L1-intro-web3-ethers/"}},l={},c=[{value:"Lifecycle of a Project",id:"lifecycle-of-a-project",level:2},{value:"Developer Tooling",id:"developer-tooling",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Advanced Developer Tooling",id:"advanced-developer-tooling",level:2},{value:"Additional Materials",id:"additional-materials",level:2}];function h(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"blockchain-agnostic-developer-workflow",children:"Blockchain Agnostic Developer Workflow"}),"\n",(0,i.jsx)(o.p,{children:"It's no surprise by now that, in this course, we want to give you frameworks to help you approach the complicated business of blockchain development. In this section, we're hoping to give you a sense of the general workflow you'll be doing as a developer while developing a distributed application (\"dapp\" or smart contract + interface) on any blockchain."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.em,{children:["Note: This is ",(0,i.jsx)(o.em,{children:"not"})," the workflow of a protocol designer, which is a more traditional project-based work environment based on the development language"]})}),"\n",(0,i.jsx)(o.h2,{id:"lifecycle-of-a-project",children:"Lifecycle of a Project"}),"\n",(0,i.jsx)(o.p,{children:"Let's see the overall lifecycle of a dapp project:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"diagram showing the overall lifecycle of a dapp project",src:t(502).A+"",width:"960",height:"540"})}),"\n",(0,i.jsxs)(o.p,{children:["Perhaps the most important work you can do as a developer is the first step: ",(0,i.jsx)(o.em,{children:"Determine the scope and goals of your project."})," This does not require ",(0,i.jsx)(o.em,{children:"any"})," code at all, but it will save you so much time in the future. It's essentially creating the roadmap for your application and, when things get complicated, you'll be able to refer back to it for clarity. (This step should be familiar as the first exercise in the course was for you to do this step for your final project!)"]}),"\n",(0,i.jsxs)(o.p,{children:["Next comes the ",(0,i.jsx)(o.em,{children:"Architectural and Technical Design"}),": Sketching out the technical parameters of your project. What will your smart contract function parameters look like? Where will you do storage? How will you divide on-chain and off-chain logic? If your project involves others, how will you implement governance? How do you plan to scale?"]}),"\n",(0,i.jsxs)(o.p,{children:["Next is the ",(0,i.jsx)(o.em,{children:"Development"})," phase, which is typically what people think the ",(0,i.jsx)(o.em,{children:"only"})," phase. Please note that this is the ",(0,i.jsx)(o.em,{children:"third"})," step in building a project (Planning is so important)! We'll drill deeper into this step later in the section, but it's primarily the building and testing of your smart contract and interface. In this step, you'll leverage framework development tools, like Truffle or Hardhat, as well as testing tools, like testing suites and testnets. You'll also be referring to the notes you've made in the previous two steps, being sure to stay within the guidelines you made for yourself."]}),"\n",(0,i.jsxs)(o.p,{children:["Next comes ",(0,i.jsx)(o.em,{children:"Security Audit."})," We've already heard about Diligence and security tools such as MythX, Scribble, Slither or Manticore. For projects that could potentially hold enormous value this step is ",(0,i.jsx)(o.em,{children:"critical"})," and should not be overlooked. It can sometimes be challenging to find a team or project to audit your code, but it is worth the effort considering the potential downside!"]}),"\n",(0,i.jsxs)(o.p,{children:["Simultaneous with an audit, you might be running the next step, ",(0,i.jsx)(o.em,{children:"Bug Bounty and Community,"})," meaning somehow starting to ask your community to test-drive your project. Note, this is before an official, version 1.0 release."]}),"\n",(0,i.jsxs)(o.p,{children:["Last, after all these steps, is the ",(0,i.jsx)(o.em,{children:"Launch"}),". You may have already stealthily deployed your contract, assuming you've done all the testing and auditing, but this is where you announce the interface and let folks know that it's ready to go! As we'll see next, in some ways your work has just begun, but at least you've gotten your project launched into the world!"]}),"\n",(0,i.jsx)(o.h2,{id:"developer-tooling",children:"Developer Tooling"}),"\n",(0,i.jsxs)(o.p,{children:["We're now going to drill into the ",(0,i.jsx)(o.strong,{children:"Development"})," phase mentioned above. This is probably what we all think of when we think about developing application for the blockchain. Here's a simplified oveview of what a development flow looks like at the beginning of a project:"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"simplified developer tooling",src:t(580).A+"",width:"960",height:"720"})}),"\n",(0,i.jsxs)(o.p,{children:["Here we see the developer (you) working mainly from their code editor, in which they'll have both the smart contracts ",(0,i.jsx)(o.em,{children:"and"})," whatever frontend interface they're working on. The code editor will be stocked with the most helpful general extensions as well as specific smart contract extensions, such as the ",(0,i.jsx)(o.a,{href:"https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity",children:"Solidity extension"})," for VSCode as well as tools to help with gas estimation or contract sizing. Next, the developer will have a framework that they're using to deploy the smart contract and interface. In the image above, the developer is using Truffle to build their contracts, hold the build artifacts, run tests and deploy to a testnet. There are other options as well, such as ",(0,i.jsx)(o.a,{href:"https://hardhat.org/",children:"Hardhat"}),", ",(0,i.jsx)(o.a,{href:"https://github.com/austintgriffith/scaffold-eth",children:"Scaffold-Eth"}),", and ",(0,i.jsx)(o.a,{href:"https://eth-brownie.readthedocs.io/en/stable/",children:"Brownie"}),", to name some of the more popular ones."]}),"\n",(0,i.jsxs)(o.p,{children:["The developers will be then having some private testnet tool they're using to deploy the smart contract in the early stages. This will be Ganache for us, since we're using Truffle. As we continue to become more confident in our development process, we may want to deploy to a public testnet. For this, we will use either an Ethereum node we have on our machine or we'll use a gateway service like ",(0,i.jsx)(o.a,{href:"https://infura.io",children:"Infura"}),", which will allow us to easily deploy to an Ethereum testnet, Ethereum mainnet, or even networks like Polygon, Arbitrum or Optimism. (If we're starting to lose you, don't worry we'll cover all these things later in the course!)"]}),"\n",(0,i.jsx)(o.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsxs)(o.p,{children:["One thing that seems trivial but is incredibly important is the ",(0,i.jsx)(o.code,{children:".env"})," file for your project. These are the local environmental variables that allow you to deploy your application to the public blockchain network. It also is the best way to ensure you don't expose your private keys or any other sensitive information when you're developing. Particularly when you're pushing material to a git repository, it's easy for folks to forget they've included sensitive information. There are definitely bots that are continually scanning GitHub for private keys that will immediately be compromised."]}),"\n",(0,i.jsxs)(o.p,{children:["Please read ",(0,i.jsx)(o.a,{href:"https://consensys.net/blog/developers/how-to-avoid-uploading-your-private-key-to-github-approaches-to-prevent-making-your-secrets-public/",children:"this article"})," about how to keep your development environment safe by using a ",(0,i.jsx)(o.code,{children:".env"})," file and other essential techniques!"]}),"\n",(0,i.jsx)(o.p,{children:"These environment variables are also useful to adapt your application to different networks. For example, you may want to use a different contract address on the mainnet than you do on a testnet. You can use environment variables to make this happen."}),"\n",(0,i.jsx)(o.h2,{id:"advanced-developer-tooling",children:"Advanced Developer Tooling"}),"\n",(0,i.jsx)(o.p,{children:"As you become more familiar with blockchain development and as your project grows, so will your toolset and workflow. Below is a diagram showing a more expansive development lifecycle that includes auditing, scaling, monitoring and advanced onboarding of users:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"advanced developer tooling",src:t(4477).A+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(o.p,{children:"(We're using ConsenSys products here mainly for reference, since we've discussed many of them so far.)"}),"\n",(0,i.jsx)(o.p,{children:"We'll get into these tools more but it's a bit beyond the scope of this lesson. In the next few sections, however, you'll become more familiar with the tools and mechanisms shown here."}),"\n",(0,i.jsx)(o.h2,{id:"additional-materials",children:"Additional Materials"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://remix.ethereum.org",children:"Remix Interface"})," The original IDE for Ethereum! Well, probably not the original, but still the best first place to go to start Solidity development."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://courses.consensys.net/courses/bootcamp-basic-training",children:"Basic Training: Code Editors, VSCode Extensions"})," I know, I know, you're super sick of hearing about Basic Training. Fair! But you should be sure to install all the VSCode extensions in this section of Basic Training, since it will help with development!"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://consensys.net/blog/developers/how-to-avoid-uploading-your-private-key-to-github-approaches-to-prevent-making-your-secrets-public/",children:"Tutorial: Using an .env file to keep your secrets safe"})," Essential reading!"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Good Extensions to Know About"})," ",(0,i.jsx)(o.a,{href:"https://www.npmjs.com/package/hardhat-contract-sizer",children:"Hardhat-contract-sizer"}),", ",(0,i.jsx)(o.a,{href:"https://www.npmjs.com/package/hardhat-gas-reporter",children:"hardhat-gas-reporter"})]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://www.replit.com",children:"Replit"})," Still exploring this one, but really good potential for troubleshooting code with friends. Not blockchain specific!"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://www.tbray.org/ongoing/When/202x/2021/05/15/Testing-in-2021",children:"Testing in the Twenties"})," Really good general advice about testing!"]}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://blog.oliverjumpertz.dev/how-to-set-up-a-solidity-project-and-create-your-first-smart-contract",children:"How to Setup a Solidity Project"})}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},502:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/ag-dev-mm-1-45dcc369b672580bd78f19748a2b156b.png"},4477:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/ag-dev-mm-2-8aa2d5c32798e8816d06173bf07f515a.png"},580:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/ag-dev-mm-3-eb3368a93352b481abf8ccfb2ec3cff1.png"},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var i=t(6540);const n={},r=i.createContext(n);function s(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);