import { Box } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      minHeight={{ base: "110vh", sm: "60vh" }}
      backgroundImage={`url("./hero/wp.jpg")`}
      backgroundPosition="bottom"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    ></Box>
  );
};

export default HeroBanner;
