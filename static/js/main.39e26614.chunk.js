(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(8),s=n(1),l=n(2),u=n(4),h=n(3),m=n(5);n(30);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie/popular",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(a){return fetch("https://api.themoviedb.org/3/"+t+"?api_key=56d793d6cea47e6ab2101f3386c7b8b6&language=en-US"+n+"&page="+e.toString(),{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log(e);var o=[],i=1;for(var c=function(){return i++},s=0;s<e.results.length;s++){var l="https://image.tmdb.org/t/p/w500"+e.results[s].poster_path;o.push({key:{i:s},number:c(),poster:r.a.createElement("img",{className:"elem_poster",src:l,alt:"new"}),title:e.results[s].original_title,year:new Date(Date.parse(e.results[s].release_date)).toDateString(),description:e.results[s].overview})}console.log("fetch data here"),console.log(o);var u=t,h=n.split("=")[1];a({type:"ITEMS_FETCH_DATA_SUCCESS",payload:o,payload_method:u,payload_query:h})})}}var d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"performSearch",value:function(e){if(""!==e){var t="&query="+e.toString();this.props.fetchMovie(1,"search/movie",t)}else this.props.fetchMovie(1)}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;this.performSearch(t)}},{key:"handleMenu",value:function(){this.props.fetchMovie(1)}},{key:"render",value:function(){return r.a.createElement("tr",{className:"header"},r.a.createElement("th",null,r.a.createElement("h1",{className:"header-name"},"Movie list")),r.a.createElement("th",{width:"40"}),r.a.createElement("th",null,r.a.createElement("h3",{className:"header-home",onClick:this.handleMenu.bind(this)},"HOME")),r.a.createElement("th",{width:"1320"}),r.a.createElement("th",null,r.a.createElement("input",{className:"header-input",type:"text",name:"txt",placeholder:"Enter search term",onChange:this.searchChangeHandler.bind(this)})))}}]),t}(r.a.Component),f=Object(c.b)(function(e){return{method:e.method,query:e.query,state:e}},function(e){return{fetchMovie:function(t,n,a){return e(p(t,n,a))}}})(d),v=(n(31),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"no-data-container"},r.a.createElement("img",{src:"https://ui-ex.com/images/transparent-gif-loading-1.gif",alt:"Sorry, here is an error",width:"128",height:"128"}))}}]),t}(r.a.Component)),g=(n(32),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){window.location.reload()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{onClick:this.handleClose,className:"close"})}}]),t}(r.a.Component)),y=(n(33),1),w=1,b="",E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClickPlus=function(){switch(n.props.state.items.method){case"movie/popular":y++,n.props.fetchMovie(y);break;case"search/movie":b!==n.props.state.items.query.toString()&&(w=1),w++;var e="&query="+n.props.state.items.query.toString();n.props.fetchMovie(w,"search/movie",e),b=n.props.state.items.query.toString()}},n.handleClickMin=function(){switch(n.props.state.items.method){case"movie/popular":y>=2&&y--,n.props.fetchMovie(y);break;case"search/movie":w>=2&&w--,n.props.fetchMovie(w);var e="&query="+n.props.state.items.query.toString();n.props.fetchMovie(w,"search/movie",e),b=n.props.state.items.query.toString()}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie()}},{key:"render",value:function(){return 0===this.props.state.items.list.length?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(v,null)):r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"arrows"},r.a.createElement("span",{onClick:this.handleClickMin,className:"arrow arrow-left"}),r.a.createElement("span",{onClick:this.handleClickPlus,className:"arrow arrow-right"})),r.a.createElement("table",{className:"data_table"},r.a.createElement("tbody",null,this.props.state.items.list.map(function(e){return r.a.createElement("tr",{className:"rt-table"},r.a.createElement("td",{className:"row_poster"},e.poster),r.a.createElement("td",{className:"row_title"},r.a.createElement("h2",{className:"elem_title"},e.title)),r.a.createElement("td",{className:"row_year"},r.a.createElement("h3",{className:"elem_year"},e.year)),r.a.createElement("td",{className:"row_description"},r.a.createElement("p",{className:"elem_description"},e.description)))}))))}}]),t}(r.a.Component),k=Object(c.b)(function(e){return{method:e.method,query:e.query,state:e}},function(e){return{fetchMovie:function(t,n,a){return e(p(t,n,a))}}})(E),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=n(6),_=n(20),M={list:[],method:"movie/popular",query:""};var N=Object(C.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return Object(_.a)({},e,{list:t.payload,method:t.payload_method,query:t.payload_query});default:return e}}}),S=n(18),q=n(19),T=n.n(q),A=Object(C.d)(N,Object(C.a)(S.a,T.a));i.a.render(r.a.createElement(c.a,{store:A},r.a.createElement(k,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/TestBuildMovieList",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/TestBuildMovieList","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):O(e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.39e26614.chunk.js.map