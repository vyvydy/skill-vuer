(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,6],{334:function(t,n,e){"use strict";e.r(n);var l={props:{job:{type:String,require:!1,default:"tank"}},data:function(){return{jobs:{tank:{name:"탱커",icon:"https://img.finalfantasyxiv.com/lds/promo/h/d/rFrCBcRe9YrmPvb4fZkuFksSLw.png"},healer:{name:"힐러",icon:"https://img.finalfantasyxiv.com/lds/promo/h/e/V5xx3kfnREBO-2xWbTUW2Csy_Q.png"},melee:{name:"근딜",icon:"https://img.finalfantasyxiv.com/lds/promo/h/7/9muqitiUXEK0W3qnM33Nb7sATk.png"},range:{name:"원딜",icon:"https://img.finalfantasyxiv.com/lds/promo/h/t/oWWxUIO2KagIEhDXy0541MRD7M.png"},caster:{name:"캐스터",icon:"https://img.finalfantasyxiv.com/lds/promo/h/X/8Dnf8Wy9IyxIt21y6lrE5atKt0.png"},pal:{name:"나이트",icon:"https://img.finalfantasyxiv.com/lds/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png"},war:{name:"전사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png"},drk:{name:"암흑기사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/9/5JT3hJnBNPZSLAijAF9u7zrueQ.png"},gnb:{name:"건브레이커",icon:"https://img.finalfantasyxiv.com/lds/promo/h/8/fc5PYpEFGrg4qPYDq_YBbCy1X0.png"},whm:{name:"백마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/G/Na619RGtVtbEvNn1vyFoSlvZ84.png"},sch:{name:"학자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/s/2r8fm3U0Io7Pw1XT1tvnjPthp4.png"},ast:{name:"점성술사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/E/g7JY4S1D-9S26VarEuIkPGIrFM.png"},sge:{name:"현자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png"},mnk:{name:"몽크",icon:"https://img.finalfantasyxiv.com/lds/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png"},drg:{name:"용기사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/1/zWRkXGJIJhN7WHGGv1gVscRxmA.png"},nin:{name:"닌자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/N/EXvdQYvr1Rn4En8AKssbVwwcac.png"},sam:{name:"사무라이",icon:"https://img.finalfantasyxiv.com/lds/promo/h/J/Ra2GV79gVQhy6SwCrU19boTghc.png"},rpr:{name:"리퍼",icon:"https://img.finalfantasyxiv.com/lds/promo/h/p/y8GHAXX4qhY7D-yqnCqtEPkjoo.png"},brd:{name:"음유시인",icon:"https://img.finalfantasyxiv.com/lds/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png"},mch:{name:"기공사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/2/oHLJxTt_OLDK_eQkRTBVNwwxeE.png"},dnc:{name:"무희",icon:"https://img.finalfantasyxiv.com/lds/promo/h/0/ZzzbixB1HHW9FaxNXdfY7Y7lvw.png"},blm:{name:"흑마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/A/7JuT00VSwaFqTfcTYUCUnGPFQE.png"},smn:{name:"소환사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png"},rdm:{name:"적마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/C/NRnqJxzRtbDKR1ZHzxazWBBR2Y.png"}}}}},o=e(63),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"job-card"},[e("picture",{staticClass:"job-icon"},[e("b-img",{attrs:{src:t.jobs[t.job].icon}})],1),t._v(" "),e("span",{staticClass:"job-name"},[t._v(t._s(t.jobs[t.job].name))])])}),[],!1,null,null,null);n.default=component.exports},335:function(t,n,e){"use strict";e.r(n);var l={props:{useHelp:{type:Boolean,require:!1,default:!0}}},o=e(63),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",{staticClass:"layout-board",attrs:{"no-gutters":""}},[e("b-col",{staticClass:"pt-5 contents-wrapper",attrs:{cols:t.useHelp?9:12}},[t._t("content",(function(){return[t._v("\n      본문\n    ")]}))],2),t._v(" "),t.useHelp?e("b-col",{staticClass:"border-left nav-wrap",attrs:{cols:"3"}},[t._t("help",(function(){return[t._v("\n      도움말\n    ")]}))],2):t._e()],1)}),[],!1,null,null,null);n.default=component.exports},336:function(t,n,e){"use strict";e.r(n);var l=e(63),component=Object(l.a)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("section",{staticClass:"layout-headline"},[t._t("headline"),t._v(" "),t._t("content")],2)}),[],!1,null,null,null);n.default=component.exports},337:function(t,n,e){"use strict";e.r(n);var l={props:{skill:{type:Object,required:!0},skillId:{type:String,required:!0},useDescription:{type:Boolean,required:!1,default:!1},useJob:{type:Boolean,required:!1,default:!0}},data:function(){return{tooltip:{title:"복사 완료!",placement:"bottomright",variant:"info",trigger:"click blur",disabled:!1}}},methods:{copyName:function(t){var text=document.createElement("textarea");document.body.appendChild(text),text.value=t.target.innerText,text.select(),document.execCommand("copy"),document.body.removeChild(text)}}},o=e(63),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"skill-item"},[e("b-row",[e("b-col",{staticClass:"pr-0",attrs:{cols:"auto"}},[e("picture",{staticClass:"skill-icon"},[e("img",{attrs:{src:t.skill.icon,alt:t.skill.nameEn+" icon"}})])]),t._v(" "),e("b-col",{staticClass:"d-flex align-items-center"},[e("ul",{staticClass:"list-unstyled mb-0 skill-names",attrs:{id:t.skillId}},[e("li",[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameKo)+"\n          ")])]),t._v(" "),e("li",[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameEn)+"\n          ")])]),t._v(" "),e("li",[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameJp)+"\n          ")])])])]),t._v(" "),t.skill.job&&t.useJob?e("b-col",{staticClass:"d-flex align-self-start",attrs:{cols:"auto"}},[e("markup-job",{attrs:{job:t.skill.job}})],1):t._e()],1),t._v(" "),e("b-row",{staticClass:"skill-details list-unstyled mb-0 mt-2",attrs:{tag:"ul"}},[e("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[e("span",{staticClass:"key"},[t._v("레벨")]),t._v(" "),e("span",{staticClass:"value"},[t._v("Lv."+t._s(t.skill.level))])]),t._v(" "),e("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[e("span",{staticClass:"key"},[t._v("시전 시간")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.skill.cast))])]),t._v(" "),e("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[e("span",{staticClass:"key"},[t._v("재사용")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.skill.recast))])]),t._v(" "),e("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[e("span",{staticClass:"key"},[t._v("타입")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.skill.type))])]),t._v(" "),e("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[e("span",{staticClass:"key"},[t._v("범위")]),t._v(" "),e("ul",{staticClass:"list-unstyled mb-0 skill-radius"},[e("li",{staticClass:"range"},[e("span",[t._v(t._s(t.skill.range)+"y")])]),t._v(" "),e("li",{class:t.skill.radiusType},[e("span",[t._v(t._s(t.skill.radius)+"y")])])])]),t._v(" "),e("b-col",{attrs:{tag:"li"}},[e("span",{staticClass:"key"},[t._v("코스트")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.skill.cost))])])],1),t._v(" "),t.skill.effect&&t.useDescription?e("b-row",{staticClass:"mt-2"},[e("b-col",[e("p",{staticClass:"skill-effect",domProps:{innerHTML:t._s(t.skill.effect)}})])],1):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{MarkupJob:e(334).default})},352:function(t,n,e){"use strict";e.r(n);var l=e(3),o=e(47),r=(e(91),e(25),e(153),e(34),{name:"search",data:function(){return{keyword:"",result:[]}},watch:{"$route.query.keyword":function(t){this.keyword=t,this.search()}},created:function(){this.keyword=this.$route.query.keyword,this.search()},methods:{search:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e,l,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=["keyword","nameKo","nameEn","nameJp"],l=[],i=0;case 3:if(!(i<e.length)){n.next=12;break}return n.next=6,t.findSkill(e[i]);case 6:if(!(l=n.sent).hasResult){n.next=9;break}return n.abrupt("break",12);case 9:i++,n.next=3;break;case 12:t.result=l.result;case 13:case"end":return n.stop()}}),n)})))()},findSkill:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],e.next=3,n.$content({deep:!0}).where(Object(l.a)({dir:{$contains:"jobs"}},t,{$regex:n.keyword})).fetch();case 3:return o=e.sent,e.abrupt("return",{result:o,hasResult:o.length>0});case 5:case"end":return e.stop()}}),e)})))()},getJob:function(t){return t.replace(/\/jobs\//g,"")}}}),c=e(63),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("layout-board",[e("article",{attrs:{slot:"content"},slot:"content"},[e("markup-headline",[e("h1",{staticClass:"headline",attrs:{slot:"headline"},slot:"headline"},[t._v("스킬 검색")]),t._v(" "),e("p",{attrs:{slot:"content"},slot:"content"},[t._v("검색 테스트중")])]),t._v(" "),e("section",{staticClass:"mt-5"},[e("h2",{staticClass:"section-title"},[t._v("#"+t._s(t.keyword))]),t._v(" "),e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.result,(function(n,l){return e("skill-item",{key:"result_"+l,attrs:{skill:Object.assign({},n,{job:t.getJob(n.dir)}),"skill-id":"range_"+l,"use-description":!0}})})),1)])],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{MarkupHeadline:e(336).default,SkillItem:e(337).default,LayoutBoard:e(335).default})}}]);