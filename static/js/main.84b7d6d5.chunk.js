(window["webpackJsonproute-editor"]=window["webpackJsonproute-editor"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(2),l=n(3),u=n(42),s=n(6),d=n(8),p=n(43),O=n.n(p),g=function(e,t,n){var a=O()();return{type:f.ADD_COORD,payload:{id:a,name:e,lat:t,lng:n}}},f={ADD_COORD:"ADD_COORD",DELETE_COORD:"DELETE_COORD",DND_COORD:"DND_COORD",INIT_YMAPS_API:"INIT_YMAPS_API",EDIT_COORD:"EDIT_COORD"},b=n(12);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D={present:[],lastAction:void 0},y=n.n(b)()(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=e.present;switch(t.type){case f.ADD_COORD:var a=t.payload,r=a.id,o=a.name,c=a.lat,i=a.lng,l={name:o,lat:c,lng:i,id:r},u=[].concat(Object(d.a)(n),[l]),p=f.ADD_COORD;return{present:u,lastAction:p};case f.DELETE_COORD:var O=t.payload.id,g=Object(d.a)(n),b=g.splice(g.findIndex(function(e){return e.id===O}),1);g=[].concat(Object(d.a)(g.slice(0,b)),Object(d.a)(g.slice(b+1)));var m=f.DELETE_COORD;return{present:g,lastAction:m};case f.DND_COORD:var y=t.payload,E=y.startIndex,h=y.endIndex;if(E!==h){var j=Object(d.a)(n),C=j.splice(E,1),_=Object(s.a)(C,1),A=_[0];j.splice(h,0,A);var w=f.DND_COORD;return{present:j,lastAction:w}}return e;case f.EDIT_COORD:var I=t.payload,R=I.id,P=I.name,x=I.lat,M=I.lng,k=Object(d.a)(n),N=f.EDIT_COORD;return{present:k.map(function(e){return e.id===R?v({},e,{name:P,lat:x,lng:M}):e}),lastAction:N};default:return e}},{filter:Object(b.distinctState)()}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.INIT_YMAPS_API:var n=t.payload.yMapsApi;return n;default:return e}},h=Object(l.c)({coords:y,yMaps:E}),j=Object(l.e)(h),C=(n(71),n(13)),_=n.n(C),A=n(26),w=Object(a.memo)(function(e){var t=e.dispatch,n=e.yMaps,o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],l=c[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),p=d[0],O=d[1],f=Object(a.useState)(""),b=Object(s.a)(f,2),m=b[0],v=b[1],D=function(){var e=Object(A.a)(_.a.mark(function e(n){var a,r,o,c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),l(""),v(""),O(""),e.next=4,y(i,m,p);case 4:a=e.sent,r=a.gcoordName,o=a.glat,c=a.glng,a.decodeError||t(g(r,o,c));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(A.a)(_.a.mark(function e(t,a,r){var o,c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o={gcoordName:t,glat:a,glng:r},c=function(e){var t=e.geoObjects.get(0);if(t){var n=t.getAddressLine(),a=t.geometry.getCoordinates();o.gcoordName=n,o.glat=a[1],o.glng=a[0]}else o.decodeError=!0},e.t0=!0,e.next=e.t0===(""!==a&&""!==r)?5:e.t0===(""!==t)?8:11;break;case 5:return e.next=7,n.geocode([a,r]).then(c);case 7:return e.abrupt("break",12);case 8:return e.next=10,n.geocode(t).then(c);case 10:case 11:return e.abrupt("break",12);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:D},r.a.createElement("p",null,"\u0418\u043c\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b:"),r.a.createElement("input",{onChange:function(e){l(e.target.value)},value:i,placeholder:"\u0418\u043c\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b"}),r.a.createElement("p",null,"\u0414\u043e\u043b\u0433\u043e\u0442\u0430:"),r.a.createElement("input",{onChange:function(e){isNaN(e.target.value)||O(e.target.value)},value:p,placeholder:"\u0414\u043e\u043b\u0433\u043e\u0442\u0430"}),r.a.createElement("p",null,"\u0428\u0438\u0440\u043e\u0442\u0430:"),r.a.createElement("input",{onChange:function(e){isNaN(e.target.value)||v(e.target.value)},value:m,placeholder:"\u0428\u0438\u0440\u043e\u0442\u0430"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443"}))}),I=Object(i.b)(function(e){return{yMaps:e.yMaps}})(w),R=Object(a.memo)(function(e){var t=e.dispatch,n=e.name,a=e.lng,o=e.lat,c=e.id;return r.a.createElement("div",null,r.a.createElement("label",null,"\u0418\u043c\u044f: ".concat(n,"; \u0434\u043e\u043b\u0433\u043e\u0442\u0430:").concat(a,"; \u0448\u0438\u0440\u043e\u0442\u0430: ").concat(o)),r.a.createElement("button",{onClick:function(){t(function(e){return{type:f.DELETE_COORD,payload:{id:e}}}(c))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}),P=Object(i.b)()(R),x=n(21),M=Object(a.memo)(function(e){var t=e.coords,n=e.dispatch;return r.a.createElement(x.a,{onDragEnd:function(e){var t,a;e.destination&&n((t=e.source.index,a=e.destination.index,{type:f.DND_COORD,payload:{startIndex:t,endIndex:a}}))}},r.a.createElement(x.c,{droppableId:"droppable"},function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),t.present.present.map(function(e,t){return r.a.createElement(x.b,{key:e.id,draggableId:e.id,index:t},function(t){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),r.a.createElement(P,{key:e.id,name:e.name,lat:e.lat,lng:e.lng,id:e.id}))})}),e.placeholder)}))}),k=Object(i.b)(function(e){return{coords:e.coords}})(M),N=n(47);function T(){var e=Object(N.a)(["\n    width: 80%;\n    height: 100vh;\n"]);return T=function(){return e},e}var S=n(48).a.div(T()),L=Object(a.memo)(function(e){var t=e.coords,n=e.yMaps,o=e.dispatch,c=Object(a.useState)(null),i=Object(s.a)(c,2),l=i[0],u=i[1];Object(a.useEffect)(function(){l||u(n?new n.Map("map",{center:[55.76,37.64],zoom:7,controls:[]}):null)},[n,l]);var d,p=function(e){for(var t=e,a=function(e){n.geocode(t.get(e).geometry.getCoordinates()).then(function(a){t.get(e).options.set({balloonContentLayout:n.templateLayoutFactory.createClass("<span>".concat(a.geoObjects.get(0).getAddressLine(),"</span>"))})})},r=0;r<t.getLength();r++)a(r);return t},O=function(e,t){var a=t.originalEvent.target.geometry.getCoordinates();n.geocode(a).then(function(t){var n=t.geoObjects.get(0),a=n.getAddressLine(),r=n.geometry.getCoordinates();o(function(e,t,n,a){return{type:f.EDIT_COORD,payload:{id:e,name:t,lat:n,lng:a}}}(e,a,r[1],r[0]))})},g=function(e){return e.map(function(e){return[+e.lng,+e.lat]})};return r.a.createElement("div",null,r.a.createElement(S,{id:"map",key:"map"}),l?void((d=t.present.present).length>1?n.route(g(d)).then(function(e){for(var a=p(e.getWayPoints()),r=function(e){a.get(e).events.add("dragend",function(t){return O(d[e].id,t)})},o=0;o<a.getLength();o++)r(o);e.editor.start({addViaPoints:!1}),l.geoObjects.removeAll(),l.geoObjects.add(e);var c=n.geocode(g(d)[d.length-1]);t.present.lastAction===f.ADD_COORD&&c.then(function(e){l.setCenter(e.geoObjects.get(0).geometry.getCoordinates(),7)})},function(e){alert("error: "+e.message),o(b.ActionCreators.undo())}):l.geoObjects.removeAll()):void 0)}),Y=Object(i.b)(function(e){return{coords:e.coords,yMaps:e.yMaps}})(L),W=n(51),B=n(52),F=n(53),J=function(){function e(t){Object(W.a)(this,e),this.dispatch=t}return Object(B.a)(e,[{key:"initYMaps",value:function(){var e=this;F.a.load("https://api-maps.yandex.ru/2.1/?apikey=ec0ad35b-0d65-48bb-aff9-8343ba56b035&lang=en_US").then(function(t){return e.dispatch((n=t,{type:f.INIT_YMAPS_API,payload:{yMapsApi:n}}));var n}).catch(function(e){return console.log("Failed to load Yandex Maps",e)})}}]),e}(),z=Object(a.memo)(function(e){var t=e.dispatch;return Object(a.useEffect)(function(){new J(t).initYMaps()},[t]),r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(k,null),r.a.createElement(Y,null))}),H=Object(i.b)()(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:j},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){e.exports=n(108)},71:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.84b7d6d5.chunk.js.map