import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import RepositoryCard from "./RepositoryCard";

function RepositoryList({ data, filter, isLoading }) {
  function sortArrayByCriteria(array, sortBy) {
    return array.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }

  if (isLoading) {
    return (
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size={"lg"} />
      </Flex>
    );
  }

  if (data?.length == 0) {
    return (
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={"semibold"}
      >
        No results found, please try again with a different name
      </Flex>
    );
  }

  if (data) {
    return (
      <Flex direction={"column"} gap={"20px"}>
        {sortArrayByCriteria(data, filter)?.map((repo) => {
          return <RepositoryCard key={repo.id} repo={repo} />;
        })}
      </Flex>
    );
  }

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={"semibold"}
    >
      Search for repositories by entering name in input
    </Flex>
  );
}

export default RepositoryList;
