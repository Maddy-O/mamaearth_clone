import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      backgroundColor={"#d4424c"}
      paddingRight={"90px"}
      paddingLeft={"90px"}
      alignItems={"center"}
      fontSize={"12px"}
      paddingTop={"3px"}
      paddingBottom={"3px"}
    >
      <a href={"https://mamaearth.in/were-safe-2"}>
        <p>Asia's 1st Brand with MADE SAFE Certified Products</p>
      </a>
      <a href="https://mamaearth.in/awesome30">
        <p>
          Get 2 Aloe Vera Best Sellers FREE on Shop Above 599 | Use Coupon :-
          ALOE2B | Shop Now
        </p>
      </a>
      <Link to={"/"}>
        <FaRegUser cursor={"pointer"} />
      </Link>
    </Flex>
  );
};

export default Offers;
