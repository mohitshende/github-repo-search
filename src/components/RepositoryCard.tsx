import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function RepositoryCard({ repo }) {
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
      border={".5px solid grey"}
      padding={"20px"}
      borderRadius={"8px"}
      gap={"20px"}
      _hover={{ shadow: "lg" }}
    >
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          src={repo.owner.avatar_url}
          height={"50px"}
          width={"50px"}
          borderRadius={"50%"}
        />
        <Text fontWeight={"bold"}>{repo.name}</Text>
        <Text>⭐️ {repo.stargazers_count}</Text>
      </Flex>

      <Flex
        width={"100%"}
        direction={"column"}
        gap={"20px"}
        alignItems={"center"}
      >
        <Text textAlign={"center"}>{repo.description}</Text>
        <Text fontWeight={"semibold"}>{repo.language}</Text>
      </Flex>
    </Flex>
  );
}

export default RepositoryCard;
