import { Box, Image, Text } from "@chakra-ui/react";

const AgentCard = ({ name, image, description, title }) => {
  return (
    <Box
      backgroundColor="blackAlpha.50"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Image
        src={image}
        width="10rem"
        height="10rem"
        objectFit="cover"
        borderRadius="full"
        marginBottom="2rem"
        shadow="md"
      />
      <Text color="blackAlpha.700" fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="lg" color="blackAlpha.600">
        {title}
      </Text>
      <Text
        fontSize="md"
        fontWeight="light"
        noOfLines="4"
        marginTop="1rem"
        color="blackAlpha.500"
      >
        {description}
      </Text>
    </Box>
  );
};

export default AgentCard;
