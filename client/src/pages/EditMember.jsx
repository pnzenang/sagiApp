import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MEMBER_STATUS,
  DELEGATE_RECOMMENDATION,
} from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

const singleMemberQuery = (id) => {
  return {
    queryKey: ["member", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/members/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleMemberQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/dashboard/all-members");
    }
  };
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/members/${params.id}`, data);
      queryClient.invalidateQueries(["members"]);

      toast.success("Member edited successfully");
      return redirect("/dashboard/all-members");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditMember = () => {
  const { user } = useOutletContext();
  const id = useLoaderData();

  const {
    data: { member },
  } = useQuery(singleMemberQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit member</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="associationName"
            value={member.associationName}
            labelText="association name"
            onChange={() => null}
          />
          <FormRow
            type="text"
            name="associationCode"
            labelText="association's code"
            value={member.associationCode}
            onChange={() => null}
          />
          <FormRow
            type="text"
            name="memberFirstName"
            value={member.memberFirstName}
            labelText="first name"
            onChange={() => null}
          />
          <FormRow
            type="text"
            name="lastAndMiddleName"
            labelText="last and middle names"
            value={member.lastAndMiddleName}
            onChange={() => null}
          />
          {user.role === "user" ? (
            <FormRowSelect
              name="memberStatus"
              labelText="status"
              defaultValue={member.memberStatus}
              list={[member.memberStatus]}
            />
          ) : (
            <FormRowSelect
              name="memberStatus"
              labelText="status"
              defaultValue={member.memberStatus}
              list={Object.values(MEMBER_STATUS)}
            />
          )}
          {user.role === "admin" ? (
            <FormRowSelect
              name="delegateRecommendation"
              labelText="delegate's recommendation"
              defaultValue={member.delegateRecommendation}
              list={[member.delegateRecommendation]}
            />
          ) : (
            <FormRowSelect
              name="delegateRecommendation"
              labelText="delegate's recommendation"
              defaultValue={member.delegateRecommendation}
              list={Object.values(DELEGATE_RECOMMENDATION)}
            />
          )}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditMember;
