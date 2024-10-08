import { Box } from "@chakra-ui/react";

const PropertyMatterPortEmbed = ({ panorama }) => {
  //   console.log(panorama);
  //   return;
  const ratio = (315 / 560) * 100;
  return (
    <Box
      paddingTop={`${ratio}%`}
      position="relative"
      height="0"
      overflow="hidden"
      frameBorder="0"
    >
      <iframe
        style={{ position: "absolute", top: 0, bottom: 0 }}
        width="100%"
        height="100%"
        src={`${panorama}`}
      ></iframe>
    </Box>
  );
};

export default PropertyMatterPortEmbed;
