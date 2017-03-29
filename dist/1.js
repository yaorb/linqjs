webpackJsonp([1],{16:function(e,t,n){function r(e){return n(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./en-us/apis/Enumerable.json":56,"./en-us/caption.json":57,"./en-us/directory.json":58,"./en-us/install.json":59,"./en-us/introduction.json":60,"./lang.json":15,"./zh-hans/apis/Enumerable.json":61,"./zh-hans/apis/IEnumerable.json":62,"./zh-hans/caption.json":63,"./zh-hans/directory.json":64,"./zh-hans/install.json":65,"./zh-hans/introduction.json":66};r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=16},56:function(e,t){e.exports={title:"Class Enumerable",constructors:[{description:"Create an object of type IEnumerable from source"}],properties:[{name:"config",description:"Global config"},{name:"selectors",description:"An object contains same useful selectors"},{name:"predicates",description:"An object contains same useful predicates"},{name:"comparers",description:"An object contains same useful comparers"}],methods:[{name:"asEnumerable",overloads:[{description:"Create an object of type IEnumerable from source"}]}]}},57:function(e,t){e.exports={class:"class",constructor:"constructor",constructors:"constructors",property:"property",properties:"properties",method:"method",methods:"methods",since:"since",details:"details",description:"description",summary:"summary",warning:"warning",remark:"remark",static:"static",newInstance:{only:"can only use new operator",both:"can use new operator or not",cannot:"can not use new operator"}}},58:function(e,t){e.exports=[{code:"introduction",title:"Introduction"},{code:"install",title:"Install"},{code:"guide",title:"Guide",children:[{code:"instance",title:"Get IEnumerable instance"}]},{code:"apis",title:"APIs",children:[{code:"Enumerable",title:"Class Enumerable"},{code:"IEnumerable",title:"Interface IEnumerable"},{code:"IOrderedEnumerable",title:"Interface IOrderedEnumerable "}]}]},59:function(e,t){e.exports={title:"Install"}},60:function(e,t){e.exports={title:"Introduction",contents:["use linq and lambda in javascript for es6"]}},61:function(e,t){e.exports={title:"Enumerable类",name:"Enumerable",type:"class",extends:[],implements:[],constructors:[{parameters:[{name:"source",types:["any"]}],since:"2.1.15",returns:"IEnumerable",newInstance:"cannot",description:"通过指定的 source 创建一个 IEnumerable 对象",sees:[{title:"Enumerable.asEnumerable",href:"asEnumerable",mark:!0}]}],properties:[{name:"config",type:"object",static:!0,since:"2.1.15",description:"全局配置"},{name:"selectors",type:"object",static:!0,since:"2.1.15",description:"一个包含了一些常用选择器的对象"},{name:"predicates",type:"object",static:!0,since:"2.1.15",description:"一个包含了一些常用筛选器的对象"},{name:"comparers",type:"object",static:!0,since:"2.1.15",description:"一个包含了一些常用比较器的对象"}],methods:[{name:"asEnumerable",overloads:[{parameters:[{name:"source",types:["any"]}],returns:"IEnumerable",since:"2.1.15",static:!0,description:"通过指定的 source 创建一个 IEnumerable 对象",descriptions:["其中 source 可以是 Array, String, IEnumerable, Iterator 甚至 Object 对象, 不建议使用 Boolean, Number 对象"]}]}]}},62:function(e,t){e.exports={title:"IEnumerable接口",name:"IEnumerable",type:"interface",extends:["Array"],implements:[],properties:[{name:"length",type:"number",since:"2.1.15",description:"所包含的元素个数",sees:[{title:"IEnumerable.prototype.size",href:"size",mark:!0}]},{name:"size",type:"number",since:"2.1.15",description:"所包含的元素个数",sees:[{title:"IEnumerable.prototype.length",href:"length",mark:!0}]}],methods:[{name:"aggregate",overloads:[{parameters:[{name:"seed",types:["any"],descriptions:[]},{name:"func",types:["function"],descriptions:[],declare:{returns:"any",parameters:[{name:"seed",types:["any"]},{name:"element",types:["any"]},{name:"index",types:["number"]}]}},{name:"resultSelector",types:["function","string","symbol","number"],defaultValue:"defaultSelector",descriptions:[],declare:{returns:"any",parameters:[{name:"result",types:["any"]}]}}],returns:"any",description:"对一个序列应用累加器函数。 将指定的种子值用作累加器的初始值，并使用指定的函数选择结果值。"}]},{name:"any",overloads:[{parameters:[{name:"predicate",types:["function","string","symbol","number"],defaultValue:"defaultPredicate"}],returns:"boolean",since:"2.1.15",description:""}]}]}},63:function(e,t){e.exports={class:"类",constructor:"构造方法",constructors:"构造方法",property:"属性",properties:"属性",method:"方法",methods:"方法",since:"最低版本",details:"详情",description:"描述",summary:"摘要",warning:"注意",remark:"备注",static:"静态的",see:"参考",newInstance:{only:"只能使用new运算符",both:"可以使用new运算符,也可以直接调用",cannot:"不能使用new运算符"}}},64:function(e,t){e.exports=[{code:"introduction",title:"简介"},{code:"install",title:"安装"},{code:"guide",title:"教程",children:[{code:"instance",title:"获取IEnumerable实例"},{code:"selectors",title:"选择器"},{code:"comparers",title:"比较器"},{code:"predicates",title:"筛选器"}]},{code:"apis",title:"API文档",children:[{code:"Enumerable",title:"Enumerable 类"},{code:"IEnumerable",title:"IEnumerable 接口"},{code:"IOrderedEnumerable",title:"IOrderedEnumerable 接口"}]}]},65:function(e,t){e.exports={icon:"",code:"install",title:"安装",contents:[{code:"addIn",title:"添加至项目",details:[{type:"example",runtime:"Node JS",scripts:[{type:"bash",script:"$ npm install --save linq-js"}]},{type:"example",runtime:"Bower",scripts:[{type:"bash",script:"$ bower install js-linq"}]}]},{code:"require",title:"引入",details:[{type:"example",scripts:[{type:"javascript",script:"const Enumerable = require('linq-js');"}],remarks:["说明:本module依赖于ES6,建议项目在中使用ES6,以下案例中将均使用ES6写法"]}]},{code:"extend",title:"添加扩展",details:[{type:"example",runtime:"jQuery",scripts:[{type:"javascript",script:"Enumerable.extend(jQuery.fn, 'Array');"}]}]}]}},66:function(e,t){e.exports={code:"introduction",title:"简介",contents:["在javascript(ES6标准)中使用linq与lambda","&nbsp;","在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作","从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少"]}}});