import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { usePropertyFormat } from "../../Hooks/usePropertyFormat";
import { TbBed, TbBath, TbRuler } from "react-icons/tb";
import Link from "next/link";

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);
  const toThePowerOfTwo = "²";
  return (
    <Box marginBottom="4rem" backgroundColor="white">
      <Link href={`/properties/${externalID}`}>
        <Box
          backgroundImage={`url("${coverPhoto}")`}
          height="250px"
          backgroundPosition="center center"
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box margin="1rem">
            <Badge colorScheme="green">{purpose}</Badge>
          </Box>
          <Box
            height="50%"
            bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
            display="flex"
            alignItems="flex-end"
            padding="1rem"
          >
            <Text fontSize="3xl" fontWeight="medium" color="whiteAlpha.800">
              {price}
            </Text>
          </Box>
        </Box>
        <Box padding="1.5rem">
          <Text fontSize="xl" fontWeight="medium" marginBottom="1rem">
            {propertyType}
          </Text>
          <Text fontWeight="light" fontSize="sm" isTruncated>
            {address}
          </Text>
          <Text isTruncated>{title}</Text>
          <HStack marginTop="1rem" spacing="1.3rem">
            <Flex alignItems="center" gap="0.3rem">
              <TbBed />
              {rooms}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <TbBath />
              {baths}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <TbRuler />
              {sqSize}m{toThePowerOfTwo}
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default PropertyCard;
