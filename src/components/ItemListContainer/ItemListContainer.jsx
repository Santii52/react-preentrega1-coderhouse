import { Box } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    return <Box height={'90vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}> { greeting } </Box>
    
};

export default ItemListContainer;

