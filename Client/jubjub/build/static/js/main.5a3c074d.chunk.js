(this.webpackJsonpjubjub=this.webpackJsonpjubjub||[]).push([[0],{36:function(e,t,n){e.exports=n(64)},41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(32),l=n.n(o),r=(n(41),n(14)),i=n(13),m=n(10),u=n(12),s=n.n(u),p=n(78),d=n(81),E=n(80);Object(p.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var g=function(){var e=Object(a.useState)("memerepository.asuscomm.com"),t=Object(r.a)(e,2),n=t[0],o=(t[1],Object(a.useRef)({selectedFile:null})),l=Object(a.useState)("anon"),u=Object(r.a)(l,2),g=(u[0],u[1],Object(a.useState)([{}])),h=Object(r.a)(g,2),f=h[0],y=h[1],b=Object(a.useState)([{image:"q.png"}]),w=Object(r.a)(b,2),v=w[0],j=w[1];Object(a.useEffect)((function(){s.a.get("http://".concat(n,"/api")).then((function(e){y(e.data),console.log(f)}))}),[]);var O=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:1e3}}}}));return c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/10"},"10 Newests MEMES")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/users"},"Users")))),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/10",component:function(){return c.a.createElement("div",{style:{display:"grids"}},c.a.createElement("p",{style:{marginLeft:20,marginBottom:40}},"TOP 10 MEMES ARE Below"),c.a.createElement(E.a,{container:!0,spacing:10,style:{marginLeft:10}},f.map((function(e,t){return c.a.createElement(d.a,{style:{width:250,margin:10}},c.a.createElement("p",{style:{opacity:.1,padding:0,margin:0,border:0,height:0}},c.a.createElement("button",{id:e.id,onClick:function(e){return function(e){var t={id:e.target.id};s.a.post("http://".concat(n,"/api/delete"),t).then((function(e){console.log(e.status)}))}(e)}},"x")),c.a.createElement("img",{src:"http://".concat(n,"/").concat(e.image),style:{width:250,height:250}}),c.a.createElement("p",{style:{textAlign:"center",width:250}},e.user))}))))}}),c.a.createElement(m.a,{exact:!0,path:"/",component:function(){O();return c.a.createElement("div",{style:{marginLeft:20}},"Home ",c.a.createElement("p",null,"Welcome to The Smoking Hot Meme Repository, Please Upload Your Memes Below and I Will View Them in My Own Time"),c.a.createElement("input",{type:"file",ref:o}),c.a.createElement("p",{style:{opacity:.9}},"\xa0User\xa0",c.a.createElement("input",{id:"uName",type:"text"}),"\xa0",c.a.createElement("button",{onClick:function(){!function(){var e=o.current.files[0];if(void 0!==e){var t={name:document.getElementById("uName").value,address:e.name},a=new FormData;a.append("myFile",e,e.name),s.a.post("http://".concat(n,"/api/data"),t).then((function(e){console.log(e.status)})),s.a.post("http://".concat(n,"/api/post"),a).then((function(e){200==e.status&&(alert("Meme Deposited"),window.location.reload(!1))}))}else alert("Please Select a File for Upload")}()}},"Upload!")))}}),c.a.createElement(m.a,{path:"/users",component:function(){return c.a.createElement("div",null,c.a.createElement("input",{style:{marginLeft:20},id:"uName",type:"text"}),c.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("uName").value;s.a.get("http://".concat(n,"/api/").concat(e)).then((function(e){j(e.data),console.log(v)}))}()}},"SEARCH"),c.a.createElement(E.a,{container:!0,style:{marginLeft:10}},v.map((function(e,t){return c.a.createElement(d.a,{style:{width:250,margin:10}},c.a.createElement("img",{src:"http://".concat(n,"/").concat(e.image),style:{width:250,height:250}}),c.a.createElement("p",{style:{textAlign:"center",width:250}},e.user))}))))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5a3c074d.chunk.js.map