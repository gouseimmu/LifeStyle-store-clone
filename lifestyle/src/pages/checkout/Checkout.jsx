import { Image, Box, Container, Divider, Flex, Grid, GridItem, HStack, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, AspectRatio, Stack, Modal, FormControl, FormLabel, RadioGroup, Radio } from '@chakra-ui/react';
import React from 'react';
import { ModalForm } from './ModalForm';

const Checkout = () => {
  return (
    <div>
        <Container maxW='8xl' bg='white.600'>
            {/* <Box padding='4' bg='blue.400' color='black' maxW='8xl'></Box> */}
           
            {/* Navbar */}
            <Flex>
                <Box p='4'>
                    {/* Lifestyle logo */}
                    <Image
                        boxSize='35px'
                        width={'100%'}
                        objectFit='cover'
                        src='https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg'
                        alt='Lifestyle Stores Logo'
                    />
                </Box>
                <Spacer />
                <Box p='4'>
                    {/* Conatct */}
                    <Text fontSize={'14px'}>Call 1800-123-1555</Text>

                    <Text fontSize={'12px'}>Monday - Saturday, 09:00AM - 07:00PM</Text>
                </Box>
            </Flex>

            <Divider orientation='horizontal' />


            <Box p={4}>
                <Text textAlign={'left'} fontSize={'24px'}>
                Select a shipping method
                </Text>
            </Box>
            {/* <Divider orientation='horizontal' /> */}

            {/* Shipping method */}
            {/* <Flex color='white'>
                
                <Box flex='1' bg='tomato'>
                    <Text>Box 1</Text>
                </Box>

                <Center w='100px' bg='green.500'>
                    <Text>Box 1</Text>
                </Center>
                <Square bg='blue.500' size='150px'>
                    <Text>Box 2</Text>
                </Square>
            </Flex> */}

            <Box>
                
                <HStack spacing='24px'>
                    {/* Shipping method */}
                    <Box w='60%' h='10' bg='white.500'>
                        {/* <Box w='100%' p={4} color='white'>
                            <Text textAlign={'left'} color={'black'}>
                                Shipping method
                            </Text>
                        </Box> */}
                        <Tabs isFitted variant='enclosed'>
                            <TabList mb='1em'>
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
                                <HStack spacing='24px'>
                                    <Box w='50%' h='10' bg='white.500' textAlign={'left'} fontSize={'18px'}>
                                        <Text>Select your shipping address</Text>
                                    </Box>

                                     {/* Select your shipping address */}
                                     <Box w='50%' h='10' bg='white.500' textAlign={'left'} fontSize={'18px'}><FormControl mt={4}>
                                        {/* <FormLabel>Address Type</FormLabel> */}
                                        {/* <Input placeholder='Landmark' /> */}
                                        <RadioGroup defaultValue='0'>
                                            <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='orange' value='1'>
                                                Radio
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </FormControl>

                                    </Box>
                                    
                                    <Box w='50%' h='10' bg='white.500' textAlign={'right'}>
                                        <ModalForm />
                                    </Box>
                                </HStack>
                                {/* <Box>
                                    <HStack spacing='24px'>
                                        <Box w='50%' h='10'>
                                            
                                        </Box>
                                        <Box w='50%' h='10' />
                                        
                                    </HStack>
                                </Box> */}
                                </TabPanel>

                                {/* Pick from nearby store */}
                                <TabPanel>
                                <p>Click & Collect</p>

                                <AspectRatio ratio={16 / 9}>
                                    <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                />
                                </AspectRatio>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>

                    {/* Order summary */}
                    <Box w='40%' h='10' bg='white.500'>
                        <Box boxShadow='md' p='6' rounded='md' bg='white'>
                           Order Summary
                        </Box>
                    </Box>
                </HStack>
            </Box>

            
        </Container>
        
        
        

    </div>
  )
}

export default Checkout;