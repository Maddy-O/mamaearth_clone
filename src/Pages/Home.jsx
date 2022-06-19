import React, { useEffect } from "react";
import { Flex, Text, Button, Image, Stack, Box } from "@chakra-ui/react";
import Footer from "../images/Footer.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Products/action";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "../components/ImageSlider";
import { SlideData } from "../images/SildeData";

const Home = () => {
  const products = useSelector((state) => state.productsReducer.products);
  //   console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ImageSlider slides={SlideData} />
      <Flex
        flexDirection={"column"}
        backgroundColor={"white"}
        color={"black"}
        width={"full"}
        margin={"auto"}
        paddingLeft={"100px"}
        paddingRight={"100px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Best Sellers
            </Text>
            <Text width={"300px"}>
              Explore best-selling safe, natural, and 100% toxin-free baby and
              beauty products from Mamaearth. Get amazing deals and start your
              toxin-free skin, hair, and baby care journey.
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Onion Range
            </Text>
            <Text width={"300px"}>
              Explore 100% toxin-free and safe Onion Range for Hair Fall,
              formulated with the goodness of natural ingredients and no harmful
              chemicals.
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Vitamin C Range
            </Text>
            <Text width={"300px"}>
              Explore 100% toxin-free and safe Vitamin C Range for Glowing and
              Radiant Skin, formulated with the goodness of natural ingredients
              and no harmful chemicals
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              New Launches
            </Text>
            <Text width={"300px"}>
              Explore the goodness of nature from Mamaearth. Take a look at our
              newly launched toxin-free and natural products for hair, skin, and
              babies
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Summer Favorites
            </Text>
            <Text width={"300px"}>
              Explore the goodness of nature from Mamaearth. Take a look at our
              toxin-free and natural products for hair, skin, and babies
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Colorcare
            </Text>
            <Text width={"300px"}>
              Color with care with our all-new colorcare range that’s 100%
              toxin-free and formulated with the goodness of natural
              ingredients. Check out our newly launched products & bring home
              your new favorites.
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Skin Care
            </Text>
            <Text width={"300px"}>
              Explore 100% toxin-free and safe skincare products by Mamaearth
              that are formulated with love and the goodness of natural
              ingredients
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Hair Care
            </Text>
            <Text width={"300px"}>
              Explore 100% toxin-free and safe hair care products by Mamaearth.
              Whether it’s hair fall, dandruff, frizzy hair, or anything else –
              Mamaearth has a product for you. Get closer to the goodness of
              nature with our range of hair care products made with natural
              ingredients.
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} gap={"25px"} width={"25%"}>
            <Text fontWeight={"bold"} fontSize={"18.75px"}>
              Baby Care
            </Text>
            <Text width={"300px"}>
              Your little bundle of joy deserves nothing but the best. Explore
              MadeSafe Certified, natural, 100% toxin-free & gentle baby care
              products by Mamaearth. Give your little one the care they deserve!
            </Text>
            <Link to={"/allproducts"}>
              <Button
                border={"1px"}
                borderColor={"#00afef"}
                backgroundColor={"#00afef"}
                color={"white"}
              >
                VIEW ALL
              </Button>
            </Link>
          </Stack>
          <Carousel
            infiniteLoop
            showThumbs={false}
            overflow={"hidden"}
            width={"75%"}
          >
            <Flex gap={10} margin={"10px"} overflow={"hidden"}>
              {products.map((e) => (
                <ProductCard key={e.id} product={e} />
              ))}
            </Flex>
          </Carousel>
        </Flex>
        <Box>
          <Image src={Footer} />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
