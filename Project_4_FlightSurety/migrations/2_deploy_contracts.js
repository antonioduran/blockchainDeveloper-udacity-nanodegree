const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');

module.exports = function(deployer) {
    //Adding a default address to the FlightSuretyData contract
    let firstAirline = '0x4193010Ee0095fade5226126b4bbC52A2F33cbD6';

    deployer.deploy(FlightSuretyData, firstAirline).then(() => {
        return deployer.deploy(FlightSuretyApp, FlightSuretyData.address).then(() => {
            let config = {
                localhost : {
                    url : 'http://localhost:8545',
                    dataAddress : FlightSuretyData.address,
                    appAddress : FlightSuretyApp.address
                }
            }

            fs.writeFileSync(__dirname + '/../src/dapp/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
            fs.writeFileSync(__dirname + '/../src/server/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
        });
    });
}