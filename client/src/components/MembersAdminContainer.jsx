import Member from "./Member";
import Wrapper from "../assets/wrappers/MembersContainer";
import { useAllMembersAdminContext } from "../pages/AllMembersAdmin";
import PageBtnAdminContainer from "./PageBtnAdminContainer";
const MembersAdminContainer = () => {
  const { data } = useAllMembersAdminContext();

  const { members, totalMembers, numOfPages } = data;
  if (members.length === 0) {
    return (
      <Wrapper>
        <h2>No members to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalMembers} member{members.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {members.map((member) => {
          return <Member key={member._id} {...member} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnAdminContainer />}
    </Wrapper>
  );
};
export default MembersAdminContainer;
