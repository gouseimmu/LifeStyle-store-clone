import { Image } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carausel() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showArrows
        showIndicators={"false"}
        showStatus={"false"}
      >
        <Image
          id={"img2"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner1-12Dec2022A.gif"
          }
          m={"auto"}
        />
        <Image
          id={"img1"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner6-08Dec2022.gif"
          }
          m={"auto"}
        />

        <Image
          id={"img3"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-05Dec2022.jpg"
          }
          m={"auto"}
        />
        <Image
          id={"img4"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner5-05Dec2022.jpg"
          }
          m={"auto"}
        />
        <Image
          id={"img5"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner4-05Dec2022.jpg"
          }
          m={"auto"}
        />
      </Carousel>
      <Image
      src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-08Dec2022.jpg'}
      />
    </div>
  );
}

export default Carausel;
