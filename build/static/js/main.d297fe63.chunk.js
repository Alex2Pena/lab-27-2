(window["webpackJsonplab-27"]=window["webpackJsonplab-27"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),u=n(1),l=n(2),i=n(4),s=n(3),h=n(5),b=(n(13),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Header"))}}]),t}(c.a.Component)),m=(n(14),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,"\xa9 2019 Code Fellows")}}]),t}(c.a.Component)),d=(n(15),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleLikeButton=function(e){n.setState((function(e){return{score:e.score+1,thumbsUp:e.thumbsUp+1,thumbsDown:e.thumbsDown,colorChange:"green"}}))},n.handleDislikeButton=function(e){n.setState((function(e){return{score:e.score-1,thumbsUp:e.thumbsUp,thumbsDown:e.thumbsDown+1,colorChange:"red"}}))},n.handleResetButton=function(e){n.setState({score:0,thumbsUp:0,thumbsDown:0,colorChange:"black"})},n.state={score:0,thumbsUp:0,thumbsDown:0,colorChange:"black"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{id:"currentScore",className:this.state.colorChange,onClick:this.handleResetButton},"Score: ",this.state.score),c.a.createElement("div",{id:"counterWrap"},c.a.createElement("div",null,"Likes: ",this.state.thumbsUp),c.a.createElement("div",null,"Dislikes: ",this.state.thumbsDown)),c.a.createElement("div",{id:"buttonWrap"},c.a.createElement("button",{id:"likeButton",onClick:this.handleLikeButton},"Thumbs Up"),c.a.createElement("button",{id:"dislikeButton",onClick:this.handleDislikeButton},"Thumbs Down")))}}]),t}(c.a.Component)),p=(n(16),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(d,null),c.a.createElement(m,null))}}]),t}(c.a.Component)),f=document.getElementById("root");r.a.render(c.a.createElement(p,null),f)}],[[8,1,2]]]);
//# sourceMappingURL=main.d297fe63.chunk.js.map