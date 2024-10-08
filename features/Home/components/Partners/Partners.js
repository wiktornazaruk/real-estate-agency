import { Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./partnersConsts";

const Partners = () => {
  return (
    <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px">
      {partners.map((partner) => (
        <Image
          key={partner}
          src={partner}
          alignSelf="center"
          padding={{ base: "2rem", sm: "3rem" }}
          filter="garyscale(1)"
          opacity="0.4"
        />
      ))}
    </SimpleGrid>
  );
};

export default Partners;
