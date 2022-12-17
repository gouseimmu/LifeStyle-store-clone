import React from "react";
import { Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

function HotDeal() {
  return (
    <div>
      <Heading
        fontFamily={
          'ProximaNova-Regular,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
        }
        fontSize={"30px"}
        fontWeight={"600"}
        size="xl"
        mt={"20px"}
        textAlign={"left"}
      >
        Season's Hottest Deals
      </Heading>
      <Divider
        bg={"rgb(250, 166, 25)"}
        borderColor={"rgb(250, 166, 25)"}
        w={"60px"}
        mb={"20px"}
        borderWidth={"2px"}
      />
      <SimpleGrid minChildWidth={"150px"} gap={3}>
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-14Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner2-15Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner3-15Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-14Dec22.jpg"
          }
          m={"auto"}
        />
      </SimpleGrid>
      <SimpleGrid minChildWidth={"150px"} gap={3} my={"20px"}>
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner5-14Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner6-15Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner7-15Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-15Dec22.jpg"
          }
          m={"auto"}
        />
      </SimpleGrid>
      <Heading
        fontFamily={
          'ProximaNova-Regular,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
        }
        fontSize={"30px"}
        fontWeight={"600"}
        size="xl"
        mt={"20px"}
        textAlign={"left"}
      >
        The Premium Edit
      </Heading>
      <Divider
        bg={"rgb(250, 166, 25)"}
        borderColor={"rgb(250, 166, 25)"}
        w={"60px"}
        mb={"20px"}
        borderWidth={"2px"}
      />
      <SimpleGrid minChildWidth={"150px"} gap={3} my={"20px"}>
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner1-14Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner2-14Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner3-14Dec22.jpg"
          }
          m={"auto"}
        />
        <Image
          src={
            "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner4-14Dec22.jpg"
          }
          m={"auto"}
        />
      </SimpleGrid>
    </div>
  );
}

export default HotDeal;
