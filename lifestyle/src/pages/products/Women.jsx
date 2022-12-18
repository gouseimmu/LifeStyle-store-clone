import React from 'react'
import FlexboxWomen from './FlexboxWomen'
import Banner from './Banner'
import Bigbox from './Bigbox'
import Navbar from '../../components/Navbar'
import Carausel from '../../components/Carausel'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/react'

import { deals, wnm_winter,ethnicwear_wmn, wmntop_picks, wnm_trndy_bottomwear,
    wnm_shop_category1, 
    wnm_shop_category2,
    wnm_trnd_brnd1,
    wnm_trnd_brnd2,
    wmn_active_wear,
    wmn_top_trndsngl,
    wmn_trnd_addon,
    wmn_lvd,
    wmn_edtrC,
    wmn_edtr,
    wmn_spd } from '../../utils/data'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <div>
      <Navbar/>
      <Box   w={"80%"} m={"auto"} pt={'100px'}>
      <Carausel/>
      </Box>
      <FlexboxWomen heading={"Deal Corner"} data={deals}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-29Nov2022.gif"}/>   
      <FlexboxWomen heading={'Winterwear Essentials'} data={wnm_winter}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-06Dec2022.gif"}/>   
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-06Dec2022.gif"}/>   
      <FlexboxWomen heading={"Trending Ethnic Wear"} data={ethnicwear_wmn}/>
      <Banner heading={'Flash Sale For Today'} src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-13Dec2022A.gif'}/>
      <Bigbox heading={'Top Picks'} data={wmntop_picks}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-24Nov2022.jpg"}/>   
      <FlexboxWomen heading={'Trendy Bottom Wear'} data={wnm_trndy_bottomwear}/>
      <FlexboxWomen heading={'Shop By Category'} data={wnm_shop_category1} data2={wnm_shop_category2}/>
      <FlexboxWomen heading={'Top Trending Brands'} data={wnm_trnd_brnd1} data2={wnm_trnd_brnd2}/>
      <Link to="/allwomenproducts">
      <Bigbox heading={'Activewear Essentials'} data={wmn_active_wear}/>
      </Link>
      <FlexboxWomen heading={'Top Trending Brands'} data={wmn_top_trndsngl}/>
      <FlexboxWomen heading={'Trending Add-Ons'} data={wmn_trnd_addon}/>
      <Link to="/allwomenproducts">
      <Bigbox heading={'Most Loved Styles'} data={wmn_lvd}/>
      </Link>
      <Link to="/shoesbags">
      <Bigbox heading={`Curated For You`} data={wmn_edtrC}/>
      </Link>
      <Link to="/allwomenproducts">
      <Bigbox heading={`Editor's Curated List`} data={wmn_edtr}/>
      </Link>
      <Bigbox heading={`Shop By Department`} data={wmn_spd}/>
      <Footer/>
    </div>
  )
}

export default Women