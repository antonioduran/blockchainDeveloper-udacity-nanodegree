exports.id=0,exports.modules={"./src/server/config.json":function(e){e.exports=JSON.parse('{"localhost":{"url":"http://localhost:8545","dataAddress":"0x19Cae344bdbaf9635a43AE9266815edeC507ab82","appAddress":"0xc9b8648b3b1FB77cFa7316eAde3dEfcF9D1e43E5"}}')},"./src/server/server.js":function(e,s,r){"use strict";r.r(s);var o=r("./build/contracts/FlightSuretyApp.json"),t=r("./src/server/config.json"),n=r("web3"),a=r.n(n),c=r("express"),d=r.n(c),l=t.localhost,p=new a.a(new a.a.providers.WebsocketProvider(l.url.replace("http","ws"))),i=p.eth.net.getId(),u=o.networks[i];new p.eth.Contract(o.abi,u.address).events.OracleRequest({fromBlock:0},(function(e,s){e&&console.log(e),console.log(s)}));var f=d()();f.get("/api",(function(e,s){s.send({message:"An API for use with your Dapp!"})})),s.default=f}};