(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),s=a.n(r);a(13),a(14);var c=function(e){return e.alert&&n.a.createElement("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert"},n.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type),": ")," ",e.alert.message)},o=a(1),m=a.n(o);function i(e){return n.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"})),n.a.createElement("div",{className:"form-check form-switch text-"+("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),n.a.createElement("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault"},"Enable ",e.modeText," Mode")))))}i.protoTypes={title:m.a.string.isRequired,search:m.a.string},i.defaultProps={title:"set title here",search:"search here"};var d=i;function u(e){const[t,a]=Object(l.useState)(""),r=e=>e.split(/\s+\S+/).length;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"mb-3 my-5 row"},n.a.createElement("h2",{htmlFor:"myBox",className:"form-label col-6"},e.heading),n.a.createElement("input",{className:`form-control me-2 col bg-${e.mode} text-${"light"===e.mode?"dark":"light"}`,type:"search",placeholder:e.search,"aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success col",type:"submit"},"Word Search"),n.a.createElement("textarea",{className:`form-control my-4 bg-${e.mode} text-${"light"===e.mode?"dark":"light"}`,id:"myBox",rows:15,value:t,onChange:e=>{a(e.target.value)}})),n.a.createElement("button",{className:"btn btn-success mx-1 my-2",onClick:()=>{let e=new SpeechSynthesisUtterance;e.text=t,window.speechSynthesis.speak(e)}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-megaphone-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"})),"\xa0\xa0Speak"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:()=>{let l=t.toUpperCase();a(l),e.showAlertMessage("Coverted to UpperCase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-warning mx-1 my-2",onClick:()=>{let l=t.toLowerCase();a(l),e.showAlertMessage("Coverted to LowerCase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-dark mx-2 my-1",onClick:()=>{let l="";for(let e=t.length-1;e>=0;e--)l+=t[e];a(l),e.showAlertMessage("Text inversed","info")}},"Inverse the Text"),n.a.createElement("button",{className:"btn btn-secondary mx-1 my-2",onClick:()=>{let l=t.split(/[ ] + /);a(l.join(" ")),e.showAlertMessage("Extra spaces Removed","success")}},"Remove Extra Spaces"),n.a.createElement("button",{className:"btn btn-light mx-1 my-2",onClick:()=>{let t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlertMessage("Copied to Clipboard","success")}},"Copy the Text"),n.a.createElement("button",{className:"btn btn-danger mx-1 my-2",onClick:()=>{a(" "),e.showAlertMessage("Text cleared","info")}},"Clear the text")),n.a.createElement("div",{className:"container my-5"},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,""===t?0:r(t)," words and ",t.length," characters"),n.a.createElement("p",null,""===t?0:.008*r(t)," Minutes read"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,t.length>0?t:"Enter something to preview")))}var h=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)("Dark"),[s,o]=Object(l.useState)(null),m=(e,t)=>{o({message:e,type:t}),setTimeout(()=>{o(null)},1200)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{title:"Textify",mode:e,toggleMode:()=>{"light"===e?(t("dark"),r("Light"),document.body.style.backgroundColor="#2a2c33",document.body.style.color="#e9eaee",m("Dark mode has been enabled","success"),document.title="Textify - Dark Mode"):"dark"===e&&(t("light"),r("Dark"),document.body.style.backgroundColor="#e9eaee",document.body.style.color="#2a2c33",m("Light mode has been enabled","success"),document.title="Textify - Light Mode")},modeText:a}),n.a.createElement(c,{alert:s}),n.a.createElement("div",{className:"container"},n.a.createElement(u,{heading:"Enter text to analyze",mode:e,showAlertMessage:m})))};var b=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:s}=t;a(e),l(e),n(e),r(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),b()},4:function(e,t,a){e.exports=a(17)}},[[4,1,2]]]);
//# sourceMappingURL=main.20f4b20f.chunk.js.map