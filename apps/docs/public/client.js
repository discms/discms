(function(){function f(a){return'[giscus] An error occurred. Error message: "'.concat(a,'".')}var k=document.currentScript,l=(new URL(k.src)).origin,b=new URL(location.href),d=b.searchParams.get("giscus"),m=localStorage.getItem("giscus-session");b.searchParams["delete"]("giscus");var e=b.toString();if(d)localStorage.setItem("giscus-session",JSON.stringify(d)),history.replaceState(void 0,document.title,e);else try{d=JSON.parse(m)||""}catch(a){d="",localStorage.removeItem("giscus-session"),console.warn("".concat(f(null===
a||void 0===a?void 0:a.message)," Session has been cleared."))}b=k.dataset;var c={},h=document.querySelector("meta[property='og:description'],meta[name='description']");c.origin=e;c.session=d;c.theme=b.theme;c.reactionsEnabled=b.reactionsEnabled||"1";c.emitMetadata=b.emitMetadata||"0";c.inputPosition=b.inputPosition||"bottom";c.repo=b.repo;c.repoId=b.repoId;c.category=b.category||"";c.categoryId=b.categoryId;c.description=h?h.content:"";switch(b.mapping){case "url":c.term=e;break;case "title":c.term=
document.title;break;case "og:title":d=document.querySelector("meta[property='og:title'],meta[name='og:title']");c.term=d?d.content:"";break;case "specific":c.term=b.term;break;case "number":c.number=b.term;break;default:c.term=2>location.pathname.length?"index":location.pathname.substr(1).replace(/\.\w+$/,"")}if(h=(d=document.querySelector(".giscus"))&&d.id)c.origin="".concat(e,"#").concat(h);e=b.lang?"/".concat(b.lang):"";e="".concat(l).concat(e,"/widget?").concat(new URLSearchParams(c));b="lazy"===
b.loading?"lazy":void 0;var g=document.createElement("iframe");Object.entries({"class":"giscus-frame",title:"Comments",scrolling:"no",src:e,loading:b}).forEach(function(a){var n=a[0];return(a=a[1])&&g.setAttribute(n,a)});b=document.getElementById("giscus-css")||document.createElement("style");b.id="giscus-css";b.textContent="\n  .giscus, .giscus-frame {\n    width: 100%;\n    min-height: 150px;\n  }\n\n  .giscus-frame {\n    border: none;\n    color-scheme: normal;\n  }\n";document.head.prepend(b);
if(d){for(;d.firstChild;)d.firstChild.remove();d.appendChild(g)}else b=document.createElement("div"),b.setAttribute("class","giscus"),b.appendChild(g),k.insertAdjacentElement("afterend",b);window.addEventListener("message",function(a){a.origin===l&&(a=a.data,"object"===typeof a&&a.giscus&&(a.giscus.resizeHeight&&(g.style.height="".concat(a.giscus.resizeHeight,"px")),a.giscus.error&&(a=a.giscus.error,a.includes("Bad credentials")||a.includes("Invalid state value")?null!==localStorage.getItem("giscus-session")?
(localStorage.removeItem("giscus-session"),console.warn("".concat(f(a)," Session has been cleared.")),delete c.session,a="".concat(l,"/widget?").concat(new URLSearchParams(c)),g.src=a):m||console.error("".concat(f(a)," No session is stored initially. ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")):a.includes("Discussion not found")?console.warn("[giscus] ".concat(a,". A new discussion will be created if a comment/reaction is submitted.")):a.includes("API rate limit exceeded")?
console.warn(f(a)):console.error("".concat(f(a)," ").concat("Please consider reporting this error at https://github.com/giscus/giscus/issues/new.")))))})})();
