(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5,6,7],{334:function(t,e,l){"use strict";l.r(e);var n={props:{job:{type:String,require:!1,default:"tank"}},data:function(){return{jobs:{tank:{name:"탱커",icon:"https://img.finalfantasyxiv.com/lds/promo/h/d/rFrCBcRe9YrmPvb4fZkuFksSLw.png"},healer:{name:"힐러",icon:"https://img.finalfantasyxiv.com/lds/promo/h/e/V5xx3kfnREBO-2xWbTUW2Csy_Q.png"},melee:{name:"근딜",icon:"https://img.finalfantasyxiv.com/lds/promo/h/7/9muqitiUXEK0W3qnM33Nb7sATk.png"},range:{name:"원딜",icon:"https://img.finalfantasyxiv.com/lds/promo/h/t/oWWxUIO2KagIEhDXy0541MRD7M.png"},caster:{name:"캐스터",icon:"https://img.finalfantasyxiv.com/lds/promo/h/X/8Dnf8Wy9IyxIt21y6lrE5atKt0.png"},pal:{name:"나이트",icon:"https://img.finalfantasyxiv.com/lds/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png"},war:{name:"전사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png"},drk:{name:"암흑기사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/9/5JT3hJnBNPZSLAijAF9u7zrueQ.png"},gnb:{name:"건브레이커",icon:"https://img.finalfantasyxiv.com/lds/promo/h/8/fc5PYpEFGrg4qPYDq_YBbCy1X0.png"},whm:{name:"백마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/G/Na619RGtVtbEvNn1vyFoSlvZ84.png"},sch:{name:"학자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/s/2r8fm3U0Io7Pw1XT1tvnjPthp4.png"},ast:{name:"점성술사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/E/g7JY4S1D-9S26VarEuIkPGIrFM.png"},sge:{name:"현자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png"},mnk:{name:"몽크",icon:"https://img.finalfantasyxiv.com/lds/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png"},drg:{name:"용기사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/1/zWRkXGJIJhN7WHGGv1gVscRxmA.png"},nin:{name:"닌자",icon:"https://img.finalfantasyxiv.com/lds/promo/h/N/EXvdQYvr1Rn4En8AKssbVwwcac.png"},sam:{name:"사무라이",icon:"https://img.finalfantasyxiv.com/lds/promo/h/J/Ra2GV79gVQhy6SwCrU19boTghc.png"},rpr:{name:"리퍼",icon:"https://img.finalfantasyxiv.com/lds/promo/h/p/y8GHAXX4qhY7D-yqnCqtEPkjoo.png"},brd:{name:"음유시인",icon:"https://img.finalfantasyxiv.com/lds/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png"},mch:{name:"기공사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/2/oHLJxTt_OLDK_eQkRTBVNwwxeE.png"},dnc:{name:"무희",icon:"https://img.finalfantasyxiv.com/lds/promo/h/0/ZzzbixB1HHW9FaxNXdfY7Y7lvw.png"},blm:{name:"흑마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/A/7JuT00VSwaFqTfcTYUCUnGPFQE.png"},smn:{name:"소환사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png"},rdm:{name:"적마도사",icon:"https://img.finalfantasyxiv.com/lds/promo/h/C/NRnqJxzRtbDKR1ZHzxazWBBR2Y.png"}}}}},o=l(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"job-card"},[l("picture",{staticClass:"job-icon"},[l("b-img",{attrs:{src:t.jobs[t.job].icon}})],1),t._v(" "),l("span",{staticClass:"job-name"},[t._v(t._s(t.jobs[t.job].name))])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,l){"use strict";l.r(e);var n={props:{useHelp:{type:Boolean,require:!1,default:!0}}},o=l(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-row",{staticClass:"layout-board",attrs:{"no-gutters":""}},[l("b-col",{staticClass:"pt-5 contents-wrapper",attrs:{cols:t.useHelp?9:12}},[t._t("content",(function(){return[t._v("\n      본문\n    ")]}))],2),t._v(" "),t.useHelp?l("b-col",{staticClass:"border-left nav-wrap",attrs:{cols:"3"}},[t._t("help",(function(){return[t._v("\n      도움말\n    ")]}))],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,l){"use strict";l.r(e);var n=l(63),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"layout-headline"},[t._t("headline"),t._v(" "),t._t("content")],2)}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,l){"use strict";l.r(e);var n={props:{skill:{type:Object,required:!0},skillId:{type:String,required:!0},useDescription:{type:Boolean,required:!1,default:!1},useJob:{type:Boolean,required:!1,default:!0}},data:function(){return{tooltip:{title:"복사 완료!",placement:"bottomright",variant:"info",trigger:"click blur",disabled:!1}}},methods:{copyName:function(t){var text=document.createElement("textarea");document.body.appendChild(text),text.value=t.target.innerText,text.select(),document.execCommand("copy"),document.body.removeChild(text)}}},o=l(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"skill-item"},[l("b-row",[l("b-col",{staticClass:"pr-0",attrs:{cols:"auto"}},[l("picture",{staticClass:"skill-icon"},[l("img",{attrs:{src:t.skill.icon,alt:t.skill.nameEn+" icon"}})])]),t._v(" "),l("b-col",{staticClass:"d-flex align-items-center"},[l("ul",{staticClass:"list-unstyled mb-0 skill-names",attrs:{id:t.skillId}},[l("li",[l("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameKo)+"\n          ")])]),t._v(" "),l("li",[l("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameEn)+"\n          ")])]),t._v(" "),l("li",[l("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{tabindex:"0"},on:{click:t.copyName}},[t._v("\n            "+t._s(t.skill.nameJp)+"\n          ")])])])]),t._v(" "),t.skill.job&&t.useJob?l("b-col",{staticClass:"d-flex align-self-start",attrs:{cols:"auto"}},[l("markup-job",{attrs:{job:t.skill.job}})],1):t._e()],1),t._v(" "),l("b-row",{staticClass:"skill-details list-unstyled mb-0 mt-2",attrs:{tag:"ul"}},[l("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[l("span",{staticClass:"key"},[t._v("레벨")]),t._v(" "),l("span",{staticClass:"value"},[t._v("Lv."+t._s(t.skill.level))])]),t._v(" "),l("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[l("span",{staticClass:"key"},[t._v("시전 시간")]),t._v(" "),l("span",{staticClass:"value"},[t._v(t._s(t.skill.cast))])]),t._v(" "),l("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[l("span",{staticClass:"key"},[t._v("재사용")]),t._v(" "),l("span",{staticClass:"value"},[t._v(t._s(t.skill.recast))])]),t._v(" "),l("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[l("span",{staticClass:"key"},[t._v("타입")]),t._v(" "),l("span",{staticClass:"value"},[t._v(t._s(t.skill.type))])]),t._v(" "),l("b-col",{staticClass:"pr-4",attrs:{tag:"li",cols:"auto"}},[l("span",{staticClass:"key"},[t._v("범위")]),t._v(" "),l("ul",{staticClass:"list-unstyled mb-0 skill-radius"},[l("li",{staticClass:"range"},[l("span",[t._v(t._s(t.skill.range)+"y")])]),t._v(" "),l("li",{class:t.skill.radiusType},[l("span",[t._v(t._s(t.skill.radius)+"y")])])])]),t._v(" "),l("b-col",{attrs:{tag:"li"}},[l("span",{staticClass:"key"},[t._v("코스트")]),t._v(" "),l("span",{staticClass:"value"},[t._v(t._s(t.skill.cost))])])],1),t._v(" "),t.skill.effect&&t.useDescription?l("b-row",{staticClass:"mt-2"},[l("b-col",[l("p",{staticClass:"skill-effect",domProps:{innerHTML:t._s(t.skill.effect)}})])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MarkupJob:l(334).default})},338:function(t,e,l){"use strict";l.r(e);var n=l(63),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"skill-item-preload"},[l("b-row",[l("b-col",{staticClass:"pr-0",attrs:{cols:"auto"}},[l("div",{staticClass:"skill-icon preloader"})]),t._v(" "),l("b-col",{staticClass:"d-flex align-items-center"},[l("ul",{staticClass:"list-unstyled mb-0 skill-names"},[l("li",{staticClass:"w-100"},[l("span",{staticClass:"preloader",staticStyle:{width:"100px"}})]),t._v(" "),l("li",[l("span",{staticClass:"preloader",staticStyle:{width:"130px"}})]),t._v(" "),l("li",[l("span",{staticClass:"preloader",staticStyle:{width:"80px"}})])])])],1),t._v(" "),l("b-row",{staticClass:"mt-2"},[l("b-col",[l("p",{staticClass:"preloader mb-0",staticStyle:{height:"45px"}})])],1),t._v(" "),l("b-row",{staticClass:"mt-2"},[l("b-col",[l("p",{staticClass:"preloader mb-0",staticStyle:{height:"45px"}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,l){"use strict";l.r(e);var n={props:{text:{type:String,require:!1,default:"내용이 없습니다."}}},o=l(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"markup-result-none"},[t._t("icon"),t._v(" "),l("span",[t._v(t._s(t.text))])],2)}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,l){"use strict";l.r(e);var n=l(47),o=(l(91),{fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("synergy").where({slug:{$contains:"tank"}}).fetch();case 2:return t.tanks=e.sent,e.next=5,t.$content("synergy").where({slug:{$contains:"healer"}}).fetch();case 5:return t.healers=e.sent,e.next=8,t.$content("synergy").where({slug:{$contains:"melee"}}).fetch();case 8:return t.melees=e.sent,e.next=11,t.$content("synergy").where({slug:{$contains:"range"}}).fetch();case 11:return t.ranges=e.sent,e.next=14,t.$content("synergy").where({slug:{$contains:"caster"}}).fetch();case 14:t.casters=e.sent;case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{tanks:[],healers:[],melees:[],ranges:[],casters:[]}},methods:{moveBookmark:function(t){this.$refs["bookmark-".concat(t)].scrollIntoView({behavior:"smooth",block:"start"})}}}),r=l(63),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("layout-board",[l("article",{attrs:{slot:"content"},slot:"content"},[l("markup-headline",[l("h1",{staticClass:"headline",attrs:{slot:"headline"},slot:"headline"},[t._v("파티 시너지")]),t._v(" "),l("p",{attrs:{slot:"content"},slot:"content"},[t._v("시너지는 영어로 시너지")])]),t._v(" "),l("section",{ref:"bookmark-tank",staticClass:"mt-5"},[l("h2",{staticClass:"section-title"},[t._v("#탱커")]),t._v(" "),t.$fetchState.pending?l("ul",{staticClass:"list-unstyled mb-0"},t._l(3,(function(t){return l("skill-preload",{key:"tank_"+t})})),1):l("markup-result-none",{attrs:{text:"탱커는 시너지가 없어요"}},[l("span",{staticClass:"mr-2",attrs:{slot:"icon"},slot:"icon"},[t._v("😿")])])],1),t._v(" "),l("section",{ref:"bookmark-healer",staticClass:"mt-5"},[l("h2",{staticClass:"section-title"},[t._v("#힐러")]),t._v(" "),t.$fetchState.pending?l("ul",{staticClass:"list-unstyled mb-0"},t._l(3,(function(t){return l("skill-preload",{key:"healer_"+t})})),1):l("ul",{staticClass:"list-unstyled mb-0"},t._l(t.healers,(function(t,e){return l("skill-item",{key:"healer_"+e,attrs:{skill:t,"skill-id":"healer_"+e,"use-description":!0}})})),1)]),t._v(" "),l("section",{ref:"bookmark-melee",staticClass:"mt-5"},[l("h2",{staticClass:"section-title"},[t._v("#근딜")]),t._v(" "),t.$fetchState.pending?l("ul",{staticClass:"list-unstyled mb-0"},t._l(3,(function(t){return l("skill-preload",{key:"melee_"+t})})),1):l("ul",{staticClass:"list-unstyled mb-0"},t._l(t.melees,(function(t,e){return l("skill-item",{key:"melee_"+e,attrs:{skill:t,"skill-id":"melee_"+e,"use-description":!0}})})),1)]),t._v(" "),l("section",{ref:"bookmark-range",staticClass:"mt-5"},[l("h2",{staticClass:"section-title"},[t._v("#원딜")]),t._v(" "),t.$fetchState.pending?l("ul",{staticClass:"list-unstyled mb-0"},t._l(3,(function(t){return l("skill-preload",{key:"range_"+t})})),1):l("ul",{staticClass:"list-unstyled mb-0"},t._l(t.ranges,(function(t,e){return l("skill-item",{key:"range_"+e,attrs:{skill:t,"skill-id":"range_"+e,"use-description":!0}})})),1)]),t._v(" "),l("section",{ref:"bookmark-caster",staticClass:"mt-5 mb-5"},[l("h2",{staticClass:"section-title"},[t._v("#캐스터")]),t._v(" "),t.$fetchState.pending?l("ul",{staticClass:"list-unstyled mb-0"},t._l(3,(function(t){return l("skill-preload",{key:"caster_"+t})})),1):l("ul",{staticClass:"list-unstyled mb-0"},t._l(t.casters,(function(t,e){return l("skill-item",{key:"caster_"+e,attrs:{skill:t,"skill-id":"caster_"+e,"use-description":!0}})})),1)])],1),t._v(" "),l("nav",{attrs:{slot:"help"},slot:"help"},[l("h3",{staticClass:"overline"},[t._v("북마크")]),t._v(" "),l("ul",{staticClass:"list-unstyled bookmarks"},[l("li",{on:{click:function(e){return t.moveBookmark("tank")}}},[l("b-icon",{staticClass:"mr-2",attrs:{icon:"bookmark-dash"}}),t._v("\n        탱커\n      ")],1),t._v(" "),l("li",{on:{click:function(e){return t.moveBookmark("healer")}}},[l("b-icon",{staticClass:"mr-2",attrs:{icon:"bookmark-dash"}}),t._v("\n        힐러\n      ")],1),t._v(" "),l("li",{on:{click:function(e){return t.moveBookmark("melee")}}},[l("b-icon",{staticClass:"mr-2",attrs:{icon:"bookmark-dash"}}),t._v("\n        근딜\n      ")],1),t._v(" "),l("li",{on:{click:function(e){return t.moveBookmark("range")}}},[l("b-icon",{staticClass:"mr-2",attrs:{icon:"bookmark-dash"}}),t._v("\n        원딜\n      ")],1),t._v(" "),l("li",{on:{click:function(e){return t.moveBookmark("caster")}}},[l("b-icon",{staticClass:"mr-2",attrs:{icon:"bookmark-dash"}}),t._v("\n        캐스터\n      ")],1)]),t._v(" "),l("hr",{staticClass:"dashed"}),t._v(" "),l("h3",{staticClass:"overline"},[t._v("같이 쓰는 말")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MarkupHeadline:l(336).default,SkillPreload:l(338).default,MarkupResultNone:l(339).default,SkillItem:l(337).default,LayoutBoard:l(335).default})}}]);