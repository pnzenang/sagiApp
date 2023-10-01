import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import {
  DELEGATE_RECOMMENDATION,
  MEMBER_STATUS,
  MEMBER_SORT_BY,
} from "../../../utils/constants";
import { useAllMembersContext } from "../pages/AllMembers";

const SearchContainer = () => {
  const { searchValues } = useAllMembersContext();
  const { search, memberStatus, delegateRecommendation, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            labelText="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormRowSelect
            labelText="member status"
            name="memberStatus"
            list={["all", ...Object.values(MEMBER_STATUS)]}
            defaultValue={memberStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="delegate recommendation"
            name="delegateRecommendation"
            list={["all", ...Object.values(DELEGATE_RECOMMENDATION)]}
            defaultValue={delegateRecommendation}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(MEMBER_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-members" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
