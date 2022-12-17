import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "./HomeComponent.css";

function BigBrand() {
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
        Big Brands Big Discounts
      </Heading>
      <Divider
        bg={"rgb(250, 166, 25)"}
        borderColor={"rgb(250, 166, 25)"}
        w={"60px"}
        mb={"20px"}
        borderWidth={"2px"}
      />

      <Box className={"bigBrand"}>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner3-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner4-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner5-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner7-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner9-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-14Dec2022.jpg"
            }
          />
        </GridItem>
        <GridItem>
          <Image
            src={
              "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-14Dec2022.jpg"
            }
          />
        </GridItem>
      </Box>
    </div>
  );
}

export default BigBrand;
