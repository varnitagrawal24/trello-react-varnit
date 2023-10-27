import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ backButton }) {
  const nav = useNavigate();
  return (
    <Box
      as="nav"
      bg="blue.500"
      width="100%"
      height="4rem"
      position="sticky"
      top="0"
      zIndex={99}
      display="flex"
      alignItems="center"
      pl={10}
    >
      <IconButton
        border="2px solid white"
        colorScheme="blue"
        aria-label="Back"
        icon={<ArrowLeftIcon />}
        visibility={backButton? "hidden":"visible"}
        onClick={() => {
          nav(-1);
        }}
      />
      <Text
        color="white"
        fontSize="48px"
        fontFamily="cursive"
        flex={1}
        textAlign="center"
      >
        Trello
      </Text>
    </Box>
  );
}

export default Navbar;
