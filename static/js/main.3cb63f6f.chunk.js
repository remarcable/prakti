(window.webpackJsonpprakti=window.webpackJsonpprakti||[]).push([[0],{54:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n,r,o,c,i=a(0),l=a.n(i),s=a(8),u=a.n(s),E=(a(59),a(36)),d=a.n(E),m=a(41),S=a(12),f=a(14),h=a(116),p=a(102),b=a(104),O=a(108),T=a(103),w=a(106),g=a(105),A=a(107),v=a(47),N=a.n(v),_=a(45),j=a.n(_),R=a(46),k=a.n(R),C=a(118),I=a(115),D=a(44),x=a(48),U=a(42),y=a.n(U),F=a(43),H=a.n(F),W=Object(x.a)({palette:{primary:y.a,secondary:H.a}}),Q=Object(D.a)({title:{flexGrow:1},aboveAppBar:{top:0,position:"fixed",backgroundColor:W.palette.primary.dark,zIndex:W.zIndex.appBar+1},appBar:{marginTop:20}}),B=function(e){var t=e.children,a=e.exportData,n=e.setSubject,r=e.resetData,o=e.undo,c=e.redo,s=e.canUndo,u=e.canRedo,E=e.refreshApp,d=Q(),m=Object(i.useState)(null),S=Object(f.a)(m,2),v=S[0],_=S[1],R=Boolean(v),D=function(){_(null)},x=matchMedia("(display-mode: standalone)").matches;return l.a.createElement(p.a,{theme:W},l.a.createElement(T.a,null),x&&l.a.createElement(h.a,{height:20,width:1,className:d.aboveAppBar}),l.a.createElement(b.a,{position:"fixed",className:x?d.appBar:""},l.a.createElement(g.a,null,l.a.createElement(w.a,{variant:"h6",className:d.title},"Prakti"),l.a.createElement(A.a,{onClick:o,color:"inherit",disabled:!s},l.a.createElement(j.a,null)),l.a.createElement(A.a,{onClick:c,color:"inherit",disabled:!u},l.a.createElement(k.a,null)),l.a.createElement(A.a,{onClick:function(e){_(e.currentTarget)},color:"inherit"},l.a.createElement(N.a,null)),l.a.createElement(I.a,{id:"menu-appbar",anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:R,onClose:D},l.a.createElement(C.a,{onClick:function(){D(),n()}},"Fach wechseln"),l.a.createElement(C.a,{onClick:function(){D(),a()}},"Exportieren"),l.a.createElement(C.a,{onClick:function(){E()}},"App refreshen"),l.a.createElement(C.a,{onClick:function(){D(),r()}},"Reset")))),l.a.createElement(h.a,{mt:11},l.a.createElement(O.a,{maxWidth:"sm"},t)))},L=a(70),M=a(109),P=function(e){var t=e.children,a=e.onClick;return l.a.createElement(h.a,{m:1,width:1},l.a.createElement(M.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:a},t))},q=a(4),z=a(117),G=(n={},Object(q.a)(n,"NEW_QUESTION_ASKED","Neue Frage gestellt"),Object(q.a)(n,"TEACHER_STARTED_REACTING","Lehrer reagiert"),Object(q.a)(n,"FIRST_STUDENT_RAISED_HAND","1. Sch\xfcler meldet sich"),Object(q.a)(n,"FIRST_STUDENT_ANSWERED_QUESTION","1. Sch\xfcler antwortet"),Object(q.a)(n,"SOME_STUDENT_ANSWERED_QUESTION","n. Sch\xfcler antwortet, n > 1"),Object(q.a)(n,"TEACHER_MOTIVATED","Motiviert Klasse"),Object(q.a)(n,"TEACHER_POSED_NEW_QUESTION","Stellt neue Frage"),Object(q.a)(n,"TEACHER_SIMPLIFIED_QUESTION","Vereinfacht Frage"),Object(q.a)(n,"TEACHER_CANCELED_QUESTION","Bricht ab"),Object(q.a)(n,"TEACHER_ANSWERED_QUESTION","Beantwortet selbst"),Object(q.a)(n,"TEACHER_REACTED_UNEXPECTEDLY","Unerwartete Reaktion"),n),J=Object(z.a)({id:"prakti",initial:"questionFinished",states:{questionFinished:{on:Object(q.a)({},"NEW_QUESTION_ASKED","newQuestionAsked"),meta:{name:"Start"}},newQuestionAsked:{on:(r={},Object(q.a)(r,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(q.a)(r,"FIRST_STUDENT_RAISED_HAND","firstStudentRaisedHand"),r),meta:{name:"Neue Frage gestellt"}},teacherStartedReacting:{on:(o={},Object(q.a)(o,"TEACHER_MOTIVATED","newQuestionAsked"),Object(q.a)(o,"TEACHER_POSED_NEW_QUESTION","newQuestionAsked"),Object(q.a)(o,"TEACHER_SIMPLIFIED_QUESTION","newQuestionAsked"),Object(q.a)(o,"TEACHER_CANCELED_QUESTION","questionFinished"),Object(q.a)(o,"TEACHER_ANSWERED_QUESTION","questionFinished"),Object(q.a)(o,"TEACHER_REACTED_UNEXPECTEDLY","questionFinished"),o),meta:{name:"Lehrer reagiert..."}},firstStudentRaisedHand:{on:(c={},Object(q.a)(c,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(q.a)(c,"FIRST_STUDENT_ANSWERED_QUESTION","questionFinished"),Object(q.a)(c,"SOME_STUDENT_ANSWERED_QUESTION","questionFinished"),c),meta:{name:"Sch\xfcler meldete sich"}}}});window.prakti=J;var K=Object(D.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1}}}),V=function(e){var t,a=e.currentState,n=e.onAction,r=K();return l.a.createElement(L.a,{className:r.root},l.a.createElement(h.a,{mb:1},l.a.createElement(w.a,{variant:"h5",component:"h3"},(t=a,J.states[t].meta.name))),l.a.createElement(h.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},function(e){return Object.keys(J.states[e].on).map(function(e){return{actionId:e,actionText:G[e]}})}(a).map(function(e){var t=e.actionId,a=e.actionText;return l.a.createElement(P,{key:t,onClick:function(){return n(t)}},a)})))},X=a(110),Y=a(114),$=a(113),Z=a(111),ee=a(112),te=a(71),ae=Object(te.a)({overflowScroll:{overflowX:"scroll"}}),ne=function(e){var t=e.log,a=ae();return l.a.createElement(h.a,{my:2},l.a.createElement(L.a,null,l.a.createElement(h.a,{height:150,className:a.overflowScroll},l.a.createElement(X.a,{stickyHeader:!0,size:"small"},l.a.createElement(Z.a,null,l.a.createElement(ee.a,null,l.a.createElement($.a,null,"Action"),l.a.createElement($.a,null,"Next State"))),l.a.createElement(Y.a,null,t.map(function(e){return l.a.createElement(ee.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},l.a.createElement($.a,null,e.action),l.a.createElement($.a,null,e.nextState))}))))))},re="LOG_STATE";var oe=[{id:0,time:Date.now(),currentState:J.initial,nextState:J.initial,action:"NONE"}],ce=null;function ie(){if(ce)return ce;var e=JSON.parse(localStorage.getItem(re))||oe;return ce=e,e}var le=function(){var e=Object(i.useState)(function(){return Math.max.apply(Math,[0].concat(Object(S.a)(ie().map(function(e){return e.id}))))+1}),t=Object(f.a)(e,2),a=t[0],n=t[1],r=function(){var e=a;return n(a+1),e},o=Object(i.useState)(function(){return ie()||oe}),c=Object(f.a)(o,2),s=c[0],u=c[1],E=Object(i.useState)([]),p=Object(f.a)(E,2),b=p[0],O=p[1],T=function(e){var t,a=e.action,n=e.currentState,o=e.nextState,c=e.meta,i=void 0===c?null:c,l=[{id:r(),time:Date.now(),action:a,currentState:n,nextState:o,meta:i}].concat(Object(S.a)(s));u(l),O([]),t=l,window.requestAnimationFrame(function(){localStorage.setItem(re,JSON.stringify(t))})},w=b.length>0,g=s.length>1,A=Object(f.a)(s,1)[0].nextState;return l.a.createElement(B,{undo:function(){var e=Object(f.a)(s,1)[0];O([e].concat(Object(S.a)(b))),u(s.slice(1))},redo:function(){var e=Object(f.a)(b,1)[0];u([e].concat(Object(S.a)(s))),O(b.slice(1))},canUndo:g,canRedo:w,refreshApp:function(){return window.location.reload()},resetData:function(){window.confirm("Are you sure?")&&(localStorage.removeItem(re),u(oe),n(1))},exportData:Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.navigator.share){e.next=3;break}return alert("Exporting is not supported"),e.abrupt("return");case 3:return t=localStorage.getItem(re)||"[no-data-available]",e.next=6,window.navigator.share({url:"",text:t,title:"Prakti Export"});case 6:alert("Export completed");case 7:case"end":return e.stop()}},e)})),setSubject:function(){var e=window.prompt("Neues Fach:");e&&T({action:"NEW_SUBJECT",currentState:A,nextState:A,meta:{newSubject:e}})}},l.a.createElement(h.a,{display:"flex",flexDirection:"column"},l.a.createElement(V,{currentState:A,onAction:function(e){var t=J.transition(A,e).value;T({action:e,currentState:A,nextState:t})}}),l.a.createElement(ne,{log:s})))},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(66);u.a.render(l.a.createElement(le,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/prakti",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/prakti","/service-worker.js");se?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ue(t,e)})}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.3cb63f6f.chunk.js.map