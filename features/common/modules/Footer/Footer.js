import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { services, about, workWithUs, ourOffices } from "./FooterConsts";
import Link from "next/link";
import { GiHouse } from "react-icons/gi";

const Footer = () => {
  return (
    <Box backgroundColor="white">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY="3rem"
        paddingX={{ base: "2rem", sm: "0" }}
      >
        <SimpleGrid
          column="4"
          color="gray.500"
          gap="1.7rem"
          minChildWidth="150px"
        >
          <Flex flexDirection="column">
            <FooterHeader title="Services" />
            {services.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="About" />
            {about.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Our Offices" />
            {ourOffices.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Work With Us" />
            {workWithUs.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor="#f7f8f9"
        display="flex"
        padding="2rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="black"
      >
        <Box display="flex" gap="2" alignItems="center">
          <GiHouse />
          <Text fontSize="lg" fontWeight="black">
            Urban Elegance Properties
          </Text>
        </Box>
        <Text marginTop="1rem" fontSize="xs" textAlign="center">
          All rights reserved - © Urban Elegance Properties
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link href={link}>{name}</Link>
    </Text>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1rem">
      {title}
    </Text>
  );
};
