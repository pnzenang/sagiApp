import Wrapper from "../assets/wrappers/MemberInfo";

const MemberInfo = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </Wrapper>
  );
};
export default MemberInfo;
