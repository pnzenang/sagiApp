import { useState } from "react";
import { FormRow, FormRowSelect, SubmitBtn, FormRowDate } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import {
  MEMBER_STATUS,
  DELEGATE_RECOMMENDATION,
} from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post("/members", data);
      queryClient.invalidateQueries(["members"]);
      toast.success("Member added successfully ");
      return redirect("all-members");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddMember = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add member</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="associationName"
            labelText="association's name"
            value={user.associationName}
            onChange={() => null}
          />
          <FormRow
            type="text"
            name="associationCode"
            labelText="association's code"
            value={user.associationCode}
            onChange={() => null}
          />
          <FormRow
            type="text"
            name="memberFirstName"
            labelText="member's first name"
          />
          <FormRow
            type="text"
            name="lastAndMiddleName"
            labelText="last and middle names"
          />
          <FormRowDate name="dateOfBirth" />

          {user.role === "user" ? (
            <FormRowSelect
              labelText="status"
              name="memberStatus"
              defaultValue={MEMBER_STATUS.PENDING}
              list={[MEMBER_STATUS.PENDING]}
            />
          ) : (
            <FormRowSelect
              labelText="status"
              name="memberStatus"
              defaultValue={MEMBER_STATUS.PENDING}
              list={Object.values(MEMBER_STATUS)}
            />
          )}
          <FormRowSelect
            labelText="delegate's recommendation"
            name="delegateRecommendation"
            defaultValue={DELEGATE_RECOMMENDATION.TO_BE_CONFIRMED}
            list={Object.values(DELEGATE_RECOMMENDATION)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddMember;
