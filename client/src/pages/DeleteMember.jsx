import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/members/${params.id}`);
      queryClient.invalidateQueries(["members"]);

      toast.success("Member deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect("/dashboard/all-members");
  };
