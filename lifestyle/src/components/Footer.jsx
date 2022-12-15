import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  IconButton,
  Grid,
  GridItem,
  Flex,
  HStack,
  Image,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaRegQuestionCircle,
  FaFacebookF,
} from "react-icons/fa";

import { MdMail } from "react-icons/md";

import play from "../image/play.png";
import app from "../image/app.png";

function Footer() {
  return (
    <div>
      <Box mt={"60px"}>
        <Divider
          orientation="horizontal"
          borderColor={"lightgrey"}
          w={"full"}
          bg={"#A0AEC0"}
          borderWidth={"0.5px"}
        />
        <Box mt={"50px"} mb={"50px"}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <Heading fontSize={25}>Subscribe to our awesome emails.</Heading>
              <Text color={"lightGrey"}>
                Get our latest offers and news straight in your inbox.
              </Text>
              <Flex ml={"170px"} mt={8}>
                <Input
                  w={80}
                  variant="filled"
                  bg="#f7f8f7"
                  placeholder="Please Enter an Email address"
                ></Input>
                <Button
                  bg={"black"}
                  color="white"
                  variant="solid"
                  borderRadius="0"
                  onClick={() => alert("Subscribed to our offers")}
                >
                  Subscribe
                </Button>
              </Flex>
            </GridItem>
            <GridItem px={12}>
              <Heading fontSize={25}>Download our apps</Heading>
              <Text color={"lightGrey"}>
                Shop our products and offers on-the-go.
              </Text>
              <Grid
                ml={"200px"}
                mt={8}
                templateColumns="repeat(5, 1fr)"
                alignItems="center"
              >
                <GridItem>
                  <Image h={38} w={110} src={app}></Image>
                </GridItem>
                <GridItem>
                  <Image h={38} w={110} src={play}></Image>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
        <Divider
          orientation="horizontal"
          borderColor={"lightgrey"}
          w={"full"}
          bg={"#A0AEC0"}
          borderWidth={"0.5px"}
        />
        <Container as={Stack} maxW={"8xl"} py={5} px={20}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr 1fr" }}
            spacing={7}
            justify={"space-between"}
            w={"95%"}
            m={"auto"}
            mb={10}
            fontSize={14}
          >
            <Stack
              align={"flex-start"}
              w={"full"}
              alignContent={"space-between"}
            >
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Women
              </Heading>
              <Link href={"#"}>Tops</Link>
              <Link href={"#"}>Ethnicwear</Link>
              <Link href={"#"}>Bottoms</Link>
              <Link href={"#"}>Dresses & Jumpsuit</Link>
              <Link href={"#"}>Winterwear</Link>
              <Link href={"#"}>Lingrie</Link>
              <Link href={"#"}>Nightwear</Link>
              <Link href={"#"}>Sportswear</Link>
              <Link href={"#"}>Beauty</Link>
              <Link href={"#"}>Watches & Sunglasses</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Men
              </Heading>
              <Link href={"#"}>Tops</Link>
              <Link href={"#"}>Bottoms</Link>
              <Link href={"#"}>Ethnicwear</Link>
              <Link href={"#"}>Sportswear</Link>
              <Link href={"#"}>Winterwear</Link>
              <Link href={"#"}>innerwear</Link>
              <Link href={"#"}>Grooming</Link>
              <Link href={"#"}>Watches & Sunglasses</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Kids
              </Heading>
              <Link href={"#"}>Girls Clothing</Link>
              <Link href={"#"}>Boys Clothng</Link>
              <Link href={"#"}>Infants Girls</Link>
              <Link href={"#"}>Infants Boys</Link>
              <Link href={"#"}>Winterwear</Link>
              <Link href={"#"}>Add ons</Link>
              <Link href={"#"}>The Teen Shop</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Shoes & Bags
              </Heading>
              <Link href={"#"}>Women</Link>
              <Link href={"#"}>Men</Link>
              <Link href={"#"}>Boys</Link>
              <Link href={"#"}>Girls</Link>
              <Link href={"#"}>Women Accessories</Link>
              <Link href={"#"}>Men Accessories</Link>
              <Link href={"#"}>Essential</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Beauty
              </Heading>
              <Link href={"#"}>Makeup Eyes</Link>
              <Link href={"#"}>Makeup Face</Link>
              <Link href={"#"}>Makeup Lips</Link>
              <Link href={"#"}>Makeup Nails</Link>
              <Link href={"#"}>Perfumes</Link>
            </Stack>
          </SimpleGrid>

          <Box mx={"10px"}>
            <SimpleGrid
              templateColumns={{ sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr 1fr" }}
              spacing={7}
              justify={"space-between"}
              w={"95%"}
              m={"auto"}
              mb={10}
              fontSize={14}
            >
              <Stack
                align={"flex-start"}
                w={"full"}
                alignContent={"space-between"}
              >
                <Heading fontWeight={"500"} fontSize={17} mb={2}>
                  Explore
                </Heading>
                <Link href={"#"}>Online Offers</Link>
                <Link href={"#"}>Store Offers</Link>
                <Link href={"#"}>Online Gift Card</Link>
                <Link href={"#"}>Shop on WhatsApp</Link>
                <Link href={"#"}>Fashion VLOG</Link>
                <Link href={"#"}>Join CIRCLEMAG</Link>
                <Link href={"#"}>SBI Offers</Link>
                <Link href={"#"}>Homecentre</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <Heading fontWeight={"500"} fontSize={17} mb={2}>
                  About
                </Heading>
                <Link href={"#"}>About us</Link>
                <Link href={"#"}>Carrers</Link>
                <Link href={"#"}>Take a Tour</Link>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>Store Locator</Link>
                <Link href={"#"}>Landmark Cares</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <Heading fontWeight={"500"} fontSize={17} mb={2}>
                  Help
                </Heading>
                <Link href={"#"}>Contact us</Link>
                <Link href={"#"}>Shipping</Link>
                <Link href={"#"}>Returns Process</Link>
                <Link href={"#"}>Returns Policy</Link>
                <Link href={"#"}>Help Centre</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <Heading fontWeight={"500"} fontSize={17} mb={2}></Heading>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
              </Stack>
              <Stack align={"flex-start"}>
                <Heading fontWeight={"500"} fontSize={17} mb={2}></Heading>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
              </Stack>
            </SimpleGrid>
          </Box>
        </Container>
        <Divider
          orientation="horizontal"
          borderColor={"lightgrey"}
          w={"full"}
          bg={"#A0AEC0"}
          borderWidth={"0.5px"}
        />
        <Box border={"0px solid blue"} ml={"130px"} mt={15} mb={15}>
          <Flex>
            <Grid gridTemplateColumns={"5fr 1fr"}>
              <GridItem>
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  <GridItem>
                    <Grid templateColumns="20px 1fr" alignItems={"center"}>
                      <GridItem>
                        <FaPhoneAlt fontSize={"40px"} />
                      </GridItem>
                      <GridItem>
                        <Text>Talk to us</Text>
                        <Text>1800-123-1555</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem>
                    <Grid templateColumns="50px 1fr">
                      <GridItem>
                        <FaRegQuestionCircle fontSize={"40px"} />
                      </GridItem>
                      <GridItem>
                        <Text>Helpcenter</Text>
                        <Text>help.lifestylestores.com</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem>
                    <Grid templateColumns="50px 1fr">
                      <GridItem>
                        <MdMail fontSize={"40px"} />
                      </GridItem>
                      <GridItem>
                        <Text>Write to us</Text>
                        <Text>help@lifestylestores.com</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
            <Flex mt={2} gap={"25px"}>
              <FaFacebookF fontSize={"25px"} />
              <FaTwitter fontSize={"25px"} />
              <FaInstagram fontSize={"25px"} />
            </Flex>
          </Flex>
        </Box>
        <Divider
          orientation="horizontal"
          borderColor={"lightgrey"}
          w={"full"}
          bg={"#A0AEC0"}
          borderWidth={"0.5px"}
        />
        <Box>
          <Flex px={"135px"}>
            <Image
              w="95px"
              h="60px"
              src="https://vrchennai.com/UploadFile/Storeimage/Lifestyle-big.png"
            ></Image>
            <Text color={"a0939f"} fontSize={13} mt={"19px"} ml={30}>
              &copy; 2022 RNA Intellectual Property Limited. Terms & Conditions
              - Privacy Policy
            </Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
