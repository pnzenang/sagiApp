import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { useDashboardContext } from "../pages/DashboardLayout";
import { Link, Form } from "react-router-dom";
// import Wrapper from "../assets/wrappers/Member";
import MemberInfo from "./MemberInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import moment from "moment";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";
import styled from "styled-components";

day.extend(advancedFormat);
dayjs.extend(relativeTime);

const Member = ({
  _id,
  associationName,
  associationCode,
  memberFirstName,
  lastAndMiddleName,
  delegateRecommendation,
  memberMatriculation,
  createdAt,
  memberStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  const time = dayjs(createdAt).fromNow(true);
  const temps1 = dayjs(createdAt).add(90, "d").format("MMM Do, YYYY");
  const temps2 = dayjs(createdAt).add(60, "d").format("MMM Do, YYYY");
  const temps3 = dayjs(createdAt).add(30, "d").format("MMM Do, YYYY");

  const { user } = useDashboardContext();
  return (
    <Wrapper style={{ border: "solid 1px orange" }}>
      <header>
        <div className="main-icon">{associationCode}</div>
        <div className="info">
          <h5>
            {memberFirstName} {lastAndMiddleName}
          </h5>
          <p>{associationName}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <MemberInfo
            icon={<MdOutlineNumbers size={20} />}
            text={`Mat: ${memberMatriculation}`}
          />
          <MemberInfo
            icon={<FaCalendarAlt size={20} />}
            text={`created: ${date}`}
          />
          <MemberInfo icon={<GoCheck />} text={delegateRecommendation} />
          <MemberInfo
            icon={<FcApproval size={20} />}
            text={`Vested: ${temps1}`}
          />
          <div className={`status ${memberStatus}`}>{memberStatus}</div>
          <div className="actions">
            <Link to={`../edit-member/${_id}`} className="btn edit-btn">
              {user.role === "admin" ? "Edit Status" : "Edit Recommendation"}
            </Link>
            {user.role === "admin" ? (
              <Form method="post" action={`../delete-member/${_id}`}>
                <button type="submit" className="btn delete-btn">
                  Delete
                </button>
              </Form>
            ) : null}
          </div>
        </div>

        {/* <footer className="actions">
          <Link to={`../edit-member/${_id}`} className="btn edit-btn">
            {user.role === "admin" ? "Edit Status" : "Edit Recommendation"}
          </Link>
          {user.role === "admin" ? (
            <Form method="post" action={`../delete-member/${_id}`}>
              <button type="submit" className="btn delete-btn">
                Delete
              </button>
            </Form>
          ) : null}
        </footer> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  /* border: solid 1px red; */
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--primary-500);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 45px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
    padding: 0 5rem 0 1rem;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    margin-left: 0.6rem;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    /* margin-top: 0.5rem; */
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
    margin-left: 0.6rem;
  }
  .delete-btn {
    background: var(--red-clean);
  }
`;
export default Member;
