import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaSadTear,
  FaCheckDouble,
} from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      count: defaultStats?.pending || 0,
      title: `pending application${defaultStats?.pending > 1 && "s"}`,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: `member(s) in waiting period`,
      count: defaultStats?.waiting || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#aec4f2",
    },
    {
      title: "member(s) vested",
      count: defaultStats?.vested || 0,
      icon: <FaCheckDouble />,
      color: "#0c9a42",
      bcg: "#92e998",
    },
    {
      title: "member(s) transferred",
      count: defaultStats?.transferred || 0,
      icon: <BiTransferAlt />,
      color: "#0ac5e6",
      bcg: "#a3eaf4",
    },
    {
      title: "member(s) excluded",
      count: defaultStats?.excluded || 0,
      icon: <FaBug />,
      color: "#e61e1e",
      bcg: "#e5a5a8",
    },
    {
      title: "member(s) deceased",
      count: defaultStats?.deceased || 0,
      icon: <FaSadTear />,
      color: "#920aa7",
      bcg: "#d597e4",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
