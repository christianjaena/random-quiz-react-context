(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{21:function(t,n,e){t.exports=e(29)},29:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(0),o=e.n(a),c=e(14),u=e.n(c),i=e(8),l=e.n(i),s=e(15),p=e(3),d=e(20),f=Object(a.createContext)({addScore:function(){}}),b=e(16),x=e.n(b),m=e(6),v=e.n(m),g=e(2);function h(){var t=Object(r.a)(["\n\tborder: 1px solid #444;\n\twidth: auto;\n\tpadding: 20px 40px;\n\tmargin: 10px;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: #e9ebee;\n\t\tfont-weight: bold;\t\n\t\ttransition: 0.2ms ease-in-out\n\t}\n"]);return h=function(){return t},t}var w=g.a.div(h()),E=function(t){var n=t.correctAnswer,e=t.answers,r=Object(a.useState)(!1),c=Object(p.a)(r,2),u=c[0],i=c[1],l=Object(a.useState)([]),s=Object(p.a)(l,2),d=s[0],b=s[1],m=Object(a.useContext)(f),g={1:"a",2:"b",3:"c",4:"d"};Object(a.useEffect)((function(){b(x.a.shuffle(e))}),[]);var h=function(t){return n===t?{backgroundColor:"#458728",pointerEvents:"none"}:{backgroundColor:"#BD2A2A"}};return o.a.createElement("div",null,d.map((function(t,e){return o.a.createElement(w,{key:e,onClick:function(){return e=t,i(!0),void(e===n&&m());var e},style:u?h(t):null},g[e+1].toUpperCase(),".",v.a.unescape(t))})))};function j(){var t=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tflex-direction: column;\n\tbackground-color: #fff;\n\n\t-webkit-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\t-moz-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tbox-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tpadding: 20px;\n\tborder-radius: 20px;\n\tmargin: 20px;\n\tmargin-bottom: 50px;\n\n\tp {\n\t\tword-break: break-word;\n\t\tfont-size: 18px;\n\t\tcolor: #fff;\n\t\tbackground-color: #1b1b1b;\n\t\tpadding: 15px;\n\t\tborder-radius: 15px;\n\t}\n\n\th3 {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n"]);return j=function(){return t},t}var O=g.a.div(j()),k=function(t){var n=t.questions,e=["red","orange","yellow","green","blue","indigo","violet"];return o.a.createElement("div",null,n.map((function(t,n){var r=t.category,a=t.question,c=t.correct_answer,u=t.incorrect_answers;return o.a.createElement(O,{style:{border:"2px solid ".concat(e[Math.floor(Math.random()*e.length)])},key:n},o.a.createElement("h3",null,r),o.a.createElement("p",null,v.a.unescape(a)),o.a.createElement(E,{correctAnswer:c,wrongAnswers:u,answers:[c].concat(Object(d.a)(u)),index:n}))})))};function y(){var t=Object(r.a)(["\n\ttext-align: center;\n\tborder-radius: 15px;\n\tbackground-color: #fff;\n\tpadding: 20px 0;\n\tmargin-bottom: 20px;\n\tborder: 2px solid black;\n"]);return y=function(){return t},t}var q=g.a.div(y()),C=function(t){var n=t.score;return o.a.createElement(q,null,o.a.createElement("h1",null,"Score: ",n," out of 10"),o.a.createElement("p",null,"Refresh to answer new questions!"))},S=function(){var t=Object(a.useState)([]),n=Object(p.a)(t,2),e=n[0],r=n[1],c=Object(a.useState)(0),u=Object(p.a)(c,2),i=u[0],d=u[1];return Object(a.useEffect)((function(){(function(){var t=Object(s.a)(l.a.mark((function t(){var n,e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://opentdb.com/api.php?amount=10&type=multiple");case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,r(e.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),o.a.createElement("div",null,o.a.createElement(f.Provider,{value:function(){d(i+1)}},o.a.createElement(k,{questions:e})),o.a.createElement(C,{score:i}))},A=function(){return o.a.createElement("div",null,o.a.createElement(S,null))};function z(){var t=Object(r.a)(["\n\tdisplay: flex;\n\theight: auto;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: Dank Mono;\n\t\n"]);return z=function(){return t},t}var M=g.a.div(z());u.a.render(o.a.createElement(M,null,o.a.createElement(A,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f7931fd0.chunk.js.map