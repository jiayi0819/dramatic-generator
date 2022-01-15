(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],h=0,d=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dramatic-generator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0263":function(t,e,n){"use strict";n("0971")},"092d":function(t,e,n){},"0971":function(t,e,n){},"0faf":function(t,e,n){},"1dc5":function(t,e,n){"use strict";n("092d")},"210b":function(t,e,n){"use strict";n("9799")},"23c9":function(t,e,n){"use strict";n("0faf")},"2f7a":function(t,e,n){"use strict";n("ad1a")},"31a0":function(t,e,n){},"328d":function(t,e,n){},"34d2":function(t,e,n){"use strict";n("9715")},5035:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"content"};function c(t,e,n,c,a,i){var s=Object(o["z"])("Header"),u=Object(o["z"])("AdvanceSetting"),l=Object(o["z"])("router-view"),h=Object(o["z"])("Footer");return Object(o["s"])(),Object(o["g"])("div",r,[Object(o["i"])(s,{title:"dramatic generator",description:"Dramatic Generator is a tool generating characters with randomly dramatic attributes as well as plotting randomly dramatic relationship between them. *For imaginative users only"}),Object(o["i"])(u,{onGenerate:i.handleGenerate,onChangeAdvSetting:i.handleChange,settings:a.settings,colour:i.testFunction("dark")},null,8,["onGenerate","onChangeAdvSetting","settings","colour"]),Object(o["i"])(o["b"],{name:"fade"},{default:Object(o["G"])((function(){return[Object(o["i"])(l,{characters:a.characters,colour:a.colour,showCharacters:a.showCharacters,testFunction:i.testFunction},null,8,["characters","colour","showCharacters","testFunction"])]})),_:1}),Object(o["i"])(h)])}n("4de4"),n("d3b7"),n("159b"),n("a4d3"),n("e01a");var a={key:0};function i(t,e,n,r,c,i){return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("h1",null,Object(o["B"])(n.title),1),this.description?(Object(o["s"])(),Object(o["g"])("p",a,Object(o["B"])(n.description),1)):Object(o["f"])("",!0)],64)}var s={name:"Header",props:{title:String,description:String}},u=(n("594e"),n("6b0d")),l=n.n(u);const h=l()(s,[["render",i],["__scopeId","data-v-5bdefede"]]);var d=h;function b(t,e,n,r,c,a){return Object(o["s"])(),Object(o["g"])("footer",null,[Object(o["h"])("p",null,"Copyright © jy0819.com "+Object(o["B"])((new Date).getFullYear()),1)])}var g={name:"Footer"};n("0263");const p=l()(g,[["render",b],["__scopeId","data-v-fd68ffb6"]]);var f=p,O={class:"advance-setting"};function j(t,e,n,r,c,a){var i=Object(o["z"])("BasicSetting"),s=Object(o["z"])("Settings"),u=Object(o["z"])("Button");return Object(o["s"])(),Object(o["g"])("form",{onSubmit:e[1]||(e[1]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)})},[Object(o["i"])(i,{onBasicSetting:a.basicSetting,onToggleAdvanceSetting:a.toggleAdvanceSetting,showAdvanceSetting:c.showAdvanceSetting,colour:n.colour},null,8,["onBasicSetting","onToggleAdvanceSetting","showAdvanceSetting","colour"]),Object(o["i"])(o["b"],{name:"transition"},{default:Object(o["G"])((function(){return[Object(o["H"])(Object(o["h"])("div",O,[Object(o["i"])(s,{onChangeSettings:a.handleChange,settings:n.settings},null,8,["onChangeSettings","settings"])],512),[[o["E"],c.showAdvanceSetting]])]})),_:1}),Object(o["i"])(u,{color:"black",text:"submit",onClick:e[0]||(e[0]=function(t){return a.onSubmit(t)})})],32)}function m(t,e,n,r,c,a){return Object(o["s"])(),Object(o["g"])("button",{onClick:e[0]||(e[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)}),style:Object(o["o"])({background:n.color}),class:"btn"},Object(o["B"])(n.text),5)}var v={name:"Button",props:{text:String,color:String},methods:{onClick:function(t){t.preventDefault(),this.$emit("btn-click")}}};n("f7fd");const C=l()(v,[["render",m],["__scopeId","data-v-59a6e707"]]);var w=C,y=function(t){return Object(o["v"])("data-v-44338774"),t=t(),Object(o["t"])(),t},k={class:"basic-setting"},S=y((function(){return Object(o["h"])("label",{class:"components"},"No. of Characters",-1)}));function A(t,e,n,r,c,a){var i=this,s=Object(o["z"])("Button");return Object(o["s"])(),Object(o["g"])("div",k,[S,Object(o["H"])(Object(o["h"])("input",{min:"1",max:"20",class:"components",type:"number",name:"totalCharacter",onChange:e[0]||(e[0]=function(e){return t.$emit("basic-setting",i.totalCharacter)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.totalCharacter=t})},null,544),[[o["D"],c.totalCharacter]]),Object(o["i"])(s,{class:"components",onBtnClick:e[2]||(e[2]=function(e){return t.$emit("toggle-advance-setting")}),text:n.showAdvanceSetting?"close":"advance",color:n.showAdvanceSetting?"dimgray":this.colour},null,8,["text","color"])])}var D=n("ade3"),x=Object(D["a"])({name:"BasicSetting",props:{showAdvanceSetting:Boolean,colour:String},components:{Button:w},emits:["basic-setting","toggle-advance-setting"],data:function(){return{totalCharacter:3}}},"emits",["basic-setting"]);n("865c");const _=l()(x,[["render",A],["__scopeId","data-v-44338774"]]);var B=_;n("b0c0");function I(t,e,n,r,c,a){var i=Object(o["z"])("Setting");return Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.settings,(function(t,e){return Object(o["s"])(),Object(o["g"])("div",{key:e},[Object(o["h"])("h3",null,Object(o["B"])(t.name),1),(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(t.options,(function(t,r){return Object(o["s"])(),Object(o["g"])("div",{class:"form-group",key:r},[Object(o["i"])(i,{onChangeSetting:a.handleChange,settings:n.settings,settingIndex:e,optionIndex:r,optionName:t.optionName,optionCheck:t.optionCheck},null,8,["onChangeSetting","settings","settingIndex","optionIndex","optionName","optionCheck"])])})),128))])})),128)}function N(t,e,n,r,c,a){return Object(o["s"])(),Object(o["g"])("div",{class:"setting",style:Object(o["o"])(n.optionCheck?{"text-decoration":"none"}:{"text-decoration":"line-through",color:"gray"}),onClick:e[0]||(e[0]=function(e){return t.$emit("change-setting",{settingIndex:n.settingIndex,optionIndex:n.optionIndex})})},[Object(o["h"])("label",null,Object(o["B"])(n.optionName),1)],4)}n("a9e3");var M={name:"Setting",props:{settingIndex:Number,optionName:String,optionIndex:Number,optionCheck:Boolean,settings:Array},emits:["change-setting"]};n("34d2");const T=l()(M,[["render",N],["__scopeId","data-v-546d1791"]]);var z=T,H={name:"Settings",components:{Setting:z},data:function(){return{}},props:{settings:Array},emits:["change-settings"],methods:{handleChange:function(t){this.$emit("change-settings",t)}}};n("f1a1");const F=l()(H,[["render",I],["__scopeId","data-v-3e225b94"]]);var G=F,P={name:"AdvanceSetting",data:function(){return{totalCharacter:3,showAdvanceSetting:!1}},components:{Button:w,BasicSetting:B,Settings:G},props:{settings:Array,colour:String},emits:["change-advSetting","generate"],methods:{basicSetting:function(t){this.totalCharacter=t},toggleAdvanceSetting:function(){this.showAdvanceSetting=!this.showAdvanceSetting},onSubmit:function(t){t.preventDefault(),this.$emit("generate",this.totalCharacter)},handleChange:function(t){this.$emit("change-advSetting",t)}}};n("1dc5");const $=l()(P,[["render",j],["__scopeId","data-v-2d4a4602"]]);var E=$,J={class:"card-group"};function q(t,e,n,r,c,a){var i=Object(o["z"])("Header"),s=Object(o["z"])("Character");return Object(o["s"])(),Object(o["g"])("div",null,[Object(o["i"])(i,{title:"characters",description:"Filter desired character attributes in advance setting."}),Object(o["h"])("div",J,[(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.characters,(function(t,e){return Object(o["s"])(),Object(o["g"])("div",{key:e},[Object(o["i"])(s,{style:Object(o["o"])({"background-color":a.getColour(e)}),character:t,index:e},null,8,["style","character","index"])])})),128))])])}var L={class:"card"};function U(t,e,n,r,c,a){return Object(o["s"])(),Object(o["g"])("div",L,[Object(o["h"])("h1",null,Object(o["B"])(n.index+1),1),Object(o["h"])("table",null,[(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.character,(function(t){return Object(o["s"])(),Object(o["g"])("tr",{key:t.index},[Object(o["h"])("td",null,[Object(o["h"])("b",null,Object(o["B"])(t.feature),1)]),Object(o["h"])("td",null,Object(o["B"])(t.value),1)])})),128))])])}var V={name:"Character",props:{character:Array,index:Number}};n("2f7a");const Y=l()(V,[["render",U],["__scopeId","data-v-82db3462"]]);var K=Y,Q={name:"Characters",components:{Header:d,Character:K},props:{characters:Array,colour:Object},methods:{getColour:function(t){var e=[this.colour.hue<180?this.colour.hue+t*(360-this.colour.hue)/this.characters.length:this.colour.hue-t*(this.colour.hue/this.characters.length)],n=(e=[this.colour.hue-3*t*this.characters.length>=0?this.colour.hue-3*t:this.colour.hue+3*t],[this.colour.saturation<60?this.colour.saturation+2*t:this.colour.saturation-2*t]),o=[this.colour.lightness<47?this.colour.lightness+t:this.colour.lightness-t],r="hsl("+e+","+n+"%,"+o+"%)";return r}}};n("5d5b");const R=l()(Q,[["render",q],["__scopeId","data-v-61a92ac6"]]);var W=R,X={name:"App",components:{Header:d,Footer:f,AdvanceSetting:E,Characters:W},computed:{computed:{}},methods:{testFunction:function(t){var e="";return e="dark"===t?"hsl("+this.colour.hue+",75%,30%)":"light"===t?"hsl("+this.colour.hue+",40%,50%)":"hsl("+this.colour.hue+","+this.colour.saturation+"%,"+this.colour.lightness+"%)",e},setBackground:function(t){var e="radial-gradient("+this.getColourString()+", white)";document.querySelector("html").style.backgroundImage=e},getColour:function(){var t=360*Math.random(),e=25+70*Math.random(),n=85+10*Math.random();return{hue:t,saturation:e,lightness:n}},getColourString:function(){var t="hsl("+this.colour.hue+","+this.colour.saturation+"%,"+this.colour.lightness+"%)";return t},checkHoroscope:function(t){var e=this.horoscopes.filter((function(e){return t.getTime()>=e.start.getTime()&&t.getTime()<=e.end.getTime()}));if(e)return e[0].horoscope;console.log("shit!")},handleChange:function(t){try{var e=t.settingIndex,n=t.optionIndex;this.settings[e].options[n].optionCheck=!this.settings[e].options[n].optionCheck}catch(o){return void console.log(o)}},handleGenerate:function(t){var e=this;if(this.characters=[],t>20||t<0)alert("No. of Characters must falls between 0 & 20");else{this.settings[1].options[1].optionCheck&&(this.settings[0].options[2].optionCheck=!0);for(var n=function(){var t=[];e.settings.forEach((function(n){n.options.forEach((function(n){if(n.optionCheck){var o;switch(n.optionName){case"gender":o=Math.floor(2*Math.random())?"male":"female";break;case"birthday":var c=new Date(Math.floor(1e3*Math.random()*60*60*24*365.25));c.setHours(0,0,0,0),o=c.toLocaleString("default",{day:"numeric",month:"short"}),r=e.checkHoroscope(c);break;case"mbti":o="";for(var a=[["E","I"],["S","N"],["T","F"],["P","J"]],i=0;i<4;i++)o+=a[i][Math.floor(2*Math.random())];break;case"horoscope":o=r;break;default:o=Math.floor(100*Math.random());break}var s={feature:n.optionName,value:o};t.push(s)}}))})),e.characters.push(t)},o=0;o<t;o++){var r;n()}this.showCharacters=!0,this.colour=this.getColour(),this.setBackground(this.getColourString())}}},data:function(){return{colour:[],showCharacters:!1,characters:[],horoscopes:[{horoscope:"capricorn",start:new Date(1970,0,1),end:new Date(1970,0,19)},{horoscope:"aquarius",start:new Date(1970,0,20),end:new Date(1970,1,18)},{horoscope:"pisces",start:new Date(1970,1,19),end:new Date(1970,2,20)},{horoscope:"aries",start:new Date(1970,2,21),end:new Date(1970,3,19)},{horoscope:"taurus",start:new Date(1970,3,20),end:new Date(1970,4,20)},{horoscope:"gemini",start:new Date(1970,4,21),end:new Date(1970,5,20)},{horoscope:"cancer",start:new Date(1970,5,21),end:new Date(1970,6,22)},{horoscope:"leo",start:new Date(1970,6,23),end:new Date(1970,7,22)},{horoscope:"virgo",start:new Date(1970,7,23),end:new Date(1970,8,22)},{horoscope:"libra",start:new Date(1970,8,23),end:new Date(1970,9,22)},{horoscope:"scorpio",start:new Date(1970,9,23),end:new Date(1970,10,21)},{horoscope:"sagittarius",start:new Date(1970,10,22),end:new Date(1970,11,21)},{horoscope:"capricorn",start:new Date(1970,11,22),end:new Date(1970,11,31)}],settings:[{name:"basic",options:[{optionName:"age",optionCheck:!1},{optionName:"gender",optionCheck:!0},{optionName:"birthday",optionCheck:!0}]},{name:"personality",options:[{optionName:"mbti",optionCheck:!0},{optionName:"horoscope",optionCheck:!0}]},{name:"attribute",options:[{optionName:"intellectual",optionCheck:!0},{optionName:"appearance",optionCheck:!0},{optionName:"education",optionCheck:!0},{optionName:"size",optionCheck:!0},{optionName:"wealth",optionCheck:!0},{optionName:"luck",optionCheck:!0}]}]}}};n("7529");const Z=l()(X,[["render",c]]);var tt=Z,et=n("6c02");function nt(t,e,n,r,c,a){return Object(o["s"])(),Object(o["g"])("h1",null,"Affection Table")}var ot={name:"AffectionTable"};const rt=l()(ot,[["render",nt]]);var ct=rt,at={key:0};function it(t,e,n,r,c,a){var i=Object(o["z"])("Characters"),s=Object(o["z"])("Table");return Object(o["s"])(),Object(o["e"])(o["b"],{name:"fade"},{default:Object(o["G"])((function(){return[n.showCharacters?(Object(o["s"])(),Object(o["g"])("div",at,[Object(o["i"])(i,{settings:n.settings,characters:n.characters,colour:n.colour},null,8,["settings","characters","colour"]),Object(o["i"])(s,{characters:n.characters,colour:n.colour},null,8,["characters","colour"])])):Object(o["f"])("",!0)]})),_:1})}var st={class:"tbl"},ut=["colspan"];function lt(t,e,n,r,c,a){var i=this,s=Object(o["z"])("Header");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["i"])(s,{title:"affection table",description:"Affection table discloses the overall relationship by revealing affection level of one character towards another, while affection towards oneself indicates self-confidence."}),Object(o["h"])("table",st,[Object(o["h"])("tr",null,[Object(o["h"])("td",{class:"title",rowspan:"2",style:Object(o["o"])({"background-color":this.setColour("dark")})}," Character ",4),Object(o["h"])("td",{class:"title",style:Object(o["o"])({"background-color":this.setColour("dark")}),colspan:n.characters.length+1}," Affection towards ",12,ut)]),Object(o["h"])("tr",null,[(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.characters,(function(t,e){return Object(o["s"])(),Object(o["g"])("th",{style:Object(o["o"])({"background-color":i.setColour()}),key:e},Object(o["B"])(e+1),5)})),128))]),(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.characters,(function(t,e){return Object(o["s"])(),Object(o["g"])("tr",{key:e},[Object(o["h"])("th",{style:Object(o["o"])({"background-color":i.setColour()})},Object(o["B"])(e+1),5),(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.characters,(function(t,e){return Object(o["s"])(),Object(o["g"])("td",{key:e},Object(o["B"])(Math.floor(100*Math.random())),1)})),128))])})),128))])],64)}var ht={name:"Table",computed:{},data:function(){return{hovered:!1}},methods:{setColour:function(t){console.log("this table shit is working");var e="";return e="dark"===t?"hsl("+this.colour.hue+",75%,30%)":"hsl("+this.colour.hue+",40%,50%)",e}},components:{Header:d},props:{characters:Array,colour:Object}};n("210b");const dt=l()(ht,[["render",lt],["__scopeId","data-v-6701d02e"]]);var bt=dt,gt={name:"Home",components:{Characters:W,Table:bt},props:{colour:Object,settings:Array,characters:Array,showCharacters:Boolean}};n("23c9");const pt=l()(gt,[["render",it],["__scopeId","data-v-1d6d7b29"]]);var ft=pt,Ot=[{path:"/",name:"Home",component:ft},{path:"/AffectionTable",name:"AffectionTable",component:ct}],jt=Object(et["a"])({history:Object(et["b"])("/dramatic-generator/"),routes:Ot}),mt=jt;Object(o["d"])(tt).use(mt).mount("#app")},"594e":function(t,e,n){"use strict";n("5035")},"5d5b":function(t,e,n){"use strict";n("e290")},7529:function(t,e,n){"use strict";n("f3eb")},"865c":function(t,e,n){"use strict";n("328d")},9715:function(t,e,n){},9799:function(t,e,n){},ad1a:function(t,e,n){},e290:function(t,e,n){},f1a1:function(t,e,n){"use strict";n("fcc5")},f3eb:function(t,e,n){},f7fd:function(t,e,n){"use strict";n("31a0")},fcc5:function(t,e,n){}});
//# sourceMappingURL=app.d44c47c1.js.map