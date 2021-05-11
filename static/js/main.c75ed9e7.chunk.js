(this.webpackJsonprestore=this.webpackJsonprestore||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(16),o=n.n(i),l=n(9),s=n(13),a=n(3),j=n(11),u=n(12),d=n(18),b=n(17),O=(n(34),n(0)),x=function(e){var t=e.book,n=e.onAddToCart,r=t.title,c=t.author,i=t.price,o=t.coverImage;return Object(O.jsxs)("div",{className:"book__list-item",children:[Object(O.jsx)("div",{className:"book__cover",children:Object(O.jsx)("img",{className:"book__cover-image",src:o,alt:"cover-".concat(r)})}),Object(O.jsxs)("div",{className:"book__details",children:[Object(O.jsx)("span",{className:"book__title",children:r}),Object(O.jsx)("div",{className:"book__author",children:c}),Object(O.jsxs)("div",{className:"book__price",children:[i,"$"]}),Object(O.jsx)("button",{onClick:n,className:"btn btn-info book__cart",children:"Add to Cart"})]})]})},h=n(8),_=c.a.createContext(),p=_.Provider,f=_.Consumer,k=function(){return function(e){return function(t){return Object(O.jsx)(f,{children:function(n){return Object(O.jsx)(e,Object(h.a)(Object(h.a)({},t),{},{BookStoreService:n}))}})}}},y=function(e){return{type:"BOOK_ADD_TO_CART",payload:e}},m=function(e){return{type:"BOOK_REMOVE_FROM_CART",payload:e}},g=function(e){return{type:"ALL_BOOK_REMOVE_FROM_CART",payload:e}},v=function(e,t){return function(){t({type:"FETCH_BOOKS_SUCCESS"}),e.getBook().then((function(e){t({type:"FETCH_BOOKS_LOADED",payload:e})})).catch((function(e){t({type:"FETCH_BOOKS_FAILURE",payload:e})}))}},C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},T=(n(36),function(){return Object(O.jsx)("div",{class:"loader",children:"Loading..."})}),A=(n(37),function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{class:"cycle",children:[Object(O.jsx)("h1",{children:"Oops"}),Object(O.jsx)("h2",{children:" Something went wrong"}),Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"el_-TWBznsTc",width:"1880",height:"280",children:[Object(O.jsxs)("g",{id:"el_C4SApqlqq9",children:[Object(O.jsx)("title",{children:"background"}),Object(O.jsx)("rect",{id:"el_PRMgDsYyJA",height:"402",width:"582",y:"-1",x:"-1"}),Object(O.jsx)("g",{display:"none",id:"el_RdKFOW7DfK",children:Object(O.jsx)("rect",{y:"0",x:"0",height:"100%",width:"100%",id:"el_WCV-rm_wAr"})})]}),Object(O.jsxs)("g",{id:"el_stL77T_DP_",children:[Object(O.jsx)("title",{children:"Layer 1"}),Object(O.jsx)("g",{id:"el_q9ZiWXx2FT_92Gu6pVz-","data-animator-group":"true","data-animator-type":"1",children:Object(O.jsxs)("g",{id:"el_q9ZiWXx2FT",children:[Object(O.jsx)("ellipse",{ry:"51.5",rx:"52.5",id:"el_9OAkGMQhHt",cy:"220.921875",cx:"158.5"}),Object(O.jsx)("line",{x1:"158",y1:"173.421875",x2:"159",y2:"271.421875",id:"el_Bj_HtMcd_0","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"111",y1:"221.421875",x2:"212.000001",y2:"220.421875",id:"el_ALQa8qz3EZ","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"120.000004",y1:"186.421875",x2:"199",y2:"254.421875",id:"el_hMEibUohhS","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"121.999999",y1:"253.421877",x2:"196",y2:"189.421875",id:"el_gzr9MNgtcJ","stroke-linejoin":"null","stroke-linecap":"null"})]})}),Object(O.jsx)("g",{id:"el_qvoYAhk4wZ_4lvhItYYT","data-animator-group":"true","data-animator-type":"1",children:Object(O.jsxs)("g",{id:"el_qvoYAhk4wZ",children:[Object(O.jsx)("ellipse",{ry:"51.5",rx:"52.5",id:"el_KCYTv96caG",cy:"221.921875",cx:"371.5"}),Object(O.jsx)("line",{x1:"323",y1:"224.421875",x2:"427",y2:"223.421875",id:"el_gKjqL-sHeQ","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"373",y1:"174.421875",x2:"371",y2:"272.42187",id:"el_XBxGSZ7ar1","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"337",y1:"189.421875",x2:"414",y2:"258.421875",id:"el_JV3ocdtwtY6","stroke-linejoin":"null","stroke-linecap":"null"}),Object(O.jsx)("line",{x1:"337.000002",y1:"256.421874",x2:"414",y2:"188.421875",id:"el_RC8bEWHyy4P","stroke-linejoin":"null","stroke-linecap":"null"})]})}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_CkKjQD_kjMC",y2:"219.421875",x2:"370",y1:"217.421875",x1:"272"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_UzdFhN9Tr_g",y2:"218.421875",x2:"367",y1:"137.421875",x1:"302"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_XLk0DfiMMK0",y2:"137.421875",x2:"189.000006",y1:"140.421875",x1:"303"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_iKGezHhihy6",y2:"220.421875",x2:"159",y1:"99.421875",x1:"206"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_v3airVb5iBq",y2:"153.421871",x2:"183.000001",y1:"219.421875",x1:"274"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_VHhZAchzx5G",y2:"90.421875",x2:"192",y1:"102.421875",x1:"205"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_J8MXmJ1gywe",y2:"122.421875",x2:"309",y1:"218.421875",x1:"272"}),Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_GFQnrRDr7o9",y2:"68.421875",x2:"218",y1:"90.421875",x1:"192"}),Object(O.jsx)("ellipse",{ry:"5.5",rx:"26",id:"el_n6qUwfgig_3",cy:"115.921875",cx:"318"}),Object(O.jsx)("ellipse",{ry:"10",rx:"9.5",id:"el_eOgaPpZB4hI",cy:"221.421875",cx:"158.5"}),Object(O.jsx)("ellipse",{ry:"10",rx:"9.5",id:"el_KcbEK6cE6L4",cy:"222.421875",cx:"372.5"}),Object(O.jsx)("g",{id:"el_NNLWpvLfxMa_akhlpeM6l","data-animator-group":"true","data-animator-type":"1",children:Object(O.jsxs)("g",{id:"el_NNLWpvLfxMa",children:[Object(O.jsx)("line",{"stroke-linecap":"null","stroke-linejoin":"null",id:"el_4LIOjZ_bWPN",y2:"245.421875",x2:"279",y1:"185.421875",x1:"265"}),Object(O.jsx)("ellipse",{ry:"2.5",rx:"11.000001",id:"el_hadg8EV6KIC",cy:"185.921875",cx:"260"}),Object(O.jsx)("ellipse",{ry:"2.5",rx:"11.000001",id:"el_hYdOb40x8kP",cy:"245.921875",cx:"282"})]})})]})]})]})})}),E=(n(38),function(e){var t=e.books,n=e.onAddToCart;return Object(O.jsx)("ul",{className:"book__list",children:t.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(x,{book:e,onAddToCart:function(){return n(e.id)}})},e.id)}))})}),N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,r=e.error,c=e.onAddToCart;return n?Object(O.jsx)(T,{}):r?Object(O.jsx)(A,{}):Object(O.jsx)(E,{books:t,onAddToCart:c})}}]),n}(r.Component),w=C(k(),Object(l.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.BookStoreService;return{fetchBooks:v(n,e),onAddToCart:function(t){return e(y(t))}}})))(N),S=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(w,{})})},B=(n(39),{onIncrease:y,onDecrease:m,onDelete:g}),L=Object(l.b)((function(e){var t=e.shopCart;return{items:t.cartItems,total:t.orderTotal}}),B)((function(e){var t=e.items,n=e.total,r=e.onIncrease,c=e.onDecrease,i=e.onDelete;return Object(O.jsxs)("div",{className:"cart__detail",children:[Object(O.jsx)("h2",{children:"Your Order"}),Object(O.jsxs)("table",{className:"table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Item"}),Object(O.jsx)("th",{children:"Count"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e,t){var n=e.id,o=e.title,l=e.count,s=e.total;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:o}),Object(O.jsx)("td",{children:l}),Object(O.jsxs)("td",{children:[s,"$"]}),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{onClick:function(){return i(n)},className:"btn btn-outline-danger btn-sm float-right cart__btn",children:Object(O.jsx)("i",{className:"fa fa-trash-o"})}),Object(O.jsx)("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right cart__btn",children:Object(O.jsx)("i",{className:"fa fa-plus-circle"})}),Object(O.jsx)("button",{onClick:function(){return c(n)},className:"btn btn-outline-warning btn-sm float-right cart__btn",children:Object(O.jsx)("i",{className:"fa fa-minus-circle"})})]})]},n)}))})]}),Object(O.jsxs)("div",{className:"cart__total",children:["Total: ",n,"$"]})]})})),I=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(L,{})})},M=(n(40),{onIncrease:y,onDecrease:m,onDelete:g}),D=Object(l.b)((function(e){var t=e.shopCart,n=t.orderTotal;return{numItems:t.orderCount,total:n}}),M)((function(e){var t=e.numItems,n=e.total;return Object(O.jsxs)("header",{className:"book__header row",children:[Object(O.jsx)(s.b,{to:"/",children:Object(O.jsx)("div",{className:"book__logo text-dark",children:"ReStore"})}),Object(O.jsx)(s.b,{to:"/card",children:Object(O.jsxs)("div",{className:"book-cart",children:[Object(O.jsx)("i",{className:"book-cart__logo fa fa-shopping-cart"}),t," items (",n,"$)"]})})]})})),K=(n(45),function(){return Object(O.jsxs)("main",{role:"main",className:"container",children:[Object(O.jsx)(D,{}),Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{path:"/",component:S,exact:!0}),Object(O.jsx)(a.a,{path:"/card",component:I})]})]})}),R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(u.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(O.jsx)(A,{}):this.props.children}}]),n}(r.Component),F=function(){function e(){Object(j.a)(this,e),this.data=[{id:1,title:"Java Script for lousers",author:"Human",price:10,coverImage:"https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758"},{id:2,title:"Java Script for lousers 2",author:"Human",price:20,coverImage:"https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758"},{id:3,title:"Java Script for lousers 2",author:"Human",price:40,coverImage:"https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758"}]}return Object(u.a)(e,[{key:"getBook",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){Math.random()>.75&&n(new Error("oops")),t(e.data)}),800)}))}}]),e}(),H=n(24),q=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_SUCCESS":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_LOADED":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},J=n(14),V=function(e,t,n){return 0===t.count?[].concat(Object(J.a)(e.slice(0,n)),Object(J.a)(e.slice(n+1))):-1===n?[].concat(Object(J.a)(e),[t]):[].concat(Object(J.a)(e.slice(0,n)),[t],Object(J.a)(e.slice(n+1)))},P=function(e,t,n){var r=e.bookList.books,c=e.shopCart.cartItems,i=r.find((function(e){return e.id===t})),o=c.findIndex((function(e){return e.id===t})),l=function(e,t,n){return t?Object(h.a)(Object(h.a)({},t),{},{count:t.count+n,total:t.total+n*e.price}):{id:e.id,title:e.title,count:1,total:e.price}}(i,c[o],n),s=c.reduce((function(e,t){return e+t.total}),i.price*n);return{orderCount:c.reduce((function(e,t){return e+t.count}),n),orderTotal:s,cartItems:V(c,l,o)}},W=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADD_TO_CART":return P(e,t.payload,1);case"BOOK_REMOVE_FROM_CART":return P(e,t.payload,-1);case"ALL_BOOK_REMOVE_FROM_CART":var n=e.shopCart.cartItems.find((function(e){return e.id===t.payload}));return P(e,t.payload,-n.count);default:return e.shopCart}},Y=function(e,t){return{bookList:q(e,t),shopCart:W(e,t)}},Z=Object(H.a)(Y),z=new F;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l.a,{store:Z,children:Object(O.jsx)(R,{children:Object(O.jsx)(p,{value:z,children:Object(O.jsx)(s.a,{children:Object(O.jsx)(K,{})})})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c75ed9e7.chunk.js.map