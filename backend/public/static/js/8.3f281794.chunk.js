(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{134:function(e,t,a){"use strict";a.r(t);var n=a(52),r=a.n(n),i=a(53),c=a(10),l=a(0),s=a.n(l),o=a(8),u=a(11),p=a(84),d=a(58),m=a(82),v=a(86),f=a(49),b=a(59),E=a(15),g=(a(87),a(88));t.default=function(){var e=Object(l.useContext)(u.a),t=Object(d.a)(),a=t.isLoading,n=t.error,j=t.sendRequest,O=t.clearError,h=Object(p.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),x=Object(c.a)(h,2),k=x[0],P=x[1],w=Object(o.g)(),y=function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",k.inputs.title.value),n.append("description",k.inputs.description.value),n.append("address",k.inputs.address.value),n.append("image",k.inputs.image.value),t.next=9,j("".concat("https://placesharerapp.herokuapp.com/api","/places/"),"POST",n,{Authorization:"Bearer ".concat(e.token)});case 9:w.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{error:n,onClear:O}),s.a.createElement("form",{className:"place-form",onSubmit:y},a&&s.a.createElement(E.a,{asOverlay:!0}),s.a.createElement(v.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(m.c)()],errorText:"Please enter a valid title",onInput:P})," ",s.a.createElement(v.a,{id:"description",element:"textarea",label:"Description",validators:[Object(m.b)(5)],errorText:"Please enter a valid description - at least 5 caharacters.",onInput:P}),s.a.createElement(v.a,{id:"address",element:"textarea",label:"Address",validators:[Object(m.c)()],errorText:"Please enter a valid address.",onInput:P}),s.a.createElement(g.a,{id:"image",onInput:P,errorText:"Please provide an image."}),s.a.createElement(f.a,{type:"submit",disabled:!k.isValid},"ADD PLACE")))}},87:function(e,t,a){},88:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),c=a(49);a(89);t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],s=a[1],o=Object(r.useState)(),u=Object(n.a)(o,2),p=u[0],d=u[1],m=Object(r.useState)(!1),v=Object(n.a)(m,2),f=v[0],b=v[1],E=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:E,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0],s(a),b(!0),n=!0):(b(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){E.current.click()}},"PICK IMAGE")),!f&&i.a.createElement("p",null,e.errorText))}},89:function(e,t,a){}}]);
//# sourceMappingURL=8.3f281794.chunk.js.map