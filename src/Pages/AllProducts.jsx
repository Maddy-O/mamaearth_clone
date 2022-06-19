import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabList,
  Tab,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Products/action";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const products = useSelector((state) => state.productsReducer.products);
    // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box backgroundColor={"white"} color={"black"}>
      <Breadcrumb marginRight={"100%"} width={"100px"}>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/allproducts">Docs</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Tabs variant="unstyled" color={"gray"}>
          <TabList>
            <Tab
              _selected={{ color: "white", bg: "gray" }}
              margin="0px"
              width={"50px"}
              height={"25px"}
              border={"1px"}
              borderColor={"gray"}
              borderRadius={"5px"}
            >
              ALL
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "gray" }}
              width={"50px"}
              height={"25px"}
              border={"1px"}
              borderColor={"gray"}
              borderRadius={"5px"}
            >
              HAIR
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "gray" }}
              width={"50px"}
              height={"25px"}
              border={"1px"}
              borderColor={"gray"}
              borderRadius={"5px"}
            >
              FACE
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "gray" }}
              width={"50px"}
              height={"25px"}
              border={"1px"}
              borderColor={"gray"}
              borderRadius={"5px"}
            >
              BODY
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "gray" }}
              width={"50px"}
              height={"25px"}
              border={"1px"}
              borderColor={"gray"}
              borderRadius={"5px"}
            >
              BABY
            </Tab>
          </TabList>
        </Tabs>
        <Select
          placeholder="Sort By"
          width={"300px"}
          borderColor={"gray"}
          backgroundColor={"white"}
        >
          <option value="option1">Rating</option>
          <option value="option2">Price - High to Low</option>
          <option value="option3">Price - Low to High</option>
        </Select>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} margin={"10px"}>
        {products.length &&
          products.map((e) => <ProductCard key={e.id} product={e} />)}
      </Grid>
    </Box>
  );
};

export default AllProducts;
