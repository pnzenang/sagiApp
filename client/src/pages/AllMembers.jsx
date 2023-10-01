import { toast } from "react-toastify";
import { MembersContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

const allMembersQuery = (params) => {
  const { search, memberStatus, delegateRecommendation, sort, page } = params;
  return {
    queryKey: [
      "members",
      search ?? "",
      memberStatus ?? "all",
      delegateRecommendation ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get("/members", {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allMembersQuery(params));
    return { searchValues: { ...params } };
  };

const AllMembersContext = createContext();
const AllMembers = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allMembersQuery(searchValues));
  return (
    <AllMembersContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <MembersContainer />
    </AllMembersContext.Provider>
  );
};

export const useAllMembersContext = () => useContext(AllMembersContext);

export default AllMembers;
