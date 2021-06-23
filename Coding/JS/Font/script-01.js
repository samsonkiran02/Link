




    /*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT Ãƒâ€šÃ‚Â© Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});


/* 
<!-- 
Author : Rohit Kumar
Version : 0.0.1
App Name : Fancy Text Generator
Website: https://www.iamrohit.in
Youtube: https://youtube.com/AskRohit 
-->
 */
    

            //try {
                var reverseIsDisabled = false;
                //<![CDATA[
                var luni = new Lunicode();
luni.tools.creepify.options.maxHeight = 10;

function backward(text) {
  return $("#english-text").val();
}



    function createMap(chars) {
      var alphanum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var i = 0;
      var map = {};
      for(var c of chars) {
        map[ alphanum[i] ] = c;
        i++;
      }
      return JSON.stringify(map);
    }

    function forward(text) {
      text = text.trim();
      if(text === "") {
        return "";
      }
      var finalText = "";
      finalText += applyCharMap(oldEnglishCharMap, text) + "\n\n";
      finalText += applyCharMap(medievalCharMap, text) + "\n\n";
      finalText += fullCrazy(text) + "\n\n";
      finalText += applyCharMap(cursiveCharMap, text) + "\n\n";
      finalText += scriptify(text) + "\n\n";
      finalText += applyCharMap(doubleStruckCharMap, text) + "\n\n";
      finalText += applyCharMap(wideTextCharMap, text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += luni.tools.tiny.encode(text) + "\n\n";
      finalText += luni.tools.flip.encode(text) + "\n\n";
      finalText += luni.tools.roundsquares.encode(text) + "\n\n";
      finalText += luni.tools.squares.encode(text) + "\n\n";
      finalText += applyCharMap(squaresCharMap, text) + "\n\n";
      finalText += luni.tools.mirror.encode(text) + "\n\n";
      finalText += luni.tools.creepify.encode(text) + "\n\n";
      finalText += applyCharMap(invertedSquaresCharMap, text) + "\n\n";
      finalText += applyCharMap(subscriptCharMap, text) + "\n\n";
      finalText += applyCharMap(superscriptCharMap, text) + "\n\n";
      finalText += luni.tools.bubbles.encode(text) + "\n\n";
      finalText += applyCharMap(squiggleCharMap, text) + "\n\n";
      finalText += applyCharMap(squiggle2CharMap, text) + "\n\n";
      finalText += applyCharMap(squiggle3CharMap, text) + "\n\n";
      finalText += applyCharMap(squiggle4CharMap, text) + "\n\n";
      finalText += applyCharMap(squiggle5CharMap, text) + "\n\n";
      finalText += applyCharMap(squiggle6CharMap, text) + "\n\n";
      finalText += applyCharMap(boldCharMap, text) + "\n\n";
      finalText += applyCharMap(boldSansCharMap, text) + "\n\n";
      finalText += applyCharMap(italicCharMap, text) + "\n\n";
      finalText += applyCharMap(boldItalicCharMap, text) + "\n\n";
      finalText += applyCharMap(monospaceCharMap, text) + "\n\n";
      finalText += applyCharMap(upperAnglesCharMap, text) + "\n\n";
      finalText += applyCharMap(greekCharMap, text) + "\n\n";
      finalText += applyCharMap(symbolsCharMap, text) + "\n\n";
      finalText += applyCharMap(currencyCharMap, text) + "\n\n";
      finalText += applyCharMap(asianStyleCharMap, text) + "\n\n";
      finalText += applyCharMap(asianStyle2CharMap, text) + "\n\n";
      finalText += thickBlockFramed(text) + "\n\n";
      finalText += diametricAngleFrame(text) + "\n\n";
      finalText += wavyJoiner(text) + "\n\n";
      finalText += dottyJoiner(text) + "\n\n";
      finalText += kirbyHug(text) + "\n\n";
      finalText += vaporwaveText(text) + "\n\n";
      finalText += littleSparkles(text) + "\n\n";
      finalText += weirdBox(text) + "\n\n";
      finalText += firework(text) + "\n\n";
      finalText += applyCharMap(bentTextCharMap, text) + "\n\n";
      finalText += applyCharMap(neonCharMap, text) + "\n\n";
      finalText += applyCharMap(futureAlienCharMap, text) + "\n\n";
      finalText += strikeThrough(text) + "\n\n";
      finalText += tildeStrikeThrough(text) + "\n\n";
      finalText += slashThrough(text) + "\n\n";
      finalText += underline(text) + "\n\n";
      finalText += doubleUnderline(text) + "\n\n";
      finalText += stinky(text) + "\n\n";
      finalText += heartsBetween(text) + "\n\n";
      finalText += arrowBelow(text) + "\n\n";
      finalText += crossAboveBelow(text) + "\n\n";
      finalText += "Wingdings: "+wingdings(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += crazyWithFlourishOrSymbols(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      finalText += cuteText(text) + "\n\n";
      
      return finalText.trim();
    }
    
    function crazyWithFlourishOrSymbols(text) {
      if(Math.random() < 0.7) return wrapInSymbols(crazifyText(text), 2);
      else return wrapInFlourish(crazifyText(text), 2);
    }
    
    function strikeThrough(text) {
      return text.split("").join("Ì¶")+"Ì¶"; 
    }
    function tildeStrikeThrough(text) {
      return text.split("").join("Ì´")+"Ì´";
    }
    function underline(text) {
      return text.split("").join("Ì²")+"Ì²";
    }
    function doubleUnderline(text) {
      return text.split("").join("Ì³")+"Ì³";
    }
    function slashThrough(text) {
      return text.split("").join("Ì·")+"Ì·";
    }
    function stinky(text) {
      return text.split("").join("Ì¾")+"Ì¾"
    }
    function heartsBetween(text) {
      return text.split("").join("â™¥");
    }
    function arrowBelow(text) {
      return text.split("").join("ÍŽ")+"ÍŽ";
    }
    function crossAboveBelow(text) {
      return text.split("").join("Ì½Í“")+"Ì½Í“";
    }
    
      const wingdingsCharMap =
 {"0":"ðŸ“ï¸Ž","1":"ðŸ“‚ï¸Ž","2":"ðŸ“„ï¸Ž","3":"ðŸ—ï¸Ž","4":"ðŸ—ï¸Ž","5":"ðŸ—„ï¸Ž","6":"âŒ›ï¸Ž","7":"ðŸ–®ï¸Ž","8":"ðŸ–°ï¸Ž","9":"ðŸ–²ï¸Ž","!":"âœï¸Ž","\"":"âœ‚ï¸Ž","#":"âœï¸Ž","$":"ðŸ‘“ï¸Ž","%":"ðŸ•­ï¸Ž","&":"ðŸ•®ï¸Ž","'":"ðŸ•¯ï¸Ž","(":"ðŸ•¿ï¸Ž",")":"âœ†ï¸Ž","*":"ðŸ–‚ï¸Ž","+":"ðŸ–ƒï¸Ž",",":"ðŸ“ªï¸Ž","-":"ðŸ“«ï¸Ž",".":"ðŸ“¬ï¸Ž","/":"ðŸ“­ï¸Ž",":":"ðŸ–³ï¸Ž",";":"ðŸ–´ï¸Ž","<":"ðŸ–«ï¸Ž","=":"ðŸ–¬ï¸Ž",">":"âœ‡ï¸Ž","?":"âœï¸Ž","A":"âœŒï¸Ž","B":"ðŸ‘Œï¸Ž","C":"ðŸ‘ï¸Ž","D":"ðŸ‘Žï¸Ž","E":"â˜œï¸Ž","F":"â˜žï¸Ž","G":"â˜ï¸Ž","H":"â˜Ÿï¸Ž","I":"âœ‹ï¸Ž","J":"â˜ºï¸Ž","K":"ðŸ˜ï¸Ž","L":"â˜¹ï¸Ž","M":"ðŸ’£ï¸Ž","N":"â˜ ï¸Ž","O":"âšï¸Ž","P":"ðŸ±ï¸Ž","Q":"âœˆï¸Ž","R":"â˜¼ï¸Ž","S":"ðŸ’§ï¸Ž","T":"â„ï¸Ž","U":"ðŸ•†ï¸Ž","V":"âœžï¸Ž","W":"ðŸ•ˆï¸Ž","X":"âœ ï¸Ž","Y":"âœ¡ï¸Ž","Z":"â˜ªï¸Ž","[":"â˜¯ï¸Ž","\\":"à¥ï¸Ž","]":"â˜¸ï¸Ž","^":"â™ˆï¸Ž","_":"â™‰ï¸Ž","`":"â™Šï¸Ž","a":"â™‹ï¸Ž","b":"â™Œï¸Ž","c":"â™ï¸Ž","d":"â™Žï¸Ž","e":"â™ï¸Ž","f":"â™ï¸Ž","g":"â™‘ï¸Ž","h":"â™’ï¸Ž","i":"â™“ï¸Ž","j":"ðŸ™°","k":"ðŸ™µ","l":"â—ï¸Ž","m":"âï¸Ž","n":"â– ï¸Ž","o":"â–¡ï¸Ž","p":"â—»ï¸Ž","q":"â‘ï¸Ž","r":"â’ï¸Ž","s":"â¬§ï¸Ž","t":"â§«ï¸Ž","u":"â—†ï¸Ž","v":"â–ï¸Ž","w":"â¬¥ï¸Ž","x":"âŒ§ï¸Ž","y":"â“ï¸Ž","z":"âŒ˜ï¸Ž","{":"â€ï¸Ž","|":"âœ¿ï¸Ž","}":"âï¸Ž","~":"âžï¸Ž"," ":"â–¯ï¸Ž","â‚¬":"â“ªï¸Ž"," ":"â‘ ï¸Ž","â€š":"â‘¡ï¸Ž","Æ’":"â‘¢ï¸Ž","â€ž":"â‘£ï¸Ž","â€¦":"â‘¤ï¸Ž","â€ ":"â‘¥ï¸Ž","â€¡":"â‘¦ï¸Ž","Ë†":"â‘§ï¸Ž","â€°":"â‘¨ï¸Ž","Å ":"â‘©ï¸Ž","â€¹":"â“¿ï¸Ž","Å’":"â¶ï¸Ž"," ":"â·ï¸Ž","Å½":"â¸ï¸Ž"," ":"â¹ï¸Ž"," ":"âºï¸Ž","â€˜":"â»ï¸Ž","â€™":"â¼ï¸Ž","â€œ":"â½ï¸Ž","â€":"â¾ï¸Ž","â€¢":"â¿ï¸Ž","â€“":"â—»ï¸Ž","â€”":"â—»ï¸Ž","Ëœ":"â—»ï¸Ž","â„¢":"â—»ï¸Ž","Å¡":"â—»ï¸Ž","â€º":"â—»ï¸Ž","Å“":"â—»ï¸Ž"," ":"â—»ï¸Ž","Å¾":"Â·ï¸Ž","Å¸":"â€¢ï¸Ž","Â¡":"â—‹ï¸Ž","Â¢":"â­•ï¸Ž","Â£":"â—»ï¸Ž","Â¤":"â—‰ï¸Ž","Â¥":"â—Žï¸Ž","Â¦":"â—»ï¸Ž","Â§":"â–ªï¸Ž","Â¨":"â—»ï¸Ž","Â©":"â—»ï¸Ž","Âª":"âœ¦ï¸Ž","Â«":"â˜…ï¸Ž","Â¬":"âœ¶ï¸Ž","Â®":"âœ¹ï¸Ž","Â¯":"âœµï¸Ž","Â°":"â—»ï¸Ž","Â±":"âŒ–ï¸Ž","Â²":"âŸ¡ï¸Ž","Â³":"âŒ‘ï¸Ž","Â´":"â—»ï¸Ž","Âµ":"âœªï¸Ž","Â¶":"âœ°ï¸Ž","Â·":"ðŸ•ï¸Ž","Â¸":"ðŸ•‘ï¸Ž","Â¹":"ðŸ•’ï¸Ž","Âº":"ðŸ•“ï¸Ž","Â»":"ðŸ•”ï¸Ž","Â¼":"ðŸ••ï¸Ž","Â½":"ðŸ•–ï¸Ž","Â¾":"ðŸ•—ï¸Ž","Â¿":"ðŸ•˜ï¸Ž","Ã€":"ðŸ•™ï¸Ž","Ã":"ðŸ•šï¸Ž","Ã‚":"ðŸ•›ï¸Ž","Ãƒ":"â—»ï¸Ž","Ã„":"â—»ï¸Ž","Ã…":"â—»ï¸Ž","Ã†":"â—»ï¸Ž","Ã‡":"â—»ï¸Ž","Ãˆ":"â—»ï¸Ž","Ã‰":"â—»ï¸Ž","ÃŠ":"â—»ï¸Ž","Ã‹":"â—»ï¸Ž","ÃŒ":"â—»ï¸Ž","Ã":"â—»ï¸Ž","ÃŽ":"â—»ï¸Ž","Ã":"â—»ï¸Ž","Ã":"â—»ï¸Ž","Ã‘":"â—»ï¸Ž","Ã’":"â—»ï¸Ž","Ã“":"â—»ï¸Ž","Ã”":"â—»ï¸Ž","Ã•":"âŒ«ï¸Ž","Ã–":"âŒ¦ï¸Ž","Ã—":"â—»ï¸Ž","Ã˜":"âž¢ï¸Ž","Ã™":"â—»ï¸Ž","Ãš":"â—»ï¸Ž","Ã›":"â—»ï¸Ž","Ãœ":"âž²ï¸Ž","Ã":"â—»ï¸Ž","Ãž":"â—»ï¸Ž","ÃŸ":"â—»ï¸Ž","Ã ":"â—»ï¸Ž","Ã¡":"â—»ï¸Ž","Ã¢":"â—»ï¸Ž","Ã£":"â—»ï¸Ž","Ã¤":"â—»ï¸Ž","Ã¥":"â—»ï¸Ž","Ã¦":"â—»ï¸Ž","Ã§":"â—»ï¸Ž","Ã¨":"âž”ï¸Ž","Ã©":"â—»ï¸Ž","Ãª":"â—»ï¸Ž","Ã«":"â—»ï¸Ž","Ã¬":"â—»ï¸Ž","Ã­":"â—»ï¸Ž","Ã®":"â—»ï¸Ž","Ã¯":"â‡¦ï¸Ž","Ã°":"â‡¨ï¸Ž","Ã±":"â‡§ï¸Ž","Ã²":"â‡©ï¸Ž","Ã³":"â¬„ï¸Ž","Ã´":"â‡³ï¸Ž","Ãµ":"â¬€ï¸Ž","Ã¶":"â¬ï¸Ž","Ã·":"â¬ƒï¸Ž","Ã¸":"â¬‚ï¸Ž","Ã¹":"â–­ï¸Ž","Ãº":"â–«ï¸Ž","Ã»":"âœ—ï¸Ž","Ã¼":"âœ“ï¸Ž","Ã½":"â˜’ï¸Ž","Ã¾":"â˜‘ï¸Ž","Ã¿":"â—»ï¸Ž"};
    function wingdings(text) {
      return text.split("").map(function(a) {return wingdingsCharMap[a] ? wingdingsCharMap[a] : a}).join("");
    }
    
    const vaporwaveCharMap = {" ":"ã€€", "`" : "`","1" : "ï¼‘","2" : "ï¼’","3" : "ï¼“","4" : "ï¼”","5" : "ï¼•","6" : "ï¼–","7" : "ï¼—","8" : "ï¼˜","9" : "ï¼™","0" : "ï¼","-" : "ï¼","=" : "ï¼","~" : "~","!" : "ï¼","@" : "ï¼ ","#" : "ï¼ƒ","$" : "ï¼„","%" : "ï¼…","^" : "^","&" : "ï¼†","*" : "ï¼Š","(" : "ï¼ˆ",")" : "ï¼‰","_" : "_","+" : "ï¼‹","q" : "ï½‘","w" : "ï½—","e" : "ï½…","r" : "ï½’","t" : "ï½”","y" : "ï½™","u" : "ï½•","i" : "ï½‰","o" : "ï½","p" : "ï½","[" : "[","]" : "]","\\" : "\\","Q" : "ï¼±","W" : "ï¼·","E" : "ï¼¥","R" : "ï¼²","T" : "ï¼´","Y" : "ï¼¹","U" : "ï¼µ","I" : "ï¼©","O" : "ï¼¯","P" : "ï¼°","{" : "{","}" : "}","|" : "|","a" : "ï½","s" : "ï½“","d" : "ï½„","f" : "ï½†","g" : "ï½‡","h" : "ï½ˆ","j" : "ï½Š","k" : "ï½‹","l" : "ï½Œ",";" : "ï¼›","'" : "ï¼‡","A" : "ï¼¡","S" : "ï¼³","D" : "ï¼¤","F" : "ï¼¦","G" : "ï¼§","H" : "ï¼¨","J" : "ï¼ª","K" : "ï¼«","L" : "ï¼¬",":" : "ï¼š","\"" : "\"","z" : "ï½š","x" : "ï½˜","c" : "ï½ƒ","v" : "ï½–","b" : "ï½‚","n" : "ï½Ž","m" : "ï½","," : "ï¼Œ","." : "ï¼Ž","/" : "ï¼","Z" : "ï¼º","X" : "ï¼¸","C" : "ï¼£","V" : "ï¼¶","B" : "ï¼¢","N" : "ï¼®","M" : "ï¼­","<" : "<",">" : ">","?" : "ï¼Ÿ"};
    function vaporwaveText(text) {
      var numSpaces = text.split(" ").length;
      text = applyCharMap(vaporwaveCharMap, text);
      var asianChars = getAsianChars(Math.max(3, numSpaces));
      if(numSpaces > 6) asianChars = asianChars.split("").map(c => c+["","ã€€"][Math.round(Math.random()*0.6)]).join("");
      var outputs = [];
      outputs.push( text+"ã€€"+asianChars );
      outputs.push( text.replace(/ã€€/g, "â–‘").replace(/ï½ï½…/, "Ã¦").replace(/ï¼¡/g, "Î›").replace(/ï¼¥/g, function() { return Math.random() > 0.5 ? "Îž" : "Î£"; }).replace(/ï¼¯/g, "â™¢")+"ã€€ï¼ˆ"+asianChars+"ï¼‰" );
      outputs.push("ã€ï»¿"+text+"ã€‘");
      return outputs.join("\n\n");
    }

    function getAsianChars(n) {
      if(!n) n = 1;
      var chars = "ãƒªã‚µãƒ•ãƒ©ãƒ³ã‚¯ç¾ä»£ã®ã‚³ãƒ³ãƒ”ãƒ¥ç«¹å†… ã¾ã‚Šã‚„è‹¥è€…ãŒå±¥ãæµè¡Œã®ã‚¹ãƒ‹ãƒ¼ã‚«ãƒ¼çœŸå¤œä¸­ã®ãƒ‰ã‚¢ãƒ›ãƒƒãƒˆãƒ‰ãƒƒã‚°ãƒžã‚¹ã‚¿ãƒ¼ã‚¹ãƒˆãƒ©ã‚¤ã‚«ãƒ¼ã‚½ãƒ‹ãƒ¼ãƒ–ã‚®æ–°ã—ã„æ—¥ã®èª•ç”Ÿãƒ©ã‚¤ãƒ• - ãƒ’ã‚¹ã‚¤è’¸æ°—æ³¢ ç„¡ç·šã‚ ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ãƒ·ãƒ¸ãƒ¹ãƒºãƒ»ãƒ¼ãƒ½ãƒ¾ãƒ¿ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ã‚”ã‚•ã‚–ã‚™ã‚šã‚›ã‚œã‚ã‚žã‚Ÿäºœå“€æŒ¨æ„›æ›–æ‚ªæ¡åœ§æ‰±å®›åµå®‰æ¡ˆæš—ä»¥è¡£ä½å›²åŒ»ä¾å§”å¨ç‚ºç•èƒƒå°‰ç•°ç§»èŽå‰æ¤…å½™æ„é•ç¶­æ…°éºç·¯åŸŸè‚²å£±é€¸èŒ¨èŠ‹å¼•å°å› å’½å§»å“¡é™¢æ·«é™°é£²éš éŸ»å³å®‡ç¾½é›¨å”„é¬±ç•æµ¦é‹é›²æ°¸æ³³è‹±æ˜ æ „å–¶è© å½±é‹­è¡›æ˜“ç–«ç›Šæ¶²é§…æ‚¦è¶Šè¬é–²å††å»¶æ²¿ç‚Žæ€¨å®´åª›æ´åœ’ç…™çŒ¿é é‰›å¡©æ¼”ç¸è‰¶æ±šçŽ‹å‡¹å¤®å¿œå¾€æŠ¼æ—ºæ¬§æ®´æ¡œç¿å¥¥æ¨ªå²¡å±‹å„„æ†¶è‡†è™žä¹™ä¿ºå¸éŸ³æ©æ¸©ç©ä¸‹åŒ–ç«åŠ å¯ä»®ä½•èŠ±ä½³ä¾¡æžœæ²³è‹›ç§‘";
      var str = "";
      for(var i = 0; i < n; i++) {
        str += chars[Math.floor(Math.random()*chars.length)];
      }
      return str;
    }
    
    
    const flourishArray = ["â˜…Â·.Â·Â´Â¯`Â·.Â·â˜… [[text]] â˜…Â·.Â·Â´Â¯`Â·.Â·â˜…", "â– â–‚ â–„ â–… â–† â–‡ â–ˆ [[text]] â–ˆ â–‡ â–† â–… â–„ â–‚ â–", "Â°Â°Â°Â·.Â°Â·..Â·Â°Â¯Â°Â·._.Â· [[text]] Â·._.Â·Â°Â¯Â°Â·.Â·Â° .Â·Â°Â°Â°", "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ° [[text]] Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸", "Ä±llÄ±llÄ± [[text]] Ä±llÄ±llÄ±", "â€¢?((Â¯Â°Â·._.â€¢ [[text]] â€¢._.Â·Â°Â¯))ØŸâ€¢", "â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ [[text]] â•‘â–Œâ•‘â–Œâ•‘â–ˆâ”‚â–Œ", "Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ— [[text]] Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ—", "â€¢]â€¢â€¢Â´ÂºÂ´â€¢Â» [[text]] Â«â€¢Â´ÂºÂ´â€¢â€¢[â€¢", "*â€¢.Â¸â™¡ [[text]] â™¡Â¸.â€¢*", "â•°â˜†â˜† [[text]] â˜†â˜†â•®", ".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° [[text]] Â°Â¤*(Â¯Â´â˜…`Â¯)*Â¤Â°â€¢.", "(Â¯Â´â€¢._.â€¢ [[text]] â€¢._.â€¢Â´Â¯)", "Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ [[text]] Â¨ËœË†â€Â°Â¹~â€¢-.â€žÂ¸", "â–‘â–’â–“â–ˆ [[text]] â–ˆâ–“â–’â–‘", "â–‘â–’â–“â–ˆâ–ºâ”€â•  [[text]] â•â”€â—„â–ˆâ–“â–’â–‘", "â˜…å½¡ [[text]] å½¡â˜…", "â€¢Â´Â¯`â€¢. [[text]] .â€¢Â´Â¯`â€¢", "Â§.â€¢Â´Â¨'Â°Ã·â€¢..Ã— [[text]] Ã—,.â€¢Â´Â¨'Â°Ã·â€¢..Â§", "â€¢Â°Â¯`â€¢â€¢ [[text]] â€¢â€¢Â´Â¯Â°â€¢", "(Â¯`*â€¢.Â¸,Â¤Â°Â´âœ¿.ï½¡.:* [[text]] *.:ï½¡.âœ¿`Â°Â¤,Â¸.â€¢*Â´Â¯)", "|!Â¤*'~``~'*Â¤!| [[text]] |!Â¤*'~``~'*Â¤!|", "â€¢._.â€¢â€¢Â´Â¯``â€¢.Â¸Â¸.â€¢` [[text]] `â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢", "Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ [[text]] Â¨ËœË†â€Â°Â¹~â€¢-.â€žÂ¸", "(Â¯Â´â€¢._.â€¢ [[text]] â€¢._.â€¢Â´Â¯)", "â€¢â€¢Â¤(`Ã—[Â¤ [[text]] Â¤]Ã—Â´)Â¤â€¢â€¢", "â€¢Â´Â¯`â€¢Â» [[text]] Â«â€¢Â´Â¯`â€¢", " .o0Ã—XÃ—0o. [[text]] .o0Ã—XÃ—0o.", "Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> [[text]] <<..â€¢.Â¸Â¸â€¢Â´Â¯`â€¢.Â¸Â¸Â¤", "â€”(â€¢â€¢Ã·[ [[text]] ]Ã·â€¢â€¢)â€”", "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸ [[text]] Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸", "`â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢ [[text]] â€¢._.â€¢â€¢`Â¯Â´Â´â€¢.Â¸Â¸.â€¢`", ",-*' ^ '~*-.,_,.-*~ [[text]] ~*-.,_,.-*~' ^ '*-,", "`â€¢.,Â¸Â¸,.â€¢Â´Â¯ [[text]] Â¯`â€¢.,Â¸Â¸,.â€¢Â´", "â†¤â†¤â†¤â†¤â†¤ [[text]] â†¦â†¦â†¦â†¦â†¦", "âž¶âž¶âž¶âž¶âž¶ [[text]] âž·âž·âž·âž·âž·", "â†«â†«â†«â†«â†« [[text]] â†¬â†¬â†¬â†¬â†¬", "Â·.Â¸Â¸.Â·â™©â™ªâ™« [[text]] â™«â™ªâ™©Â·.Â¸Â¸.Â·", "ã€ï½¡_ï½¡ã€‘ [[text]] ã€ï½¡_ï½¡ã€‘", "]|I{â€¢------Â» [[text]] Â«------â€¢}I|[", "â–€â–„â–€â–„â–€â–„ [[text]] â–„â–€â–„â–€â–„â–€", "(-_-) [[text]] (-_-)", "â€¢Â´Â¯`â€¢. [[text]] .â€¢Â´Â¯`â€¢", "-æ¼«~*'Â¨Â¯Â¨'*Â·èˆž~ [[text]] ~èˆž*'Â¨Â¯Â¨'*Â·~æ¼«-", "à¹‘Ûžà¹‘,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Û© [[text]] à¹‘Û© ,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Ûžà¹‘", ".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° [[text]] Â°Â¤*(Â¯Â´â˜…`Â¯)*Â¤Â°â€¢.", "â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢ [[text]] â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢", "Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> [[text]] <<..â€¢.Â¸Â¸â€¢Â´Â¯`â€¢.Â¸Â¸Â¤", "â—¦â€¢â—â—‰âœ¿ [[text]] âœ¿â—‰â—â€¢â—¦", "â•šÂ»â˜…Â«â• [[text]] â•šÂ»â˜…Â«â•", "-Â·=Â»â€¡Â«=Â·- [[text]] -Â·=Â»â€¡Â«=Â·-", "âˆ™âˆ™Â·â–«â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’ [[text]] áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â–«Â·âˆ™âˆ™", "Â¸Â¸â™¬Â·Â¯Â·â™©Â¸Â¸â™ªÂ·Â¯Â·â™«Â¸Â¸ [[text]] Â¸Â¸â™«Â·Â¯Â·â™ªÂ¸Â¸â™©Â·Â¯Â·â™¬Â¸Â¸", "à®œÛ©ÛžÛ©à®œ [[text]] à®œÛ©ÛžÛ©à®œ", "Â¤ (Â¯Â´â˜†âœ­.Â¸_)Â¤ [[text]] Â¤(_Â¸.âœ­â˜†Â´Â¯) Â¤", "(Â¯`Â·.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.-> [[text]] <-.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.Â·Â´Â¯)", "âœ¿.ï½¡.:* â˜†:**:. [[text]] .:**:.â˜†*.:ï½¡.âœ¿", ".â€¢â™«â€¢â™¬â€¢ [[text]] â€¢â™¬â€¢â™«â€¢.", "áƒ¦(Â¯`â—•â€¿â—•Â´Â¯) â™« â™ª â™« [[text]] â™« â™ª â™« (Â¯`â—•â€¿â—•Â´Â¯)áƒ¦", "Â«-(Â¯`vÂ´Â¯)-Â« [[text]] Â»-(Â¯`vÂ´Â¯)-Â»"];
    function wrapInFlourish(text) {
      return flourishArray[Math.floor(Math.random()*flourishArray.length)].replace("[[text]]", text);
    }
    
    function wrapInSymbols(text, number) {
      return randomSymbols(number) +"  "+ text +"  "+ randomSymbols(number)
    }



    function firework(text) {
      return text.split("").join("Ò‰")+ "Ò‰";
    }




    function weirdBox(text) {
      return text.replace(/([^\s])/g,"[Ì…Ì²$1]");
    }




    function littleSparkles(text) {
      return "Ëœâ€*Â°â€¢.Ëœâ€*Â°â€¢ "+text+" â€¢Â°*â€Ëœ.â€¢Â°*â€Ëœ";
    }




    function kirbyHug(text) {
      return "(ã£â—”â—¡â—”)ã£ â™¥ " + text + " â™¥"
    }




    function dottyJoiner(text) {
      return "â–‘" + text.split("").join("â–‘") + "â–‘";
    }




    function wavyJoiner(text) {
      return "â‰‹" + text.split("").join("â‰‹") + "â‰‹";
    }




    function diametricAngleFrame(text) {
      return text.replace(/([^\s])/g,"ã€Ž$1ã€");
    }




    function thickBlockFramed(text) {
      return text.replace(/([^\s])/g,"ã€$1ã€‘");
    }
    
    function applyCharMap(map, text) {
      let out = "";
       for(let c of text.split("")) {
         if(map[c] !== undefined) out += map[c];
         else if(map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
         else out += c;
       }
      return out;
    }
     
    
    /* eslint-disable */
    const futureAlienCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"á—©","b":"á—·","c":"á‘¢","d":"á•²","e":"á˜¿","f":"á–´","g":"á˜œ","h":"á•¼","i":"á“°","j":"á’š","k":"á–½á¸","l":"á’ª","m":"á˜»","n":"á˜‰","o":"á“","p":"á•µ","q":"á•´","r":"á–‡","s":"S","t":"á–¶","u":"á‘˜","v":"áº","w":"á˜º","x":"á™­","y":"á–»","z":"á—±","A":"á—©","B":"á—·","C":"á‘¢","D":"á•²","E":"á˜¿","F":"á–´","G":"á˜œ","H":"á•¼","I":"á“°","J":"á’š","K":"á–½á¸","L":"á’ª","M":"á˜»","N":"á˜‰","O":"á“","P":"á•µ","Q":"á•´","R":"á–‡","S":"S","T":"á–¶","U":"á‘˜","V":"áº","W":"á˜º","X":"á™­","Y":"á–»","Z":"á—±"};
    const squiggle6CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"à¸„","b":"à¹–","c":"Â¢","d":"à»“","e":"Ä“","f":"f","g":"àº‡","h":"h","i":"i","j":"à¸§","k":"k","l":"l","m":"à¹“","n":"àº–","o":"à»","p":"p","q":"à¹‘","r":"r","s":"Åž","t":"t","u":"à¸™","v":"à¸‡","w":"àºŸ","x":"x","y":"à¸¯","z":"àºŠ","A":"à¸„","B":"à¹–","C":"Â¢","D":"à»“","E":"Ä“","F":"f","G":"àº‡","H":"h","I":"i","J":"à¸§","K":"k","L":"l","M":"à¹“","N":"àº–","O":"à»","P":"p","Q":"à¹‘","R":"r","S":"Åž","T":"t","U":"à¸™","V":"à¸‡","W":"àºŸ","X":"x","Y":"à¸¯","Z":"àºŠ"};
    const squiggle5CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Ä…","b":"áƒª","c":"Æˆ","d":"É–","e":"É›","f":"Ê„","g":"É ","h":"É§","i":"Ä±","j":"Ê","k":"Æ™","l":"Æ–","m":"É±","n":"Å‹","o":"Æ¡","p":"â„˜","q":"Õ¦","r":"à½ž","s":"Ê‚","t":"É¬","u":"Å³","v":"Û·","w":"á¿³","x":"Ò³","y":"áƒ§","z":"Ê‘","A":"Ä…","B":"áƒª","C":"Æˆ","D":"É–","E":"É›","F":"Ê„","G":"É ","H":"É§","I":"Ä±","J":"Ê","K":"Æ™","L":"Æ–","M":"É±","N":"Å‹","O":"Æ¡","P":"â„˜","Q":"Õ¦","R":"à½ž","S":"Ê‚","T":"É¬","U":"Å³","V":"Û·","W":"á¿³","X":"Ò³","Y":"áƒ§","Z":"Ê‘"};
    const asianStyle2CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ï¾‘","b":"ä¹ƒ","c":"á„ƒ","d":"ã‚Š","e":"ä¹‡","f":"ï½·","g":"ãƒ ","h":"ã‚“","i":"ï¾‰","j":"ï¾Œ","k":"ã‚º","l":"ï¾š","m":"ï¾¶","n":"åˆ€","o":"ã®","p":"ï½±","q":"ã‚","r":"å°º","s":"ä¸‚","t":"ï½²","u":"ã²","v":"âˆš","w":"W","x":"ï¾’","y":"ï¾˜","z":"ä¹™","A":"ï¾‘","B":"ä¹ƒ","C":"á„ƒ","D":"ã‚Š","E":"ä¹‡","F":"ï½·","G":"ãƒ ","H":"ã‚“","I":"ï¾‰","J":"ï¾Œ","K":"ã‚º","L":"ï¾š","M":"ï¾¶","N":"åˆ€","O":"ã®","P":"ï½±","Q":"ã‚","R":"å°º","S":"ä¸‚","T":"ï½²","U":"ã²","V":"âˆš","W":"W","X":"ï¾’","Y":"ï¾˜","Z":"ä¹™"};
    const asianStyleCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"å‚","b":"ä¹ƒ","c":"åŒš","d":"á—ª","e":"ä¹‡","f":"åƒ","g":"áŽ¶","h":"å„","i":"ä¸¨","j":"ï¾Œ","k":"Òœ","l":"ã„¥","m":"çˆª","n":"å‡ ","o":"ã„–","p":"å©","q":"ÉŠ","r":"å°º","s":"ä¸‚","t":"ã„’","u":"ã„©","v":"á¯","w":"å±±","x":"ä¹‚","y":"ã„š","z":"ä¹™","A":"å‚","B":"ä¹ƒ","C":"åŒš","D":"á—ª","E":"ä¹‡","F":"åƒ","G":"áŽ¶","H":"å„","I":"ä¸¨","J":"ï¾Œ","K":"Òœ","L":"ã„¥","M":"çˆª","N":"å‡ ","O":"ã„–","P":"å©","Q":"ÉŠ","R":"å°º","S":"ä¸‚","T":"ã„’","U":"ã„©","V":"á¯","W":"å±±","X":"ä¹‚","Y":"ã„š","Z":"ä¹™"};
    const squaresCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ðŸ„°","b":"ðŸ„±","c":"ðŸ„²","d":"ðŸ„³","e":"ðŸ„´","f":"ðŸ„µ","g":"ðŸ„¶","h":"ðŸ„·","i":"ðŸ„¸","j":"ðŸ„¹","k":"ðŸ„º","l":"ðŸ„»","m":"ðŸ„¼","n":"ðŸ„½","o":"ðŸ„¾","p":"ðŸ„¿","q":"ðŸ…€","r":"ðŸ…","s":"ðŸ…‚","t":"ðŸ…ƒ","u":"ðŸ…„","v":"ðŸ……","w":"ðŸ…†","x":"ðŸ…‡","y":"ðŸ…ˆ","z":"ðŸ…‰","A":"ðŸ„°","B":"ðŸ„±","C":"ðŸ„²","D":"ðŸ„³","E":"ðŸ„´","F":"ðŸ„µ","G":"ðŸ„¶","H":"ðŸ„·","I":"ðŸ„¸","J":"ðŸ„¹","K":"ðŸ„º","L":"ðŸ„»","M":"ðŸ„¼","N":"ðŸ„½","O":"ðŸ„¾","P":"ðŸ„¿","Q":"ðŸ…€","R":"ðŸ…","S":"ðŸ…‚","T":"ðŸ…ƒ","U":"ðŸ…„","V":"ðŸ……","W":"ðŸ…†","X":"ðŸ…‡","Y":"ðŸ…ˆ","Z":"ðŸ…‰"};
    const squiggle4CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"á—","b":"á°","c":"áˆ","d":"áŽ´","e":"á‹","f":"áŽ¦","g":"áŽ¶","h":"á‚","i":"áŽ¥","j":"á ","k":"á¦","l":"á","m":"áŽ·","n":"á","o":"áŽ§","p":"áŽ®","q":"áŽ¤","r":"á’","s":"á•","t":"á–","u":"á¬","v":"á‰","w":"á‡","x":"áŒ€","y":"áŽ©","z":"áš","A":"á—","B":"á°","C":"áˆ","D":"áŽ´","E":"á‹","F":"áŽ¦","G":"áŽ¶","H":"á‚","I":"áŽ¥","J":"á ","K":"á¦","L":"á","M":"áŽ·","N":"á","O":"áŽ§","P":"áŽ®","Q":"áŽ¤","R":"á’","S":"á•","T":"á–","U":"á¬","V":"á‰","W":"á‡","X":"áŒ€","Y":"áŽ©","Z":"áš"};
    const neonCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"á—©","b":"á—·","c":"á‘•","d":"á—ª","e":"E","f":"á–´","g":"G","h":"á•¼","i":"I","j":"á’","k":"K","l":"á’ª","m":"á—°","n":"á‘Ž","o":"O","p":"á‘­","q":"á‘«","r":"á–‡","s":"á”•","t":"T","u":"á‘Œ","v":"á¯","w":"á—¯","x":"á™­","y":"Y","z":"á˜”","A":"á—©","B":"á—·","C":"á‘•","D":"á—ª","E":"E","F":"á–´","G":"G","H":"á•¼","I":"I","J":"á’","K":"K","L":"á’ª","M":"á—°","N":"á‘Ž","O":"O","P":"á‘­","Q":"á‘«","R":"á–‡","S":"á”•","T":"T","U":"á‘Œ","V":"á¯","W":"á—¯","X":"á™­","Y":"Y","Z":"á˜”"};
    const squiggle3CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ÇŸ","b":"É®","c":"Æˆ","d":"É–","e":"É›","f":"Ê„","g":"É¢","h":"É¦","i":"É¨","j":"Ê","k":"Ó„","l":"ÊŸ","m":"Ê","n":"Õ¼","o":"Ö…","p":"Ö„","q":"Õ¦","r":"Ê€","s":"Ö†","t":"È¶","u":"ÊŠ","v":"Ê‹","w":"Õ¡","x":"Ó¼","y":"Ê","z":"Ê","A":"ÇŸ","B":"É®","C":"Æˆ","D":"É–","E":"É›","F":"Ê„","G":"É¢","H":"É¦","I":"É¨","J":"Ê","K":"Ó„","L":"ÊŸ","M":"Ê","N":"Õ¼","O":"Ö…","P":"Ö„","Q":"Õ¦","R":"Ê€","S":"Ö†","T":"È¶","U":"ÊŠ","V":"Ê‹","W":"Õ¡","X":"Ó¼","Y":"Ê","Z":"Ê"};
    const monospaceCharMap = {"0":"ðŸ¶","1":"ðŸ·","2":"ðŸ¸","3":"ðŸ¹","4":"ðŸº","5":"ðŸ»","6":"ðŸ¼","7":"ðŸ½","8":"ðŸ¾","9":"ðŸ¿","a":"ðšŠ","b":"ðš‹","c":"ðšŒ","d":"ðš","e":"ðšŽ","f":"ðš","g":"ðš","h":"ðš‘","i":"ðš’","j":"ðš“","k":"ðš”","l":"ðš•","m":"ðš–","n":"ðš—","o":"ðš˜","p":"ðš™","q":"ðšš","r":"ðš›","s":"ðšœ","t":"ðš","u":"ðšž","v":"ðšŸ","w":"ðš ","x":"ðš¡","y":"ðš¢","z":"ðš£","A":"ð™°","B":"ð™±","C":"ð™²","D":"ð™³","E":"ð™´","F":"ð™µ","G":"ð™¶","H":"ð™·","I":"ð™¸","J":"ð™¹","K":"ð™º","L":"ð™»","M":"ð™¼","N":"ð™½","O":"ð™¾","P":"ð™¿","Q":"ðš€","R":"ðš","S":"ðš‚","T":"ðšƒ","U":"ðš„","V":"ðš…","W":"ðš†","X":"ðš‡","Y":"ðšˆ","Z":"ðš‰"};
    const boldItalicCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ð™–","b":"ð™—","c":"ð™˜","d":"ð™™","e":"ð™š","f":"ð™›","g":"ð™œ","h":"ð™","i":"ð™ž","j":"ð™Ÿ","k":"ð™ ","l":"ð™¡","m":"ð™¢","n":"ð™£","o":"ð™¤","p":"ð™¥","q":"ð™¦","r":"ð™§","s":"ð™¨","t":"ð™©","u":"ð™ª","v":"ð™«","w":"ð™¬","x":"ð™­","y":"ð™®","z":"ð™¯","A":"ð˜¼","B":"ð˜½","C":"ð˜¾","D":"ð˜¿","E":"ð™€","F":"ð™","G":"ð™‚","H":"ð™ƒ","I":"ð™„","J":"ð™…","K":"ð™†","L":"ð™‡","M":"ð™ˆ","N":"ð™‰","O":"ð™Š","P":"ð™‹","Q":"ð™Œ","R":"ð™","S":"ð™Ž","T":"ð™","U":"ð™","V":"ð™‘","W":"ð™’","X":"ð™“","Y":"ð™”","Z":"ð™•"};
    const boldCharMap = {"0":"ðŸŽ","1":"ðŸ","2":"ðŸ","3":"ðŸ‘","4":"ðŸ’","5":"ðŸ“","6":"ðŸ”","7":"ðŸ•","8":"ðŸ–","9":"ðŸ—","a":"ðš","b":"ð›","c":"ðœ","d":"ð","e":"ðž","f":"ðŸ","g":"ð ","h":"ð¡","i":"ð¢","j":"ð£","k":"ð¤","l":"ð¥","m":"ð¦","n":"ð§","o":"ð¨","p":"ð©","q":"ðª","r":"ð«","s":"ð¬","t":"ð­","u":"ð®","v":"ð¯","w":"ð°","x":"ð±","y":"ð²","z":"ð³","A":"ð€","B":"ð","C":"ð‚","D":"ðƒ","E":"ð„","F":"ð…","G":"ð†","H":"ð‡","I":"ðˆ","J":"ð‰","K":"ðŠ","L":"ð‹","M":"ðŒ","N":"ð","O":"ðŽ","P":"ð","Q":"ð","R":"ð‘","S":"ð’","T":"ð“","U":"ð”","V":"ð•","W":"ð–","X":"ð—","Y":"ð˜","Z":"ð™"};
