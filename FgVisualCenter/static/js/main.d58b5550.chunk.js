(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,s,t){},27:function(e,s,t){},47:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(16),n=t.n(a),r=(t(24),t(6)),i=t(7),l=t(9),o=t(8),j=t(13),d=t(17),h=t.n(d),b=(t(27),t(18)),O=t(5),u=t.n(O),m=t(1),p=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.description;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{type:"color",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Inicio"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"Sobre nosotros"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Servicios"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Colecci\xf3n"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contacto"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(u.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline",children:e})}),Object(m.jsx)(u.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{children:[s,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(u.a,{bottom:!0,duration:2e3})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),x=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(u.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 FG Visual Center"}),Object(m.jsxs)("li",{children:["Made with"," ",Object(m.jsx)("a",{title:"ReactJS",href:"https://reactjs.org/",children:"ReactJS"})]})]})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),v=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,i=this.props.data.phone,l=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(u.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"FG Visual center"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"Sobre nosotros"}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Detalles de contacto"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[c,Object(m.jsx)("br",{}),a," ",n,", ",r]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:i}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:"files/visualcenter.pdf",className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Descarga nuestro plegable"]})})})]})]})]})})})}}]),t}(c.Component),f=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(m.jsx)("em",{children:s.name})]},s.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Consultorio"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Brigadas"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Nuestros valores"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),t}(c.Component),N=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,r=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(O.Fade,{bottom:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Contacto"})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:r})})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(m.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Direcci\xf3n y Tel\xe9fono"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),s," ",Object(m.jsx)("br",{}),t,", ",c," ",a,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n})]})]}),Object(m.jsxs)("div",{className:"widget widget_tweets",children:[Object(m.jsx)("h4",{className:"widget-title",children:"Art\xedculos relacionados"}),Object(m.jsxs)("ul",{id:"twitter",children:[Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:["\xbfPor qu\xe9 es importante ver bien con los dos ojos?",Object(m.jsx)("a",{href:"https://www.cnoo.es/salud-visual/por-que-es-importante-ver-bien-con-dos-ojos#:~:text=La%20visi%C3%B3n%20binocular%20es%20una,para%20su%20calidad%20de%20vida.",children:" Cnoo.es"})]}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"./",children:" "})})]}),Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:["La vista es uno de los cinco sentidos que nos permiten comprender el mundo que nos rodea y desenvolvernos en \xe9l. El ojo recibe rayos de luz procedentes del entorno a trav\xe9s de un diafragma llamado pupila que se abre y se cierra gracias al m\xfasculo ciliar y los transforman en impulsos nerviosos.",Object(m.jsx)("a",{href:"https://dialnet.unirioja.es/descarga/articulo/5555784.pdf",children:" Dialnet"})]}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"./",children:" "})})]})]})]})]})})})]})}}]),t}(c.Component),g=t(19),w=t.n(g),y=0,C=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(w.a,{alt:e.title,src:s}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},y++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Nuestra colecci\xf3n"}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(c.Component),k=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(i.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{data:this.state.resumeData.main}),Object(m.jsx)(v,{data:this.state.resumeData.main}),Object(m.jsx)(f,{data:this.state.resumeData.resume}),Object(m.jsx)(C,{data:this.state.resumeData.portfolio}),Object(m.jsx)(N,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(c.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),c(e),a(e),n(e),r(e)}))};n.a.render(Object(m.jsx)(k,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.d58b5550.chunk.js.map