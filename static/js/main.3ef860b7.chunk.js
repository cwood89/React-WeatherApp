(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),i=(n(27),n(28),n(6)),s=n.n(i),l=n(11),u=n(5),p=n(18),m=n.n(p);function f(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return navigator.geolocation?new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)})):new Promise((function(e){return e({})}))}function h(e){return Math.floor(1.8*(e-273)+32).toString()+"\xb0"}function d(e){return m()().utcOffset(e/60).format("h:mm a")}var g=n(14),w=n(9),v=n(12),b=n(8),E=n(7),j=n.n(E);function x(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),p=i[0],m=i[1],E=Object(a.useState)(""),x=Object(u.a)(E,2),k=x[0],O=x[1],y=Object(a.useState)("0:00"),S=Object(u.a)(y,2),N=S[0],W=S[1],A=Object(a.useState)(),C=Object(u.a)(A,2),P=C[0],z=C[1],R=Object(a.useState)(!1),T=Object(u.a)(R,2),U=T[0],B=T[1],F=Object(a.useState)(""),I=Object(u.a)(F,2),J=I[0],L=I[1],M="https://openweathermap.org/img/wn/".concat(P,"@2x.png"),D="3b2dc511fa1b554f1b0c117c3837d37e";Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={}.catch((function(e){return console.log("Error: ",e.message)}));case 5:if(t=e.t0,void 0!==(n=t.coords)){e.next=9;break}return e.abrupt("return");case 9:return a=n.latitude,r=n.longitude,e.next=12,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(r,"&appid=").concat(D)).catch((function(e){return console.log("Error: ",e.message)}));case 12:return o=e.sent,e.next=15,o.json();case 15:if("404"!==(i=e.sent).cod){e.next=20;break}return e.abrupt("return");case 20:z(i.weather[0].icon),c(h(i.main.temp)),m(i.name),O(i.weather[0].description),W(d(i.timezone));case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[D]);var G=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(t,"&appid=").concat(D)).catch((function(e){return console.log("Error: ",e.message)}));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,console.log(a),"404"!==a.cod&&"400"!==a.cod){e.next=11;break}return e.abrupt("return");case 11:c(h(a.main.temp)),z(a.weather[0].icon),m(a.name),O(a.weather[0].description),W(d(a.timezone));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){e.preventDefault(),G(J),B(!1),e.target.reset(),L("")};return r.a.createElement("div",{className:" text-uppercase text-white text-center px-4"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:M,alt:k}),r.a.createElement("h1",{className:"header"},n),r.a.createElement("p",null,k),r.a.createElement("p",null,p),r.a.createElement("p",null,N)):r.a.createElement("img",{src:j.a,height:"250px",alt:"the weather app logo"}),!1===U?r.a.createElement(v.a,{className:"justify-content-md-center"},r.a.createElement(g.a,{variant:"primary",onClick:function(){return B(!0)}},"Pick a location!")):r.a.createElement(v.a,{className:"justify-content-md-center"},r.a.createElement(b.a,{md:4},r.a.createElement(w.a,{onSubmit:Z},r.a.createElement(w.a.Group,{controlId:"searchZipCode"},r.a.createElement(w.a.Control,{value:J,onChange:function(e){return L(e.target.value)},className:"input-sm",name:"zip",type:"number",placeholder:"Enter a zip code!"})),r.a.createElement(g.a,{variant:"primary",type:"submit"},"Submit")))))}var k=n(20),O=n(21);function y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"p-3"},r.a.createElement(O.a,{className:"card card-image gradient pt-3"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("img",{src:j.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"The weather app logo"}),r.a.createElement("h3",{className:"px-3"},"The Weather App")),r.a.createElement(x,null))))}var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Weather-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Weather-App","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()},7:function(e,t,n){e.exports=n.p+"static/media/logo512.33b20e5e.png"}},[[22,1,2]]]);
//# sourceMappingURL=main.3ef860b7.chunk.js.map