import { Box, Divider, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";

function ValuePicks() {
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
        Value Picks
      </Heading>
      <Divider
        bg={"rgb(250, 166, 25)"}
        borderColor={"rgb(250, 166, 25)"}
        w={"60px"}
        mb={"20px"}
        borderWidth={"2px"}
      />
      <Box className={"valuePicks"}>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner2-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner3-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner4-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner5-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner6-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-03Dec22.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner8-03Dec22.jpg"
            }
          />
        </GridItem>
      </Box>
    </div>
  );
}

export default ValuePicks;
