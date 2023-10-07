(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{475:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期函数"}},[t._v("#")]),t._v(" 1.生命周期函数")]),t._v(" "),s("p",[t._v("Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("beforeDestroy")]),t._v("改名为 "),s("strong",[t._v("beforeUnmount")])]),t._v(" "),s("li",[s("strong",[t._v("destroyed")]),t._v("改名为 "),s("strong",[t._v("unmounted")])])]),t._v(" "),s("p",[t._v("Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("beforeCreate")]),t._v("===>"),s("strong",[t._v("setup()")])]),t._v(" "),s("li",[s("strong",[t._v("created")]),t._v("=======>"),s("strong",[t._v("setup()")])]),t._v(" "),s("li",[s("strong",[t._v("beforeMount")]),t._v(" ===>"),s("strong",[t._v("onBeforeMount")])]),t._v(" "),s("li",[s("strong",[t._v("mounted")]),t._v("=======>"),s("strong",[t._v("onMounted")])]),t._v(" "),s("li",[s("strong",[t._v("beforeUpdate")]),t._v("===>"),s("strong",[t._v("onBeforeUpdate")])]),t._v(" "),s("li",[s("strong",[t._v("updated")]),t._v(" =======>"),s("strong",[t._v("onUpdated")])]),t._v(" "),s("li",[s("strong",[t._v("beforeUnmount")]),t._v(" ==>"),s("strong",[t._v("onBeforeUnmount")])]),t._v(" "),s("li",[s("strong",[t._v("unmounted")]),t._v(" =====>"),s("strong",[t._v("onUnmounted")]),t._v("\n组合式写法：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("onBeforeMount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//函数体")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("#9.自定义hook函数")]),t._v(" "),s("h2",{attrs:{id:"_2-自定义hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义hook"}},[t._v("#")]),t._v(" 2.自定义hook")]),t._v(" "),s("ul",[s("li",[t._v("本质是一个函数，把setup函数中使用的Composition API进行了封装。")]),t._v(" "),s("li",[t._v("类似于vue2.x中的mixin。")]),t._v(" "),s("li",[t._v("自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。")])]),t._v(" "),s("h2",{attrs:{id:"_3-toref函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-toref函数"}},[t._v("#")]),t._v(" 3.toRef函数")]),t._v(" "),s("p",[t._v("作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。\n语法：** const name = toRef(person,'name')**\n应用: 要将响应式对象中的某个属性单独提供给外部使用时。\n扩展："),s("strong",[t._v("toRefs")]),t._v(" 与"),s("strong",[t._v("toRef")]),t._v("功能一致，但可以批量创建多个 ref 对象，语法："),s("strong",[t._v("toRefs(person)")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nreutrn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRefs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解构")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);