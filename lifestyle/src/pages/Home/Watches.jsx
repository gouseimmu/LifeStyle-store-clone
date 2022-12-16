import { Divider, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function Watches() {
  return (
    <div>
      <SimpleGrid gap={3}>
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
          Watches
        </Heading>
        <Divider
          bg={"rgb(250, 166, 25)"}
          borderColor={"rgb(250, 166, 25)"}
          w={"60px"}
          mb={"20px"}
          borderWidth={"2px"}
        />
        <Image
          borderRadius={"20px"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-02Dec2022.gif"
          }
          m={"auto"}
        />
      </SimpleGrid>
    </div>
  );
}

export default Watches;
