import { Box, Divider, Grid, GridItem, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

function TopDeals() {
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
        Top Deals In
      </Heading>
      <Divider
        bg={"rgb(250, 166, 25)"}
        borderColor={"rgb(250, 166, 25)"}
        w={"60px"}
        mb={"20px"}
        borderWidth={"2px"}
      />
      <Box>
        <Tabs variant='solid-rounded' colorScheme='gray'>
            <TabList gap='20px'>
                <Tab>Women</Tab>
                <Tab>Men</Tab>
                <Tab>Kid</Tab>
                <Tab>Shoes & Bags</Tab>
                <Tab>Beauty</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Grid my='15px' templateColumns='repeat(2, 1fr)' gap='10px'>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        
                    </Grid>
                </TabPanel>
                <TabPanel>
                <Grid my='15px' templateColumns='repeat(2, 1fr)' gap='10px'>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner4-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                    </Grid>
                </TabPanel>
                <TabPanel>
                <Grid my='15px' templateColumns='repeat(2, 1fr)' gap='10px'>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                    </Grid>
                </TabPanel>
                <TabPanel>
                <Grid my='15px' templateColumns='repeat(2, 1fr)' gap='10px'>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner3-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner4-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid my='15px' templateColumns='repeat(2, 1fr)' gap='10px'>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner2-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner3-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                        <GridItem>
                            <Image src={'https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner4-14Dec22.jpg'} m={'auto'}/>
                        </GridItem>
                    </Grid>
                </TabPanel>
            </TabPanels>
        </Tabs>
      </Box>
    </div>
  )
}

export default TopDeals