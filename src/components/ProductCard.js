import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <Flex
      direction="column"
      w="280px"
      p="25px"
      border="3px solid #111"
      borderRadius="20px"
      justify="center"
      gridGap="10px"
    >
      <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Text fontWeight="500">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </Text>
      <Flex align="end" justify="space-between">
        <Flex direction="column">
          <Text>$ - 200</Text>
          <Box display="flex" mt="2" alignItems="center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <AiFillStar key={i} style={{ color: "gold" }} />
            ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              87 views
            </Box>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="md">
          <FaShoppingCart />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
