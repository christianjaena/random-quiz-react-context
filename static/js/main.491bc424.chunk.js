(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{323:function(t,e,n){"use strict";n.r(e);var r=n(8),a=n(1),o=n.n(a),c=n(79),u=n.n(c),i=n(12),s=n.n(i),l=n(80),d=n(15),p=n(87),b=n(9);function f(){var t=Object(r.a)(["\n\tborder: 1px solid #444;\n\twidth: auto;\n\tpadding: 20px 40px;\n\tmargin: 10px;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tcolor: #fff;\n\tbackground-color: #202E3A;\n\t&:hover {\n\t\tbackground-color: #e9ebee;\n\t\tcolor: #222;\n\t\tfont-weight: bold;\n\t\ttransition: 0.2ms ease-in-out;\n\t}\n"]);return f=function(){return t},t}var m=b.a.div(f()),x=Object(a.createContext)({score:0,addScore:function(){}}),v=Object(a.createContext)({percent:0,addPercent:function(){}}),g=n(84),h=n.n(g),w=n(32),j=n.n(w),O=function(t){var e=t.correctAnswer,n=t.answers,r=Object(a.useState)(!1),c=Object(d.a)(r,2),u=c[0],i=c[1],s=Object(a.useState)([]),l=Object(d.a)(s,2),p=l[0],b=l[1],f=Object(a.useContext)(v),g=Object(a.useContext)(x),w={1:"a",2:"b",3:"c",4:"d"};Object(a.useEffect)((function(){b(h.a.shuffle(n))}),[]);var O=function(){document.getElementById("wrong-answer").play()},E=function(){document.getElementById("correct-answer").play()},y=function(t){return e===t?{backgroundColor:"#458728",pointerEvents:"none"}:{backgroundColor:"#BD2A2A",pointerEvents:"none"}};return o.a.createElement("div",null,p.map((function(t,n){return o.a.createElement(m,{key:n,onClick:function(){return n=t,i(!0),f.addPercent(),void(n===e?(g.addScore(),E()):O());var n},style:u?y(t):null},w[n+1].toUpperCase(),".",j.a.unescape(t))})))};function E(){var t=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tflex-direction: column;\n\tbackground-color: #253341;\n\t-webkit-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\t-moz-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tbox-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tpadding: 20px;\n\tborder-radius: 20px;\n\tmargin: 20px;\n\tmargin-bottom: 50px;\n\n\tp {\n\t\tword-break: break-word;\n\t\tfont-size: 18px;\n\t\tcolor: #fff;\n\t\tbackground-color: #1b1b1b;\n\t\tpadding: 15px;\n\t\tborder-radius: 15px;\n\t}\n\n\th3 {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tcolor: #fff;\n\t}\n"]);return E=function(){return t},t}var y=b.a.div(E()),k=n(88);function C(){var t=Object(r.a)(["\n\tposition: sticky;\n\ttop: 0;\n\twidth: 100%;\n"]);return C=function(){return t},t}var z=Object(b.a)(k.a)(C()),S=n(85),_=n.n(S);function A(){var t=Object(r.a)(["\n\tposition: fixed;\n\tz-index: -1;\n\twidth: 100%;\n\theight: 100%;\n"]);return A=function(){return t},t}var B=Object(b.a)(_.a)(A()),F=function(t){var e=t.questions,n=Object(a.useContext)(v),r=["red","orange","yellow","green","blue","indigo","violet"],c={particles:{number:{value:25},size:{value:3}}};return o.a.createElement("div",null,o.a.createElement(z,{percent:n.percent,strokeWidth:"2",strokeColor:"#00BFFF"}),e.map((function(t,e){var n=t.category,a=t.question,u=t.correct_answer,i=t.incorrect_answers;return o.a.createElement(y,{style:{border:"2px solid ".concat(r[Math.floor(Math.random()*r.length)])},key:e},o.a.createElement("h3",null,n.toUpperCase()),o.a.createElement("p",null,j.a.unescape(a)),o.a.createElement(B,{params:c}),o.a.createElement(O,{correctAnswer:u,wrongAnswers:i,answers:[u].concat(Object(p.a)(i)),index:e}))})))};function P(){var t=Object(r.a)(["\n\ttext-align: center;\n\tborder-radius: 15px;\n\tbackground-color: #fff;\n\tpadding: 20px 0;\n\tmargin-bottom: 20px;\n\tborder: 2px solid black;\n"]);return P=function(){return t},t}var q=b.a.div(P());function M(){var t=Object(r.a)(["\n\theight: 50px;\n\twidth: 100px;\n\toutline: none;\n\tborder: none;\n\tbackground-color: #1b1b1b;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-family: Dank Mono;\n\tfont-size: 15px;\n\tborder-radius: 15px;\n"]);return M=function(){return t},t}var D=b.a.button(M()),G=function(t){var e=t.fetchQuestionsOnLoad,n=Object(a.useContext)(v),r=Object(a.useContext)(x);return o.a.createElement(q,null,o.a.createElement("h1",null,"Score: ",r.score," out of 10"),o.a.createElement(D,{onClick:function(){e(),window.location.reload()},style:100===n.percent?{display:""}:{display:"none"}},"Try Again"))},I=n(86),J=n.n(I);function L(){var t=Object(r.a)(["\n\tmargin-top: 300px;\n"]);return L=function(){return t},t}var Q=Object(b.a)(J.a)(L()),T=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(!1),u=Object(d.a)(c,2),i=u[0],p=u[1],b=Object(a.useState)(0),f=Object(d.a)(b,2),m=f[0],g=f[1],h=Object(a.useState)(0),w=Object(d.a)(h,2),j=w[0],O=w[1],E=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://opentdb.com/api.php?amount=10&type=multiple");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n.results),p(!0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){E()}),[]),i?o.a.createElement("div",null,o.a.createElement(v.Provider,{value:{percent:j,addPercent:function(){O(j+10)}}},o.a.createElement(x.Provider,{value:{score:m,addScore:function(){g(m+1)}}},o.a.createElement(F,{questions:n}),o.a.createElement(G,{fetchQuestionsOnLoad:E})))):o.a.createElement(Q,{type:"Grid",color:"#00BFFF",height:100,width:100,timeout:3e3})},U=function(){return o.a.createElement("div",null,o.a.createElement("audio",{src:"https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",autoPlay:!0,loop:!0}),o.a.createElement("audio",{id:"wrong-answer",src:"https://freesound.org/people/KevinVG207/sounds/331912/download/331912__kevinvg207__wrong-buzzer.wav"}),o.a.createElement("audio",{id:"correct-answer",src:"https://freesound.org/people/JapanYoshiTheGamer/sounds/361263/download/361263__japanyoshithegamer__8-bit-correct-answer.wav"}),o.a.createElement(T,null))};function K(){var t=Object(r.a)(["\n\tdisplay: flex;\n\theight: auto;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: Dank Mono;\n"]);return K=function(){return t},t}var V=b.a.div(K());u.a.render(o.a.createElement(V,null,o.a.createElement(U,null)),document.getElementById("root"))},89:function(t,e,n){t.exports=n(323)}},[[89,1,2]]]);
//# sourceMappingURL=main.491bc424.chunk.js.map