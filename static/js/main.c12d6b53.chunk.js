(window.webpackJsonpprakti=window.webpackJsonpprakti||[]).push([[0],{46:function(e,t,n){e.exports=n(59)},52:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,r,o,c,i=n(0),l=n.n(i),E=n(10),s=n.n(E),u=(n(51),n(52),n(12)),m=n(24),d=n(103),S=n(91),f=n(90),T=n(62),h=n(92),O=n(93),A=n(37),_=n.n(A),g=n(36),b=Object(g.a)({title:{flexGrow:1}}),w=function(e){var t=e.children,n=e.onOpenSettings,a=b();return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(S.a,{position:"fixed"},l.a.createElement(h.a,null,l.a.createElement(T.a,{variant:"h6",className:a.title},"Prakti"),l.a.createElement(O.a,{onClick:n,color:"inherit"},l.a.createElement(_.a,null)))),l.a.createElement(d.a,{mt:9,m:2,height:1},t))},N=n(61),R=n(94),C=function(e){var t=e.children,n=e.onClick;return l.a.createElement(d.a,{m:1,width:1},l.a.createElement(R.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:n},t))},p=n(4),v=n(105),j=(a={},Object(p.a)(a,"NEW_QUESTION_ASKED","Neue Frage gestellt"),Object(p.a)(a,"TEACHER_STARTED_REACTING","Lehrer reagiert"),Object(p.a)(a,"FIRST_STUDENT_RAISED_HAND","1. Sch\xfcler meldet sich"),Object(p.a)(a,"FIRST_STUDENT_ANSWERED_QUESTION","1. Sch\xfcler antwortet"),Object(p.a)(a,"SOME_STUDENT_ANSWERED_QUESTION","n. Sch\xfcler antwortet, n > 1"),Object(p.a)(a,"TEACHER_MOTIVATED","Motiviert Klasse"),Object(p.a)(a,"TEACHER_POSED_NEW_QUESTION","Stellt neue Frage"),Object(p.a)(a,"TEACHER_SIMPLIFIED_QUESTION","Vereinfacht Frage"),Object(p.a)(a,"TEACHER_CANCELED_QUESTION","Bricht ab"),Object(p.a)(a,"TEACHER_ANSWERED_QUESTION","Beantwortet selbst"),Object(p.a)(a,"TEACHER_REACTED_UNEXPECTEDLY","Unerwartete Reaktion"),a),D=Object(v.a)({id:"prakti",initial:"questionFinished",states:{questionFinished:{on:Object(p.a)({},"NEW_QUESTION_ASKED","newQuestionAsked"),meta:{name:"Start"}},newQuestionAsked:{on:(r={},Object(p.a)(r,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(p.a)(r,"FIRST_STUDENT_RAISED_HAND","firstStudentRaisedHand"),r),meta:{name:"Neue Frage gestellt"}},teacherStartedReacting:{on:(o={},Object(p.a)(o,"TEACHER_MOTIVATED","newQuestionAsked"),Object(p.a)(o,"TEACHER_POSED_NEW_QUESTION","newQuestionAsked"),Object(p.a)(o,"TEACHER_SIMPLIFIED_QUESTION","newQuestionAsked"),Object(p.a)(o,"TEACHER_CANCELED_QUESTION","questionFinished"),Object(p.a)(o,"TEACHER_ANSWERED_QUESTION","questionFinished"),Object(p.a)(o,"TEACHER_REACTED_UNEXPECTEDLY","questionFinished"),o),meta:{name:"Lehrer reagiert..."}},firstStudentRaisedHand:{on:(c={},Object(p.a)(c,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(p.a)(c,"FIRST_STUDENT_ANSWERED_QUESTION","questionFinished"),Object(p.a)(c,"SOME_STUDENT_ANSWERED_QUESTION","questionFinished"),c),meta:{name:"Sch\xfcler meldete sich"}}}});window.prakti=D;var I=Object(g.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1}}}),k=function(e){var t,n=e.currentState,a=e.onAction,r=I();return l.a.createElement(N.a,{className:r.root},l.a.createElement(d.a,{mb:1},l.a.createElement(T.a,{variant:"h5",component:"h3"},(t=n,D.states[t].meta.name))),l.a.createElement(d.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},function(e){return Object.keys(D.states[e].on).map(function(e){return{actionId:e,actionText:j[e]}})}(n).map(function(e){var t=e.actionId,n=e.actionText;return l.a.createElement(C,{key:t,onClick:function(){return a(t)}},n)})))},U=n(95),H=n(99),F=n(98),Q=n(96),y=n(97),W=n(63),x=Object(W.a)({overflowScroll:{overflowX:"scroll"}}),L=function(e){var t=e.log,n=x();return l.a.createElement(d.a,{my:2},l.a.createElement(N.a,null,l.a.createElement(d.a,{p:1,height:150,className:n.overflowScroll},l.a.createElement(U.a,{stickyHeader:!0,size:"small"},l.a.createElement(Q.a,null,l.a.createElement(y.a,null,l.a.createElement(F.a,null,"State"),l.a.createElement(F.a,null,"Action"))),l.a.createElement(H.a,null,t.map(function(e){return l.a.createElement(y.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},l.a.createElement(F.a,null,e.currentState),l.a.createElement(F.a,null,e.action))}))))))},P=n(104),q=n(102),M=n(101),G=n(100),B=function(e){e.children;var t=e.open,n=e.handleClose;return l.a.createElement(P.a,{open:t,onClose:n,fullScreen:!0},l.a.createElement(G.a,{id:"form-dialog-title"},"Einstellungen"),l.a.createElement(M.a,null,l.a.createElement(d.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},l.a.createElement(C,{onClick:console.log},"Exportieren"),l.a.createElement(C,{onClick:console.log},"Fach wechseln"),l.a.createElement(C,{onClick:console.log},"Reset"))),l.a.createElement(q.a,null,l.a.createElement(R.a,{onClick:n},"Close")))},K=0,V=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(D.initial),o=Object(m.a)(r,2),c=o[0],E=o[1],s=Object(i.useState)(function(){return[{id:K++,time:Date.now(),currentState:c,action:"NONE"}]}),S=Object(m.a)(s,2),f=S[0],T=S[1];return l.a.createElement(w,{onOpenSettings:function(){return a(!0)}},l.a.createElement(d.a,{display:"flex",flexDirection:"column",height:.9},l.a.createElement(k,{currentState:c,onAction:function(e){var t=D.transition(c,e).value;T([{id:K++,time:Date.now(),action:e,currentState:c,nextState:t}].concat(Object(u.a)(f))),E(t)}}),l.a.createElement(L,{log:f}),l.a.createElement(B,{open:n,handleClose:function(){return a(!1)}})))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");X?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):z(t,e)})}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.c12d6b53.chunk.js.map