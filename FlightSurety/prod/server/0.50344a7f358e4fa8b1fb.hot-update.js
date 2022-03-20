exports.id=0,exports.modules={"./src/server/server.js":function(e,r,t){"use strict";t.r(r);t("core-js/stable"),t("regenerator-runtime/runtime");var n=t("./build/contracts/FlightSuretyApp.json"),o=t("./src/server/config.json"),c=t("web3"),s=t.n(c),a=t("express"),u=t.n(a);t("webpack");function i(e,r,t,n,o,c,s){try{var a=e[c](s),u=a.value}catch(e){return void t(e)}a.done?r(u):Promise.resolve(u).then(n,o)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var c=e.apply(r,t);function s(e){i(c,n,o,s,a,"next",e)}function a(e){i(c,n,o,s,a,"throw",e)}s(void 0)}))}}var p=o.localhost,f=new s.a(new s.a.providers.WebsocketProvider(p.url.replace("http","ws")));f.eth.defaultAccount=f.eth.accounts[0];var v=new f.eth.Contract(n.abi,p.appAddress);function h(){return(h=l(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.eth.getAccounts().catch((function(e){console.log("Register oracles error: "+e)}));case 3:r=e.sent,t=r.slice(20,40),n=f.utils.toWei("1","ether"),t.forEach(function(){var e=l(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.methods.registerOracle().send({from:r,value:n}).catch((function(e){console.log("Register oracles error: "+e)}));case 2:t=v.methods.getMyIndexes().call({from:r}),console.log("Oracle Registered: ".concat(t[0],", ").concat(t[1],", ").concat(t[2]," at ").concat(r));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Register oracles error: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}v.events.OracleRequest({fromBlock:0},(function(e,r){e&&console.log(e),console.log(r)})),setTimeout((function(){return h.apply(this,arguments)}),1e3);var g=u()();g.get("/api",(function(e,r){r.send({message:"An API for use with your Dapp!"})})),r.default=g}};