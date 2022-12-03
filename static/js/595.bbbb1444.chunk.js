"use strict";(self.webpackChunkcontact_manager=self.webpackChunkcontact_manager||[]).push([[595],{595:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(165),s=n(861),c=n(982),i=n(885),o=n(118),l=n(184);function r(e){var t=e.onCheck,n=e.checkAll;return(0,l.jsx)("div",{className:"ListHeader",children:(0,l.jsxs)("div",{className:"ListHeader-row",children:[(0,l.jsx)("div",{className:"ListHeader-item",children:(0,l.jsxs)("label",{className:"checkbox",children:[(0,l.jsx)("input",{name:"checkAll",type:"checkbox",checked:n,onChange:t}),(0,l.jsx)("span",{})]})}),(0,l.jsx)("div",{className:"ListHeader-item row-item-2 row-item",children:"NAME"}),(0,l.jsx)("div",{className:"ListHeader-item row-item-3 row-item",children:"EMAIL"}),(0,l.jsx)("div",{className:"ListHeader-item row-item-4 row-item",children:"PHONE"}),(0,l.jsx)("div",{className:"ListHeader-item row-item-5 row-item",children:"PROFESSION"}),(0,l.jsx)("div",{className:"ListHeader-item row-item-6 row-item"})]})})}var d=n(693),u=n(806),m=n(632);function h(e){var t=e.id,n=e.contact,a=e.contacts,s=e.setContacts,c=e.setNewContact,i=e.cardViewState,o=e.inlineEditState,r=e.checkedIdArr,h=e.onPopupContactEdit,p=e.onInlineContactEdit,f=e.onCheck;return(0,l.jsxs)("div",{className:i?"ListItem-card":r.includes(t)?"ListItem-row itemRowInlineStyle":"ListItem-row",children:[(0,l.jsx)("div",{className:i?"ListItem-card-item":"ListItem-item",children:(0,l.jsxs)("label",{className:"checkbox",children:[(0,l.jsx)("input",{type:"checkbox",name:"checkItem",checked:r.includes(t),onChange:function(e){f(e,t)}}),(0,l.jsx)("span",{})]})}),(0,l.jsxs)("div",{className:i?"ListItem-card-item":"ListItem-item row-item-2 row-item",children:[n.avatar,n.firstName," ",n.lastName]}),(0,l.jsxs)("div",{className:i?"ListItem-card-item":"ListItem-item row-item-3 row-item",children:[i?(0,l.jsx)("p",{className:"ListItem-carView-subtitle",children:"Email"}):null,(0,l.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})]}),(0,l.jsxs)("div",{className:i?"ListItem-card-item":"ListItem-item row-item-4 row-item",children:[i?(0,l.jsx)("p",{className:"ListItem-carView-subtitle",children:"Phone"}):null,(0,l.jsxs)("a",{href:"tel:".concat(n.phone),children:[n.phone," "]})]}),(0,l.jsxs)("div",{className:i?"ListItem-card-item":"ListItem-item row-item-5 row-item",children:[i?(0,l.jsx)("p",{className:"ListItem-carView-subtitle",children:"Profession"}):null,n.profession]}),(0,l.jsx)("div",{className:i?"ListItem-card-item":"ListItem-item row-item-6 row-item",children:(0,l.jsxs)("div",{className:"ListItem-icon-group",children:[(0,l.jsx)(u.G,{icon:m.iDc,onClick:function(){c({id:n.id,firstName:n.firstName,lastName:n.lastName,phone:n.phone,email:n.email,profession:n.profession}),o?i||p(n):h(n)}}),(0,l.jsx)(u.G,{icon:m.Kl4,onClick:function(){(0,d.bY)(n,a,s)}})]})})]})}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=n(791);function j(e){var t=e.title,n=e.button,a=e.contact,s=e.contacts,c=e.setContacts,o=e.setPopupContactStatus,r=(0,N.useState)(a),u=(0,i.Z)(r,2),m=u[0],h=u[1],p=(0,N.useState)(a),f=(0,i.Z)(p,2),j=f[0],C=f[1];return(0,l.jsx)("div",{className:"PopupContact-mask",onClick:function(e){"PopupContact-mask"===e.target.className&&o(null)},children:(0,l.jsxs)("form",{className:"PopupContact-container swal2-show",children:[(0,l.jsx)("h1",{className:"PopupContact-title",children:t}),(0,l.jsxs)("label",{className:"PopupContact-item",children:[(0,l.jsx)("h3",{children:"First Name"}),(0,l.jsx)("input",{className:"PopupContact-input",type:"text",value:"Add"===n?j.firstName:m.firstName,onChange:function(e){"Add"===n?C(x(x({},j),{},{firstName:e.target.value})):h(x(x({},m),{},{firstName:e.target.value}))}})]}),(0,l.jsxs)("label",{className:"PopupContact-item",children:[(0,l.jsx)("h3",{children:"Last Name"}),(0,l.jsx)("input",{className:"PopupContact-input",type:"text",value:"Add"===n?j.lastName:m.lastName,onChange:function(e){"Add"===n?C(x(x({},j),{},{lastName:e.target.value})):h(x(x({},m),{},{lastName:e.target.value}))}})]}),(0,l.jsxs)("label",{className:"PopupContact-item",children:[(0,l.jsx)("h3",{children:"Email"}),(0,l.jsx)("input",{className:"PopupContact-input",type:"text",value:"Add"===n?j.email:m.email,onChange:function(e){"Add"===n?C(x(x({},j),{},{email:e.target.value})):h(x(x({},m),{},{email:e.target.value}))}})]}),(0,l.jsxs)("label",{className:"PopupContact-item",children:[(0,l.jsx)("h3",{children:"Phone"}),(0,l.jsx)("input",{className:"PopupContact-input",type:"text",value:"Add"===n?j.phone:m.phone,onChange:function(e){"Add"===n?C(x(x({},j),{},{phone:e.target.value})):h(x(x({},m),{},{phone:e.target.value}))}})]}),(0,l.jsxs)("label",{className:"PopupContact-item",children:[(0,l.jsx)("h3",{children:"Profession"}),(0,l.jsx)("input",{className:"PopupContact-input",type:"text",value:"Add"===n?j.profession:m.profession,onChange:function(e){"Add"===n?C(x(x({},j),{},{profession:e.target.value})):h(x(x({},m),{},{profession:e.target.value}))}})]}),(0,l.jsxs)("div",{className:"PopupContact-btn-group",children:[(0,l.jsx)("button",{className:"PopupContact-btn",type:"button",onClick:function(){(0,d.Cf)(n,s,c,a,m,j,o,C)},children:n}),(0,l.jsx)("button",{className:"PopupContact-btn",type:"button",onClick:function(){o(null)},children:"Cancel"})]})]})})}var C=[{label:"",value:""},{label:"First Name",value:"firstName"},{label:"Last Name",value:"lastName"},{label:"Phone",value:"phone"},{label:"Email",value:"email"},{label:"Profession",value:"profession"}],v={"First Name":"firstName","Last Name":"lastName",Phone:"phone",Email:"email",Profession:"profession"};function b(e){var t=e.setSearchText,n=e.setSelect;return(0,l.jsxs)("div",{className:"search-box",children:[(0,l.jsx)("input",{type:"text",name:"",id:"",placeholder:"Search",onChange:function(e){t(e.target.value)}}),(0,l.jsx)("select",{className:"select",onChange:function(e){n(e.target.value)},children:C.map((function(e){return(0,l.jsx)("option",{className:"selectOption",children:e.label},e.label)}))})]})}function g(e){var t=e.setSelect,n=e.setSearchText,a=e.onPopupContactAdd,s=e.onCheck,c=e.onDeleteChecked,i=e.checkedIdArr,o=e.checkAll,r=e.cardViewState;return(0,l.jsxs)("div",{className:"ListBtnSection",children:[r?(0,l.jsxs)("div",{className:"ListBtnSection-cardView-btn-group",children:[(0,l.jsxs)("label",{className:"checkbox ListBtnSection-checkAll",children:[(0,l.jsx)("input",{name:"checkAll",type:"checkbox",checked:o,onChange:s}),(0,l.jsx)("span",{})]}),(0,l.jsx)("button",{type:"button",className:0!==i.length?"ListBtnSection-delete-checked-button":"ListBtnSection-delete-checked-button-disable",onClick:c,children:"Delete Checked"})]}):(0,l.jsx)("button",{type:"button",className:0!==i.length?"ListBtnSection-delete-checked-button":"ListBtnSection-delete-checked-button-disable",onClick:c,children:"Delete Checked"}),(0,l.jsxs)("div",{className:"ListBtnSection-group",children:[(0,l.jsx)(b,{setSearchText:n,setSelect:t}),(0,l.jsx)("button",{className:"ListBtnSection-add-button",onClick:a,children:"Add"})]})]})}function k(e){var t=e.contact,n=e.button,a=e.contacts,s=e.setContacts,c=e.setInlineContactStatus,o=(0,N.useState)(t),r=(0,i.Z)(o,2),h=r[0],p=r[1],f=(0,N.useState)(t),j=(0,i.Z)(f,2),C=j[0],v=j[1];return(0,l.jsxs)("form",{className:"inlineContact",children:[(0,l.jsx)("input",{className:"InlineContact-item",placeholder:"First Name",type:"text",value:"Add"===n?C.firstName:h.firstName,onChange:function(e){"Add"===n?v(x(x({},C),{},{firstName:e.target.value})):p(x(x({},h),{},{firstName:e.target.value}))}}),(0,l.jsx)("input",{className:"InlineContact-item",placeholder:"Last Name",type:"text",value:"Add"===n?C.lastName:h.lastName,onChange:function(e){"Add"===n?v(x(x({},C),{},{lastName:e.target.value})):p(x(x({},h),{},{lastName:e.target.value}))}}),(0,l.jsx)("input",{className:"InlineContact-item",placeholder:"Email",type:"text",value:"Add"===n?C.email:h.email,onChange:function(e){"Add"===n?v(x(x({},C),{},{email:e.target.value})):p(x(x({},h),{},{email:e.target.value}))}}),(0,l.jsx)("input",{className:"InlineContact-item",placeholder:"Phone",type:"text",value:"Add"===n?C.phone:h.phone,onChange:function(e){"Add"===n?v(x(x({},C),{},{phone:e.target.value})):p(x(x({},h),{},{phone:e.target.value}))}}),(0,l.jsx)("input",{className:"InlineContact-item",placeholder:"Profession",type:"text",value:"Add"===n?C.profession:h.profession,onChange:function(e){"Add"===n?v(x(x({},C),{},{profession:e.target.value})):p(x(x({},h),{},{profession:e.target.value}))}}),(0,l.jsxs)("div",{className:"InlineContact-btn-group",children:[(0,l.jsx)(u.G,{icon:m.LEp,className:"InlineContact-btn",type:"button",onClick:function(){(0,d.Cf)(n,a,s,t,h,C,c,v)}}),(0,l.jsx)(u.G,{icon:m.g82,className:"InlineContact-btn",type:"button",onClick:function(){"Save"===n?c(null):"Add"===n&&(0,d.t5)(v)}})]})]})}var w=n(643);function S(e){var t=e.contacts,n=e.setContacts,u=e.cardViewState,m=e.inlineEditState,p=e.inlineAddState,f=(0,N.useState)(null),x=(0,i.Z)(f,2),C=x[0],b=x[1],S=(0,N.useState)(null),L=(0,i.Z)(S,2),I=L[0],P=L[1],A=(0,N.useState)(!1),y=(0,i.Z)(A,2),O=y[0],E=y[1],Z=(0,N.useState)([]),V=(0,i.Z)(Z,2),B=V[0],D=V[1],H=(0,c.Z)(B),F=(0,N.useState)({}),G=(0,i.Z)(F,2),T=G[0],M=G[1],R=(0,N.useState)(""),Y=(0,i.Z)(R,2),_=Y[0],K=Y[1],q=(0,N.useState)(""),z=(0,i.Z)(q,2),J=z[0],Q=z[1],U=function(e,n){var a=e.target.name;"checkAll"===a?e.target.checked?(E(!0),t.filter((function(e){return!H.includes(e.id)})).map((function(e){return H.push(e.id)})),D(H)):(E(!1),D([])):"checkItem"===a&&(e.target.checked?(H.push(n),D(H),H.length===t.length&&E(!0)):(E(!1),D(H.filter((function(e){return e!==n})))))},W=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===B.length){e.next=3;break}return e.next=3,(0,d.Fs)("Do you want to delete these contacts?","Yes, delete these contacts!").then((function(e){e.isConfirmed&&(B.map((function(e){return w.Z.delete("contacts/".concat(e))})),(0,d.GP)("success","Contacts has been deleted!"),n(t.filter((function(e){return!B.includes(e.id)}))),D([]),E(!1))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){b((0,l.jsx)(j,{title:"Edit Contact",button:"Save",contact:e,contacts:t,setContacts:n,setPopupContactStatus:b}))},$=function(e){P((0,l.jsx)(k,{title:"Edit Contact",button:"Save",contact:e}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"ListCaption",children:(0,l.jsx)(o.Z,{title:"Contacts"})}),p&&(0,l.jsx)("div",{className:"InlineAdd",children:(0,l.jsx)(k,{title:"Add Contact",button:"Add",contacts:t,setContacts:n,setInlineContactStatus:P,contact:{firstName:"",lastName:"",phone:"",email:"",profession:""}})}),(0,l.jsxs)("div",{className:"List",children:[C||null,(0,l.jsx)("div",{className:"ListBtnSection-container",children:(0,l.jsx)(g,{setSelect:Q,setSearchText:K,onPopupContactAdd:function(){b((0,l.jsx)(j,{title:"Add Contact",button:"Add",contacts:t,setContacts:n,setPopupContactStatus:b,contact:{firstName:"",lastName:"",phone:"",email:"",profession:""}}))},onCheck:U,onDeleteChecked:W,checkedIdArr:B,checkAll:O,cardViewState:u})}),u?null:(0,l.jsx)(r,{onCheck:U,checkAll:O}),(0,l.jsx)("div",{className:u?"ListItem-cardView":"ListItem-rowView",children:t.map((function(e){if(function(e){if(""!==J){if(e[v[J]].toLowerCase().includes(_))return e}else if(Object.keys(e).some((function(t){return e[t].toLowerCase().includes(_)})))return e}(e))return I&&e.id===T.id?(0,l.jsx)("div",{className:"InlineEditItem",children:(0,l.jsx)(k,{button:"Save",contact:e,contacts:t,setContacts:n,setInlineContactStatus:P})},e.id):(0,l.jsx)(h,{id:e.id,contact:e,contacts:t,setContacts:n,setNewContact:M,cardViewState:u,inlineEditState:m,checkedIdArr:B,onPopupContactEdit:X,onInlineContactEdit:$,onCheck:U},e.id)}))})]})]})}}}]);
//# sourceMappingURL=595.bbbb1444.chunk.js.map