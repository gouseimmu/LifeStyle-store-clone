import {
  Image,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  AspectRatio,
  Stack,
  Modal,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Select,
  Checkbox,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleClick = () => {
    alert("Order Placed Successfully");
    onClose();
    navigate("/");
  };
  return (
    <div>
       <Box w={'full'} position={'fixed'} zIndex={'10'}>
        <Navbar />
        </Box> 
      <Container mb={"370px"} pt={"100px"} maxW="8xl" bg="white.600">
        <Flex>
          <Box p="4">
            <Image
              boxSize="35px"
              width={"100%"}
              objectFit="cover"
              src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg"
              alt="Lifestyle Stores Logo"
            />
          </Box>
          <Spacer />
          <Box p="4">
            {/* Conatct */}
            <Text fontSize={"14px"}>Call 1800-123-1555</Text>

            <Text fontSize={"12px"}>Monday - Saturday, 09:00AM - 07:00PM</Text>
          </Box>
        </Flex>

        <Divider orientation="horizontal" />

        <Box p={4}>
          <Text textAlign={"left"} fontSize={"24px"}>
            Select a shipping method
          </Text>
        </Box>
        <Box>
          <Flex gap={"400px"}>
            <Box w="50%" h="10" bg="white.500">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>
                    <Text>
                      Home Delivery
                      <p>Get your product deliverd to your home</p>
                    </Text>
                  </Tab>
                  <Tab>
                    <Text>
                      Click & Collect
                      <p>Collect your order from a store of your choice</p>
                    </Text>
                  </Tab>
                </TabList>
                <TabPanels>
                  {/* Home Delivery */}
                  <TabPanel>
                    {/* <p>Add new address</p> */}
                    <HStack spacing="24px">

                      {/* <Box w="50%" h="10" bg="white.500" textAlign={"right"}>
                        <ModalForm />
                      </Box> */}
                    </HStack>
                  </TabPanel>

                  {/* Pick from nearby store */}
                  <TabPanel>
                    <p>Click & Collect</p>

                    <AspectRatio ratio={10 / 3}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
                    </AspectRatio>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box p={"5px"} w={"50%"}>
              <Flex border={"1px solid grey"} p={"10px"} alignItems={"center"}>
                <Image
                  w={"93px"}
                  h={"85px"}
                  src={
                    "https://www.lifestylestores.com/static/icons/gift-box.png"
                  }
                />
                <Text ml={"40px"} fontSize="3xl">
                  Order Summery
                </Text>
              </Flex>
              <Box
                mt={"10px"}
                py={"40px"}
                border={"1px solid grey"}
                px={"10px"}
              >
                <Flex>
                  <Text>Total MRP</Text>
                  <Spacer />
                  <Text>$199</Text>
                </Flex>
                <Flex>
                  <Text>shipping Charge</Text>
                  <Spacer />
                  <Text>00</Text>
                </Flex>
              </Box>
              <Button
                onClick={onOpen}
                mt={"20px"}
                color={"white"}
                bgColor={"rgb(250, 166, 25)"}
                w={"full"}
              >
                Checkout Now
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={"xl"}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add a new Address</ModalHeader>

                  <ModalCloseButton />

                  <ModalBody pb={6}>
                    {/* Full Name */}
                    <FormControl>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder="Enter your full name"
                      />
                    </FormControl>

                    {/* Mobile Number */}
                    <FormControl mt={4}>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input placeholder="Enter your mobile number" />
                    </FormControl>

                    {/* Pincode */}
                    <FormControl mt={4}>
                      <FormLabel>Pincode</FormLabel>
                      <Input placeholder="Enter your Pincode" />
                    </FormControl>

                    {/* City */}
                    <FormControl mt={4}>
                      <FormLabel>City</FormLabel>
                      <Input placeholder="Enter your City or Town" />
                    </FormControl>

                    {/* State */}
                    <FormControl mt={4}>
                      <FormLabel>State</FormLabel>
                      <Select placeholder="Select your State">
                        <option value="option1">Andhra Pradesh</option>
                        <option value="option2">Mumbai</option>
                        <option value="option3">Karnataka</option>
                      </Select>
                    </FormControl>

                    {/* Building name */}
                    <FormControl mt={4}>
                      <FormLabel>Building name or number</FormLabel>
                      <Input placeholder="Enter Building Name" />
                    </FormControl>

                    {/* Strret name */}
                    <FormControl mt={4}>
                      <FormLabel>Street name or number</FormLabel>
                      <Input placeholder="Flat/House number, Floor, Building" />
                    </FormControl>

                    {/* Landmark */}
                    <FormControl mt={4}>
                      <FormLabel>Landmark</FormLabel>
                      <Input placeholder="Landmark" />
                    </FormControl>

                    {/* Address Type */}
                    <FormControl mt={4}>
                      <FormLabel>Address Type</FormLabel>
                      {/* <Input placeholder='Landmark' /> */}
                      <RadioGroup defaultValue="0">
                        <Stack spacing={5} direction="row">
                          <Radio colorScheme="orange" value="1">
                            Home
                          </Radio>
                          <Radio colorScheme="orange" value="2">
                            Office
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    {/* Default Address */}
                    <FormControl mt={4}>
                      {/* <FormLabel>Landmark</FormLabel> */}
                      {/* <Input placeholder='Landmark' /> */}
                      <Checkbox colorScheme="orange">
                        Use this as my default shipping address
                      </Checkbox>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={handleClick}
                      colorScheme="orange"
                      mr={3}
                      width={"100%"}
                    >
                      Ship to this Address
                    </Button>
                    {/* <Button onClick={onClose}>Cancel</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Footer/>
    </div>
  );
};

export default Checkout;