const boldSansCharMap = {"0":"ðŸ¬","1":"ðŸ­","2":"ðŸ®","3":"ðŸ¯","4":"ðŸ°","5":"ðŸ±","6":"ðŸ²","7":"ðŸ³","8":"ðŸ´","9":"ðŸµ","a":"ð—®","b":"ð—¯","c":"ð—°","d":"ð—±","e":"ð—²","f":"ð—³","g":"ð—´","h":"ð—µ","i":"ð—¶","j":"ð—·","k":"ð—¸","l":"ð—¹","m":"ð—º","n":"ð—»","o":"ð—¼","p":"ð—½","q":"ð—¾","r":"ð—¿","s":"ð˜€","t":"ð˜","u":"ð˜‚","v":"ð˜ƒ","w":"ð˜„","x":"ð˜…","y":"ð˜†","z":"ð˜‡","A":"ð—”","B":"ð—•","C":"ð—–","D":"ð——","E":"ð—˜","F":"ð—™","G":"ð—š","H":"ð—›","I":"ð—œ","J":"ð—","K":"ð—ž","L":"ð—Ÿ","M":"ð— ","N":"ð—¡","O":"ð—¢","P":"ð—£","Q":"ð—¤","R":"ð—¥","S":"ð—¦","T":"ð—§","U":"ð—¨","V":"ð—©","W":"ð—ª","X":"ð—«","Y":"ð—¬","Z":"ð—­"};
    const italicCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ð˜¢","b":"ð˜£","c":"ð˜¤","d":"ð˜¥","e":"ð˜¦","f":"ð˜§","g":"ð˜¨","h":"ð˜©","i":"ð˜ª","j":"ð˜«","k":"ð˜¬","l":"ð˜­","m":"ð˜®","n":"ð˜¯","o":"ð˜°","p":"ð˜±","q":"ð˜²","r":"ð˜³","s":"ð˜´","t":"ð˜µ","u":"ð˜¶","v":"ð˜·","w":"ð˜¸","x":"ð˜¹","y":"ð˜º","z":"ð˜»","A":"ð˜ˆ","B":"ð˜‰","C":"ð˜Š","D":"ð˜‹","E":"ð˜Œ","F":"ð˜","G":"ð˜Ž","H":"ð˜","I":"ð˜","J":"ð˜‘","K":"ð˜’","L":"ð˜“","M":"ð˜”","N":"ð˜•","O":"ð˜–","P":"ð˜—","Q":"ð˜˜","R":"ð˜™","S":"ð˜š","T":"ð˜›","U":"ð˜œ","V":"ð˜","W":"ð˜ž","X":"ð˜Ÿ","Y":"ð˜ ","Z":"ð˜¡"};
    const squiggle2CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Î±","b":"á‚¦","c":"Æˆ","d":"Ôƒ","e":"Ò½","f":"Ï","g":"É ","h":"Ô‹","i":"Î¹","j":"Ê","k":"Æ™","l":"Ê…","m":"É±","n":"É³","o":"Ïƒ","p":"Ï","q":"Ï™","r":"É¾","s":"Ê‚","t":"Æš","u":"Ï…","v":"Ê‹","w":"É¯","x":"x","y":"áƒ§","z":"È¥","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z"};
    const currencyCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"â‚³","b":"à¸¿","c":"â‚µ","d":"Ä","e":"É†","f":"â‚£","g":"â‚²","h":"â±§","i":"Å‚","j":"J","k":"â‚­","l":"â± ","m":"â‚¥","n":"â‚¦","o":"Ã˜","p":"â‚±","q":"Q","r":"â±¤","s":"â‚´","t":"â‚®","u":"É„","v":"V","w":"â‚©","x":"Ó¾","y":"ÉŽ","z":"â±«","A":"â‚³","B":"à¸¿","C":"â‚µ","D":"Ä","E":"É†","F":"â‚£","G":"â‚²","H":"â±§","I":"Å‚","J":"J","K":"â‚­","L":"â± ","M":"â‚¥","N":"â‚¦","O":"Ã˜","P":"â‚±","Q":"Q","R":"â±¤","S":"â‚´","T":"â‚®","U":"É„","V":"V","W":"â‚©","X":"Ó¾","Y":"ÉŽ","Z":"â±«"};
    const symbolsCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Ã¥","b":"ÃŸ","c":"Â¢","d":"Ã","e":"Ãª","f":"Â£","g":"g","h":"h","i":"Ã¯","j":"j","k":"k","l":"l","m":"m","n":"Ã±","o":"Ã°","p":"Ã¾","q":"q","r":"r","s":"Â§","t":"â€ ","u":"Âµ","v":"v","w":"w","x":"x","y":"Â¥","z":"z","A":"Ã„","B":"ÃŸ","C":"Ã‡","D":"Ã","E":"Ãˆ","F":"Â£","G":"G","H":"H","I":"ÃŒ","J":"J","K":"K","L":"L","M":"M","N":"Ã±","O":"Ã–","P":"Ã¾","Q":"Q","R":"R","S":"Â§","T":"â€ ","U":"Ãš","V":"V","W":"W","X":"Ã—","Y":"Â¥","Z":"Z"};
    const greekCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Î±","b":"Ð²","c":"Â¢","d":"âˆ‚","e":"Ñ”","f":"Æ’","g":"g","h":"Ð½","i":"Î¹","j":"× ","k":"Ðº","l":"â„“","m":"Ð¼","n":"Î·","o":"Ïƒ","p":"Ï","q":"q","r":"Ñ","s":"Ñ•","t":"Ñ‚","u":"Ï…","v":"Î½","w":"Ï‰","x":"Ï‡","y":"Ñƒ","z":"z","A":"Î±","B":"Ð²","C":"Â¢","D":"âˆ‚","E":"Ñ”","F":"Æ’","G":"g","H":"Ð½","I":"Î¹","J":"× ","K":"Ðº","L":"â„“","M":"Ð¼","N":"Î·","O":"Ïƒ","P":"Ï","Q":"q","R":"Ñ","S":"Ñ•","T":"Ñ‚","U":"Ï…","V":"Î½","W":"Ï‰","X":"Ï‡","Y":"Ñƒ","Z":"z"};
    const bentTextCharMap = {"0":"âŠ˜","1":"ðŸ™","2":"Ï©","3":"Ó ","4":"à¥«","5":"Æ¼","6":"Ï¬","7":"7","8":"ðŸ ","9":"à¥¯","a":"Ä…","b":"Ò","c":"Ã§","d":"Õª","e":"Ò½","f":"Æ’","g":"Ö","h":"Õ°","i":"Ã¬","j":"Ê","k":"ÒŸ","l":"Ó€","m":"Ê","n":"Õ²","o":"Ö…","p":"Ö„","q":"Õ¦","r":"É¾","s":"Ê‚","t":"Õ§","u":"Õ´","v":"Ñµ","w":"Õ¡","x":"Ã—","y":"Õ¾","z":"Õ€","A":"Èº","B":"Î²","C":"â†»","D":"áŽ ","E":"Æ","F":"Æ‘","G":"Æ“","H":"Ç¶","I":"Ä¯","J":"Ù„","K":"Ò ","L":"êˆ","M":"â±®","N":"áž ","O":"à¶§","P":"Ï†","Q":"Ò¨","R":"à½ ","S":"Ïš","T":"Í²","U":"Ô±","V":"á»¼","W":"à°š","X":"áƒ¯","Y":"Ó‹","Z":"É€"};
    const upperAnglesCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Î›","b":"B","c":"á„ƒ","d":"D","e":"Î£","f":"F","g":"G","h":"Î‰","i":"I","j":"J","k":"K","l":"á„‚","m":"M","n":"ÐŸ","o":"Ó¨","p":"P","q":"Q","r":"Ð¯","s":"Æ§","t":"Æ¬","u":"Ð¦","v":"V","w":"Ð©","x":"X","y":"Y","z":"Z","A":"Î›","B":"B","C":"á„ƒ","D":"D","E":"Î£","F":"F","G":"G","H":"Î‰","I":"I","J":"J","K":"K","L":"á„‚","M":"M","N":"ÐŸ","O":"Ó¨","P":"P","Q":"Q","R":"Ð¯","S":"Æ§","T":"Æ¬","U":"Ð¦","V":"V","W":"Ð©","X":"X","Y":"Y","Z":"Z"};
    const subscriptCharMap = {"0":"â‚€","1":"â‚","2":"â‚‚","3":"â‚ƒ","4":"â‚„","5":"â‚…","6":"â‚†","7":"â‚‡","8":"â‚ˆ","9":"â‚‰","a":"â‚","b":"b","c":"c","d":"d","e":"â‚‘","f":"f","g":"g","h":"â‚•","i":"áµ¢","j":"â±¼","k":"â‚–","l":"â‚—","m":"â‚˜","n":"â‚™","o":"â‚’","p":"â‚š","q":"q","r":"áµ£","s":"â‚›","t":"â‚œ","u":"áµ¤","v":"áµ¥","w":"w","x":"â‚“","y":"y","z":"z","A":"â‚","B":"B","C":"C","D":"D","E":"â‚‘","F":"F","G":"G","H":"â‚•","I":"áµ¢","J":"â±¼","K":"â‚–","L":"â‚—","M":"â‚˜","N":"â‚™","O":"â‚’","P":"â‚š","Q":"Q","R":"áµ£","S":"â‚›","T":"â‚œ","U":"áµ¤","V":"áµ¥","W":"W","X":"â‚“","Y":"Y","Z":"Z","+":"â‚Š","-":"â‚‹","=":"â‚Œ","(":"â‚",")":"â‚Ž"};
    const superscriptCharMap = {"0":"â°","1":"Â¹","2":"Â²","3":"Â³","4":"â´","5":"âµ","6":"â¶","7":"â·","8":"â¸","9":"â¹","a":"áµƒ","b":"áµ‡","c":"á¶œ","d":"áµˆ","e":"áµ‰","f":"á¶ ","g":"áµ","h":"Ê°","i":"â±","j":"Ê²","k":"áµ","l":"Ë¡","m":"áµ","n":"â¿","o":"áµ’","p":"áµ–","q":"q","r":"Ê³","s":"Ë¢","t":"áµ—","u":"áµ˜","v":"áµ›","w":"Ê·","x":"Ë£","y":"Ê¸","z":"á¶»","A":"á´¬","B":"á´®","C":"á¶œ","D":"á´°","E":"á´±","F":"á¶ ","G":"á´³","H":"á´´","I":"á´µ","J":"á´¶","K":"á´·","L":"á´¸","M":"á´¹","N":"á´º","O":"á´¼","P":"á´¾","Q":"Q","R":"á´¿","S":"Ë¢","T":"áµ€","U":"áµ","V":"â±½","W":"áµ‚","X":"Ë£","Y":"Ê¸","Z":"á¶»","+":"âº","-":"â»","=":"â¼","(":"â½",")":"â¾"};
    const squiggleCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"à¸„","b":"à¹’","c":"Ï‚","d":"à¹”","e":"Ñ”","f":"Å¦","g":"ï»®","h":"Ñ’","i":"à¹€","j":"×Ÿ","k":"Ðº","l":"É­","m":"à¹“","n":"à¸ ","o":"à¹","p":"×§","q":"á»£","r":"Ð³","s":"à¸£","t":"Õ‡","u":"à¸¢","v":"×©","w":"à¸¬","x":"×","y":"×¥","z":"Õ¹","A":"à¸„","B":"à¹’","C":"Ï‚","D":"à¹”","E":"Ñ”","F":"Å¦","G":"ï»®","H":"Ñ’","I":"à¹€","J":"×Ÿ","K":"Ðº","L":"É­","M":"à¹“","N":"à¸ ","O":"à¹","P":"×§","Q":"á»£","R":"Ð³","S":"à¸£","T":"Õ‡","U":"à¸¢","V":"×©","W":"à¸¬","X":"×","Y":"×¥","Z":"Õ¹"};
    const doubleStruckCharMap = {"0":"ðŸ˜","1":"ðŸ™","2":"ðŸš","3":"ðŸ›","4":"ðŸœ","5":"ðŸ","6":"ðŸž","7":"ðŸŸ","8":"ðŸ ","9":"ðŸ¡","a":"ð•’","b":"ð•“","c":"ð•”","d":"ð••","e":"ð•–","f":"ð•—","g":"ð•˜","h":"ð•™","i":"ð•š","j":"ð•›","k":"ð•œ","l":"ð•","m":"ð•ž","n":"ð•Ÿ","o":"ð• ","p":"ð•¡","q":"ð•¢","r":"ð•£","s":"ð•¤","t":"ð•¥","u":"ð•¦","v":"ð•§","w":"ð•¨","x":"ð•©","y":"ð•ª","z":"ð•«","A":"ð”¸","B":"ð”¹","C":"â„‚","D":"ð”»","E":"ð”¼","F":"ð”½","G":"ð”¾","H":"â„","I":"ð•€","J":"ð•","K":"ð•‚","L":"ð•ƒ","M":"ð•„","N":"â„•","O":"ð•†","P":"â„™","Q":"â„š","R":"â„","S":"ð•Š","T":"ð•‹","U":"ð•Œ","V":"ð•","W":"ð•Ž","X":"ð•","Y":"ð•","Z":"â„¤"};
    const medievalCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ð–†","b":"ð–‡","c":"ð–ˆ","d":"ð–‰","e":"ð–Š","f":"ð–‹","g":"ð–Œ","h":"ð–","i":"ð–Ž","j":"ð–","k":"ð–","l":"ð–‘","m":"ð–’","n":"ð–“","o":"ð–”","p":"ð–•","q":"ð––","r":"ð–—","s":"ð–˜","t":"ð–™","u":"ð–š","v":"ð–›","w":"ð–œ","x":"ð–","y":"ð–ž","z":"ð–Ÿ","A":"ð•¬","B":"ð•­","C":"ð•®","D":"ð•¯","E":"ð•°","F":"ð•±","G":"ð•²","H":"ð•³","I":"ð•´","J":"ð•µ","K":"ð•¶","L":"ð•·","M":"ð•¸","N":"ð•¹","O":"ð•º","P":"ð•»","Q":"ð•¼","R":"ð•½","S":"ð•¾","T":"ð•¿","U":"ð–€","V":"ð–","W":"ð–‚","X":"ð–ƒ","Y":"ð–„","Z":"ð–…"};
    const invertedSquaresCharMap = {q:"ðŸ†€",w:"ðŸ††",e:"ðŸ…´",r:"ðŸ†",t:"ðŸ†ƒ",y:"ðŸ†ˆ",u:"ðŸ†„",i:"ðŸ…¸",o:"ðŸ…¾",p:"ðŸ…¿",a:"ðŸ…°",s:"ðŸ†‚",d:"ðŸ…³",f:"ðŸ…µ",g:"ðŸ…¶",h:"ðŸ…·",j:"ðŸ…¹",k:"ðŸ…º",l:"ðŸ…»",z:"ðŸ†‰",x:"ðŸ†‡",c:"ðŸ…²",v:"ðŸ†…",b:"ðŸ…±",n:"ðŸ…½",m:"ðŸ…¼"} 
    const cursiveCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ð“ª","b":"ð“«","c":"ð“¬","d":"ð“­","e":"ð“®","f":"ð“¯","g":"ð“°","h":"ð“±","i":"ð“²","j":"ð“³","k":"ð“´","l":"ð“µ","m":"ð“¶","n":"ð“·","o":"ð“¸","p":"ð“¹","q":"ð“º","r":"ð“»","s":"ð“¼","t":"ð“½","u":"ð“¾","v":"ð“¿","w":"ð”€","x":"ð”","y":"ð”‚","z":"ð”ƒ","A":"ð“","B":"ð“‘","C":"ð“’","D":"ð““","E":"ð“”","F":"ð“•","G":"ð“–","H":"ð“—","I":"ð“˜","J":"ð“™","K":"ð“š","L":"ð“›","M":"ð“œ","N":"ð“","O":"ð“ž","P":"ð“Ÿ","Q":"ð“ ","R":"ð“¡","S":"ð“¢","T":"ð“£","U":"ð“¤","V":"ð“¥","W":"ð“¦","X":"ð“§","Y":"ð“¨","Z":"ð“©"};
    const oldEnglishCharMap = {"a":"ð”ž","b":"ð”Ÿ","c":"ð” ","d":"ð”¡","e":"ð”¢","f":"ð”£","g":"ð”¤","h":"ð”¥","i":"ð”¦","j":"ð”§","k":"ð”¨","l":"ð”©","m":"ð”ª","n":"ð”«","o":"ð”¬","p":"ð”­","q":"ð”®","r":"ð”¯","s":"ð”°","t":"ð”±","u":"ð”²","v":"ð”³","w":"ð”´","x":"ð”µ","y":"ð”¶","z":"ð”·","A":"ð”„","B":"ð”…","C":"â„­","D":"ð”‡","E":"ð”ˆ","F":"ð”‰","G":"ð”Š","H":"â„Œ","I":"â„‘","J":"ð”","K":"ð”Ž","L":"ð”","M":"ð”","N":"ð”‘","O":"ð”’","P":"ð”“","Q":"ð””","R":"â„œ","S":"ð”–","T":"ð”—","U":"ð”˜","V":"ð”™","W":"ð”š","X":"ð”›","Y":"ð”œ","Z":"â„¨"};
    const wideTextCharMap = {"`" : "`","1" : "ï¼‘","2" : "ï¼’","3" : "ï¼“","4" : "ï¼”","5" : "ï¼•","6" : "ï¼–","7" : "ï¼—","8" : "ï¼˜","9" : "ï¼™","0" : "ï¼","-" : "ï¼","=" : "ï¼","~" : "~","!" : "ï¼","@" : "ï¼ ","#" : "ï¼ƒ","$" : "ï¼„","%" : "ï¼…","^" : "^","&" : "ï¼†","*" : "ï¼Š","(" : "ï¼ˆ",")" : "ï¼‰","_" : "_","+" : "ï¼‹","q" : "ï½‘","w" : "ï½—","e" : "ï½…","r" : "ï½’","t" : "ï½”","y" : "ï½™","u" : "ï½•","i" : "ï½‰","o" : "ï½","p" : "ï½","[" : "[","]" : "]","\\" : "\\","Q" : "ï¼±","W" : "ï¼·","E" : "ï¼¥","R" : "ï¼²","T" : "ï¼´","Y" : "ï¼¹","U" : "ï¼µ","I" : "ï¼©","O" : "ï¼¯","P" : "ï¼°","{" : "{","}" : "}","|" : "|","a" : "ï½","s" : "ï½“","d" : "ï½„","f" : "ï½†","g" : "ï½‡","h" : "ï½ˆ","j" : "ï½Š","k" : "ï½‹","l" : "ï½Œ",";" : "ï¼›","'" : "ï¼‡","A" : "ï¼¡","S" : "ï¼³","D" : "ï¼¤","F" : "ï¼¦","G" : "ï¼§","H" : "ï¼¨","J" : "ï¼ª","K" : "ï¼«","L" : "ï¼¬",":" : "ï¼š","\"" : "\"","z" : "ï½š","x" : "ï½˜","c" : "ï½ƒ","v" : "ï½–","b" : "ï½‚","n" : "ï½Ž","m" : "ï½","," : "ï¼Œ","." : "ï¼Ž","/" : "ï¼","Z" : "ï¼º","X" : "ï¼¸","C" : "ï¼£","V" : "ï¼¶","B" : "ï¼¢","N" : "ï¼®","M" : "ï¼­","<" : "<",">" : ">","?" : "ï¼Ÿ"}

    
    function Lunicode(){this.tools={flip:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(i){for(var r,t=[],o=0,h=i.length;h>o;o++)r=i.charAt(o),o>0&&("Ì¤"==r||"Ì—"==r||"Ì–"==r||"Ì®"==r)?(r=this.map[i.charAt(o-1)+r],t.pop()):(r=this.map[r],"undefined"==typeof r&&(r=i.charAt(o))),t.push(r);return t.reverse().join("")},decode:function(i){for(var r,t=[],o=0,h=i.length;h>o;o++)r=i.charAt(o),o>0&&("Ì¤"==r||"Ì—"==r||"Ì–"==r||"Ì®"==r)?(r=this.map[i.charAt(o-1)+r],t.pop()):(r=this.map[r],"undefined"==typeof r&&(r=i.charAt(o))),t.push(r);return t.reverse().join("")},map:{a:"É",b:"q",c:"É”",d:"p",e:"Ç",f:"ÉŸ",g:"É“",h:"É¥",i:"Ä±",j:"É¾",k:"Êž",l:"l",m:"É¯",n:"u",r:"É¹",t:"Ê‡",v:"ÊŒ",w:"Ê",y:"ÊŽ",A:"âˆ€",B:"á™ ",C:"Æ†",D:"á—¡",E:"ÆŽ",F:"â„²",G:"â…",J:"Å¿",K:"â‹Š",L:"Ë¥",M:"W",P:"Ô€",Q:"ÎŒ",R:"á´š",T:"âŠ¥",U:"âˆ©",V:"Î›",Y:"â…„",1:"â‡‚",2:"á„…",3:"Æ",4:"ã„£",5:"ÞŽ",6:"9",7:"ã„¥","&":"â…‹",".":"Ë™",'"':"â€ž",";":"Ø›","[":"]","(":")","{":"}","?":"Â¿","!":"Â¡","'":",","<":">","â€¾":"_","Â¯":"_","â€¿":"â€","â…":"â†","âˆ´":"âˆµ","\r":"\n","ÃŸ":"á™ ","Ìˆ":"Ì¤","Ã¤":"ÉÌ¤","Ã¶":"oÌ¤","Ã¼":"nÌ¤","Ã„":"âˆ€Ì¤","Ã–":"OÌ¤","Ãœ":"âˆ©Ì¤","Â´":" Ì—","Ã©":"ÇÌ—","Ã¡":"ÉÌ—","Ã³":"oÌ—","Ãº":"nÌ—","Ã‰":"ÆŽÌ—","Ã":"âˆ€Ì—","Ã“":"OÌ—","Ãš":"âˆ©Ì—","`":" Ì–","Ã¨":"ÇÌ–","Ã ":"ÉÌ–","Ã²":"oÌ–","Ã¹":"nÌ–","Ãˆ":"ÆŽÌ–","Ã€":"âˆ€Ì–","Ã’":"OÌ–","Ã™":"âˆ©Ì–","^":" Ì®","Ãª":"ÇÌ®","Ã¢":"ÉÌ®","Ã´":"oÌ®","Ã»":"nÌ®","ÃŠ":"ÆŽÌ®","Ã‚":"âˆ€Ì®","Ã”":"OÌ®","Ã›":"âˆ©Ì®"}},mirror:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(i){for(var r,t=[],o=[],h=0,n=i.length;n>h;h++)r=i.charAt(h),h>0&&("Ìˆ"==r||"Ì€"==r||"Ì"==r||"Ì‚"==r)?(r=this.map[i.charAt(h-1)+r],t.pop()):(r=this.map[r],"undefined"==typeof r&&(r=i.charAt(h))),"\n"==r?(o.push(t.reverse().join("")),t=[]):t.push(r);return o.push(t.reverse().join("")),o.join("\n")},decode:function(i){for(var r,t=[],o=[],h=0,n=i.length;n>h;h++)r=i.charAt(h),h>0&&("Ìˆ"==r||"Ì€"==r||"Ì"==r||"Ì‚"==r)?(r=this.map[i.charAt(h-1)+r],t.pop()):(r=this.map[r],"undefined"==typeof r&&(r=i.charAt(h))),"\n"==r?(o.push(t.reverse().join("")),t=[]):t.push(r);return o.push(t.reverse().join("")),o.join("\n")},map:{a:"É’",b:"d",c:"É”",e:"É˜",f:"áŽ¸",g:"Ç«",h:"Êœ",j:"êž",k:"Êž",l:"|",n:"á´Ž",p:"q",r:"É¿",s:"ê™…",t:"Æš",y:"Ê",z:"Æ¹",B:"á™ ",C:"Æ†",D:"á—¡",E:"ÆŽ",F:"êŸ»",G:"áŽ®",J:"á‚±",K:"â‹Š",L:"â…ƒ",N:"Í¶",P:"êŸ¼",Q:"á»Œ",R:"Ð¯",S:"ê™„",Z:"Æ¸",1:"",2:"",3:"",4:"",5:"",6:"",7:"","&":"",";":"","[":"]","(":")","{":"}","?":"â¸®","<":">","Ã¤":"É’Ìˆ","ÃŸ":"á™ ","Â´":"`","Ã©":"É˜Ì€","Ã¡":"É’Ì€","Ã³":"Ã²","Ãº":"Ã¹","Ã‰":"ÆŽÌ€","Ã":"Ã€","Ã“":"Ã’","Ãš":"Ã™","`":"Â´","Ã¨":"É˜Ì","Ã ":"É’Ì","Ãˆ":"ÆŽÌ","Ãª":"É˜Ì‚","Ã¢":"É’Ì‚","ÃŠ":"ÆŽÌ‚","Ã˜":"á´“","Ã¸":"á´“"}},creepify:{init:function(){for(var i=768;789>=i;i++)this.diacriticsTop.push(String.fromCharCode(i));for(var i=790;819>=i;i++)794!=i&&795!=i&&this.diacriticsBottom.push(String.fromCharCode(i));this.diacriticsTop.push(String.fromCharCode(794)),this.diacriticsTop.push(String.fromCharCode(795));for(var i=820;824>=i;i++)this.diacriticsMiddle.push(String.fromCharCode(i));for(var i=825;828>=i;i++)this.diacriticsBottom.push(String.fromCharCode(i));for(var i=829;836>=i;i++)this.diacriticsTop.push(String.fromCharCode(i));this.diacriticsTop.push(String.fromCharCode(836)),this.diacriticsBottom.push(String.fromCharCode(837)),this.diacriticsTop.push(String.fromCharCode(838)),this.diacriticsBottom.push(String.fromCharCode(839)),this.diacriticsBottom.push(String.fromCharCode(840)),this.diacriticsBottom.push(String.fromCharCode(841)),this.diacriticsTop.push(String.fromCharCode(842)),this.diacriticsTop.push(String.fromCharCode(843)),this.diacriticsTop.push(String.fromCharCode(844)),this.diacriticsBottom.push(String.fromCharCode(845)),this.diacriticsBottom.push(String.fromCharCode(846)),this.diacriticsTop.push(String.fromCharCode(848)),this.diacriticsTop.push(String.fromCharCode(849)),this.diacriticsTop.push(String.fromCharCode(850)),this.diacriticsBottom.push(String.fromCharCode(851)),this.diacriticsBottom.push(String.fromCharCode(852)),this.diacriticsBottom.push(String.fromCharCode(853)),this.diacriticsBottom.push(String.fromCharCode(854)),this.diacriticsTop.push(String.fromCharCode(855)),this.diacriticsTop.push(String.fromCharCode(856)),this.diacriticsBottom.push(String.fromCharCode(857)),this.diacriticsBottom.push(String.fromCharCode(858)),this.diacriticsTop.push(String.fromCharCode(859)),this.diacriticsBottom.push(String.fromCharCode(860)),this.diacriticsTop.push(String.fromCharCode(861)),this.diacriticsTop.push(String.fromCharCode(861)),this.diacriticsBottom.push(String.fromCharCode(863)),this.diacriticsTop.push(String.fromCharCode(864)),this.diacriticsTop.push(String.fromCharCode(865))},encode:function(r){var t,o="";for(i in r){if(t=r[i],this.options.middle&&(t+=this.diacriticsMiddle[Math.floor(Math.random()*this.diacriticsMiddle.length)]),this.options.top)for(var h=this.diacriticsTop.length-1,n=0,a=this.options.maxHeight-Math.random()*(this.options.randomization/100*this.options.maxHeight);a>n;n++)t+=this.diacriticsTop[Math.floor(Math.random()*h)];if(this.options.bottom)for(var s=this.diacriticsBottom.length-1,n=0,a=this.options.maxHeight-Math.random()*(this.options.randomization/100*this.options.maxHeight);a>n;n++)t+=this.diacriticsBottom[Math.floor(Math.random()*s)];o+=t}return o},decode:function(r){var t,o="";for(i in r)t=r[i].charCodeAt(0),(768>t||t>865)&&(o+=r[i]);return o},diacriticsTop:[],diacriticsMiddle:[],diacriticsBottom:[],options:{top:!0,middle:!0,bottom:!0,maxHeight:15,randomization:100}},bubbles:{init:function(){for(var i=49;57>=i;i++)this.map[String.fromCharCode(i)]=String.fromCharCode(i+9263);this.map[0]="â“ª";for(var i=65;90>=i;i++)this.map[String.fromCharCode(i)]=String.fromCharCode(i+9333);for(var i=97;122>=i;i++)this.map[String.fromCharCode(i)]=String.fromCharCode(i+9327);for(i in this.map)this.mapInverse[this.map[i]]=i},encode:function(r){var t,o="",h=!0;for(i in r)t=this.map[r[i]],"undefined"==typeof t&&(r[i].charCodeAt(0)>=33?(t=r[i]+String.fromCharCode(8413),h||(t=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+t)):t=r[i]),o+=t,h="\n"==t;return o},decode:function(r){var t,o="",h="";for(i in r)t=this.mapInverse[r[i]],o+="undefined"==typeof t?r[i]:t;for(i in o)t=o[i].charCodeAt(0),160!=t&&8239!=t&&8413!=t&&(h+=o[i]);return h},map:{},mapInverse:{}},squares:{init:function(){},encode:function(r){var t,o="",h=!0;for(i in r)r[i].charCodeAt(0)>=33?(t=r[i]+String.fromCharCode(8414),h||(t=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+t)):t=r[i],o+=t,h="\n"==t;return o},decode:function(r){var t,o="";for(i in r)t=r[i].charCodeAt(0),160!=t&&8239!=t&&8414!=t&&(o+=r[i]);return o}},roundsquares:{init:function(){},encode:function(r){var t,o="",h=!0;for(i in r)r[i].charCodeAt(0)>=33?(t=r[i]+String.fromCharCode(8419),h||(t=String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(160)+t)):t=r[i],o+=t,h="\n"==t;return o},decode:function(r){var t,o="";for(i in r)t=r[i].charCodeAt(0),160!=t&&8239!=t&&8419!=t&&(o+=r[i]);return o}},bent:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(i){for(var r,t="",o=0,h=i.length;h>o;o++)r=this.map[i.charAt(o)],"undefined"==typeof r&&(r=i.charAt(o)),t+=r;return t},decode:function(i){for(var r,t="",o=0,h=i.length;h>o;o++)r=this.map[i.charAt(o)],"undefined"==typeof r&&(r=i.charAt(o)),t+=r;return t},map:{a:"Ä…",b:"Ò",c:"Ã§",d:"Õª",e:"Ò½",f:"Æ’",g:"Ö",h:"Õ°",i:"Ã¬",j:"Ê",k:"ÒŸ",l:"Ó€",m:"Ê",n:"Õ²",o:"Ö…",p:"Ö„",q:"Õ¦",r:"É¾",s:"Ê‚",t:"Õ§",u:"Õ´",v:"Ñµ",w:"Õ¡",x:"Ã—",y:"Õ¾",z:"Õ€",A:"Èº",B:"Î²",C:"â†»",D:"áŽ ",E:"Æ",F:"Æ‘",G:"Æ“",H:"Ç¶",I:"Ä¯",J:"Ù„",K:"Ò ",L:"êˆ",M:"â±®",N:"áž ",O:"à¶§",P:"Ï†",Q:"Ò¨",R:"à½ ",S:"Ïš",T:"Í²",U:"Ô±",V:"á»¼",W:"à°š",X:"áƒ¯",Y:"Ó‹",Z:"É€",0:"âŠ˜",1:"ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½",2:"Ï©",3:"Ó ",4:"à¥«",5:"Æ¼",6:"Ï¬",7:"7",8:"ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½",9:"à¥¯","&":"â…‹","(":"{",")":"}","{":"(","}":")","Ã¤":"Ä…Ìˆ","Ã¶":"Ö…Ìˆ","Ã¼":"Õ´Ìˆ","Ã„":"ÈºÌˆ","Ã–":"à¶§Ìˆ","Ãœ":"Ô±Ìˆ","Ã©":"Ò½Ì","Ã¡":"Ä…Ì","Ã³":"Ö…Ì","Ãº":"Õ´Ì","Ã‰":"ÆÌ","Ã":"ÈºÌ","Ã“":"à¶§Ì","Ãš":"Ô±Ì","Ã¨":"Ò½Ì€","Ã ":"Ä…Ì€","Ã²":"Ö…Ì€","Ã¹":"Õ´Ì€","Ãˆ":"ÆÌ€","Ã€":"ÈºÌ€","Ã’":"à¶§Ì€","Ã™":"Ô±Ì€","Ãª":"Ò½Ì‚","Ã¢":"Ä…Ì‚","Ã´":"Ö…Ì‚","Ã»":"Õ´Ì‚","ÃŠ":"ÆÌ‚","Ã‚":"ÈºÌ‚","Ã”":"à¶§Ì‚","Ã›":"Ô±Ì‚"}},tiny:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(i){var r,t="";i=i.toUpperCase();for(var o=0,h=i.length;h>o;o++)r=this.map[i.charAt(o)],"undefined"==typeof r&&(r=i.charAt(o)),t+=r;return t},decode:function(i){for(var r,t="",o=0,h=i.length;h>o;o++)r=this.map[i.charAt(o)],"undefined"==typeof r&&(r=i.charAt(o)),t+=r;return t},map:{A:"á´€",B:"Ê™",C:"á´„",D:"á´…",E:"á´‡",F:"êœ°",G:"É¢",H:"Êœ",I:"Éª",J:"á´Š",K:"á´‹",L:"ÊŸ",M:"á´",N:"É´",O:"á´",P:"á´˜",Q:"Q",R:"Ê€",S:"êœ±",T:"á´›",U:"á´œ",V:"á´ ",W:"á´¡",X:"x",Y:"Ê",Z:"á´¢"}}};for(i in this.tools)this.tools[i].init();this.getHTML=function(i){for(var r,t="",o=!0,h=0,n=0,a=0,s=i.length;s>a;a++)r=i.charCodeAt(a),10==r||13==r?(t+="<br>\n",o=!0):32==r?o?(t+=" ",o=!1):(t+=" ",o=!0):(r>=55296&&56319>=r?(h=r,n=0):h>0?(r>=56320&&57343>=r&&(n=1024*(h-55296)+(r-56320)+65536),h=0):n=r,0!=n&&(t+="&#x"+n.toString(16)+";",o=!0));return t}}


    
    // CUTE TEXT:
    function cuteText(text) {
      if(text.trim() === "") return "";
      qi = -1;
      var bounds = boundingString(Math.floor(Math.random()*2)+1);
      return bounds + "  ðŸŽ€  " + text.split(/([!?.]+)/gi).map(cuteSentence).join("") + "  ðŸŽ€  " + esrever.reverse(bounds);
    }
    function cuteSentence(sentence) {
      return sentence.split(/([\s,]+)/gi).map(cuteWord).join("");
    }
    function cuteWord(word) {
      //remember to handle exclamations, empty strings, commas etc. etc.!!
      if(word === "" || /[[!?.\s,]+]/gi.test(word)) return word;
      //TODO: random turn o's into flowers, turn quotes into unicode and ! and ?
      word = roundReplace(word);
      word = punctReplace(word);
      word = emojiReplace(word);
      return scriptify(word);
    }
    var qi = -1;
    var qa = ["â","âž"];
    function quotes() {
      qi++;
      if(qi === 2) qi = 0;
      return qa[qi];
    }
    function punctReplace(word) {
      return word.split("")
        .map(function(a) {
          if(a === "!") return randomElement(["â£","â¢"]);
          else if(a === "?") return randomElement(["Â¿","?"]);
          else if(a === "\"") return quotes();
          else return a;
        }).join("");
    }
    function emojiReplace(word) {
      return word
      .replace(":)", randomElement(emoji[":)"]))
      .replace("(:", randomElement(emoji[":)"]))
      .replace("^^", randomElement(emoji["^^"]))
      .replace(":P", randomElement(emoji[":p"]))
      .replace(":p", randomElement(emoji[":p"]))
      .replace(":D", randomElement(emoji[":D"]))
      .replace("<3", randomElement(emoji["<3"]))
      .replace("(y)", randomElement(emoji["(y)"]))
      .replace("(Y)", randomElement(emoji["(y)"]));
    }
    function roundReplace(text) {
      return text.split("").map(function(a) { if(a.toLowerCase() === "o" || a === "0") { return randomElement(round); } else { return a; } }).join("");
    }
    var emoji = {
      ":)" : ["Ù©(Ë˜â—¡Ë˜)Û¶","(â€¢â—¡â€¢)","(É”â—”â€¿â—”)É”","â€â—•â€¿â—•â€","(ï½¡â—•â€¿â—•ï½¡)","â—â€¿â—","â—•â€¿â—•","ðŸ˜","ãƒ„","(âœ¿ãƒ˜á´¥ãƒ˜)","ðŸŒ˜â€¿ðŸŒ˜","(ã¥ï½¡â—•â€¿â€¿â—•ï½¡)ã¥","(/â—”â—¡â—”)/","s(^â€¿^)-b","(äººâ—•â€¿â—•)","(âœ¿â•¹â—¡â•¹)","â—”â—¡â—”"],
      "^^" : ["(^â–½^)","(âœ¿^â–½^)","áµ”âŒ£áµ”","áµ”á´¥áµ”","(â‰§â—¡â‰¦)","^ã……^","^ã…‚^","(âŒ’â€¿âŒ’)","â— â—¡â— ","â€â€¿â€",""],
      ":p" : [":Ãž",""],
      ":D" : ["(ï¾‰â—•ãƒ®â—•)ï¾‰*:ï½¥ï¾Ÿâœ§","(âœ¿â—•á—œâ—•)â”â™«.*ï½¥ï½¡ï¾Ÿ","á••(á›)á•—"],
      "<3" : ["â™¡","â¤","â™¥","â¥","ðŸ’˜","ðŸ’™","ðŸ’—","ðŸ’–","ðŸ’•","ðŸ’“","ðŸ’ž","ðŸ’","ðŸ’Ÿ"],
      "(y)" : ["ðŸ‘","ðŸ‘Œ"],
    };
    var round = ["â","ðŸŒº","â€","ðŸ’®","ðŸµ","ðŸŒ¸","â˜¯","ðŸ˜","â™¡","ðŸ©","ðŸ¬","ðŸ’™","ðŸŒž","ðŸ’","ðŸª","â¤","ðŸ’—","ðŸ‘","ðŸ’ž"];
    var food = ["ðŸ¬","ðŸ­","ðŸ’","ðŸŽ","ðŸ‰","ðŸ‡","ðŸ“","ðŸŒ","ðŸ‘","ðŸ°","ðŸŽ‚","ðŸ©","ðŸª","ðŸ§","ðŸ¦","ðŸ«","ðŸ¡"];
    var flowers = ["âœ¿","âš˜","â¦","â§","âœ¾","â","â€","ðŸ’","ðŸŒ¸","ðŸ’®","ðŸµ","ðŸŒ¹","ðŸŒº","ðŸŒ»","ðŸŒ·","â˜˜","ðŸŒ±","ðŸŒ²","ðŸŒ³","ðŸŒ´","ðŸŒ¿","ðŸ‚"];
    var twinkles = ["âš›","ðŸŒŒ","ðŸŒ ","*",":","ï½¡","ï½¥ï¾Ÿ","âœ§","âœ®","â˜…","âœ©","â‹†",".","Â°","`","âœ´","ï½¡","âœ´","â‹†","âœ³","âœ¶","âœ·","âˆ"];
    var animals = ["ðŸ¯","ðŸŽ","ðŸ–","ðŸ·","ðŸ","ðŸ‘","ðŸ","ðŸ«","ðŸ˜","ðŸ­","ðŸ","ðŸ€","ðŸ¹","ðŸ°","ðŸ‡","ðŸ¿","ðŸ»","ðŸ¨","ðŸ¼","ðŸ¾","ðŸ”","ðŸ“","ðŸ£","ðŸ¤","ðŸ¥","ðŸ¦","ðŸ§","ðŸ•Š","ðŸ¸","ðŸ¢","ðŸ³","ðŸ‹","ðŸ¬","ðŸŸ","ðŸ ","ðŸ¡","ðŸ™","ðŸš","ðŸŒ","ðŸž"];
    var plants = ["âœ¿","âš˜","â¦","â§","âœ¾","â","â€","ðŸ’","ðŸŒ¸","ðŸ’®","ðŸµ","ðŸŒ¹","ðŸŒº","ðŸŒ»","ðŸŒ·","â˜˜","ðŸŒ±","ðŸŒ²","ðŸŒ³","ðŸŒ´","ðŸŒ¿","ðŸ‚"];
    var misc = ["ðŸŒŒ","ðŸŒ ","ðŸŽ‰","ðŸŽŠ","ðŸŽˆ","ðŸ’Œ","ðŸŽŽ","ðŸŽ","ðŸŽ€","ðŸ•¯","ðŸ”®","ðŸ›€","ðŸŽ–","ðŸ†","ðŸ…","ðŸ‘‘","ðŸ’","ðŸ‘¶","ðŸ‘¼","ðŸ‘¸","ðŸ‘¯","ðŸ‘’","ðŸ‘»"];
    var music = ["â™«","â™¬","â™ª","â™©","Â°","ï½¡","âœ§","ðŸŽ»","ðŸŽº","ðŸŽ¸","ðŸŽ·","ðŸ“¯"];
    var flourish = ["â€¢?((Â¯Â°Â·._.â€¢ ","Ä±llÄ±llÄ± ","Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ° ","Â°Â°Â°Â·.Â°Â·..Â·Â°Â¯Â°Â·._.Â· ","â€¢Â´Â¯`â€¢. ","Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ— ","â€¢]â€¢â€¢Â´ÂºÂ´â€¢Â» ","]|I{â€¢------Â» ","Â§.â€¢Â´Â¨'Â°Ã·â€¢..Ã— ","â€¢Â°Â¯`â€¢â€¢ ","(Â¯`Â·.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.-> ","*Â´Â¯`*.Â¸Â¸.*Â´Â¯`* ","(Â¯`Â·.Â¸Â¸.-> Â°Âº ","Â°Â·.Â¸.Â·Â°Â¯Â°Â·.Â¸.Â·Â°Â¯Â°Â·.Â¸.-> ","â€¢._.â€¢â€¢Â´Â¯``â€¢.Â¸Â¸.â€¢` ","Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ ","(Â¯Â´â€¢._.â€¢ ","â€¢â€¢Â¤(`Ã—","â€¢Â´Â¯`â€¢Â» ","`â€¢.,Â¸Â¸,.â€¢Â´Â¯ ","Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸ ",".o0Ã—XÃ—0o. ",",-*'^'~*-.,_,.-*~ ","`â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢ ","â€”(â€¢â€¢Ã·","Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> ","â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢ ",".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° ","à¹‘Ûžà¹‘,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Û© ","-æ¼«~*'Â¨Â¯Â¨'*Â·èˆž~ ","â˜…Â·.Â·Â´Â¯`Â·.Â·â˜… ","â– â–‚ â–„ â–… â–† â–‡ â–ˆ ","â–€â–„â–€â–„â–€â–„ ","â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ "];
    function boundingString(n) {
      return randomElement([foodString,twinkleString,animalString,flourishString])(n);
    }
    function foodString(n) {
      return new Array(n+1).join('0').split('').map(function(a){ return randomElement(food); }).join(' â‹† ');
    }
    function twinkleString(n) {
      return new Array(n+1).join('0').split('').map(function(){ return randomElement(twinkles); }).join("");
    }
    function animalString(n) {
      return new Array(n+1).join('0').split('').map(function(a){ return randomElement(animals); }).join(' â‹† ');
    }
    function flourishString(n) {
      return randomElement(flourish);
    }
    function scriptify(text) {
      var map = {"0":"ðŸ¢","1":"ðŸ£","2":"ðŸ¤","3":"ðŸ¥","4":"ðŸ¦","5":"ðŸ§","6":"ðŸ¨","7":"ðŸ©","8":"ðŸª","9":"ðŸ«","a":"ð’¶","b":"ð’·","c":"ð’¸","d":"ð’¹","e":"ð‘’","f":"ð’»","g":"ð‘”","h":"ð’½","i":"ð’¾","j":"ð’¿","k":"ð“€","l":"ð“","m":"ð“‚","n":"ð“ƒ","o":"ð‘œ","p":"ð“…","q":"ð“†","r":"ð“‡","s":"ð“ˆ","t":"ð“‰","u":"ð“Š","v":"ð“‹","w":"ð“Œ","x":"ð“","y":"ð“Ž","z":"ð“","A":"ð’œ","B":"ðµ","C":"ð’ž","D":"ð’Ÿ","E":"ð¸","F":"ð¹","G":"ð’¢","H":"ð»","I":"ð¼","J":"ð’¥","K":"ð’¦","L":"ð¿","M":"ð‘€","N":"ð’©","O":"ð’ª","P":"ð’«","Q":"ð’¬","R":"ð‘…","S":"ð’®","T":"ð’¯","U":"ð’°","V":"ð’±","W":"ð’²","X":"ð’³","Y":"ð’´","Z":"ð’µ"};
      var charArray = text.split("");
      for(var i = 0; i < charArray.length; i++) {
        if( map[charArray[i].toLowerCase()] ) {
          charArray[i] = map[charArray[i]];
        }
      }
      text = charArray.join("");
      return text;
    }
    function shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    function randomElement(a) {
      return a[Math.floor(Math.random()*a.length)];
    }
    //https://github.com/mathiasbynens/esrever
    !function(e){var o="object"==typeof exports&&exports,r="object"==typeof module&&module&&module.exports==o&&module,n="object"==typeof global&&global;(n.global===n||n.window===n)&&(e=n);var t=/(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,i=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,f=function(e){e=e.replace(t,function(e,o,r){return f(r)+o}).replace(i,"$2$1");for(var o="",r=e.length;r--;)o+=e.charAt(r);return o},l={version:"<%= version %>",reverse:f};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return l});else if(o&&!o.nodeType)if(r)r.exports=l;else for(var a in l)l.hasOwnProperty(a)&&(o[a]=l[a]);else e.esrever=l}(this);
















    // CRAZY TEXT
    function fullCrazy(text) {
      if(text.trim() === "") return "";
      return randomSymbols(2) +"  "+ crazifyText(text) +"  "+ randomSymbols(2)
    }
    function crazifyText(text) {
      text = text.split("");
      for(var i = 0; i < text.length; i++) { text[i] =  crazifyCharacter(text[i]); }
      return text.join("");
    }
    function crazifyCharacter(c) {
      c = c.toLowerCase();
      var map = {"&":"â…‹","%":["â…","â„€","â„","â„†","â„…"],"0":["ï¼","Ñ²","Ê˜"],"1":["âž€","â¶","ï¼‘"],"2":["ï¼’","â·","âž"],"3":["ï¼“","â¸","âž‚"],"4":["ï¼”","â¹","âžƒ"],"5":["âº","âž„","ï¼•"],"6":["ï¼–","â»","âž…"],"7":["ï¼—","â¼","âž†"],"8":["ï¼˜","âž‡","â½"],"9":["âžˆ","â¾","ï¼™"],"<":["â‰¼","â‰º","â‰ª","â˜¾","â‰¾","â‹œ","â‹ž","â‹","âŠ‚","âŠ","âŠ‘","ã€Š","ï¼œ","â®","â°","â«·"],">":"â˜½â‰«â‰»â‰½â‰¿â‹â‹Ÿâ‹‘âŠƒâŠâŠ’â«¸ã€‹ï¼žâ¯â±","[":"ã€ã€–ã€˜ã€šï¼»","]":"ã€‘ã€—ã€™ã€›ï¼½","*":"âœ¨âœ©âœªâœ«âœ¬âœ­âœ®âœ¯âœ°âœ¦âœ±âœ²âœ³âœ´âœµâœ¶âœ·ÖÖŽâœ¸âœ¹âœºâœ»âœ¼âœ½âœ¾âœ¿â€ââ‚âƒâ„â˜…â˜†ï¼Š","a":["â’¶","â“","Î±","ï¼¡","ï½","á—©","å‚","Î”","à¸„","Î±","Î¬","Ãƒ","ð”ž","ð“ª","ð’¶","ð“","ð€","ðš","ð”¸","ð•’","áµƒ"],"b":["â’·","â“‘","Ð²","ï¼¢","ä¹ƒ","ï½‚","á—·","Î²","à¹’","Ð²","Ð²","Î²","ð”Ÿ","ð“«","ð’·","ð“‘","ð","ð›","ð”¹","ð•“","áµ‡"],"c":["â’¸","â“’","åŒš","Â¢","ï¼£","ï½ƒ","á‘•","Ä†","Ï‚","c","Ï‚","ÄŒ","â„ƒ","ð” ","ð“¬","ð’¸","ð“’","ð‚","ðœ","â„‚","ð•”","á¶œ"],"d":["â’¹","â““","âˆ‚","ï¼¤","ï½„","á—ª","Ä","à¹”","âˆ‚","Ä‘","ÄŽ","ð”¡","ð“­","ð’¹","ð““","ðƒ","á—ª","ð","ð”»","ð••","áµˆ"],"e":["â’º","ä¹‡","â“”","Ñ”","ï¼¥","ï½…","á—´","â‚¬","Ñ”","Îµ","Î­","áº¸","ð”¢","ð’†","ð‘’","ð“”","ð„","ðž","ð”¼","ð•–","áµ‰"],"f":["â’»","â“•","Æ’","ï¼¦","ï½†","åƒ","á–´","â„±","Å¦","Ò“","Ò“","Æ‘","ð”£","ð’‡","ð’»","ð“•","ð…","ðŸ","ð”½","ð•—","á¶ "],"g":["â’¼","â“–","Ù‚","g","ï¼§","ï½‡","Ç¤","áŽ¶","ï»®","g","Ä£","Äž","ð”¤","ð“°","ð‘”","ð“–","ð†","ð ","ð”¾","ð•˜","áµ","áŽ¶"],"h":["â’½","å„","â“—","Ð½","ï¼¨","ï½ˆ","á•¼","Ä¦","Ñ’","Ð½","Ä§","Ä¤","ð”¥","ð“±","ð’½","ð“—","ð‡","ð¡","â„","ð•™","Ê°"],"i":["â’¾","â“˜","Î¹","ï¼©","ï½‰","áŽ¥","ä¸¨","Æ—","à¹€","Î¹","Î¯","Ä®","ð”¦","ð“²","ð’¾","ð“˜","ðˆ","ð¢","ð•€","ð•š","á¶¤"],"j":["â’¿","â“™","× ","ï¼ª","Ú¶","ï½Š","á’Ž","Ä´","×Ÿ","× ","Ñ˜","Ä´","ð”§","ð“³","ð’¿","ð“™","ð‰","ð£","ð•","ð•›","Ê²"],"k":["â“€","â“š","Ðº","ï¼«","ï½‹","á›•","Òœ","Ðº","Ðº","Ä·","ÐŒ","ð”¨","ð“´","ð“€","ð“š","ðŠ","ð¤","ð•‚","ð•œ","áµ","Òœ"],"l":["â“","â“›","â„“","ã„¥","ï¼¬","ï½Œ","á’ª","Å","l","â„“","Ä»","Ä¹","ð”©","ð“µ","ð“","ð“›","ð‹","ð¥","ð•ƒ","ð•","Ë¡"],"m":["â“‚","â“œ","Ð¼","ï¼­","ï½","á—°","Îœ","à¹“","Ð¼","Ð¼","Ï»","ð”ª","ð“¶","ð“‚","ð“œ","ðŒ","ð¦","ð•„","ð•ž","áµ","çˆª"],"n":["â“ƒ","å‡ ","â“","Î·","ï¼®","ï½Ž","á‘Ž","Å‡","à¸ ","Î·","Î®","Å‡","ð”«","ð“·","ð“ƒ","ð“","ð","ð§","â„•","ð•Ÿ","á¶°"],"o":["â“„","ã„–","â“ž","Ïƒ","ï¼¯","ï½","á—","Ã˜","à¹","Ïƒ","ÏŒ","á»–","ð”¬","ð“¸","ð‘œ","ð“ž","ðŽ","ð¨","ð•†","ð• ","áµ’"],"p":["â“…","â“Ÿ","Ï","ï¼°","ï½","å©","á‘­","Æ¤","×§","Ï","Ï","Æ¤","ð”­","ð“¹","ð“…","ð“Ÿ","ð","ð©","â„™","ð•¡","áµ–"],"q":["â“†","â“ ","q","ï¼±","ï½‘","ÉŠ","Î©","á»£","q","q","Çª","ð”®","ð“º","ð“†","ð“ ","ð","ðª","â„š","ð•¢","áµ "],"r":["â“‡","â“¡","Ñ","å°º","ï¼²","ï½’","á–‡","Å˜","Ð³","Ñ","Å•","Å˜","ð”¯","ð“»","ð“‡","ð“¡","ð‘","ð«","â„","ð•£","Ê³"],"s":["â“ˆ","â“¢","Ñ•","ï¼³","ä¸‚","ï½“","á”•","Åž","à¸£","s","ÅŸ","Åœ","ð”°","ð“¼","ð“ˆ","ð“¢","ð’","ð¬","ð•Š","ð•¤","Ë¢"],"t":["â“‰","â“£","Ñ‚","ï¼´","ï½”","ä¸…","Å¦","t","Ñ‚","Å£","Å¤","ð”±","ð“½","ð“‰","ð“£","ð“","ð­","ð•‹","ð•¥","áµ—"],"u":["â“Š","â“¤","Ï…","ï¼µ","ï½•","á‘Œ","á»®","à¸¢","Ï…","Ã¹","Ç—","ð”²","ð“¾","ð“Š","ð“¤","ð”","ð®","ð•Œ","ð•¦","áµ˜"],"v":["â“‹","â“¥","Î½","ï¼¶","ï½–","á¯","V","×©","v","Î½","Ñ¶","ð”³","ð“¿","ð“‹","ð“¥","ð•","ð¯","ð•","ð•§","áµ›"],"w":["â“Œ","â“¦","Ï‰","ï¼·","ï½—","á—¯","Å´","à¸¬","Ï‰","ÏŽ","Å´","ð”´","ð”€","ð“Œ","ð“¦","ð–","ð°","ð•Ž","ð•¨","Ê·","å±±"],"x":["â“","â“§","Ï‡","ï¼¸","ä¹‚","ï½˜","á™­","Ð–","×","x","x","Ð–","ð”µ","ð”","ð“","ð“§","ð—","ð±","ð•","ð•©","Ë£"],"y":["â“Ž","ã„š","â“¨","Ñƒ","ï¼¹","ï½™","Æ³","Â¥","×¥","Ò¯","Ñ‡","ÐŽ","ð”¶","ð”‚","ð“Ž","ð“¨","ð˜","ð²","ð•","ð•ª","Ê¸"],"z":["â“","â“©","z","ä¹™","ï¼º","ï½š","Æµ","Å½","z","z","Å¾","Å»","ð”·","ð”ƒ","ð“","ð“©","ð™","ð³","â„¤","ð•«","á¶»"]};
      if(map[c]) { return randomElement(map[c]); }
      else { return c; }
    }
    function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)]
    }
    function randomSymbols(n) {
      var symbols = ["ðŸ™","ðŸ‰","ðŸŠ","ðŸ’","ðŸ","ðŸœ","ðŸš","ðŸ²","ðŸ³","ðŸ¸","ðŸ‘‘","ðŸ‘¹","ðŸ‘º","ðŸ‘¤","ðŸ’²","ðŸ’£","ðŸ’™","ðŸ’š","ðŸ’›","ðŸ’œ","ðŸ’","ðŸ’—","ðŸ’˜","ðŸ’ž","ðŸ’”","ðŸ’¥","ðŸ¯","ðŸ¼","ðŸ»","ðŸº","ðŸ‘Œ","ðŸ","ðŸ§","ðŸŸ","ðŸ ","ðŸ¨","ðŸŽ¯","ðŸ†","ðŸŽ","ðŸŽ€","ðŸŽ‰","ðŸŽˆ","ðŸ®","ðŸ­","ðŸ¬","ðŸ«","ðŸª","ðŸ§","ðŸŒ·","ðŸ“","ðŸ˜º","ðŸ˜¾","âœŽ","ðŸ˜Ž","ðŸ˜","ðŸ˜‚","ðŸ˜ˆ","ðŸ˜¡","ðŸ˜²","ðŸ˜³","ðŸ”","ðŸŸ","ðŸ©","ðŸŽƒ","ðŸŽ„","ðŸŽ…","ðŸ£","ðŸ¤","ðŸ‘","ðŸ‘Š","ðŸ‘»","ðŸ‘½","ðŸ‘®","ðŸ’Ž","ðŸ’‹","ðŸ‘£","ðŸ’€","ðŸ’¢","ðŸ”¥","â™”","â™•","â™–","â™—","â™˜","â™™","â™š","â™›","â™œ","â™","â™ž","â™Ÿ","â™ ","â™¡","â™¢","â™£","â™¤","â™¥","â™¦","â™§","â™¨","â™©","â™ª","â™¬","â˜…","â˜†","â˜º","â˜¹","â˜¯","â˜®","â˜¢","â˜ ","â˜Ÿ","â˜ž","â˜","â˜œ","âœŒ","âœ‹","âœŠ","â›µ","àµ ","âœŒ","à¶"];
      var s = [];
      for(var i = 0; i < n; i++) s.push( randomElement(symbols) );
      return s.join("");
    }
    function randInt(min, max) {
      return min + Math.floor(Math.random()*(max-min+1));
}

                
reverseIsDisabled = true;
function backward(text) { return $('#english-text').val(); }                //]]>
            //} catch(e) {
            //    alert("There's an error in the custom script of this translator. Error:"+e);
            //}


			try {
			

			var jsonData = {"phrases1":"","phrases2":"","words1":"","words2":"","intraword1":"","intraword2":"","prefixes1":"","prefixes2":"","suffixes1":"","suffixes2":"","regex1":"","regex2":"","rev_regex1":"","rev_regex2":"","ordering1":"","ordering2":""};
			phrases1 = jsonData.phrases1.split("\n");
			phrases2 = jsonData.phrases2.split("\n");
			words1 = jsonData.words1.split("\n");
			words2 = jsonData.words2.split("\n");
			intraword1 = jsonData.intraword1.split("\n");
			intraword2 = jsonData.intraword2.split("\n");
			prefixes1 = jsonData.prefixes1.split("\n");
			prefixes2 = jsonData.prefixes2.split("\n");
			suffixes1 = jsonData.suffixes1.split("\n");
			suffixes2 = jsonData.suffixes2.split("\n");
			regex1 = jsonData.regex1.split("\n");
			regex2 = jsonData.regex2.split("\n");
			rev_regex1 = jsonData.rev_regex1.split("\n");
			rev_regex2 = jsonData.rev_regex2.split("\n");
            ordering1 = jsonData.ordering1.split("\n");
            ordering2 = jsonData.ordering2.split("\n");

			} catch(err) {
				alert("Ahh an error! Please contact me via hello@josephrocca.com and I'll fix it asap. Error log: "+err.message);
			}

			evenUpSizes(phrases1,phrases2);
			evenUpSizes(words1,words2);
			evenUpSizes(intraword1,intraword2);
			evenUpSizes(prefixes1,prefixes2);
			evenUpSizes(suffixes1,suffixes2);

			//fix for mysql trailing newline deletion problem
			function evenUpSizes(a,b) {
				if(a.length > b.length) {
					while(a.length > b.length) b.push("");
				} else if(b.length > a.length) {
					while(b.length > a.length) a.push("");
				}
			}

			handleDuplicates(words1, words2);
			/* Initial translate for default text */
			if($('#english-text').val() != "") {
				var english = $('#english-text').val();
				var ghetto = translate(english);
				$('#ghetto-text').val(ghetto);
			}
		




