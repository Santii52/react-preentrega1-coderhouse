import { Flex, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <Flex alignItems="center" justifyContent={'space-between'} width={'50px'}>
      <FaCartShopping size={25} />
      <Text>0</Text>
    </Flex>
  );
};

export default CartWidget;
