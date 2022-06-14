import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <Flex
      mt="90px"
      mx="100px"
      wrap="wrap"
      align="center"
      justify="center"
      gridGap="20px"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Flex>
  );
};

export default Home;
