import React from "react";
import "./App.css";
import useGetRepos from "./hooks/useGetRepos";
import { Flex, Input, Select } from "@chakra-ui/react";
import RepositoryList from "./components/RepositoryList";

function App() {
  const { data, isLoading, filters, setFilters } = useGetRepos();

  const sortByOptions = [
    { label: "Watchers", value: "watchers_count" },
    { label: "Score", value: "score" },
    { label: "Name", value: "name" },
    { label: "Created At", value: "created_at" },
    { label: "Stars", value: "stargazers_count" },
    { label: "Updated At", value: "updated_at" },
  ];

  return (
    <Flex width={"100%"} justifyContent={"center"} padding={"40px"}>
      <Flex
        width={{ sm: "80%", md: "60%", lg: "60%" }}
        height={"100%"}
        justifyContent={"center"}
        direction={"column"}
        gap={"20px"}
      >
        <Input
          value={filters.query}
          placeholder="Search for repositories"
          onChange={(e) => {
            setFilters({ ...filters, query: e.target.value });
          }}
        />

        <Select
          placeholder={"Sort By"}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
        >
          {sortByOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>

        <RepositoryList
          data={data?.items}
          isLoading={isLoading}
          filter={filters.sortBy}
        />
      </Flex>
    </Flex>
  );
}

export default App;
