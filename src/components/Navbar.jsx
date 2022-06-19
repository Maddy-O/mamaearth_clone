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
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { HamburgerIcon, Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import {
  FaShoppingCart,
  FaRegUser,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import logo from "../mamaearth-logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeCartProduct } from "../Redux/Cart/cart.action";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const cart = useSelector((state) => state.cartReducer.cartItems);
  // console.log(cart);
  const dispatch = useDispatch();

  const {
    isOpen: isOpenLeft,
    onOpen: onOpenLeft,
    onClose: onCloseLeft,
  } = useDisclosure();
  const {
    isOpen: isOpenRight,
    onOpen: onOpenRight,
    onClose: onCloseRight,
  } = useDisclosure();
  const btnRef = useRef();

  const handleOnClickCount = (e) => {
    if (count >= 0) {
      setCount(count + e);
    }
  };

  const handleRemoveFromCart = (e) => {
    dispatch(removeCartProduct(e));
  };

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch, onOpenRight]);

  return (
    <div>
      <div className="searchbar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <HamburgerIcon
            ref={btnRef}
            onClick={onOpenLeft}
            color={"#00afef"}
            cursor={"pointer"}
          />
          {/* //-------------------------------------------------------Left drawer */}
          <Drawer
            isOpen={isOpenLeft}
            placement="left"
            onClose={onCloseLeft}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
              <DrawerBody>
                <Box w={"100%"}>1</Box>
                <Box w={"100%"}>Save</Box>
                <Box w={"100%"}>Save</Box>
                <Box w={"100%"}>Save</Box>
                <Box w={"100%"}>Save</Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Link to="/" className="logoLink">
            <Image src={logo} className="logo" />
          </Link>
          <Flex alignItems={"center"}>
            <Input
              placeholder="Search for products..."
              className="searchInput"
              style={{
                width: "70%",
                height: "30px",
                border: "1px solid gray",
                borderRight: "none",
                borderRadius: "5px 0 0 5px",
                padding: "0px 10px",
              }}
            />
            <Button
              className="searchButton"
              style={{
                backgroundColor: "#00afef",
                padding: "0px 15px",
                width: "30%",
                height: "32px",
                border: "1px solid #00afef",
                borderRadius: "0 5px 5px 0",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
            >
              <Search2Icon marginRight={"5px"} />
              Search
            </Button>
          </Flex>
        </div>
        <Flex gap="50px" alignItems="center">
          <Flex
            style={{
              display: "flex",
              color: "#00afef",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
            ref={btnRef}
            onClick={onOpenRight}
          >
            <FaShoppingCart color={"#00afef"} cursor={"pointer"} />
            Cart
          </Flex>
          {/* ----------------------------------right drawer----------- */}
          <Drawer
            isOpen={isOpenRight}
            placement="right"
            onClose={onCloseRight}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent backgroundColor={"white"} color={"black"}>
              <DrawerCloseButton />
              <DrawerHeader>My Cart</DrawerHeader>
              <DrawerBody>
                {cart.map((e) => (
                  <Flex gap={"5px"} marginBottom={"10px"}>
                    <Image
                      src={e.imgUrl}
                      width={"95px"}
                      border={"1px"}
                      borderRadius={"15px"}
                      borderColor={"gray"}
                    />
                    <Flex flexDirection={"column"}>
                      <Text fontSize={"12px"} fontWeight={"semibold"}>
                        {" "}
                        {e.name}
                      </Text>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text fontWeight={"semibold"}>{e.price}</Text>
                        <Flex alignItems={"center"}>
                          <Button
                            border={"1px"}
                            borderColor={"gray"}
                            height={"25px"}
                            onClick={() => handleOnClickCount(-1)}
                          >
                            -
                          </Button>
                          <Text
                            border={"1px"}
                            borderColor={"gray"}
                            borderRadius={"5px"}
                            height={"25px"}
                            color={"black"}
                            width={"25px"}
                            textAlign={"center"}
                          >
                            {count}
                          </Text>
                          <Button
                            border={"1px"}
                            borderColor={"gray"}
                            height={"25px"}
                            onClick={() => handleOnClickCount(+1)}
                          >
                            +
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                    <SmallCloseIcon
                      onClick={() => handleRemoveFromCart(e.id)}
                    />
                  </Flex>
                ))}
              </DrawerBody>
              <DrawerFooter>
                <Link to="/payment">
                  <Button colorScheme="blue">Continue</Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Link
            to={"/"}
            style={{
              display: "flex",
              color: "#00afef",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <FaRegUser color={"#00afef"} cursor={"pointer"} />
            <Popover>
              <PopoverTrigger>
                <Button>Login</Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  backgroundColor={"white"}
                  color={"black"}
                  width={""}
                >
                  <PopoverArrow />
                  <PopoverBody>
                    <Flex
                      gap={"5px"}
                      alignItems={"center"}
                      borderBottom={"1px"}
                      borderBottomColor={"gray"}
                    >
                      <FaRegUser color={"#00afef"} cursor={"pointer"} />
                      <Text>Your Profile</Text>
                    </Flex>
                    <Flex
                      gap={"5px"}
                      alignItems={"center"}
                      borderBottom={"1px"}
                      borderBottomColor={"gray"}
                    >
                      <FaShoppingCart color={"#00afef"} cursor={"pointer"} />
                      <Text>Your Order</Text>
                    </Flex>
                    <Flex
                      gap={"5px"}
                      alignItems={"center"}
                      borderBottom={"1px"}
                      borderBottomColor={"gray"}
                    >
                      <FaMapMarkerAlt color={"#00afef"} />
                      <Text>Manage Address</Text>
                    </Flex>
                    <Flex
                      gap={"5px"}
                      alignItems={"center"}
                      borderBottom={"1px"}
                      borderBottomColor={"gray"}
                    >
                      <FaPhone color={"#00afef"} />
                      <Text>Contact Us</Text>
                    </Flex>
                  </PopoverBody>
                  <PopoverFooter>
                    <Button
                      backgroundColor="#00afef"
                      color={"white"}
                      width={"full"}
                    >
                      Login
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </Link>
        </Flex>
      </div>
      <hr style={{ margin: "0px" }}></hr>
      <Flex className="navbar">
        <HStack gap={"25"} marginTop={"-0.5"}>
          <Link to="/">HOME</Link>
          <Center>BABY</Center>
          <Center>BEAUTY</Center>
          <Center>HAIR</Center>
          <Center>FACE</Center>
          <Center>BODY</Center>
          <Center>GIFT PACKS</Center>
          <Link to="/allproducts">ALL PRODUCTS</Link>
          <Center>BLOG</Center>
          <Center>PLANT GOODNESS</Center>
          <Center>STORE LOCATOR</Center>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;
