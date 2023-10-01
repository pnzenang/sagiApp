import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import { Link } from "react-router-dom";

Link;
const Navbar2 = () => {
  const { toggleSidebar } = useHomeLayoutContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">home</h4>
        </div>
        <div className="btn-container">
          <Link to="/login" className="btn ">
            Login
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar2;
