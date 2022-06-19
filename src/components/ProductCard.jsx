import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCartProduct } from "../Redux/Cart/cart.action";

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cartReducer.cartItems);
  // console.log(cart);
  const dispatch = useDispatch();

  const onClickAddCart = () => {
    dispatch(addCart(product));
  };
  // console.log(product.id);
  return (
    <>
      <Box
        maxW={"445px"}
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        backgroundColor={"white"}
        color={"black"}
        cursor={"pointer"}
      >
        <Link to={`/allproducts/${product.id}`}>
          <Image src={`${product.imgUrl}`} />
          <Stack alignItems={"center"}>
            <Text>{product.name}</Text>
            <Text fontWeight={"bold"} color={"#819d5b"}>
              {product.title}
            </Text>
            <Flex color={"black"} gap={"5px"} alignItems={"center"}>
              <StarIcon color={"#ffc300"} alignContent={"center"} />
              <Text>{product.rating}</Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              ₹ {product.price}
            </Text>
          </Stack>
        </Link>
        <Button
          width={"100%"}
          border={"1px"}
          borderColor={"#00afef"}
          borderTopRadius={"0px"}
          backgroundColor={"#00afef"}
          color={"white"}
          onClick={onClickAddCart}
        >
          ADD TO CART
        </Button>
      </Box>
    </>
  );
};

export default ProductCard;
