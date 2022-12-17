import { Box } from "@chakra-ui/react";
import React from "react";
import Carausel from "../../components/Carausel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Benifit from "./Benifit";
import BigBrand from "./BigBrand";
import BrandWeLove from "./BrandWeLove";
import HotDeal from "./HotDeal";
import TopDeals from "./TopDeals";
import ValuePicks from "./ValuePicks";
import Watches from "./Watches";
import WinterStore from "./WinterStore";

function Home() {
  return (
    <div>
        <Box w={'full'} position={'fixed'} zIndex={'10'}>
        <Navbar />
        </Box>
      
      <Box   w={"80%"} m={"auto"} pt={'100px'}>
        <Carausel />
        <Benifit />
        <WinterStore />
        <Watches />
        <HotDeal />
        <TopDeals />
        <BigBrand/>
        <BrandWeLove/>
        <ValuePicks/>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
