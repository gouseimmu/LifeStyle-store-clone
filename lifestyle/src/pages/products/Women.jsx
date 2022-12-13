import React from 'react'
import Flexbox from './Flexbox'
import Banner from './Banner'


import { deals, wnm_winter } from '../../utils/data'

const Women = () => {
  return (
    <div>
      <Flexbox heading={"Deal Corner"} data={deals}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-29Nov2022.gif"}/>   
      <Flexbox heading={'Winterwear Essentials'} data={wnm_winter}/>

    </div>
  )
}

export default Women