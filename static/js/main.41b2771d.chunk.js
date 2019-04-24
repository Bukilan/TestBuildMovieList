(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),c=a(1),l=a(13),s=a(14),u=a(18),p=a(15),m=a(19);a(30);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie/popular",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(n){return console.log("https://api.themoviedb.org/3/"+t+"?api_key=56d793d6cea47e6ab2101f3386c7b8b6&language=en-US"+a+"&page="+e.toString()),fetch("https://api.themoviedb.org/3/"+t+"?api_key=56d793d6cea47e6ab2101f3386c7b8b6&language=en-US"+a+"&page="+e.toString(),{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log(e);var r=[],i=1;for(var c=function(){return i++},l=0;l<e.results.length;l++){var s="https://image.tmdb.org/t/p/w500"+e.results[l].poster_path;r.push({key:{i:l},number:c(),poster:o.a.createElement("img",{className:"elem_poster",src:s,alt:"new"}),title:e.results[l].original_title,year:new Date(Date.parse(e.results[l].release_date)).toDateString(),description:e.results[l].overview})}console.log("fetch data here"),console.log(r);var u=t,p=a.split("=")[1];n({type:"ITEMS_FETCH_DATA_SUCCESS",payload:r,payload_method:u,payload_query:p})})}}var v="popular",d=Object(c.b)(function(e){return{method:e.method,query:e.query,state:e}},function(e){return{fetchMovie:function(t,a,n){return e(h(t,a,n))}}})(function(e){return o.a.createElement("tr",{className:"header"},o.a.createElement("th",null,o.a.createElement("h1",{className:"header-name"},"Movie list")),o.a.createElement("th",{width:"40"}),o.a.createElement("th",null,o.a.createElement("h3",{className:"header-home",onClick:function(){e.fetchMovie(1)}},"HOME")),o.a.createElement("th",{width:"60"}),o.a.createElement("th",null,o.a.createElement("select",{ref:function(e){v=e},onChange:function(){switch(console.log(v.value),v.value){case"popular":e.fetchMovie(1);break;case"top_rated":e.fetchMovie(1,"movie/top_rated");break;case"upcoming":e.fetchMovie(1,"movie/upcoming");break;case"now_playing":e.fetchMovie(1,"movie/now_playing")}},className:"select-form"},o.a.createElement("option",{value:"popular"},"Popular"),o.a.createElement("option",{value:"top_rated"},"Top Rated"),o.a.createElement("option",{value:"upcoming"},"Upcoming"),o.a.createElement("option",{value:"now_playing"},"Now Playing"))),o.a.createElement("th",{width:"1150"}),o.a.createElement("th",null,o.a.createElement("input",{className:"header-input",type:"text",name:"txt",placeholder:"Enter search term",onChange:function(t){!function(t){if(""!==t){var a="&query="+t.toString();e.fetchMovie(1,"search/movie",a)}else e.fetchMovie(1)}(t.target.value)}})))}),f=(a(31),function(){return o.a.createElement("div",{className:"no-data-container"},o.a.createElement("img",{src:"https://ui-ex.com/images/transparent-gif-loading-1.gif",alt:"Sorry, here is an error",width:"128",height:"128"}))}),g=(a(32),Object(c.b)(function(e){return{method:e.method,query:e.query,state:e}},function(e){return{fetchMovie:function(t,a,n){return e(h(t,a,n))}}})(function(e){return o.a.createElement("p",{onClick:function(){e.fetchMovie(1)},className:"close"})})),w=(a(33),1),y=1,E=1,b=1,_=1,k="",M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleClickPlus=function(){switch(a.props.state.items.method){case"movie/popular":w++,a.props.fetchMovie(w);break;case"search/movie":k!==a.props.state.items.query.toString()&&(y=1),y++;var e="&query="+a.props.state.items.query.toString();a.props.fetchMovie(y,"search/movie",e),k=a.props.state.items.query.toString();break;case"movie/top_rated":E++,a.props.fetchMovie(E,"movie/top_rated");break;case"movie/upcoming":b++,a.props.fetchMovie(b,"movie/upcoming");break;case"movie/now_playing":_++,a.props.fetchMovie(_,"movie/now_playing")}},a.handleClickMin=function(){switch(a.props.state.items.method){case"movie/popular":w>=2&&w--,a.props.fetchMovie(w);break;case"search/movie":y>=2&&y--,a.props.fetchMovie(y);var e="&query="+a.props.state.items.query.toString();a.props.fetchMovie(y,"search/movie",e),k=a.props.state.items.query.toString();break;case"movie/top_rated":E>=2&&E--,a.props.fetchMovie(E,"movie/top_rated");break;case"movie/upcoming":b>=2&&b--,a.props.fetchMovie(b,"movie/upcoming");break;case"movie/now_playing":_>=2&&_--,a.props.fetchMovie(_,"movie/now_playing")}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie()}},{key:"render",value:function(){return 0===this.props.state.items.list.length?o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(f,null)):o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",{className:"arrows"},o.a.createElement("span",{onClick:this.handleClickMin,className:"arrow arrow-left"}),o.a.createElement("span",{onClick:this.handleClickPlus,className:"arrow arrow-right"})),o.a.createElement("table",{className:"data_table"},o.a.createElement("tbody",null,this.props.state.items.list.map(function(e){return o.a.createElement("tr",{className:"rt-table"},o.a.createElement("td",{className:"row_poster"},e.poster),o.a.createElement("td",{className:"row_title"},o.a.createElement("h2",{className:"elem_title"},e.title)),o.a.createElement("td",{className:"row_year"},o.a.createElement("h3",{className:"elem_year"},e.year)),o.a.createElement("td",{className:"row_description"},o.a.createElement("p",{className:"elem_description"},e.description)))}))))}}]),t}(o.a.Component),N=Object(c.b)(function(e){return{method:e.method,query:e.query,state:e}},function(e){return{fetchMovie:function(t,a,n){return e(h(t,a,n))}}})(M),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var q=a(2),j=a(20),O={list:[],method:"movie/popular",query:""};var T=Object(q.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return Object(j.a)({},e,{list:t.payload,method:t.payload_method,query:t.payload_query});default:return e}}}),A=a(16),D=a(17),U=a.n(D),x=Object(q.d)(T,Object(q.a)(A.a,U.a));i.a.render(o.a.createElement(c.a,{store:x},o.a.createElement(N,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/TestBuildMovieList",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/TestBuildMovieList","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.41b2771d.chunk.js.map