(window.webpackJsonpprakti=window.webpackJsonpprakti||[]).push([[0],{46:function(e,t,n){e.exports=n(59)},52:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c=n(0),l=n.n(c),E=n(10),s=n.n(E),u=(n(51),n(52),n(12)),m=n(22),d=n(103),S=n(91),f=n(90),T=n(62),h=n(92),O=n(93),b=n(37),A=n.n(b),g=n(36),w=Object(g.a)({title:{flexGrow:1}}),_=function(e){var t=e.children,n=e.onOpenSettings,a=w();return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(S.a,{position:"fixed"},l.a.createElement(h.a,null,l.a.createElement(T.a,{variant:"h6",className:a.title},"Prakti"),l.a.createElement(O.a,{onClick:n,color:"inherit"},l.a.createElement(A.a,null)))),l.a.createElement(d.a,{mt:9,m:2,height:1},t))},N=n(61),p=n(94),v=function(e){var t=e.children,n=e.onClick;return l.a.createElement(d.a,{m:1,width:1},l.a.createElement(p.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:n},t))},R=n(4),j=n(105),C=(a={},Object(R.a)(a,"NEW_QUESTION_ASKED","Neue Frage gestellt"),Object(R.a)(a,"TEACHER_STARTED_REACTING","Lehrer reagiert"),Object(R.a)(a,"FIRST_STUDENT_RAISED_HAND","1. Sch\xfcler meldet sich"),Object(R.a)(a,"FIRST_STUDENT_ANSWERED_QUESTION","1. Sch\xfcler antwortet"),Object(R.a)(a,"SOME_STUDENT_ANSWERED_QUESTION","n. Sch\xfcler antwortet, n > 1"),Object(R.a)(a,"TEACHER_MOTIVATED","Motiviert Klasse"),Object(R.a)(a,"TEACHER_POSED_NEW_QUESTION","Stellt neue Frage"),Object(R.a)(a,"TEACHER_SIMPLIFIED_QUESTION","Vereinfacht Frage"),Object(R.a)(a,"TEACHER_CANCELED_QUESTION","Bricht ab"),Object(R.a)(a,"TEACHER_ANSWERED_QUESTION","Beantwortet selbst"),Object(R.a)(a,"TEACHER_REACTED_UNEXPECTEDLY","Unerwartete Reaktion"),a),D=Object(j.a)({id:"prakti",initial:"questionFinished",states:{questionFinished:{on:Object(R.a)({},"NEW_QUESTION_ASKED","newQuestionAsked"),meta:{name:"Start"}},newQuestionAsked:{on:(r={},Object(R.a)(r,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(R.a)(r,"FIRST_STUDENT_RAISED_HAND","firstStudentRaisedHand"),r),meta:{name:"Neue Frage gestellt"}},teacherStartedReacting:{on:(i={},Object(R.a)(i,"TEACHER_MOTIVATED","newQuestionAsked"),Object(R.a)(i,"TEACHER_POSED_NEW_QUESTION","newQuestionAsked"),Object(R.a)(i,"TEACHER_SIMPLIFIED_QUESTION","newQuestionAsked"),Object(R.a)(i,"TEACHER_CANCELED_QUESTION","questionFinished"),Object(R.a)(i,"TEACHER_ANSWERED_QUESTION","questionFinished"),Object(R.a)(i,"TEACHER_REACTED_UNEXPECTEDLY","questionFinished"),i),meta:{name:"Lehrer reagiert..."}},firstStudentRaisedHand:{on:(o={},Object(R.a)(o,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(R.a)(o,"FIRST_STUDENT_ANSWERED_QUESTION","questionFinished"),Object(R.a)(o,"SOME_STUDENT_ANSWERED_QUESTION","questionFinished"),o),meta:{name:"Sch\xfcler meldete sich"}}}});window.prakti=D;var I=Object(g.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1}}}),k=function(e){var t,n=e.currentState,a=e.onAction,r=I();return l.a.createElement(N.a,{className:r.root},l.a.createElement(d.a,{mb:1},l.a.createElement(T.a,{variant:"h5",component:"h3"},(t=n,D.states[t].meta.name))),l.a.createElement(d.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},function(e){return Object.keys(D.states[e].on).map(function(e){return{actionId:e,actionText:C[e]}})}(n).map(function(e){var t=e.actionId,n=e.actionText;return l.a.createElement(v,{key:t,onClick:function(){return a(t)}},n)})))},U=n(95),y=n(99),x=n(98),F=n(96),H=n(97),Q=n(63),W=Object(Q.a)({overflowScroll:{overflowX:"scroll"}}),L=function(e){var t=e.log,n=W();return l.a.createElement(d.a,{my:2},l.a.createElement(N.a,null,l.a.createElement(d.a,{height:150,className:n.overflowScroll},l.a.createElement(U.a,{stickyHeader:!0,size:"small"},l.a.createElement(F.a,null,l.a.createElement(H.a,null,l.a.createElement(x.a,null,"State"),l.a.createElement(x.a,null,"Action"))),l.a.createElement(y.a,null,t.map(function(e){return l.a.createElement(H.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},l.a.createElement(x.a,null,e.currentState),l.a.createElement(x.a,null,e.action))}))))))},M=n(104),P=n(102),q=n(101),G=n(100),B=function(e){e.children;var t=e.open,n=e.handleClose,a=e.resetData,r=e.exportData,i=e.setSubject;return l.a.createElement(M.a,{open:t,onClose:n,fullScreen:!0},l.a.createElement(G.a,{id:"form-dialog-title"},"Einstellungen"),l.a.createElement(q.a,null,l.a.createElement(d.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},l.a.createElement(v,{onClick:r},"Exportieren"),l.a.createElement(v,{onClick:i},"Fach wechseln"),l.a.createElement(v,{onClick:a},"Reset"))),l.a.createElement(P.a,null,l.a.createElement(p.a,{onClick:n},"Close")))},J="LOG_STATE";var K=null;function V(){if(K)return K;var e=JSON.parse(localStorage.getItem(J))||[];return K=e,e}var X=[{id:0,time:Date.now(),currentState:D.initial,action:"NONE"}],z=function(){var e=Object(c.useState)(function(){return Math.max.apply(Math,[0].concat(Object(u.a)(V().map(function(e){return e.id}))))+1}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=function(){var e=n;return a(n+1),e},i=Object(c.useState)(!1),o=Object(m.a)(i,2),E=o[0],s=o[1],S=function(){return s(!1)},f=Object(c.useState)(function(){var e=V()[0];return e?D.transition(e.currentState,e.action).value:D.initial}),T=Object(m.a)(f,2),h=T[0],O=T[1],b=Object(c.useState)(function(){return V()||X}),A=Object(m.a)(b,2),g=A[0],w=A[1];return l.a.createElement(_,{onOpenSettings:function(){return s(!0)}},l.a.createElement(d.a,{display:"flex",flexDirection:"column",height:.9},l.a.createElement(k,{currentState:h,onAction:function(e){var t,n=D.transition(h,e).value,a=[{id:r(),time:Date.now(),action:e,currentState:h,nextState:n}].concat(Object(u.a)(g));w(a),O(n),t=a,window.requestAnimationFrame(function(){localStorage.setItem(J,JSON.stringify(t))})}}),l.a.createElement(L,{log:g}),l.a.createElement(B,{open:E,handleClose:S,resetData:function(){window.confirm("Are you sure?")&&(localStorage.removeItem(J),O(D.initial),w(X),a(1),S())},exportData:function(){console.log("ey")},setSubject:function(){window.alert("Not implemented yet!")}})))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/prakti",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/prakti","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(t,e)})}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.3593a565.chunk.js.map