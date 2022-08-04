import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex align="center" justify="space-evenly" p="1rem" mb="0.5rem">
      <Box>
        <Heading>MusicRecords</Heading>
      </Box>
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/login">Login</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
