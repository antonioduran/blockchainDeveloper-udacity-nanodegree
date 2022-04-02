//testConfig.js

var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('../node_modules/bignumber.js');

var Config = async function(accounts) {
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x4193010Ee0095fade5226126b4bbC52A2F33cbD6",
        "0xCE4cc54FAF4D43158c198824F8afe3ACd3013B3d",
        "0xA7F71259CfDef135Aa854b9D94Fa7FcE5a1DEBbb",
        "0x78902e9d645309f30d563B9a3EBe06264dD607eE",
        "0xa23eAEf02F9E0338EEcDa8Fdd0A73aDD781b2A86",
        "0x6b85cc8f612d5457d49775439335f83e12b8cfde",
        "0xcbd22ff1ded1423fbc24a7af2148745878800024",
        "0xc257274276a4e539741ca11b590b9447b26a8051",
        "0x2f2899d6d35b1a48a4fbdc93a37a72f264a9fca7"
    ];

    let owner = accounts[0];
    let firstAirline = accounts[1];
    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    return {
        owner : owner,
        firstAirline : firstAirline,
        weiMultiple : (new BigNumber(10)).pow(18),
        testAddresses : testAddresses,
        flightSuretyData : flightSuretyData,
        flightSuretyApp : flightSuretyApp
    }
}

module.exports = {
    Config : Config
};