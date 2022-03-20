exports.id=0,exports.modules={"./src/server/server.js":function(e,r,t){"use strict";t.r(r);t("core-js/stable"),t("regenerator-runtime/runtime");var n=t("./build/contracts/FlightSuretyApp.json"),o=t("./src/server/config.json"),a=t("web3"),c=t.n(a),s=t("express"),i=t.n(s);t("webpack");function u(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw a}}}}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function f(e,r,t,n,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void t(e)}s.done?r(i):Promise.resolve(i).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function c(e){f(a,n,o,c,s,"next",e)}function s(e){f(a,n,o,c,s,"throw",e)}c(void 0)}))}}var v=o.localhost,h=new c.a(new c.a.providers.WebsocketProvider(v.url.replace("http","ws")));h.eth.defaultAccount=h.eth.accounts[0];var d=new h.eth.Contract(n.abi,v.appAddress);function g(){return(g=p(regeneratorRuntime.mark((function e(){var r,t,n,o,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getAccounts();case 2:r=e.sent,t=r.slice(20,40),n=h.utils.toWei("1","ether"),o=u(t),e.prev=6,o.s();case 8:if((a=o.n()).done){e.next=31;break}return c=a.value,console.log("account: "+c),e.prev=11,e.next=14,d.methods.registerOracle().send({from:c,value:n,gas:6721975,gasPrice:2e10});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("registerOracle error: "+e.t0);case 19:return e.prev=19,e.next=22,d.methods.getMyIndexes().call({from:c});case 22:s=e.sent,console.log("Oracle Registered: ".concat(s," at ").concat(c)),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(19),console.log("getMyIndexes error: "+e.t1);case 29:e.next=8;break;case 31:e.next=36;break;case 33:e.prev=33,e.t2=e.catch(6),o.e(e.t2);case 36:return e.prev=36,o.f(),e.finish(36);case 39:case"end":return e.stop()}}),e,null,[[6,33,36,39],[11,16],[19,26]])})))).apply(this,arguments)}d.events.OracleRequest({fromBlock:0},(function(e,r){e&&console.log(e),console.log(r)})),setTimeout((function(){return g.apply(this,arguments)}),1e3);var m=i()();m.get("/api",(function(e,r){r.send({message:"An API for use with your Dapp!"})})),r.default=m}};