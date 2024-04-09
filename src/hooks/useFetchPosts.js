import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = () => {
  return axios.get("http://localhost:3004/posts");
};

export const useFetchPostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    retry: 1,
    select: (data) => data.data,
  });
};
