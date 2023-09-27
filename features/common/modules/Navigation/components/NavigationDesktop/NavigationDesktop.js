import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GiHouse } from "react-icons/gi";
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
  return (
    <Box
      color="blackAlpha.900"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box
              display="flex"
              gap="2"
              // alignItems="center"
              justifyContent="center"
            >
              <GiHouse size="29" />
              <Text fontSize="2xl" fontWeight="black">
                REAL ESTATE AGENCY
              </Text>
            </Box>
          </Link>
          <Flex gap="12" alignItems="center" fontWeight="medium">
            {navigationLinks.map((link) => (
              <NavigationLinks key={link.title} {...link} />
            ))}
            {/* <Button
              padding="1.5rem"
              colorScheme="blackAlpha"
              fontSize="0.8rem"
              fontWeight="medium"
              color="white"
            >
              CREATE LISTING
            </Button> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLinks = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
