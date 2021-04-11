(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),A=n(21),c=n.n(A),r=n(7),o=n(4),s=n(3),i=n(44),l=n(6),u=n(0),h=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=n.isAuthenticated,A=n.loading,c=Object(i.a)(e,["component","auth"]);return Object(u.jsx)(o.b,Object(s.a)(Object(s.a)({},c),{},{render:function(e){return A||a?Object(u.jsx)(t,Object(s.a)({},e)):Object(u.jsx)(o.a,{to:"/login"})}}))})),j=Object(l.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(u.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))})),d=n(16),g=n(18),B=n(40),E=n.n(B),p="SET_ALERT",b="REMOVE_ALERT",O="REGISTER_SUCCESS",C="REGISTER_FAIL",w="LOGIN_SUCCESS",x="LOGIN_FAIL",f="LOGOUT",m="USER_LOADED",Q="AUTH_ERROR",I="CLEAR_PROFILE",F="TODO_LOADED",G="TODO_ERROR",D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3;return function(a){var A=E()();a({type:p,payload:{msg:e,alertType:t,id:A}}),setTimeout((function(){return a({type:b,payload:A})}),n)}},S=n(5),y=n.n(S),U=n(14),v=n(11),k=n.n(v),Y=function(e){e?k.a.defaults.headers.common["x-auth-token"]=e:delete k.a.defaults.headers.common["x-auth-token"]},N=function(){return function(){var e=Object(U.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&Y(localStorage.token),e.prev=1,e.next=4,k.a.get("/api/user");case 4:n=e.sent,t({type:m,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:Q});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},R=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:D,register:function(e){var t=e.name,n=e.email,a=e.password;return function(){var e=Object(U.a)(y.a.mark((function e(A){var c,r,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({name:t,email:n,password:a}),e.prev=2,e.next=5,k.a.post("/api/auth",r,c);case 5:o=e.sent,A({type:O,payload:o.data}),A(N()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(s=e.t0.response.data.errors)&&s.forEach((function(e){A(D(e.msg,"danger"))})),A({type:C});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,n=e.register,A=e.isAuthenticated,c=Object(a.useState)({name:"",email:"",password:"",password2:""}),i=Object(g.a)(c,2),l=i[0],h=i[1],j=l.name,B=l.email,E=l.password,p=l.password2,b=function(e){return h(Object(s.a)(Object(s.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))};return A?Object(u.jsx)(o.a,{to:"/todo"}):Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h2",{children:"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),E!==p?t("Passwords do not match","danger"):n({name:j,email:B,password:E})}(e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{className:"u-full-width",type:"text",value:j,name:"name",onChange:function(e){return b(e)},placeholder:"Name"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{className:"u-full-width",type:"email",value:B,name:"email",onChange:function(e){return b(e)},placeholder:"Email Address"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"password"}),Object(u.jsx)("input",{className:"u-full-width",type:"password",value:E,name:"password",onChange:function(e){return b(e)},placeholder:"Enter password"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"password (confirm)"}),Object(u.jsx)("input",{className:"u-full-width",type:"password",value:p,name:"password2",onChange:function(e){return b(e)},placeholder:"Confirm password"})]}),Object(u.jsx)("input",{className:"u-full-width button-primary",type:"submit",value:"Sign Up"})]}),Object(u.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(u.jsx)(r.b,{to:"/login",children:"Sign In"})]})]})})),M=n(15),H=n.n(M),J=function(e){var t=e.isAuthenticated,n=e.loginUser,A=Object(a.useState)({email:"",password:""}),c=Object(g.a)(A,2),i=c[0],l=c[1],h=i.email,j=i.password,B=function(e){return l(Object(s.a)(Object(s.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))};return t?Object(u.jsx)(o.a,{to:"/todo"}):Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h2",{children:"Log In"}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n({email:h,password:j})}(e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{className:"u-full-width",type:"text",value:h,name:"email",onChange:function(e){return B(e)},placeholder:"Email Address"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"password"}),Object(u.jsx)("input",{className:"u-full-width",type:"password",value:j,name:"password",onChange:function(e){return B(e)},placeholder:"Enter password"})]}),Object(u.jsx)("input",{className:"u-full-width button-primary",type:"submit",value:"Sign In"})]}),Object(u.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(u.jsx)(r.b,{to:"/register",children:"Sign Up"})]})]})};J.protoTypes={isAuthenticated:H.a.bool,loginUser:H.a.func.isRequired};var K=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{loginUser:function(e){var t=e.email,n=e.password;return function(){var e=Object(U.a)(y.a.mark((function e(a){var A,c,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:t,password:n}),e.prev=2,e.next=5,k.a.post("/api/auth/login",c,A);case 5:r=e.sent,a({type:w,payload:r.data}),a(N()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(o=e.t0.response.data.errors)&&o.forEach((function(e){return a(D(e.msg,"danger"))})),a({type:x});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})(J),Z=function(){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},L=function(){return function(){var e=Object(U.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/todo");case 3:n=e.sent,t({type:F,payload:n.data[0]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:G});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){var t=new Date(e),n=t.getMonth()+1;n<10&&(n="0"+n);var a=t.getDate();return a<10&&(a="0"+a),t.getFullYear()+"-"+n+"-"+a},T=Object(l.b)(null,{deleteTodo:function(e){return function(){var t=Object(U.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.delete("/api/todo/".concat(e));case 3:n(L()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n({type:G});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},updateTodo:function(e,t,n,a){return function(){var A=Object(U.a)(y.a.mark((function A(c){var r,o;return y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,r={headers:{"Content-Type":"application/json"}},o={content:t,date:n,location:a},A.next=5,k.a.put("/api/todo/".concat(e),o,r);case 5:c(L()),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),c({type:G});case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(e){return A.apply(this,arguments)}}()},setAlert:D})((function(e){var t=e.content,n=e.date,A=e.location,c=e.item,r=e.deleteTodo,o=e.updateTodo,i=e.setAlert,l=Object(a.useState)({cont:t,day:n,loc:A}),h=Object(g.a)(l,2),j=h[0],B=h[1],E=j.cont,p=j.day,b=j.loc,O=W(p),C=function(e){B(Object(s.a)(Object(s.a)({},j),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsxs)("div",{className:"info-1",children:[Object(u.jsx)("input",{className:"u-full-width todo-content",type:"text",name:"cont",placeholder:"TO:DO",value:E,onChange:function(e){return C(e)}}),Object(u.jsx)("div",{className:"todo-submit",onClick:function(){return o(c._id,E,p,b),void i("TO:DO submitted!","success",1e3)},children:"\\/"})]}),Object(u.jsxs)("div",{className:"todo-info",children:[Object(u.jsx)("input",{className:"todo-date",type:"date",name:"day",value:O,onChange:function(e){return C(e)}}),Object(u.jsx)("input",{className:"todo-loc",type:"location",name:"loc",placeholder:"location",value:b,onChange:function(e){return C(e)}}),Object(u.jsx)("div",{className:"todo-del",onClick:function(e){return r(c._id),void i("TO:DO Deleted!","success",1e3)},children:"X"})]})]})})})),q=Object(l.b)((function(e){return{loading:e.todo.loading,todo:e.todo.todo}}),{getTodo:L,createTodo:function(){return function(){var e=Object(U.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},a={content:"",location:""},e.next=5,k.a.post("/api/todo",a,n);case 5:t(L()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:G});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getTodo,n=e.createTodo,A=e.loading,c=e.todo;return Object(a.useEffect)((function(){t()}),[t]),A||null===c?Object(u.jsx)(Z,{}):Object(u.jsxs)(a.Fragment,{children:[c.map((function(e){return Object(u.jsx)(T,{item:e,content:e.content,date:e.date,location:e.location},e._id)})),Object(u.jsx)("div",{className:"todo-btn",children:Object(u.jsx)("i",{className:"fas fa-plus-circle fa-3x plus-icon",onClick:function(e){return n()}})})]})})),P=Object(l.b)((function(e){return{user:e.auth.user}}),{signoutUser:function(){return function(){var e=Object(U.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.delete("/api/auth");case 3:t({type:I}),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),(n=e.t0.response.data.errors)&&n.forEach((function(e){return t(D(e.msg,"danger"))})),t({type:Q});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.user,n=e.signoutUser;t||(t=localStorage.getItem("profile"));var A=t,c=A.avatar,s=A.date,i=A.email,l=A.name,h={avatar:c,date:s,email:i,name:l};localStorage.setItem("profile",JSON.stringify(h));return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(r.b,{to:"/todo",children:"Back to TO:DO"}),Object(u.jsx)("h2",{children:"Profile"}),Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsx)("br",{}),Object(u.jsx)("img",{src:c,alt:"profile"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"profile-info",children:[Object(u.jsxs)("h4",{children:["name: ",l]}),Object(u.jsxs)("h4",{children:["email: ",i]}),Object(u.jsxs)("h5",{children:["register date: ",W(s)]})]})]}),Object(u.jsx)("div",{className:"logging",children:Object(u.jsx)("button",{onClick:function(){return alert("Are you sure you want to sign out? This will erase every information of you on this app permanently!!"),n(),Object(u.jsx)(o.a,{to:"/"})},className:"alert-danger",children:"Sign Out"})})]})})),V=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/register",component:R}),Object(u.jsx)(o.b,{exact:!0,path:"/login",component:K}),Object(u.jsx)(h,{exact:!0,path:"/todo",component:q}),Object(u.jsx)(h,{exact:!0,path:"/profile",component:P})]})]})},z=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"quote",children:[Object(u.jsx)("h3",{children:"He who has a why to live for can bear almost any how."}),Object(u.jsx)("h4",{children:"- Friedrich Nietzsche -"})]})})},X=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logoutUser:function(){return function(){var e=Object(U.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:f});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,n=e.logoutUser,a=t?Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)(r.b,{to:"/profile",children:"Profile"})," | ",Object(u.jsx)("span",{style:{color:"#dc3545"},onClick:function(){return alert("Are you sure you want to log out?"),n(),Object(u.jsx)(o.a,{to:"/"})},children:"LogOut"})]}):Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)(r.b,{to:"/register",children:"Sign Up"})," | ",Object(u.jsx)(r.b,{to:"/login",children:"Login"})]});return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsxs)("h1",{className:"title",children:[" ",Object(u.jsx)("i",{className:"fas fa-clipboard-list"})," TO:DO"]}),a]}),Object(u.jsx)("hr",{style:{marginBottom:"1rem",marginTop:"1rem"}})]})})),_=n(17),$=n(41),ee=n(42),te=n(43),ne=[],ae={token:localStorage.getItem("token"),user:null,isAuthenticated:null,loading:!0},Ae={todo:[],loading:!0},ce=Object(_.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:return[].concat(Object(te.a)(e),[a]);case b:return e.filter((function(e){return e.id!==a}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case m:return Object(s.a)(Object(s.a)({},e),{},{user:a,isAuthenticated:!0,loading:!1});case w:case O:return localStorage.setItem("token",a.token),Object(s.a)(Object(s.a)({},e),{},{token:a.token,isAuthenticated:!0,loading:!1});case Q:case x:case C:case f:return localStorage.removeItem("token"),localStorage.removeItem("profile"),Object(s.a)(Object(s.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});case I:return localStorage.removeItem("token"),localStorage.removeItem("profile"),Object(s.a)(Object(s.a)({},e),{},{token:null,user:null,isAuthenticated:null,loading:!1});default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case F:return Object(s.a)(Object(s.a)({},e),{},{todo:a.todos,loading:!1});case G:return Object(s.a)(Object(s.a)({},e),{},{todo:[],loading:!1});default:return e}}}),re=[ee.a],oe=Object(_.createStore)(ce,{},Object($.composeWithDevTools)(_.applyMiddleware.apply(void 0,re))),se=(n(73),function(){return Object(a.useEffect)((function(){oe.dispatch(N())}),[]),localStorage.token&&Y(localStorage.token),Object(u.jsx)(l.a,{store:oe,children:Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(X,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:z}),Object(u.jsx)(o.b,{component:V})]})]})})})});c.a.render(Object(u.jsx)(se,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c1469cbd.chunk.js.map