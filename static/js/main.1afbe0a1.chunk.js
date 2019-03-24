(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),s=(t(15),t(1)),c=t(2),l=t(4),m=t(3),u=t(5),d=function(e){return r.a.createElement("div",{className:"section-main"},r.a.createElement("div",{className:"frame frame--small"},r.a.createElement("span",null,e.text[0].toUpperCase())),r.a.createElement("h3",{className:"section-header"},e.text))},p=function(e){return r.a.createElement("div",{className:"contact-item"},r.a.createElement("span",null,e.label),e.href?r.a.createElement("a",{href:e.href},e.value):r.a.createElement("span",null,e.value))},f=function(e){return r.a.createElement("div",{className:"info-picture"},r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"photo-wrapper"},r.a.createElement("img",{className:"photo",src:e.imgUrl}))))},h=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.personalData,a=e.imageUrl,t=e.fullName,n=e.title,i=e.about,o=e.hobbies,s=e.contactItems;return r.a.createElement("div",{className:"info"},r.a.createElement(f,{imgUrl:a}),r.a.createElement("h1",{className:"name"},t),r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"about"},r.a.createElement(d,{text:"About Me"}),r.a.createElement("p",null,i),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"contact"},r.a.createElement(d,{text:"Contact"}),s.map(function(e){return r.a.createElement(p,{key:e.label,label:e.label,value:e.value,href:e.href})})))}}]),a}(n.Component),v=function(e){return r.a.createElement("div",{className:"division"},r.a.createElement("div",{className:"division-header"},r.a.createElement("div",{className:"division-main-date"},e.startYear," - ",e.endYear),r.a.createElement("div",{className:"division-main-position"},r.a.createElement("span",null,e.position),r.a.createElement("span",null,e.company))),e.children,r.a.createElement("p",{className:"division-content"}))},b=function(e){return r.a.createElement("div",{className:"section ".concat(e.extraClassName)},r.a.createElement(d,{text:e.title}),e.children)},E=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).renderJobDescription=function(e){return Array.isArray(e)?r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",null,e)})):r.a.createElement("p",null,e)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.detailsData,t=a.experiences,n=a.skills,i=a.certificates;return r.a.createElement("div",{className:"details"},r.a.createElement(b,{title:"Experiences"},t.map(function(a){return r.a.createElement(v,Object.assign({key:a.startYear},a),e.renderJobDescription(a.jobDescription))})),r.a.createElement(b,{title:"Workskills",extraClassName:"work-skills"},r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",null,e)}))),r.a.createElement(b,{title:"Certificates"},i.map(function(e){return r.a.createElement(v,e)})))}}]),a}(n.Component),g=(t(16),t(6)),y=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(h,{personalData:g}),r.a.createElement(E,{detailsData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={fullName:"Nour Sabouny",title:"Full Stack developer",about:"I have passion for computers in general and for writing software in particular, be it Web, Mobile, or Desktop application. I don't stop learning and always seeking new challenges.",hobbies:"I love video games, photographing, reading books, watching SciFi movies, and DIY projects.",imageUrl:"https://thispersondoesnotexist.com/image",contactItems:[{label:"Phone",value:"+999 999 999 9999"},{label:"Website",value:"http://nour-s.com",href:"http://nour-s.com"},{label:"Email",value:"name@domain.com",href:"mailto:name@domain.com"}],skills:["C#","ASP.NET MVC","ASP.NET CORE","Windows Forms (WPF)","Entity Framework","SQL Server/MY SQL","HTML5 / CSS3","JavaScript / TypeScript","React / React Native","Redux","RESTful APIs","Java"],experiences:[{startYear:"2017",endYear:"Present",position:"Full Stack developer",company:"TigerSpike",jobDescription:["Support and contribute to software development and design processes.","Follow defined development best practices, including wiki contributions,code commenting and documentation, source control.","Execute and review test plans (where necessary).","Author and critique software designs and architectures.","Critique application wireframes, use cases, user journeys, and designs.","Identify project development tasks. Mentor junior colleagues"]},{startYear:"2016",endYear:"2017",position:"Senior Software Developer",company:"Company Name",jobDescription:["Translated application storyboards and use cases into functional applications.","Designed, built, and maintained efficient, reusable, and reliable Java code.","Ensured the best possible performance, and quality of the applications.","Identified bottlenecks and bugs, and devise solutions to these problems.","Helped maintain code quality, organization, and automatization."]},{startYear:"2013",endYear:"2016",position:"Senior Software Developer / Team Lead",company:"Company Name",jobDescription:["Crafted, designed, communicated and defined the software architecture that solves the problem at hand.","Gave input as needed to issues like tools and environment selection.","Researched and recommended software tools to use."]},{startYear:"2011",endYear:"2013",position:"Senior Software Developer / Team Lead",company:"Company Name",jobDescription:["Lead a team of developers, supervise the progress of tasks using TFS, and Scrum.","Designed the system architecture with the best standards","Designed database using SQL Server, managed many projects at the company."]}],certificates:[{startYear:"2019",position:"React Nanodegree Certification",company:"Udacity"},{startYear:"2008",position:"Microsoft Certified Solutions Developer (MCSD)",company:"Microsoft"}]}},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1afbe0a1.chunk.js.map