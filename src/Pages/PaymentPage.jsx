import React from "react";
import {
  Flex,
  Input,
  Button,
  Image,
  HStack,
  Center,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Portal,
  DrawerFooter,
  Grid,
} from "@chakra-ui/react";

const PaymentPage = () => {
  return (
    <>
      <Box style={{ backgroundColor: "white", color: "black" }}>
        <h5> Login to see your existing offers </h5>
        <button>Login</button>
      </Box>
      <div>
        <h5>Delivery Address All fields are mandatory</h5>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          color={"black"}
          padding={"25px"}
          marginBottom={"100px"}
        >
          <Box textAlign={"left"}>
            <Text>First Name*</Text>
            <Input
              type={"text"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>Last Name*</Text>
            <Input
              type={"text"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>Email ID*</Text>
            <Input
              type={"email"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>Phone Number*</Text>
            <Input
              type={"number"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>PIN Code*</Text>
            <Input
              type={"number"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>City*</Text>
            <Input
              type={"text"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>State*</Text>
            <Input
              type={"text"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
          <Box textAlign={"left"}>
            <Text>Address*</Text>
            <Input
              type={"text"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={true}
            />
          </Box>
        </Grid>
      </div>
    </>
  );
};

export default PaymentPage;
