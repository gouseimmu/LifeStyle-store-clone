import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  Image,
  MenuList,
  MenuItem,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  FaRegHeart,
  FaSearch,
  FaShippingFast,
  FaShoppingBag,
  FaStore,
} from "react-icons/fa";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenWomen,
    onOpen: onOpenWomen,
    onClose: onCloseWomen,
  } = useDisclosure();

  const {
    isOpen: isOpenMen,
    onOpen: onOpenMen,
    onClose: onCloseMen,
  } = useDisclosure();

  const {
    isOpen: isOpenKid,
    onOpen: onOpenKid,
    onClose: onCloseKid,
  } = useDisclosure();

  const {
    isOpen: isOpenShoesBag,
    onOpen: onOpenShoesBag,
    onClose: onCloseShoesBag,
  } = useDisclosure();

  const {
    isOpen: isOpenBeauty,
    onOpen: onOpenBeauty,
    onClose: onCloseBeauty,
  } = useDisclosure();

  const {
    isOpen: isOpenMore,
    onOpen: onOpenMore,
    onClose: onCloseMore,
  } = useDisclosure();

  return (
    <Box>
      <Flex
        px="10%"
        color={"white"}
        bg="blackAlpha.800"
        fontFamily={"sans-serif"}
      >
        <Button
          leftIcon={<FaShippingFast />}
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Free Shiping
        </Button>
        <Button
          leftIcon={<FaStore />}
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Click & Collect
        </Button>
        <Button
          leftIcon={<FaStore />}
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Return to Store
        </Button>
        <Spacer />
        <Button
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Download Our App
        </Button>
        <Button
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Store Location
        </Button>
        <Button
          variant="ghost"
          _hover="none"
          fontSize={"14px"}
          fontWeight="120px"
        >
          Help
        </Button>
      </Flex>
      <Flex px={"10%"}>
        <Flex >
          <Image
            w={60}
            
            src="https://vrchennai.com/UploadFile/Storeimage/Lifestyle-big.png"
          ></Image>
        </Flex>
        <Flex  w={"100%"} gap={"30px"} pl="30px"  >
          <Menu isOpen={isOpenWomen}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              _hover={{ color: '#FAA619' }}
              aria-label="Courses"
              onMouseEnter={onOpenWomen}
              onMouseLeave={onCloseWomen}
            >
              Women
            </MenuButton>
            <MenuList onMouseEnter={onOpenWomen} onMouseLeave={onCloseWomen}>
              <MenuItem>Ethnic & Fusion Wear</MenuItem>
              <MenuItem>Western Wear</MenuItem>
              <MenuItem>Lingerie/Sleepwear</MenuItem>
              <MenuItem>SportsWear</MenuItem>
              <MenuItem>Top Brands</MenuItem>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenMen}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              aria-label="Courses"
              _hover={{ color: '#FAA619' }}
              onMouseEnter={onOpenMen}
              onMouseLeave={onCloseMen}
            >
              Men
            </MenuButton>
            <MenuList onMouseEnter={onOpenMen} onMouseLeave={onCloseMen}>
              <MenuItem>Topwear</MenuItem>
              <MenuItem>Bottomwear</MenuItem>
              <MenuItem>Activepwear</MenuItem>
              <MenuItem>WinterWear</MenuItem>
              <MenuItem>Top Brands</MenuItem>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenKid}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              _hover={{ color: '#FAA619' }}
              aria-label="Courses"
              onMouseEnter={onOpenKid}
              onMouseLeave={onCloseKid}
            >
              Kid
            </MenuButton>
            <MenuList onMouseEnter={onOpenKid} onMouseLeave={onCloseKid}>
              <MenuItem>Boys</MenuItem>
              <MenuItem>Girls</MenuItem>
              <MenuItem>Top Brands</MenuItem>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenShoesBag}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              _hover={{ color: '#FAA619' }}
              aria-label="Courses"
              onMouseEnter={onOpenShoesBag}
              onMouseLeave={onCloseShoesBag}
            >
              ShoesBag
            </MenuButton>
            <MenuList
              onMouseEnter={onOpenShoesBag}
              onMouseLeave={onCloseShoesBag}
            >
              <MenuItem>Women</MenuItem>
              <MenuItem>Men</MenuItem>
              <MenuItem>Women Top Brands</MenuItem>
              <MenuItem>Men Top Brands</MenuItem>
              <MenuItem>Boys</MenuItem>
              <MenuItem>Girls</MenuItem>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenBeauty}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              _hover={{ color: '#FAA619' }}
              aria-label="Courses"
              onMouseEnter={onOpenBeauty}
              onMouseLeave={onCloseBeauty}
            >
              Beauty
            </MenuButton>
            <MenuList onMouseEnter={onOpenBeauty} onMouseLeave={onCloseBeauty}>
              <MenuItem>Lips</MenuItem>
              <MenuItem>Western WearFace</MenuItem>
              <MenuItem>Eyes</MenuItem>
              <MenuItem>Skin Care</MenuItem>
              <MenuItem>Fragrances</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex mt="10px">
        <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              variant="filled"
              placeholder="What are you looking for?"
              w={350}
            />
          </InputGroup>
        </Flex>
          
        
        <Flex w="80%" alignItems={"center"} justifyContent={"space-around"}>
          <Menu isOpen={isOpenMore}>
            <MenuButton
              transition="all 0.2s"
              fontWeight={"500"}
              fontSize={"14px"}
              _hover={{ color: '#FAA619' }}
              aria-label="Courses"
              onMouseEnter={onOpenMore}
              onMouseLeave={onCloseMore}
            >
              More
            </MenuButton>
            <MenuList onMouseEnter={onOpenMore} onMouseLeave={onCloseMore}>
              <MenuItem>Download Add</MenuItem>
              <MenuItem>Online Gift Card</MenuItem>
              <MenuItem>Online Offers</MenuItem>
              <MenuItem>Store Locator</MenuItem>
              <MenuItem>Store Details</MenuItem>
              <MenuItem>Shop on Whatsapp</MenuItem>
              <MenuItem>Blogs</MenuItem>
              <MenuItem>SBI Offers</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="ghost">Sign Up / Sign In</Button>
          <Flex _hover={{ cursor: 'Pointer' }}><FaRegHeart  /></Flex>
          <Flex _hover={{ cursor: 'Pointer' }}><FaShoppingBag /></Flex>
          
          
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;