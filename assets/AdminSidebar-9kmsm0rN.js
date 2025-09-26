import{u as c,r as h,j as n,L as t}from"./index-WZEl8LPb.js";import{c as d}from"./createLucideIcon-BcqCaUGd.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],x=d("chevron-down",p);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b=d("chevron-right",u),f=()=>{const o=c(),[l,r]=h.useState({}),i=e=>{r(a=>({...a,[e]:!a[e]}))},m=[{name:"Dashboard",path:"/admin/dashboard"},{name:"Manage",children:[{name:"Dealers",path:"/admin/dealers"},{name:"Colonies",path:"/admin/colonies-List"},{name:"Blogs",path:"/admin/blogs"},{name:"Docs",path:"/admin/docs"}]},{name:"Colonies",children:[{name:"Add Colonies",path:"/admin/Add-colonies-form"},{name:"Colonies List",path:"/admin/colonies-List"},{name:"Colonies Map",path:"/admin/colonies"}]},{name:"Reports",path:"/admin/reports"}];return n.jsxs("aside",{className:"w-64 min-h-screen bg-white border-r px-4 py-6",children:[n.jsx("h2",{className:"text-xl font-bold text-blue-700 mb-6",children:"Admin Panel"}),n.jsx("nav",{className:"space-y-2",children:m.map(e=>{if(e.children){const a=l[e.name];return n.jsxs("div",{children:[n.jsxs("button",{onClick:()=>i(e.name),className:"flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 text-gray-700",children:[n.jsx("span",{children:e.name}),a?n.jsx(x,{size:16}):n.jsx(b,{size:16})]}),a&&n.jsx("div",{className:"ml-4 space-y-1",children:e.children.map(s=>n.jsx(t,{to:s.path,className:`block px-4 py-1 rounded-md text-sm hover:bg-blue-100 ${o.pathname===s.path?"bg-blue-100 text-blue-800 font-semibold":"text-gray-600"}`,children:s.name},s.path))})]},e.name)}else return n.jsx(t,{to:e.path,className:`block px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 ${o.pathname===e.path?"bg-blue-100 text-blue-800 font-semibold":"text-gray-700"}`,children:e.name},e.path)})})]})};export{f as A};
