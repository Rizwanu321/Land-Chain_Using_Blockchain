const IPFS = require('ipfs-api')
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: 'Basic ' + Buffer.from('2PBZzspZcXWSniVVXWmRWMEAn59:7144de1badbad59cf6195593ea56d38d').toString('base64')
  }
})

export default ipfs
