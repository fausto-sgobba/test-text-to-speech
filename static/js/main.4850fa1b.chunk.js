(this["webpackJsonptest-text-to-speech"]=this["webpackJsonptest-text-to-speech"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(10),i=c.n(a),o=(c(17),c(9)),r=c(11),l=c(12),d=c(2),j=(c(18),c(0));var u=function(){var e=Object(n.useState)(["Prosegui 100 metri fino alla rotonda","Prendi la prima uscita a destra","Tieni la destra","Destinazione raggiunta"]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("Tra 2 chilometri svolta a sinistra"),i=Object(d.a)(a,2),u=i[0],b=i[1],h=Object(n.useState)(),O=Object(d.a)(h,2),v=O[0],p=O[1],m=Object(n.useState)([]),g=Object(d.a)(m,2),f=g[0],x=g[1],N=Object(n.useState)([]),k=Object(d.a)(N,2),w=k[0],S=k[1],C=Object(n.useState)(0),y=Object(d.a)(C,2),E=y[0],P=y[1],T=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),W=Object(n.useCallback)((function(){var e=Object(l.a)(f),t=(e[0],e.slice(1));console.log("\ud83d\ude80 ~ file: App.js ~ line 36 ~ advanceQueue ~ queue",f,t),x(t)}),[f]),F=Object(n.useCallback)((function(){console.log("speak");var e=f[0],t=window.speechSynthesis,c=new SpeechSynthesisUtterance(e);if(c.addEventListener("end",(function(){console.log("end reached"),W()})),c.rate=1,c.pitch=1,c.volume=1,w){var n=w[E];c.lang=n.lang,c.voice=n}return t.cancel(),t.speak(c)}),[f,W,E,w]),I=function(e){switch(console.log(e.target.id),e.target.id){case"singleWord":b(e.target.value);break;default:var t=e.target.id.split("-"),n=Object(d.a)(t,2),a=(n[0],n[1]);s(Object.assign([],c,Object(r.a)({},Number(a),e.target.value)))}},A=function(e){e.preventDefault(),console.log(e);var t=e.target.id.split("-"),n=Object(d.a)(t,2),a=n[0],i=n[1];switch(a){case"add":var r=Object(o.a)(c);r.splice(Number(i)+1,0,"New Word"),s(r);break;case"remove":var l=Object(o.a)(c);l.splice(Number(i),1),s(l)}return!1};return Object(n.useEffect)((function(){f.length<=0?p():F(f[0])}),[f,F]),Object(n.useEffect)((function(){S(window.speechSynthesis.getVoices()),speechSynthesis.onvoiceschanged=function(){S(window.speechSynthesis.getVoices())}}),[]),Object(n.useEffect)((function(){if(console.log("voices",w),w.length){var e=w.findIndex((function(e){return e.lang.includes("it")}));P(e)}}),[w]),Object(j.jsxs)("div",{className:"App container",children:[Object(j.jsx)("h1",{children:"Test Text to speech"}),Object(j.jsx)("h2",{className:"mt-4",children:"Interaction tests"}),Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("select",{className:"custom-select",required:!0,onChange:function(e){P(e.target.value)},value:E,children:w&&w.map((function(e,t){return Object(j.jsx)("option",{value:t,children:"".concat(e.name," (").concat(e.lang,")")},t)}))})})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Word to speak"}),Object(j.jsx)("form",{children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control ".concat("single"===v?"is-valid":""),id:"singleWord",placeholder:"Enter the word / phrase",value:u,onChange:I})})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){T&&F(),p("single"),x([u])},children:"Speak"})})]}),Object(j.jsxs)("div",{className:"col-sm",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:"Words to speak"}),c.map((function(e,t){var c="multiple"===v&&f[0]===e?"is-valid":"";return Object(j.jsxs)("div",{className:"form-group inline-buttons",children:[Object(j.jsx)("input",{type:"text",className:"form-control ".concat(c),id:"word-".concat(t),placeholder:"Enter the word / phrase",value:e,onChange:I}),Object(j.jsx)("button",{className:"btn btn-outline-success",id:"add-".concat(t),value:e,onClick:A,children:"+"}),Object(j.jsx)("button",{className:"btn btn-outline-danger",id:"remove-".concat(t),value:e,onClick:A,children:"-"})]},"remove-".concat(t))}))]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){T&&F(),p("multiple"),x(c)},children:"Speak"})})]})]})]})})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[20,1,2]]]);
//# sourceMappingURL=main.4850fa1b.chunk.js.map