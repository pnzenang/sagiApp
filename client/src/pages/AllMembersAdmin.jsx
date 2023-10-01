import { toast } from "react-toastify";
import { MembersAdminContainer, SearchAdminContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

const allMembersAdminQuery = (params) => {
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
      const { data } = await customFetch.get("/users/admin/all-members-admin", {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      await queryClient.ensureQueryData(allMembersAdminQuery(params));
      return { searchValues: { ...params } };
    } catch (error) {
      toast.error("You are not authorized to view this page");
      return redirect("/dashboard");
    }
  };

const AllMembersAdminContext = createContext();
const AllMembersAdmin = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allMembersAdminQuery(searchValues));
  return (
    <AllMembersAdminContext.Provider value={{ data, searchValues }}>
      <SearchAdminContainer />
      <MembersAdminContainer />
    </AllMembersAdminContext.Provider>
  );
};

export const useAllMembersAdminContext = () =>
  useContext(AllMembersAdminContext);

export default AllMembersAdmin;
