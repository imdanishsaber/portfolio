(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{326:function(t,n,e){"use strict";e.r(n);var r={props:["contacts"],data:function(){return{}}},l=e(10),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-full md:w-1/2"},[e("div",{staticClass:"text-left max-w-xl px-6"},[e("h2",{staticClass:"\n        font-general-medium\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        mt-8\n        mb-8\n      "},[t._v("\n      Contact details\n    ")]),t._v(" "),e("ul",{staticClass:"font-general-regular"},t._l(t.contacts,(function(n){return e("li",{key:n.id,staticClass:"flex"},[e("i",{staticClass:"w-5 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":n.icon}}),t._v(" "),e("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===n.icon||"phone"===n.icon?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(n.name)+"\n        ")])])})),0)])])}),[],!1,null,"a0ed7182",null);n.default=component.exports},330:function(t,n,e){"use strict";e.r(n);e(23),e(36);var r=e(33),l=e.n(r),c={scrollToTop:!0,data:function(){return{contacts:[{id:1,name:"Adelaide, South Australia 5268, Australia",icon:"map-pin"},{id:2,name:"imdanishsaber@gmail.com",icon:"mail"},{id:3,name:"+61 408 850 447",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},o=e(10),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    container\n    mx-auto\n    flex flex-col-reverse\n    md:flex-row md:py-10 md:mt-20\n  "},[e("ContactDetails",{attrs:{contacts:t.contacts}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContactDetails:e(326).default})}}]);