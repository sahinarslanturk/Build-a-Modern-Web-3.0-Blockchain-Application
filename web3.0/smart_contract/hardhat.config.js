// https://eth-goerli.g.alchemy.com/v2/bolQPfBAMExdhRjfqBBbUHzz1JVW77sr

require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks: {
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/bolQPfBAMExdhRjfqBBbUHzz1JVW77sr',
      accounts: [ 'e21d09b828e72a18dbf5f66373d0c914a7c761d4c5aa8772c1053d1e73c6dbc7' ]
    }
  }
}