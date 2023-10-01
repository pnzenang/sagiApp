import { Link } from "react-router-dom";
import logo from "../assets/images/Logo7.svg";
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="jobify" className="logo" />
    </Link>
  );
};
export default Logo;
