import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../Redux/Products/action";
import productResults from "../images/productResults.png";
import productpage from "../images/productpage.png";
import {
  Image,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentProduct = useSelector(
    (state) => state.productsReducer.currentProduct
  );
  //   console.log(currentProduct);

  useEffect(() => {
    if (id && Object.keys(currentProduct).length === 0) {
      dispatch(fetchSingleProduct(id));
    }
  }, [currentProduct]);

  return (
    <div style={{ color: "black", margin: "25px", backgroundColor: "white" }}>
      <Flex margin={"75px"} gap={"50px"}>
        <div>
          <Image
            src={`${currentProduct.imgUrl}`}
            border="1px"
            borderColor={"gray"}
            borderRadius={"15px"}
            width={"400px"}
          />
        </div>
        <div
          style={{
            marginLeft: "10px",
            textAlign: "left",
          }}
        >
          <Breadcrumb marginBottom={"10px"}>
            <BreadcrumbItem>
              <Link to="/" style={{ fontSize: "12px", color: "#00afef" }}>
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                to="/allproducts"
                style={{ fontSize: "12px", color: "#00afef" }}
              >
                Docs
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                to={`/allproducts/${currentProduct.id}`}
                style={{ fontSize: "12px" }}
              >
                {currentProduct.name}
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading fontSize={"25px"} marginBottom={"15px"}>
            {currentProduct.name}
          </Heading>
          <Text marginBottom={"15px"}>{currentProduct.title}</Text>
          <Text marginBottom={"0px"} fontWeight={"bold"} color={"#819d5b"}>
            Price
          </Text>
          <Text marginBottom={"0px"} fontWeight={"bold"}>
            ₹ {currentProduct.price}
          </Text>
          <Text color={"gray"}>Inclusive of all Taxes</Text>
          <Text color={"red"} marginBottom={"25px"}>
            Currently in 117 cart
          </Text>
          <Image src={productpage} />
          <Button
            width={"45%"}
            border={"1px"}
            borderColor={"#00afef"}
            backgroundColor={"#00afef"}
            color={"white"}
          >
            ADD TO CART
          </Button>
        </div>
      </Flex>
      <Image src={productResults} width={"200%"} marginTop={"50px"} />
    </div>
  );
};

export default Product;
