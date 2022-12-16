import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react";

export const ModalForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Add a new Address</Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={'xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new Address</ModalHeader>

            <ModalCloseButton />

            <ModalBody pb={6}>
                {/* Full Name */}
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input ref={initialRef} placeholder='Enter your full name' />
                </FormControl>

                {/* Mobile Number */}
                <FormControl mt={4}>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input placeholder='Enter your mobile number' />
                </FormControl>

                {/* Pincode */}
                <FormControl mt={4}>
                    <FormLabel>Pincode</FormLabel>
                    <Input placeholder='Enter your Pincode' />
                </FormControl>

                {/* City */}
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='Enter your City or Town' />
                </FormControl>

                {/* State */}
                <FormControl mt={4}>
                    <FormLabel>State</FormLabel>
                    <Select placeholder='Select your State'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>

                {/* Building name */}
                <FormControl mt={4}>
                    <FormLabel>Building name or number</FormLabel>
                    <Input placeholder='Enter Building Name' />
                </FormControl>

                {/* Strret name */}
                <FormControl mt={4}>
                    <FormLabel>Street name or number</FormLabel>
                    <Input placeholder='Flat/House number, Floor, Building' />
                </FormControl>

                {/* Landmark */}
                <FormControl mt={4}>
                    <FormLabel>Landmark</FormLabel>
                    <Input placeholder='Landmark' />
                </FormControl>

                {/* Address Type */}
                <FormControl mt={4}>
                    <FormLabel>Address Type</FormLabel>
                    {/* <Input placeholder='Landmark' /> */}
                    <RadioGroup defaultValue='0'>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='orange' value='1'>
                            Radio
                            </Radio>
                            <Radio colorScheme='orange' value='2'>
                            Radio
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                {/* Default Address */}
                <FormControl mt={4}>
                    {/* <FormLabel>Landmark</FormLabel> */}
                    {/* <Input placeholder='Landmark' /> */}
                    <Checkbox colorScheme='orange'>Use this as my default shipping address</Checkbox>
                </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='orange' mr={3} width={'100%'}>
                Ship to this Address
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    )
  }