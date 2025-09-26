import{j as e,P as i,L as l}from"./index-BT6BxMWr.js";import{c as t}from"./createLucideIcon-BNaKdc4A.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],r=t("file-search",a);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],n=t("file-text",o);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],p=t("map-pin",d);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],m=t("message-circle",h);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],u=t("triangle-alert",x),y=[{title:"Check Legality",description:"Search by colony name or property number to view legal status.",icon:e.jsx(r,{className:"w-6 h-6 text-blue-600"}),link:"/public/search",color:"blue"},{title:"View Colony Map",description:"See approved and illegal colonies on interactive map.",icon:e.jsx(p,{className:"w-6 h-6 text-green-600"}),link:"/public/map",color:"green"},{title:"Report Fraud",description:"Report unauthorized or suspicious colonies and agents.",icon:e.jsx(u,{className:"w-6 h-6 text-red-600"}),link:"/public/report-fraud",color:"red"},{title:"View Documents",description:"Access CLU, Registry, DTCP, MCF or license documents.",icon:e.jsx(n,{className:"w-6 h-6 text-yellow-600"}),link:"/public/documents",color:"yellow"},{title:"Submit Feedback",description:"Share your suggestions or report issues to improve the platform.",icon:e.jsx(m,{className:"w-6 h-6 text-purple-600"}),link:"/public/feedback",color:"purple"}],k=()=>e.jsxs("div",{className:"flex",children:[e.jsx(i,{}),e.jsxs("div",{className:"flex-1 p-8 bg-gray-50 min-h-screen",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-700",children:"Welcome, Public User 👋"}),e.jsx("p",{className:"text-gray-600 mt-2",children:"Quickly check legality, explore maps, report fraud, or view documents."})]}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:y.map((s,c)=>e.jsx(l,{to:s.link,className:"bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 transition",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-3 rounded-full bg-${s.color}-100 flex items-center justify-center`,children:s.icon}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:s.title}),e.jsx("p",{className:"text-sm text-gray-500",children:s.description})]})]})},c))})]})]});export{k as default};
