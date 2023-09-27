"use client";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { GiHouse } from "react-icons/gi";
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMobile = () => {
  return (
    <Box
      color="blackAlpha.900"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationLinks.map((link) => (
              <NavigationLinks key={link.title} {...link} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLinks = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
