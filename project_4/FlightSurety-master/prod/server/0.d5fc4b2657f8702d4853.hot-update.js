exports.id=0,exports.modules={"./src/server/server.js":function(e,s,r){"use strict";r.r(s);var t=r("./build/contracts/FlightSuretyApp.json"),o=(r("./src/server/config.json"),r("web3")),n=r.n(o),c=r("express"),a=r.n(c),i=n.a.eth.net.getId(),u=t.networks[i];new n.a.eth.Contract(t.abi,u.address).events.OracleRequest({fromBlock:0},(function(e,s){e&&console.log(e),console.log(s)}));var l=a()();l.get("/api",(function(e,s){s.send({message:"An API for use with your Dapp!"})})),s.default=l}};