(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(8),r=n.n(i),o=n(5),d=n(3),s=(n(15),n(1));var l=function(){return Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsx)("p",{className:"title",children:"zumba"}),Object(s.jsx)("span",{className:"title-tag",children:"ToDo'"}),Object(s.jsx)("p",{className:"title-last-letter",children:"s"})]})},u=n(9);function j(e){var t=e.Component,n=e.closeModel;return Object(s.jsx)("div",{id:"model-backdrop",children:Object(s.jsxs)("div",{id:"model-screen",children:[Object(s.jsx)(u.a,{onClick:n,id:"close-menu"}),t]})})}var b=n(10);function O(e){var t=e.closeModel,n=e.isEdit,a=e.title,i=e.body,r=e.saveEditted,l=Object(c.useContext)(v),u=Object(d.a)(l,2),j=(u[0],u[1]),b=Object(c.useState)(n?a:""),O=Object(d.a)(b,2),m=O[0],x=O[1],f=Object(c.useState)(n?i:""),h=Object(d.a)(f,2),p=h[0],g=h[1];return Object(s.jsxs)("form",{onSubmit:n?r:function(e){e.preventDefault();var n=e.target["add-title"].value,c=e.target["add-text"].value,a=(new Date).getTime();j((function(e){return[{heading:n,body:c,time:a}].concat(Object(o.a)(e))})),t()},className:"todosetup-container",children:[Object(s.jsx)("h2",{className:"todosetup-title",children:"Add your text"}),Object(s.jsx)("input",{autoComplete:"off",onChange:function(e){return x(e.target.value)},className:"add-title",required:!0,value:m,name:"add-title",type:"text",placeholder:"Title here"}),Object(s.jsx)("textarea",{onChange:function(e){return g(e.target.value)},className:"add-text",required:!0,value:p,name:"add-text",placeholder:"Add Text here.."}),Object(s.jsx)("button",{type:"submit",children:"Save"})]})}var m=n(19),x=n(20);function f(e){var t=e.time,n=e.title,c=e.body,a=e.deleteTODO,i=e.editTodo;return Object(s.jsxs)("div",{className:"todo-card",children:[Object(s.jsx)("h3",{children:n}),Object(s.jsx)("p",{children:c}),Object(s.jsxs)("div",{className:"todo-bottom",children:[Object(s.jsx)("p",{children:new Date(t).toDateString()}),Object(s.jsxs)("div",{className:"options-container",children:[Object(s.jsx)(m.a,{onClick:function(){return i(t)},className:"todo-edit",size:"25"}),Object(s.jsx)(x.a,{onClick:function(){return a(t)},className:"todo-del",size:"25"})]})]})]})}var v=Object(c.createContext)();var h=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],i=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("todo-app-data")||"[]")})),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){localStorage.setItem("todo-app-data",JSON.stringify(n))}),[n]),[n,a]}(),r=Object(d.a)(i,2),u=r[0],m=r[1],x=function(){return a(null)},h=function(e){return m((function(t){return Object(o.a)(t.filter((function(t){return t.time!==e})))}))},p=function(e){var t=u.findIndex((function(t){return t.time===e}));if(-1!==t){var n=function(e){e.preventDefault(),m((function(n){return n[t].heading=e.target["add-title"].value,n[t].body=e.target["add-text"].value,n[t].time=(new Date).getTime(),Object(o.a)(n)})),x()};a((function(){return Object(s.jsx)(O,{isEdit:!0,title:u[t].heading,body:u[t].body,saveEditted:n})}))}};return Object(s.jsx)(v.Provider,{value:[u,m],children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)("div",{id:"todo-container",children:u.sort((function(e,t){return t.time-e.time})).map((function(e){return Object(s.jsx)(f,{deleteTODO:h,time:e.time,title:e.heading,body:e.body,editTodo:p},e.time)}))}),Object(s.jsx)(b.a,{onClick:function(){return a((function(){return Object(s.jsx)(O,{closeModel:x})}))},fill:"#1962D1",className:"addtodo"}),n&&Object(s.jsx)(j,{Component:n,closeModel:x})]})})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d2a97149.chunk.js.map