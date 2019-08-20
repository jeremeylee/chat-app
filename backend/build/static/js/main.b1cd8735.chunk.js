(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){},156:function(e,t,n){e.exports=n(341)},165:function(e,t,n){},193:function(e,t){},196:function(e,t,n){},197:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),c=n.n(s),u=n(49),o=n(68),i=(n(165),n(4)),l=n.n(i),m=n(8),p=n(24),f=n(145),d=n.n(f),g=(n(196),n(343)),v=n(72),E=n(345),w=(n(197),function(e){return r.a.createElement(E.a,{className:"chat-input",placeholder:"Message",value:e.chatText,onChange:function(t){return e.setChatText(t.target.value)},onPressEnter:e.handleEnter})}),b=function(e){return r.a.createElement("div",null,r.a.createElement(g.a,{onContextMenu:e.handleContextMenu},r.a.createElement("strong",null,e.username),r.a.createElement("div",null,r.a.createElement("p",null,e.message))))},h=n(344),y=n(17),O=n(346),x=(n(132),n(31)),j=n.n(x),k={login:function(){var e=Object(m.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(m.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/register",t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},M=h.a.create()(function(e){var t=e.form,n=t.getFieldDecorator,a=t.validateFields;return r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{onSubmit:function(t){t.preventDefault(),a(function(){var t=Object(m.a)(l.a.mark(function t(n,a){var r,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&console.log("Wrong values were entered"),r={username:a.username,password:a.password},t.next=4,k.login(r);case 4:s=t.sent,e.setActiveUser(s),e.setDisplayPage("CHAT"),a.remember&&window.localStorage.setItem("loggedUser",JSON.stringify(r));case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())},className:"login-form"},r.a.createElement(h.a.Item,null,n("username",{rules:[{required:!0,message:"Please input your username"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(y.a,{type:"user"}),placeholder:"Username"}))),r.a.createElement(h.a.Item,null,n("password",{rules:[{required:!0,message:"Please input your Password"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(y.a,{type:"lock"}),type:"password",placeholder:"Password"}))),r.a.createElement(h.a.Item,null,n("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(O.a,null,"Remember me")),r.a.createElement(g.a,null,r.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in")),"Or ",r.a.createElement("a",{onClick:function(t){t.preventDefault(),e.setDisplayPage("REGISTER")}},"register now!"))))}),N=h.a.create()(function(e){var t=e.form,n=t.getFieldDecorator,a=t.validateFields;return r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{onSubmit:function(t){t.preventDefault(),a(function(){var t=Object(m.a)(l.a.mark(function t(n,a){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&console.log("Wrong values were entered"),r={username:a.username,password:a.password},t.next=4,k.register(r);case 4:e.setDisplayPage("LOGIN");case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())},className:"login-form"},r.a.createElement(h.a.Item,null,n("username",{rules:[{required:!0,message:"Please input your username"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(y.a,{type:"user"}),placeholder:"Username"}))),r.a.createElement(h.a.Item,null,n("password",{rules:[{required:!0,message:"Please input your Password"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(y.a,{type:"lock"}),type:"password",placeholder:"Password"}))),r.a.createElement(g.a,null,r.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register")),"Already have an account? ",r.a.createElement("a",{onClick:function(){return e.setDisplayPage("LOGIN")}},"Login!")))}),D=n(105),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return e?e.concat(t.data):t.data;case"EDIT":var n=Object(D.a)(e),a={message:t.message,username:t.username,id:t.id};return n.map(function(e){return e.id===t.id?a:e});case"DELETE":return Object(D.a)(e).filter(function(e){return e.id!==t.id});default:return e}},S="/api/messages",P={getMessages:function(){var e=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(S);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),sendMessage:function(){var e=Object(m.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(S,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateMessage:function(){var e=Object(m.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("".concat(S,"/").concat(n),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),deleteMessage:function(){var e=Object(m.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("".concat(S,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C=window.location.origin,T=d()(C),L={sendMessage:function(e){return{type:"NEW",data:e}},editMessage:function(e,t,n){return{type:"EDIT",message:e,username:t,id:n}},deleteMessage:function(e){return{type:"DELETE",id:e}}},A=Object(o.b)(function(e){return{message:e.message}},L)(function(e){var t=Object(a.useState)("LOGIN"),n=Object(p.a)(t,2),s=n[0],c=n[1],u=Object(a.useState)(null),o=Object(p.a)(u,2),i=o[0],f=o[1],d=Object(a.useState)(!1),E=Object(p.a)(d,2),h=E[0],y=E[1],O=Object(a.useState)(""),x=Object(p.a)(O,2),j=x[0],k=x[1],D=Object(a.useState)(null),I=Object(p.a)(D,2),S=I[0],C=I[1],L=Object(a.useState)(!1),A=Object(p.a)(L,2),G=A[0],R=A[1],U=Object(a.useState)(0),W=Object(p.a)(U,2),q=W[0],F=W[1],J=Object(a.useState)(0),H=Object(p.a)(J,2),B=H[0],V=H[1],X=e.sendMessage,Y=e.message,$=r.a.createRef();Object(a.useEffect)(function(){window.addEventListener("click",function(){return y(!1)}),function(){var e=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getMessages();case 2:t=e.sent,X(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()();var t=window.localStorage.getItem("loggedUser");if(t){var n=JSON.parse(t);f(n),c("CHAT")}T.on("newMessage",function(e){return X(e)}),T.on("editMessage",function(t){return e.editMessage(t.message,t.username,t.id)}),T.on("deleteMessage",function(t){return e.deleteMessage(t.id)})},[]),Object(a.useEffect)(function(){i&&$.current.scrollIntoView()},[Y]),Object(a.useEffect)(function(){window.addEventListener("contextmenu",function(e){e.preventDefault()})},[h]);var z=function(){R(!0);var e=Y.filter(function(e){return e.id===S}).map(function(e){return e.message});k(e)},K=function(){var e=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:T.emit("deleteMessage",S);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),G?(n={message:t.target.value,username:i.username,id:S},T.emit("editMessage",n),R(!1)):(k(t.target.value),a={message:j,username:i.username},T.emit("newMessage",a)),k("");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Z=function(){window.localStorage.removeItem("loggedUser"),f(null),c("LOGIN")},_={display:h?"":"none",position:"absolute",left:"".concat(q,"px"),top:"".concat(B,"px")},ee=function(){if(Y)return Y.map(function(e){return r.a.createElement(b,{key:e.id,handleContextMenu:function(t){return function(e,t,n){e.preventDefault(),i.username===t&&(y(!0),F(e.pageX),V(e.pageY),C(n))}(t,e.username,e.id)},username:e.username,message:e.message})})};return r.a.createElement("div",null,r.a.createElement(g.a,{type:"flex",justify:"center",className:"header"},r.a.createElement("h1",null,"Chat Application")),function(){switch(s){case"LOGIN":return r.a.createElement(M,{setActiveUser:f,setDisplayPage:c});case"CHAT":return r.a.createElement("div",null,r.a.createElement("div",{className:"chat-container"},r.a.createElement("div",{className:"message-container"},ee(),r.a.createElement("div",{ref:$})),r.a.createElement("div",{className:"context-menu",style:_},r.a.createElement("ul",null,r.a.createElement("li",{onClick:z},"Edit"),r.a.createElement("li",{onClick:K},"Delete"))),r.a.createElement(w,{chatText:j,setChatText:k,handleEnter:Q})),r.a.createElement(g.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{onClick:Z},"Logout")));case"REGISTER":return r.a.createElement(N,{setDisplayPage:c})}}())});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(u.b)({message:I}),R=Object(u.c)(G),U=function(){c.a.render(r.a.createElement(o.a,{store:R},r.a.createElement(A,null)),document.getElementById("root"))};U(),R.subscribe(U),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.b1cd8735.chunk.js.map