(this["webpackJsonpglassmass-example"]=this["webpackJsonpglassmass-example"]||[]).push([[0],[,,,,function(e,t,a){e.exports={components:"components_components__xWOEZ"}},function(e,t,a){e.exports=a.p+"static/media/button.893331fb.jpg"},function(e,t,a){e.exports=a.p+"static/media/checkbox.5fc78910.jpg"},function(e,t,a){e.exports=a.p+"static/media/container.19e5367f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header.b1a152db.jpg"},function(e,t,a){e.exports=a.p+"static/media/input.0546fae1.jpg"},function(e,t,a){e.exports=a.p+"static/media/radio.7caf5aa6.jpg"},function(e,t,a){e.exports=a.p+"static/media/select.7dfaeca9.jpg"},function(e,t,a){e.exports=a.p+"static/media/textarea.a6d88449.jpg"},function(e,t,a){e.exports=a(21)},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),i=a(1),c=a(2);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e){var t=e.children,a=e.style,o=e.className,l=e.onClick,i=void 0===l?null:l,c=Object(n.useState)(!1),m=c[0],d=c[1],u=s({textTransform:"uppercase",padding:"0.5rem 1rem",backgroundColor:"rgba(255,255,255,0.4)",backgroundSize:"150%",backgroundPositionX:m?"100%":"0",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",color:"#111",border:"none",borderRadius:"0.2rem",overflow:"hidden",cursor:"pointer",position:"relative",transition:"300ms",boxShadow:m?"5px 5px 5px rgba(0,0,0,0.5)":"3px 3px 3px rgba(0,0,0, 0.25)"},a);return r.a.createElement("button",{className:o,onClick:i,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:u},t)}function d(e){var t=e.children,a=e.className,n=e.style,o=s({padding:"0.5rem",position:"relative",zIndex:10,backgroundColor:"rgba(255, 255, 255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",boxSizing:"border-box"},void 0===n?null:n);return r.a.createElement("div",{className:a,style:o},t)}function u(e){var t=e.option,a=e.update_title,o=e.index,l=Object(n.useState)(0),i=l[0],c=l[1],s=Object(n.useState)(!1),m=s[0],d=s[1],u=30*o,p={boxSizing:"border-box",width:"100%",padding:"0.5rem",backgroundColor:m?"rgba(255,255,255, 0.8)":"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",opacity:i,transition:"300ms",transform:"translateY(0.5rem)"};return Object(n.useEffect)((function(){setTimeout((function(){c(1)}),u)}),[]),r.a.createElement("div",{onClick:function(){return a(t)},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:p,value:t},t)}function p(e){var t=e.options,a=void 0===t?[1,2,3]:t,o=e.value,l=void 0===o?"title":o,i=e.onChange,c=Object(n.useState)(!1),s=c[0],m=c[1],d=Object(n.useState)(l),p=d[0],b=d[1],g=function(e){b(e),m(!1)};Object(n.useEffect)((function(){i(p)}),[p]);return r.a.createElement("div",{style:{width:"10rem",position:"relative",boxSizing:"border-box",cursor:"pointer",borderRadius:"0.2rem",overflow:"hidden",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:"1px solid rgba(255,255,255,0.4)",marginLeft:"0.5rem"}},r.a.createElement("div",{onClick:function(){return m(!s)},style:{boxSizing:"border-box",width:"100%",height:"2rem",padding:"0.5rem",border:"1px solid rgba(255,255,255, 0.3)",listStyle:"none",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",position:"relative",display:"flex",alignItems:"center",justifyContent:"flex-start"}},r.a.createElement("p",null,p)),r.a.createElement("div",null,s&&a.map((function(e,t){return r.a.createElement(u,{key:e,index:t,option:e,update_title:g})}))))}function b(e){var t,a=e.checked,o=void 0!==a&&a,l=e.onChange,i=void 0===l?null:l,c=e.color,s=void 0===c?"#4fc3f7":c,m=e.text,d=void 0===m?"":m,u=e.value,p=Object(n.useState)(!1),b=p[0],g=p[1],h=((t={display:"inline-block",width:"1.5rem",height:"1.5rem",borderRadius:"0.25rem",backgroundColor:"blue",transition:"300ms"}).backgroundColor="rgba(255,255,255, 0.5)",t.WebkitBackdropFilter="blur(10px)",t.backdropFilter="blur(10px)",t.boxShadow=b?"5px 5px 5px rgba(0,0,0,0.5)":"3px 3px 3px rgba(0,0,0, 0.25)",t.borderTop="1px solid rgba(255,255,255,0.4)",t.borderBottom="1px solid rgba(255,255,255,0.4)",t.boxSizing="border-box",t.cursor="pointer",t),y={transition:"300ms",transform:o?"scale(1.1) translate(5px, -5px)":"scale(0)"};return r.a.createElement("label",{onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!1)},style:{display:"flex",gap:"0.5rem",alignItems:"center"}},r.a.createElement("span",{className:"cheflexx__input"},r.a.createElement("input",{style:{opacity:"0",width:"0.8em",height:"0.5em"},checked:o,onChange:i,type:"checkbox",name:"checkbox",value:u}),r.a.createElement("span",{style:h},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",style:y},r.a.createElement("path",{fill:"none",stroke:s,strokeWidth:"3",d:"M1.73 12.91l6.37 6.37L22.79 4.59"})))),r.a.createElement("span",{className:"radio__label"},d))}function g(e){var t=e.text,a=void 0===t?"option":t,o=e.value,l=void 0===o?"":o,i=e.onChange,c=void 0===i?null:i,s=e.checked,m=void 0===s?null:s,d=e.color,u=void 0===d?"#4FC3F7":d,p=e.name,b=void 0===p?"name":p,g=Object(n.useState)(!1),h=g[0],y=g[1],x={boxSizing:"border-box",width:"1.5rem",height:"1.5rem",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:"1px solid rgba(255,255,255,0.4)",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.5)",display:"flex",alignItems:"center",justifyContent:"center",transition:"300ms",boxShadow:h?"5px 5px 5px rgba(0,0,0,0.5)":"3px 3px 3px rgba(0,0,0, 0.25)",cursor:"pointer"},f={width:"0.5rem",height:"0.5rem",backgroundColor:m?u:"rgba(100,100,100,0.8)",borderRadius:"50%",transition:"300ms",boxShadow:"inset 2px 2px 2px rgba(0,0,0, 0.25)"};return r.a.createElement("label",{onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"}},r.a.createElement("input",{style:{width:"0rem",height:"0rem",opacity:0},type:"radio",checked:m,onChange:c,value:l,name:b,id:""}),r.a.createElement("div",{style:x},r.a.createElement("div",{style:f})),a)}function h(e){var t=e.title,a=e.children;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h4",{style:{margin:"0.5rem 0"}},t),r.a.createElement("div",{style:{display:"flex"}},a))}function y(e){var t=e.type,a=void 0===t?"text":t,o=e.placeholder,l=void 0===o?"":o,i=e.title,c=void 0===i?"":i,m=e.value,d=void 0===m?void 0:m,u=e.onChange,p=void 0===u?function(){}:u,b=e.required,g=void 0!==b&&b,h=e.readOnly,y=void 0!==h&&h,x=e.autoFocus,f=void 0!==x&&x,v=e.color,E=void 0===v?"#4fc3f7":v,k=e.error,w=void 0!==k&&k,S=e.errorColor,C=void 0===S?"red":S,O=e.errorMsg,j=void 0===O?"Something went wrong":O,F=e.style,B=void 0===F?null:F,I=Object(n.useState)(!1),_=I[0],N=I[1],M=s({padding:"0.3rem",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",border:"none",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:w?"2px solid "+C:"1px solid rgba(255,255,255,0.4)",boxSizing:"border-box",outline:"none",position:"relative"},B),R={width:_?"100%":0,height:_?3:0,backgroundColor:w?C:E,borderRadius:"1rem",position:"absolute",bottom:-8,left:0,transition:"300ms"},z={fontSize:"0.8rem",color:C,transform:"translateY(-10px)"};return r.a.createElement("label",{style:{position:"relative"}},r.a.createElement("h4",{style:{margin:"0.5rem 0"}},c),r.a.createElement("input",{style:M,type:a,placeholder:l,value:d,onChange:p,required:g,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},autoFocus:f,readOnly:y}),r.a.createElement("div",{style:R}),w&&r.a.createElement("p",{style:z},j))}function x(e){var t=e.title,a=void 0===t?"Title":t,o=e.cols,l=void 0===o?30:o,i=e.rows,c=void 0===i?10:i,m=e.placeholder,d=e.value,u=void 0===d?void 0:d,p=e.onChange,b=void 0===p?function(){}:p,g=e.required,h=void 0!==g&&g,y=e.readOnly,x=void 0!==y&&y,f=e.autoFocus,v=void 0!==f&&f,E=e.color,k=void 0===E?"#4fc3f7":E,w=e.error,S=void 0!==w&&w,C=e.errorColor,O=void 0===C?"red":C,j=e.errorMsg,F=void 0===j?"Something went wrong":j,B=e.style,I=void 0===B?null:B,_=Object(n.useState)(!1),N=(_[0],_[1]),M=s({padding:"0.3rem",backgroundColor:"rgba(255,255,255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",border:"none",borderTop:"1px solid rgba(255,255,255,0.4)",borderBottom:S?"2px solid "+O:"1px solid rgba(255,255,255,0.4)",boxSizing:"border-box",outline:"none",position:"relative"},I),R={width:0,height:0,backgroundColor:S?O:k,borderRadius:"1rem",position:"absolute",bottom:3,left:"-11rem",transition:"300ms"},z={fontSize:"0.8rem",color:O,transform:"translateY(-10px)"};return r.a.createElement("label",{style:{position:"relative"}},r.a.createElement("h4",{style:{margin:"0.5rem 0"}},a),r.a.createElement("textarea",{style:M,name:"",id:"",cols:l,rows:c,placeholder:m,value:u,onChange:b,required:h,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},autoFocus:v,readOnly:x}),r.a.createElement("div",{style:R}),S&&r.a.createElement("p",{style:z},F))}function f(e){var t=e.children,a=e.classname,n=s({width:"100%",padding:"0.5rem 1rem",position:"fixed",top:0,left:0,zIndex:100,backgroundColor:"rgba(255, 255, 255, 0.5)",WebkitBackdropFilter:"blur(10px)",backdropFilter:"blur(10px)",boxShadow:"3px 3px 3px rgba(0,0,0, 0.25)",display:"flex",alignItems:"center"},e.style);return r.a.createElement("header",{style:n,className:a},t)}var v=[{name:"children",desc:"type Component"}],E={button:[{name:"onClick",desc:"type Function"}],checkbox:[{name:"checked",desc:"type Boolean"},{name:"onChange",desc:"type Function"},{name:"color",desc:"type String"},{name:"text",desc:"type String"},{name:"value",desc:"type Any"}],container:v,header:v,input:[{name:"type",desc:"type String"},{name:"placeholder",desc:"type String"},{name:"title",desc:"type String"},{name:"value",desc:"type Any"},{name:"onChange",desc:"type Function"},{name:"required",desc:"type Boolean"},{name:"readOnly",desc:"type Boolean"},{name:"autofocus",desc:"type Boolean"},{name:"color",desc:"type String"},{name:"error",desc:"type Boolean"},{name:"errorMsg",desc:"type Function"}],radio:[{name:"text",desc:"type String"},{name:"value",desc:"type Any"},{name:"onChange",desc:"type Function"},{name:"checked",desc:"type Boolean"},{name:"color",desc:"type String"},{name:"name",desc:"type String"}],select:[{name:"options",desc:"type Array"},{name:"value",desc:"type String"},{name:"onChange",desc:"type Function"}],textarea:[{name:"title",desc:"type String"},{name:"cols",desc:"type Number"},{name:"rows",desc:"type Number"},{name:"placeholder",desc:"type String"},{name:"value",desc:"type Any"},{name:"onChange",desc:"type Function"},{name:"required",desc:"type Boolean"},{name:"readOnly",desc:"type Boolean"},{name:"autofocus",desc:"type Boolean"},{name:"color",desc:"type String"},{name:"error",desc:"type Boolean"},{name:"errorMsg",desc:"type Function"}]},k=a(4),w=a.n(k);var S=function(e){e.title,e.text;var t=e.codeImg,a=e.comp,n=e.compProps,o={flex:"1",padding:"1rem 2rem"},l={root:{minHeight:"60vh",padding:"1.5rem"},title:{marginBottom:"1rem"},table_row:{display:"flex",alignItems:"center",position:"relative",margin:"1rem 0",borderBottom:"1px solid rgba(255,255,255,0.4)",padding:"0.5rem 0"},table_itemName:{width:"40%"},table_itemDesc:{width:"60%"}};return r.a.createElement("article",{className:w.a.components,style:{}},r.a.createElement("div",{style:o},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}},a,r.a.createElement("img",{style:{marginTop:"1.5rem",width:"40rem"},src:t,alt:"Code Example"}))),r.a.createElement("div",{style:o},r.a.createElement(d,{style:l.root},r.a.createElement("h3",{style:l.title},"PROPS"),r.a.createElement("article",null,r.a.createElement("div",{style:l.table_row},r.a.createElement("h4",{style:l.table_itemName},"NAME"),r.a.createElement("h4",{style:l.table_itemDesc},"DESCRIPTION")),r.a.createElement("div",{style:l.table_row},r.a.createElement("p",{style:l.table_itemName},"style"),r.a.createElement("p",{style:l.table_itemDesc},"type: Object")),r.a.createElement("div",{style:l.table_row},r.a.createElement("p",{style:l.table_itemName},"className"),r.a.createElement("p",{style:l.table_itemDesc},"type: String")),n.map((function(e){return r.a.createElement("div",{style:l.table_row,key:e.name},r.a.createElement("p",{style:l.table_itemName},e.name),r.a.createElement("p",{style:l.table_itemDesc},e.desc))}))))))},C=a(5),O=a.n(C),j=a(6),F=a.n(j),B=a(7),I=a.n(B),_=a(8),N=a.n(_),M=a(9),R=a.n(M),z=a(10),P=a.n(z),T=a(11),W=a.n(T),A=a(12),L=a.n(A);var Y=function(){var e={height:"100%",padding:"0.5rem 1rem"},t=Object(n.useState)("button"),a=Object(i.a)(t,2),o=a[0],l=a[1],c=function(e){return l(e)},s=Object(n.useState)(!0),u=Object(i.a)(s,2),h=u[0],v=u[1],k=Object(n.useState)(""),w=Object(i.a)(k,2),C=w[0],j=w[1],B=Object(n.useState)(1),_=Object(i.a)(B,2),M=_[0],z=_[1],T=function(e){return z(e)},A=Object(n.useState)("option 1"),Y=Object(i.a)(A,2),q=Y[0],D=Y[1],G=Object(n.useState)(""),H=Object(i.a)(G,2);return H[0],H[1],r.a.createElement("section",{className:"components",id:"components",style:{minWidth:"100vh",width:"100%"}},r.a.createElement(d,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"0.5rem",width:"90%",margin:"0 auto",borderRadius:"0.3rem",transform:"translateY(-1rem)"}},r.a.createElement(m,{onClick:function(){return c("button")},style:e},"Button"),r.a.createElement(m,{onClick:function(){return c("checkbox")},style:e},"Checkbox"),r.a.createElement(m,{onClick:function(){return c("container")},style:e},"Container"),r.a.createElement(m,{onClick:function(){return c("header")},style:e},"Header"),r.a.createElement(m,{onClick:function(){return c("input")},style:e},"Input"),r.a.createElement(m,{onClick:function(){return c("radio")},style:e},"Radio"),r.a.createElement(m,{onClick:function(){return c("select")},style:e},"Select"),r.a.createElement(m,{onClick:function(){return c("textarea")},style:e},"Textarea")),"button"===o&&r.a.createElement(S,{comp:r.a.createElement(m,{onClick:function(){return alert("Hope you enjoy the library so for! :)")}},"Lick Me"),compProps:E.button,codeImg:O.a}),"checkbox"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement(b,{checked:h,onChange:function(){return v(!h)},text:"Check This Out!"})),codeImg:F.a,compProps:E.checkbox}),"container"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement("h4",null,"Hello There!"),r.a.createElement("p",null,"Very cool glass effect isn't it?!")),codeImg:I.a,compProps:E.container}),"header"===o&&r.a.createElement(S,{comp:r.a.createElement("div",{style:{position:"relative",height:130,width:300,border:"2px solid #000",borderRadius:"0.4rem"}},r.a.createElement(f,{style:{position:"absolute",borderRadius:"0.4rem"}},r.a.createElement("h6",null,"LOGO"))),codeImg:N.a,compProps:E.header}),"input"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement(y,{value:C,onChange:function(e){return j(e.target.value)},placeholder:"Good Stuff",title:"Good Glass"})),codeImg:R.a,compProps:E.input}),"radio"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement(g,{checked:1===M,onChange:function(){return T(1)},name:"showcase",text:"Showcase 1"}),r.a.createElement(g,{checked:2===M,onChange:function(){return T(2)},name:"showcase",text:"Showcase 2"})),codeImg:P.a,compProps:E.radio}),"select"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement(p,{value:q,onChange:function(){return function(e){D(e)}()},options:["option 1","option 2","option 3"]})),codeImg:W.a,compProps:E.select}),"textarea"===o&&r.a.createElement(S,{comp:r.a.createElement(d,null,r.a.createElement(x,{rows:4})),codeImg:L.a,compProps:E.textarea}))},q=function(){var e,t={card:(e={width:300,height:350,padding:"3rem 0"},Object(c.a)(e,"padding","3rem 2rem 0"),Object(c.a)(e,"fontSize","120%"),Object(c.a)(e,"marginBottom","2rem"),e),title:{marginBottom:"1rem"}},a={logo:{flex:"1"},logo_link:{color:"#4fc3f7"},nav:{marginRight:"3rem"},link:{padding:"0 0.5rem",margin:"0 0.5rem",color:"#000"}},o=Object(n.useState)("Awesome"),l=Object(i.a)(o,2),s=l[0],u=l[1],v=Object(n.useState)(!0),E=Object(i.a)(v,2),k=E[0],w=E[1],S=Object(n.useState)(!1),C=Object(i.a)(S,2),O=C[0],j=C[1],F=Object(n.useState)(!1),B=Object(i.a)(F,2),I=B[0],_=B[1],N=Object(n.useState)("awesome"),M=Object(i.a)(N,2),R=M[0],z=M[1],P=function(e){return z(e)},T=Object(n.useState)(""),W=Object(i.a)(T,2),A=(W[0],W[1],Object(n.useState)("")),L=Object(i.a)(A,2);L[0],L[1];return r.a.createElement("div",{className:"root",id:"top"},r.a.createElement(f,null,r.a.createElement("h3",{style:a.logo},r.a.createElement("a",{styles:a.logo_link,href:"#top"},"GLASSY-UI")),r.a.createElement("nav",{style:a.nav},r.a.createElement("a",{style:a.link,href:"#top"},"Home"),r.a.createElement("a",{style:a.link,href:"#components"},"Components"))),r.a.createElement("section",{className:"bg"},r.a.createElement("article",null,r.a.createElement(d,{style:t.card},r.a.createElement("h2",{style:t.title},"INTRO"),r.a.createElement("p",null,"Welcome here in the world of glass my friend!"),r.a.createElement("p",null,"If you love glassmorphism design you definetly should check this library!"))),r.a.createElement("article",null,r.a.createElement(d,{style:{width:"40rem",height:"80vh",transform:"translateY(-0.8rem)",padding:"1rem 2rem",position:"relative"}},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Send Me Some Feedback"),r.a.createElement("p",null,"Almost everything here made with glassy-ui. If you have any thoughts on what would you see in the next updates don\u2019t hesitate to write me a messasge! I would appreciate it very much! :)")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement(y,{title:"Your Email",placeholder:"email@example.com",required:!0}),r.a.createElement(x,{title:"Your Message",placeholder:"Your message here...",required:!0})),r.a.createElement("div",null,r.a.createElement(h,{title:"Radio Showcase"},r.a.createElement(g,{value:"awesome",onChange:function(e){return P(e.target.value)},text:"Awesome",checked:"awesome"===R}),r.a.createElement(g,{value:"cool",onChange:function(e){return P(e.target.value)},text:"Cool",checked:"cool"===R}),r.a.createElement(g,{value:"okey",onChange:function(e){return P(e.target.value)},text:"Okey",checked:"okey"===R})),r.a.createElement(h,{title:"Checkbox Showcase"},r.a.createElement(b,{text:"Awesome",value:"awesome",checked:k,onChange:function(){return w(!k)}}),r.a.createElement(b,{text:"Cool",value:"cool",checked:O,onChange:function(){return j(!O)}}),r.a.createElement(b,{text:"Okey",value:"okey",checked:I,onChange:function(){return _(!I)}})),r.a.createElement(h,{title:"Select Showcase"},r.a.createElement(p,{value:s,onChange:function(){var e;u(e)},options:["Awesome","Cool","Okey"]})))),r.a.createElement(m,{style:{position:"absolute",bottom:"4rem",left:"2rem"}},"send message"))))),r.a.createElement(Y,null))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.5a845e59.chunk.js.map