$(function() { 
 /*if($.trim($("#fancytext").val())!='') { 
    generateFancy($("#fancytext").val());
  } else {
   generateFancy("Preview Text");
  }*/
  
$(".fancytext").keyup(function() { 
   $(".fancytext").val($(this).val());
   if($.trim($(this).val())!='') { 
   generateFancy($(this).val());
   } else {
   generateFancy("Preview Text");
   }
 });
var ct = 89;
function generateFancy(txt) {
  var fancyText = '';
     var result = forward(txt);
         var finalRes =  result.split('\n\n');
         var sn=1;
        $.each(finalRes,function(inx, vl) { 
            $("#copy_"+inx).val(vl);
            
         // fancyText  +=  '<div class="input-group mb-3"><input type="text" class="form-control text-'+sn+'" value="'+vl+'" id="copy_'+inx+'" readonly="readonly"><div class="input-group-append"><span class="input-group-text copybutton" style="cursor:pointer;" data-clipboard-action="copy" data-clipboard-target="#copy_'+inx+'">Copy</span></div></div>';
          sn++;
        });
        
        
        for(k=89; k<=ct; k++) {
            //console.log(k);
            $("#copy_"+k).val(crazyWithFlourishOrSymbols(txt));
        }
           //$("#result").html(fancyText); 
}
 
 $(".loadmore").click(function(){
   $(this).html('Loading...');
    var text = $.trim($(".fancytext").val());
   if(text=='') {
     text = 'Preview Text';
   } 
   var that = $(this);
   var intvl = setInterval(function(){  that.html('Load More');clearInterval(intvl); }, 1000);
   for(var i=1;i<=10;i++){
    fancyText  =  '<div class="input-group mb-3"><input type="text" class="form-control" value="'+crazyWithFlourishOrSymbols(text)+'" id="copy_'+ct+'" readonly="readonly"><div class="input-group-append"><span class="input-group-text copybutton" style="cursor:pointer;" data-clipboard-action="copy" data-clipboard-target="#copy_'+ct+'">Copy</span></div></div>';
      ct++;
    $("#result").append(fancyText);
    }
 });

});




$(function(){
var intv = setInterval(function(){ $(".copybutton").html('Copy'); }, 2000);
  $("body").on('click',".copybutton",function() { 
$(".copybutton").html('Copy');
$(this).html('Copied'); 
clearInterval(intv);
});
});

    var clipboard = new ClipboardJS('.copybutton');
    clipboard.on('success', function(e) {
        //console.log(e);
    });
    clipboard.on('error', function(e) {
        //console.log(e);
    });
   












function copyalertbox() {
    alert("You copied text!");
}
