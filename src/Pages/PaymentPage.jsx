import React from "react";
import Footer from "../images/Footer.png";
import {
  Input,
  Image,
  Box,
  Text,
  Grid,
  Button,
  Flex,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Home from "./Home";

const PaymentPage = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  return isVisible ? (
    <>
      <Link to={"/"}>
        <Alert
          status="success"
          padding={"100px"}
          color={"black"}
          height="1000px"
          alignItems={""}
        >
          <AlertIcon />
          <Box>
            <AlertTitle marginBottom={"50px"}>Success!</AlertTitle>
            <AlertDescription>
              Your order has been received. We will deliver your order within
              the next 24 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      </Link>
    </>
  ) : (
    <>
      <Box
        style={{ backgroundColor: "white", color: "black" }}
        textAlign={"left"}
      >
        <Flex
          alignItems={"center"}
          margin={"50px"}
          marginBottom={"0px"}
          gap={"10px"}
        >
          <Text fontWeight={"semibold"}>
            {" "}
            Login to see your existing offers{" "}
          </Text>
          <Link to={"/login"}>
            <Button colorScheme="blue">Login</Button>
          </Link>
        </Flex>
      </Box>
      <div>
        <h5>Delivery Address All fields are mandatory</h5>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          color={"black"}
          padding={"25px"}
          marginBottom={"40px"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
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
              required={"true"}
            />
          </Box>
        </Grid>
        <Flex
          color={"black"}
          padding={"25px"}
          paddingTop={"0px"}
          marginBottom={"100px"}
        >
          <Box
            border={"1px"}
            borderColor={"gray"}
            borderRight={"none"}
            padding={"15px"}
          >
            <Text fontWeight={"semibold"}>Credit / Debit Card</Text>
          </Box>
          <Flex
            textAlign={"left"}
            gap={"10px"}
            flexDirection={"column"}
            border={"1px"}
            borderColor={"gray"}
            padding={"15px"}
          >
            <Text fontWeight={"semibold"}>
              Enter Credit / Debit card details
            </Text>
            <Text>Card Number</Text>
            <Input
              type={"number"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={"true"}
            />
            <Text>Expiry</Text>
            <Input
              type={"number"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={"true"}
            />
            <Text>CVV</Text>
            <Input
              type={"number"}
              height="30px"
              border="1px"
              borderRadius="5px"
              borderColor="gray"
              padding="10px"
              required={"true"}
            />
            <Button colorScheme="blue" onClick={onOpen}>
              PROCEED TO PAY
            </Button>
          </Flex>
        </Flex>
        <Box>
          <Image src={Footer} />
        </Box>
      </div>
    </>
  );
};

export default PaymentPage;
