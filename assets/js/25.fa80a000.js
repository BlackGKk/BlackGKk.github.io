(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{473:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-fragment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fragment"}},[s._v("#")]),s._v(" 1.Fragment")]),s._v(" "),t("ul",[t("li",[s._v("在Vue2中: 组件必须有一个根标签")]),s._v(" "),t("li",[s._v("在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中")]),s._v(" "),t("li",[s._v("好处: 减少标签层级, 减小内存占用")])]),s._v(" "),t("h2",{attrs:{id:"_2-teleport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-teleport"}},[s._v("#")]),s._v(" 2.Teleport")]),s._v(" "),t("ul",[t("li",[s._v("什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。")])]),s._v(" "),t("h2",{attrs:{id:"_3-suspense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-suspense"}},[s._v("#")]),s._v(" 3.Suspense")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("等待异步组件时渲染一些额外内容，让应用有更好的用户体验")])]),s._v(" "),t("li",[t("p",[s._v("使用步骤：")])]),s._v(" "),t("li",[t("p",[s._v("异步引入组件")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("mport "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("defineAsyncComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Child "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineAsyncComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/Child.vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("使用Suspense包裹组件，并配置好default 与 fallback")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("我是App组件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Suspense"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Child"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("fallback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("加载中"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Suspense"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);