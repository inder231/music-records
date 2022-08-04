import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Checkbox, VStack, Heading, Text, Box } from "@chakra-ui/react";
const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initGenreParams = searchParams.getAll("genre");
  const initSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initGenreParams || []);
  const [sortBy, setSortBy] = useState(initSortParams || "");
  // console.log(initSortParams);
  const handleGenre = (e) => {
    const option = e.target.value;
    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option));
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    // console.log(sortBy);
    if (category || sortBy) {
      const params = {};
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy);
      // console.log(params);
      setSearchParams(params);
    }
  }, [category, sortBy, searchParams]);
  return (
    <Box ml="1rem">
      <Heading size="1xl">Filters</Heading>
      <VStack align>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("Pop")}
          value="Pop"
        >
          Pop
        </Checkbox>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("Holiday")}
          value="Holiday"
        >
          Holiday
        </Checkbox>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("Classical Crossover")}
          value="Classical Crossover"
        >
          Classical Crossover
        </Checkbox>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("Heavy Metal")}
          value="Heavy Metal"
        >
          Heavy Metal
        </Checkbox>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
        >
          K-Pop
        </Checkbox>
        <Checkbox
          onChange={handleGenre}
          size="md"
          colorScheme="orange"
          defaultChecked={category.includes("Country")}
          value="Country"
        >
          Country
        </Checkbox>
      </VStack>
      <Heading size="1xl">Sort By</Heading>
      <VStack align>
        <Text>
          <input
            type="radio"
            defaultChecked={sortBy === "asc"}
            name="sortBy"
            onChange={handleSort}
            value="asc"
          />
          Ascending
        </Text>

        <Text>
          <input
            type="radio"
            defaultChecked={sortBy === "desc"}
            name="sortBy"
            onChange={handleSort}
            value="desc"
          />
          Descending
        </Text>
      </VStack>
    </Box>
  );
};

export default Filters;
