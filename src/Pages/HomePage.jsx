import React from "react";
import Filters from "../Components/Filters";
import { Box, Flex } from "@chakra-ui/react";
import MusicRecords from "./MusicRecords";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <Box>
      <Flex>
        <Box minW="200px">
          <Filters />
        </Box>
        <Box>
          <MusicRecords />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
