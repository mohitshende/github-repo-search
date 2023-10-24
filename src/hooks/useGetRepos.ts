import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export default function useGetRepos() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ query: "", sortBy: "" });

  const searchQuery = useDebounce(filters.query, 300);

  const octokit = new Octokit();

  async function fetchData() {
    setIsLoading(true);

    if (searchQuery == "") {
      setData(null);
      setIsLoading(false);
    } else {
      try {
        const result = await octokit.request(
          `GET /search/repositories?q=${encodeURIComponent(searchQuery)}`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { data, isLoading, filters, setFilters };
}
