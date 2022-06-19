/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 console.log('API_URL, PRIVATE_KEY',API_URL, PRIVATE_KEY)
 module.exports = {
   solidity: "0.8.7",
   defaultNetwork: "goerli",
   networks: {
     hardhat: {},
     goerli: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
 };