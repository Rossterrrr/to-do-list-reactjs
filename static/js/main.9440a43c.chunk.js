(this.webpackJsonpexample_react=this.webpackJsonpexample_react||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),o=(n(13),n(0)),r=function(){return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Vadim Zabolotsky"}),Object(o.jsx)("h2",{children:"5 \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c 0"})]})},l=(n(15),function(){return Object(o.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c"})}),b=(n(16),function(){return Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-info",children:"\u0412\u0441\u0435"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"})]})}),j=n(5),u=n(6),p=n(2),m=n(8),d=n(7),f=(n(17),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(j.a)(this,n),(a=e.call(this,t)).state={important:!1,like:!1},a.onImportant=a.onImportant.bind(Object(p.a)(a)),a.onLike=a.onLike.bind(Object(p.a)(a)),a}return Object(u.a)(n,[{key:"onImportant",value:function(){this.setState((function(t){return{important:!t.important}}))}},{key:"onLike",value:function(){this.setState((function(t){return{like:!t.like}}))}},{key:"render",value:function(t){var e=this.props.label,n=this.state,a=n.important,s="app-list-item d-flex justify-content-between";return n.like&&(s+=" like"),a&&(s+=" important"),Object(o.jsxs)("div",{className:s,children:[Object(o.jsx)("span",{className:"app-list-item-label",onClick:this.onLike,children:e}),Object(o.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(o.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:this.onImportant,children:Object(o.jsx)("i",{className:"fa fa-star"})}),Object(o.jsx)("button",{type:"button",className:"btn-trash btn-sm",children:Object(o.jsx)("i",{className:"fa fa-trash-o"})}),Object(o.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(s.a.Component)),h=(n(18),function(t){var e=t.posts.map((function(t){return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(f,{label:t.label,important:t.important})})}));return Object(o.jsx)("ul",{className:"app-list list-group",children:e})}),x=(n(19),function(){return Object(o.jsxs)("form",{className:"bottom-panel d-flex",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u041e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",className:"form-control new-post-label"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}),O=(n(20),function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(r,{}),Object(o.jsxs)("div",{className:"search-panel d-flex",children:[Object(o.jsx)(l,{}),Object(o.jsx)(b,{})]}),Object(o.jsx)(h,{posts:[{label:"Going to learn React",important:!0},{label:"That is so good",important:!1},{label:"I need a break...",important:!1}]}),Object(o.jsx)(x,{})]})});n(21);i.a.render(Object(o.jsx)(O,{}),document.querySelector("#root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9440a43c.chunk.js.map