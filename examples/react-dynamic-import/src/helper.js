import Web3 from 'web3'

const web3Obj = {
  web3: new Web3(),
  setweb3: function(provider) {
    const web3Inst = new Web3(provider)
    web3Obj.web3 = web3Inst
    sessionStorage.setItem('pageUsingTorus', true)
  },
  initialize: async function() {
    const defaultTorus = await import('@toruslabs/torus-embed')
    const Torus = defaultTorus.default
    const torus = new Torus()
    await torus.init()
    await torus.ethereum.enable()
    web3Obj.setweb3(torus.provider)
  }
}
export default web3Obj
