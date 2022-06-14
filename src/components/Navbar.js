import { Flex, Text, Tag } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      bgColor="gray.400"
      p="20px 60px"
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      align="center"
      justify="space-between"
    >
      <Text fontSize="2xl" fontWeight="900" cursor="pointer" w="150px">
        <Link to="/">Robin Store</Link>
      </Text>
      <Flex gridGap="25px">
        <Text cursor="pointer">Home</Text>
        <Text cursor="pointer">Contact</Text>
        <Flex align="center" cursor="pointer">
          <FaShoppingCart fontSize="18px" />
          <Tag
            size="sm"
            mt="-22px"
            ml="-4px"
            variant="solid"
            colorScheme="teal"
            borderRadius="100%"
          >
            1
          </Tag>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
