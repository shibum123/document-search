(this["webpackJsonpdocument-search"]=this["webpackJsonpdocument-search"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(49),c=a.n(A),o=(a(61),a(24),a(21)),i=a.n(o),s=a(50),l=a(55),x=a(51),g=a.n(x),u=(a(74),a(53)),h=a.n(u),m=a(54),C=a.n(m),v=a(75),p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],A=t[1],c=Object(n.createRef)();Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:"",v.search({index:"doc-index-01",body:t}).then((function(e){A(e.hits.hits)}),(function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){o(e?{query:{regexp:{title:{value:".*"+e+".*",flags:"ALL"}}}}:"")},u=function(){x(c.value)},m=a.map((function(e){return{filename:r.a.createElement("span",{title:e._source.filename},e._source.filename),category:"Submission",create_date:h()(e._source.create_date).format("DD-MM-YYYY"),content:r.a.createElement("span",{title:"".concat(e._source.content.substring(0,50),"...")},e._source.content),action:r.a.createElement("a",{href:"#",className:"search-overview__link"},"Go to")}}));return r.a.createElement("div",{className:"search-overview"},r.a.createElement("p",{className:"search-overview__logo"},r.a.createElement("img",{src:C.a,alt:"axa logo"})),r.a.createElement("p",{class:"search-overview__title"},r.a.createElement("h3",{className:"search-overview__title-text"},"The Search Tool |",r.a.createElement("span",{className:"search-overview__title-version"},"\xa0V1.0"))),r.a.createElement("center",null),r.a.createElement("div",{className:"input-group search-overview__header"},r.a.createElement("input",{type:"text",className:"form-control",ref:c,placeholder:"Enter Search Text",onKeyDown:function(e){"Enter"===e.key&&x(e.target.value)},"aria-label":"Enter Search Text","aria-describedby":"basic-addon2"}),r.a.createElement("button",{className:"search-overview__input input-group-append",onClick:u},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})),r.a.createElement("input",{type:"button",className:"search-overview__button",value:"Search",onClick:u}),r.a.createElement("label",{className:"search-overview__label"},"Advanced Search")),r.a.createElement(g.a,{tableHeaders:[{title:"File Name",prop:"filename",sortable:!0},{title:"Category",prop:"category"},{title:"Submitted On",prop:"create_date"},{title:"Perview",prop:"content"},{title:"Action",prop:"action"}],tableBody:m,tableClassName:"striped hover responsive"}))},E=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,a){},54:function(e,t){e.exports="data:image/png;base64,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"},56:function(e,t,a){e.exports=a(103)},61:function(e,t,a){},75:function(e,t,a){var n=new(a(76).Client)({host:"http://localhost:9200",requestTimeout:1/0,keepAlive:!0});e.exports=n}},[[56,1,2]]]);
//# sourceMappingURL=main.9973b843.chunk.js.map