import { Box } from "@chakra-ui/react";
import React from "react";
import Carausel from "../../components/Carausel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Benifit from "./Benifit";
import HotDeal from "./HotDeal";
import TopDeals from "./TopDeals";
import Watches from "./Watches";
import WinterStore from "./WinterStore";

function Home() {
  return (
    <div>
      <Navbar />
      <Box w={"80%"} m={"auto"}>
        <Carausel />
        <Benifit />
        <WinterStore />
        <Watches />
        <HotDeal />
        <TopDeals />
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
