(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(6),s=n.n(u),c=n(1),l=n(2),o=n(4),i=n(3),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{className:"form-control container m-5",type:"text",value:this.props.username,onChange:function(t){e.props.onHandle(t)}})))}}]),n}(r.Component),h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,this.props.userInput),a.a.createElement("h4",null," ",this.props.userProfile.login," "),a.a.createElement("h4",null," ",this.props.userProfile.name," "),a.a.createElement("h4",null," ",this.props.userProfile.company," "),a.a.createElement("h4",null," ",this.props.userProfile.url," "),a.a.createElement("h4",null," ",this.props.userProfile.public_repos," "))}}]),n}(r.Component),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).state={username:"",userProfile:""},e}return Object(l.a)(n,[{key:"getUserInput",value:function(e){var t=e.target.value;this.setState({username:t}),this.fetchUser()}},{key:"fetchUser",value:function(){var e=this;fetch("https://api.github.com/users/".concat(this.state.username)).then((function(e){return e.json()})).then((function(t){e.setState({userProfile:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container text-center"},a.a.createElement(p,{onHandle:function(t){e.getUserInput(t)},username:this.state.username}),a.a.createElement(h,{userInput:this.state.username,userProfile:this.state.userProfile}))}}]),n}(a.a.Component);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.913e490c.chunk.js.map