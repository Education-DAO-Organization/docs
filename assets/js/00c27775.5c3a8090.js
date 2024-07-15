"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[62],{3268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(4848),o=r(8453);const i={},s=void 0,c={id:"courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part2",title:"project-guide-part2",description:"Exercise Prompt",source:"@site/docs/courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part2.md",sourceDirName:"courses/blockchain-developer-bootcamp/study-guides/en",slug:"/courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part2",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part2",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"project-guide-part1",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part1"},next:{title:"project-guide-part3",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/study-guides/en/project-guide-part3"}},a={},l=[{value:"Exercise Prompt",id:"exercise-prompt",level:2},{value:"Exercise Concept",id:"exercise-concept",level:2},{value:"Exercise Parts",id:"exercise-parts",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"exercise-prompt",children:"Exercise Prompt"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Write the Solidity architecture (function names and their inputs and outputs) for the smart contracts for your final project. Upload it to the Github repo you made in Chapter 1."})}),"\n",(0,n.jsx)(t.h2,{id:"exercise-concept",children:"Exercise Concept"}),"\n",(0,n.jsx)(t.p,{children:"Since the last exercise, you've learned:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Background of the Ethereum network"}),"\n",(0,n.jsx)(t.li,{children:"How accounts, transactions and state is stored on the Ethereum network"}),"\n",(0,n.jsx)(t.li,{children:"How to run an Ethereum client"}),"\n",(0,n.jsx)(t.li,{children:"How Smart Contracts fit into our blockchain mental model"}),"\n",(0,n.jsx)(t.li,{children:"How to use Truffle"}),"\n",(0,n.jsx)(t.li,{children:"Solidity fundamentals"}),"\n",(0,n.jsx)(t.li,{children:"Smart contract design patterns"}),"\n",(0,n.jsx)(t.li,{children:"Security pitfalls and attack vectors"}),"\n",(0,n.jsx)(t.li,{children:"Options for checking and protecting your application"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For this exercise, we'd like you to take your understanding of smart contracts and apply it to your final project."}),"\n",(0,n.jsxs)(t.p,{children:["Specifically, we'd like you to think about the ",(0,n.jsx)(t.strong,{children:"single workflow for the future user of your project"})," you wrote in the first exercise. For that workflow, write out the basic smart contract functions that will be required.  You don't have to write the Solidity logic yet!"]}),"\n",(0,n.jsx)(t.h2,{id:"exercise-parts",children:"Exercise Parts"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"1. As a first step, just write the function name, what inputs the function requires and what it might return. Start a new file in your Github repo and start to sketch the functions."})}),"\n",(0,n.jsx)(t.p,{children:"Here's what that might look like for our voting example from the first exercise:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"1. Users will have to register themselves somehow on the contract"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function registerVoter(address \\_voter) {\r\n\r\n`\t`// registers voter\r\n\r\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"2. They have to identify which campaign their voting on"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function registerVote(uint campaignID) {\r\n\r\n`\t`// registers the vote of the voter\r\n\r\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"3. They'll have to submit a vote for that campaign but 4. they can't vote twice for a single campaign."})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"modifier onlyVoteOnce() {\r\n\r\n`\t`// checks the vote hasn't voted before\r\n\r\n`\t`\\_\r\n\r\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Again, you don't have to write the internal logic quite yet (although you can). ",(0,n.jsx)(t.strong,{children:"The point is to have to start to think about the user's behaviors in terms of discrete actions and what those actions require."})," You can see in the example above how we already start to have a sense of some global variables the contract will require to execute these functions. That's the point of this exercise, ",(0,n.jsx)(t.strong,{children:"to start understanding the general contours of how a user will interact with your smart contract code."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"2. Once you have four to five functions sketched out, commit and push the change to your existing final project Github repo."})," Once you've pushed to the repo, share your link with your study group or sessions or in the Discord!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/YOUR_GITHUB_USERNAME_HERE/blockchain-developer-bootcamp-final-project",children:(0,n.jsx)(t.strong,{children:"https://github.com/YOUR_GITHUB_USERNAME_HERE/education-dao-final-project"})})}),"\n",(0,n.jsx)(t.p,{children:"Happy sketching!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(6540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);